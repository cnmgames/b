"use client"

import { useState, useEffect, useCallback } from "react"
import { createBoardPath, type PathCell } from "@/lib/game-config"
import {
  Rocket,
  Trophy,
  Star,
  Bomb,
  Plane,
  BirdIcon as Helicopter,
  Heart,
  Sparkles,
  CheckCircle,
  XCircle,
  RotateCcw,
  Users,
  Flame,
  Lock,
  Shuffle,
  ArrowLeft,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  Check,
} from "lucide-react"
import type { JSX } from "react/jsx-runtime"
import { type Language, type Translations, loadTranslations, interpolate } from "@/lib/i18n"
import LanguageSelector from "./language-selector"

type GameState = "start" | "playing" | "task" | "win" | "winTask" | "moving" | "customMode"
type GameMode = "normal" | "love" | "couple" | "advanced" | "intimate" | "mixed" | "custom"
type PlayerColor = "red" | "blue"
type TaskType = "star" | "trap" | "collision"

interface CurrentTask {
  description: string
  executor: PlayerColor
  target: PlayerColor
}

interface WinTaskOption {
  id: number
  description: string
}

interface CustomMode {
  id: string
  name: string
  description: string
  tasks: string[]
  createdAt: number
}

interface TaskSource {
  mode: GameMode
  taskIndex: number
  task: string
}

// Shuffle function (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Game mode configurations
const gameModeIcons = {
  normal: Users,
  love: Heart,
  couple: Sparkles,
  advanced: Flame,
  intimate: Lock,
  mixed: Shuffle,
  custom: Plus,
}

const gameModeColors = {
  normal: "from-blue-400 to-blue-600",
  love: "from-pink-400 to-pink-600",
  couple: "from-purple-400 to-purple-600",
  advanced: "from-red-400 to-red-600",
  intimate: "from-gray-700 to-gray-900",
  mixed: "from-indigo-400 via-purple-500 to-pink-500",
  custom: "from-green-400 to-green-600",
}

const gameModeEmojis = {
  normal: "😊",
  love: "💕",
  couple: "💖",
  advanced: "🔥",
  intimate: "🔒",
  mixed: "🎲",
  custom: "🎨",
}

export default function CoupleLudoGame() {
  const [gameState, setGameState] = useState<GameState>("start")
  const [gameMode, setGameMode] = useState<GameMode>("normal")
  const [boardPath, setBoardPath] = useState<PathCell[]>([])
  const [currentPlayer, setCurrentPlayer] = useState<PlayerColor>("red")
  const [redPosition, setRedPosition] = useState(0)
  const [bluePosition, setBluePosition] = useState(0)
  const [diceValue, setDiceValue] = useState<number | null>(null)
  const [isRolling, setIsRolling] = useState(false)
  const [currentTask, setCurrentTask] = useState<CurrentTask | null>(null)
  const [taskType, setTaskType] = useState<TaskType | null>(null)
  const [winner, setWinner] = useState<PlayerColor | null>(null)
  const [isMoving, setIsMoving] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
  const [taskQueue, setTaskQueue] = useState<string[]>([])
  const [isLoadingTasks, setIsLoadingTasks] = useState(false)
  const [language, setLanguage] = useState<Language>("zh")
  const [translations, setTranslations] = useState<Translations | null>(null)
  const [winTaskOptions, setWinTaskOptions] = useState<WinTaskOption[]>([])
  const [selectedWinTask, setSelectedWinTask] = useState<WinTaskOption | null>(null)
  const [customModes, setCustomModes] = useState<CustomMode[]>([])
  const [currentCustomMode, setCurrentCustomMode] = useState<CustomMode | null>(null)
  const [showCustomModeCreator, setShowCustomModeCreator] = useState(false)
  const [newCustomMode, setNewCustomMode] = useState<{ name: string; description: string; tasks: string[] }>({ 
    name: '', 
    description: '', 
    tasks: [] 
  })
  const [availableModeTasks, setAvailableModeTasks] = useState<Record<GameMode, string[]>>({} as Record<GameMode, string[]>)
  const [selectedTasks, setSelectedTasks] = useState<{ [key: string]: boolean }>({})
  const [manualTask, setManualTask] = useState('')

  useEffect(() => {
    const path = createBoardPath()
    setBoardPath(path)

    // Load initial language
    loadTranslations(language).then(setTranslations)
    
    // Load custom modes from localStorage
    loadCustomModes()
  }, [])

  useEffect(() => {
    loadTranslations(language).then(setTranslations)
  }, [language])

  // Load custom modes from localStorage
  const loadCustomModes = useCallback(() => {
    try {
      const saved = localStorage.getItem('customModes')
      if (saved) {
        setCustomModes(JSON.parse(saved))
      }
    } catch (error) {
      console.error('Error loading custom modes:', error)
    }
  }, [])

  // Save custom modes to localStorage
  const saveCustomModes = useCallback((modes: CustomMode[]) => {
    try {
      localStorage.setItem('customModes', JSON.stringify(modes))
      setCustomModes(modes)
    } catch (error) {
      console.error('Error saving custom modes:', error)
    }
  }, [])

  // Load all tasks for selection
  const loadAllTasksForSelection = useCallback(async () => {
    const modes: GameMode[] = ["normal", "love", "couple", "advanced", "intimate", "mixed"]
    const tasks: Record<GameMode, string[]> = {} as Record<GameMode, string[]>
    
    for (const mode of modes) {
      try {
        let response = await fetch(`/tasks/${mode}-${language}.json`)
        if (!response.ok && language !== "zh") {
          response = await fetch(`/tasks/${mode}.json`)
        }
        if (response.ok) {
          tasks[mode] = await response.json()
        } else {
          tasks[mode] = []
        }
      } catch (error) {
        console.error(`Error loading tasks for ${mode}:`, error)
        tasks[mode] = []
      }
    }
    
    setAvailableModeTasks(tasks)
  }, [language])

  const loadTasks = useCallback(
    async (mode: GameMode, lang: Language) => {
      setIsLoadingTasks(true)
      try {
        // Try to load language-specific tasks first
        let response = await fetch(`/tasks/${mode}-${lang}.json`)

        // If language-specific tasks don't exist, fall back to Chinese
        if (!response.ok && lang !== "zh") {
          response = await fetch(`/tasks/${mode}.json`)
        }

        if (!response.ok) {
          throw new Error(`Failed to load tasks for mode: ${mode}`)
        }

        const tasks: string[] = await response.json()
        setTaskQueue(shuffleArray(tasks))
      } catch (error) {
        console.error("Error loading tasks:", error)
        const fallbackTasks = translations
          ? [translations.tasks.emptyQueue]
          : ["做一个鬼脸", "给对方一个赞美", "分享一个小秘密"]
        setTaskQueue(shuffleArray(fallbackTasks))
      } finally {
        setIsLoadingTasks(false)
      }
    },
    [translations],
  )

  const generateWinTasks = useCallback(() => {
    // 从当前任务队列中随机选择3个任务作为胜利任务选项
    const availableTasks = taskQueue.length > 0 ? taskQueue : [
      translations?.tasks.emptyQueue || "给对方一个温暖的拥抱",
      "说出三个对方的优点",
      "一起做一件浪漫的事"
    ]
    
    const shuffled = shuffleArray([...availableTasks])
    const winTasks: WinTaskOption[] = shuffled.slice(0, 3).map((task, index) => ({
      id: index + 1,
      description: task
    }))
    
    setWinTaskOptions(winTasks)
  }, [taskQueue, translations])

  const switchTurn = useCallback(() => {
    setCurrentPlayer((prev) => (prev === "red" ? "blue" : "red"))
  }, [])

  const checkSpecialEvents = useCallback(
    (newPosition: number, player: PlayerColor) => {
      setIsMoving(false)
      setGameState("playing")

      const otherPlayerPosition = player === "red" ? bluePosition : redPosition

      if (newPosition === otherPlayerPosition && newPosition !== 0 && newPosition !== boardPath.length - 1) {
        setTimeout(() => {
          setTaskType("collision")
          triggerTask("collision", player)
        }, 300)
        return
      }

      // 只有正好到达终点才获胜
      if (newPosition === boardPath.length - 1) {
        setTimeout(() => {
          setWinner(player)
          // 生成3个获胜任务选项
          generateWinTasks()
          setGameState("win")
        }, 300)
        return
      }

      const cellType = boardPath[newPosition]?.type
      if (cellType === "star") {
        setTimeout(() => {
          setTaskType("star")
          triggerTask("star", player)
        }, 300)
      } else if (cellType === "trap") {
        setTimeout(() => {
          setTaskType("trap")
          triggerTask("trap", player)
        }, 300)
      } else {
        setTimeout(switchTurn, 300)
      }
    },
    [boardPath, bluePosition, redPosition, switchTurn, generateWinTasks],
  )

  // 处理胜利任务选择
  const handleWinTaskSelect = useCallback((task: WinTaskOption) => {
    setSelectedWinTask(task)
    setGameState("winTask")
  }, [])

  // 完成胜利任务
  const handleWinTaskComplete = useCallback(() => {
    setGameState("win")
    setSelectedWinTask(null)
    setWinTaskOptions([])
  }, [])

  // 重新开始游戏
  const restartFromWin = useCallback(() => {
    setGameState("start")
    setWinner(null)
    setSelectedWinTask(null)
    setWinTaskOptions([])
  }, [])

  const movePlayerStep = useCallback(
    (targetPosition: number, player: PlayerColor, currentStepPos?: number) => {
      const startPosition = currentStepPos ?? (player === "red" ? redPosition : bluePosition)

      if (startPosition >= targetPosition) {
        checkSpecialEvents(targetPosition, player)
        return
      }

      const nextPosition = startPosition + 1
      if (player === "red") setRedPosition(nextPosition)
      else setBluePosition(nextPosition)

      setTimeout(() => movePlayerStep(targetPosition, player, nextPosition), 300)
    },
    [redPosition, bluePosition, checkSpecialEvents],
  )

  const movePlayerToEndAndBack = useCallback(
    (endPosition: number, finalPosition: number, player: PlayerColor, totalSteps: number) => {
      const startPosition = player === "red" ? redPosition : bluePosition
      let currentStep = 0
      let currentPos = startPosition
      let hasReachedEnd = false
      
      const step = () => {
        if (currentStep >= totalSteps) {
          // 移动完成，检查最终位置
          if (finalPosition === endPosition) {
            // 最终位置在终点，玩家获胜
            setTimeout(() => {
              setWinner(player)
              generateWinTasks()
              setGameState("win")
              setIsMoving(false)
            }, 300)
          } else {
            // 最终位置不在终点，继续游戏
            checkSpecialEvents(finalPosition, player)
          }
          return
        }
        
        currentStep++
        
        // 先向终点移动
        if (!hasReachedEnd) {
          currentPos++
          if (currentPos >= endPosition) {
            hasReachedEnd = true
            currentPos = endPosition
          }
        } else {
          // 已到达终点，开始后退
          if (currentPos > finalPosition) {
            currentPos--
          }
        }
        
        if (player === "red") setRedPosition(currentPos)
        else setBluePosition(currentPos)
        
        setTimeout(step, 300)
      }
      
      step()
    },
    [redPosition, bluePosition, checkSpecialEvents, generateWinTasks],
  )

  const movePlayer = useCallback(
    (steps: number) => {
      const currentPos = currentPlayer === "red" ? redPosition : bluePosition
      const maxPosition = boardPath.length - 1
      let targetPosition = currentPos + steps

      // 如果正好到达或超出终点，需要特殊处理
      if (targetPosition >= maxPosition) {
        if (targetPosition === maxPosition) {
          // 正好到达终点，直接移动到终点
          setIsMoving(true)
          setGameState("moving")
          movePlayerStep(targetPosition, currentPlayer)
        } else {
          // 超过终点，需要先到终点再退回多余步数
          const overshoot = targetPosition - maxPosition
          const finalPosition = maxPosition - overshoot
          // 确保不会退到负数位置
          const safePosition = Math.max(0, finalPosition)
          
          setIsMoving(true)
          setGameState("moving")
          movePlayerToEndAndBack(maxPosition, safePosition, currentPlayer, steps)
        }
      } else {
        // 正常移动
        setIsMoving(true)
        setGameState("moving")
        movePlayerStep(targetPosition, currentPlayer)
      }
    },
    [currentPlayer, redPosition, bluePosition, boardPath.length, movePlayerStep, movePlayerToEndAndBack],
  )

  const rollDice = () => {
    if (isRolling || isMoving || isLoadingTasks) return
    setIsRolling(true)
    setDiceValue(null)

    let count = 0
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1)
      count++
      if (count > 10) {
        clearInterval(interval)
        const finalValue = Math.floor(Math.random() * 6) + 1
        setDiceValue(finalValue)
        setIsRolling(false)
        movePlayer(finalValue)
      }
    }, 80)
  }

  const triggerTask = (type: TaskType, PCOnCell: PlayerColor) => {
    if (taskQueue.length === 0) {
      console.warn("Task queue is empty!")
      const emptyMessage = translations?.tasks.emptyQueue || "任务队列空了！休息一下吧！"
      setCurrentTask({ description: emptyMessage, executor: PCOnCell, target: PCOnCell })
      setGameState("task")
      return
    }

    const currentTaskDescription = taskQueue[0]
    setTaskQueue((prev) => [...prev.slice(1), prev[0]])

    let executor: PlayerColor
    if (type === "star") {
      executor = PCOnCell === "red" ? "blue" : "red"
    } else if (type === "trap") {
      executor = PCOnCell
    } else {
      executor = PCOnCell === "red" ? "blue" : "red"
    }

    setCurrentTask({ description: currentTaskDescription, executor, target: PCOnCell })
    setGameState("task")
  }

  const animateTaskOutcomeMove = useCallback(
    (targetPosition: number, player: PlayerColor, originalPosition: number) => {
      setIsMoving(true)
      setGameState("moving")

      let currentAnimatedPos = originalPosition

      const step = () => {
        if (currentAnimatedPos === targetPosition) {
          setIsMoving(false)
          setGameState("playing")
          setCurrentTask(null)
          setTaskType(null)

          // 只有正好到达终点才获胜
          if (targetPosition === boardPath.length - 1) {
            setWinner(player)
            setGameState("win")
          } else {
            switchTurn()
          }
          return
        }

        currentAnimatedPos += targetPosition > currentAnimatedPos ? 1 : -1

        if (player === "red") setRedPosition(currentAnimatedPos)
        else setBluePosition(currentAnimatedPos)

        setTimeout(step, 300)
      }
      step()
    },
    [boardPath.length, switchTurn],
  )

  const handleTaskComplete = (isCompleted: boolean) => {
    if (!currentTask || !translations) return

    const activePlayer = currentTask.executor
    const currentPosition = activePlayer === "red" ? redPosition : bluePosition
    const maxPosition = boardPath.length - 1
    let finalPosition = currentPosition
    let toastMessage = ""
    let toastType: "success" | "error" = "success"

    if (taskType === "star" || taskType === "trap") {
      const rewardSteps = Math.floor(Math.random() * 4) // 0-3格
      const penaltySteps = Math.floor(Math.random() * 4) + 3 // 3-6格

      if (isCompleted) {
        let newPosition = currentPosition + rewardSteps
        // 处理超出终点的反弹
        if (newPosition > maxPosition) {
          const overshoot = newPosition - maxPosition
          newPosition = maxPosition - overshoot
          newPosition = Math.max(0, newPosition)
        }
        finalPosition = newPosition

        if (rewardSteps === 0) {
          toastMessage = activePlayer === "red" ? translations.toast.redStay : translations.toast.blueStay
        } else {
          const template = activePlayer === "red" ? translations.toast.redForward : translations.toast.blueForward
          toastMessage = interpolate(template, { steps: rewardSteps.toString() })
        }
        toastType = "success"
      } else {
        finalPosition = Math.max(currentPosition - penaltySteps, 0)
        const template = activePlayer === "red" ? translations.toast.redBackward : translations.toast.blueBackward
        toastMessage = interpolate(template, { steps: penaltySteps.toString() })
        toastType = "error"
      }
    } else if (taskType === "collision") {
      const executorPlayer = currentTask.executor
      if (!isCompleted) {
        if (executorPlayer === "red") {
          setRedPosition(0)
          toastMessage = translations.toast.redFailedToStart
        } else {
          setBluePosition(0)
          toastMessage = translations.toast.blueFailedToStart
        }
        toastType = "error"
        setCurrentTask(null)
        setTaskType(null)
        setToast({ message: toastMessage, type: toastType })
        setTimeout(() => setToast(null), 3000)
        setGameState("playing")
        switchTurn()
        return
      } else {
        toastMessage = executorPlayer === "red" ? translations.toast.redCompleted : translations.toast.blueCompleted
        toastType = "success"
        setCurrentTask(null)
        setTaskType(null)
        setToast({ message: toastMessage, type: toastType })
        setTimeout(() => setToast(null), 3000)
        setGameState("playing")
        switchTurn()
        return
      }
    }

    setToast({ message: toastMessage, type: toastType })
    setTimeout(() => setToast(null), 3000)

    if (finalPosition !== currentPosition && (taskType === "star" || taskType === "trap")) {
      animateTaskOutcomeMove(finalPosition, activePlayer, currentPosition)
    } else {
      setCurrentTask(null)
      setTaskType(null)
      setGameState("playing")
      // 只有正好到达终点才获胜
      if (finalPosition === maxPosition && (taskType === "star" || taskType === "trap")) {
        setWinner(activePlayer)
        setGameState("win")
      } else {
        switchTurn()
      }
    }
  }

  const startGame = async (mode: GameMode) => {
    setGameMode(mode)
    setGameState("playing")
    setCurrentPlayer("red")
    setRedPosition(0)
    setBluePosition(0)
    setDiceValue(null)
    setIsRolling(false)
    setIsMoving(false)
    setCurrentTask(null)
    setTaskType(null)
    setWinner(null)
    setToast(null)
    
    if (mode === "custom") {
      if (currentCustomMode && currentCustomMode.tasks.length > 0) {
        setTaskQueue(shuffleArray([...currentCustomMode.tasks]))
      } else {
        setTaskQueue([])
      }
    } else {
      await loadTasks(mode, language)
    }
  }

  // Create new custom mode
  const createCustomMode = useCallback(() => {
    if (newCustomMode.name.trim() && newCustomMode.tasks.length > 0) {
      const customMode: CustomMode = {
        id: Date.now().toString(),
        name: newCustomMode.name.trim(),
        description: newCustomMode.description.trim() || translations?.customMode.description || "自定义模式",
        tasks: [...newCustomMode.tasks],
        createdAt: Date.now(),
      }
      
      const updatedModes = [...customModes, customMode]
      saveCustomModes(updatedModes)
      
      // Reset form
      setNewCustomMode({ name: '', description: '', tasks: [] })
      setSelectedTasks({})
      setManualTask('')
      setShowCustomModeCreator(false)
      
      showToast(translations?.customMode.messages.createSuccess || "自定义模式创建成功！", "success")
    }
  }, [newCustomMode, customModes, saveCustomModes, translations])

  // Delete custom mode
  const deleteCustomMode = useCallback((modeId: string) => {
    const updatedModes = customModes.filter(mode => mode.id !== modeId)
    saveCustomModes(updatedModes)
    showToast(translations?.customMode.messages.deleteSuccess || "自定义模式已删除", "success")
  }, [customModes, saveCustomModes, translations])

  // Add task from mode selection
  const addTaskFromMode = useCallback((mode: GameMode, taskIndex: number) => {
    const task = availableModeTasks[mode]?.[taskIndex]
    if (task && !newCustomMode.tasks.includes(task)) {
      setNewCustomMode(prev => ({
        ...prev,
        tasks: [...prev.tasks, task]
      }))
    }
  }, [availableModeTasks, newCustomMode.tasks])

  // Add manual task
  const addManualTask = useCallback(() => {
    if (manualTask.trim() && !newCustomMode.tasks.includes(manualTask.trim())) {
      setNewCustomMode(prev => ({
        ...prev,
        tasks: [...prev.tasks, manualTask.trim()]
      }))
      setManualTask('')
    }
  }, [manualTask, newCustomMode.tasks])

  // Remove task from custom mode
  const removeTaskFromCustomMode = useCallback((taskIndex: number) => {
    setNewCustomMode(prev => ({
      ...prev,
      tasks: prev.tasks.filter((_, index) => index !== taskIndex)
    }))
  }, [])

  // Show toast notification
  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }, [])

  const restartGame = () => {
    setGameState("start")
    setGameMode("normal")
    setCurrentPlayer("red")
    setRedPosition(0)
    setBluePosition(0)
    setDiceValue(null)
    setIsRolling(false)
    setIsMoving(false)
    setCurrentTask(null)
    setTaskType(null)
    setWinner(null)
    setToast(null)
    setCurrentCustomMode(null)
    setShowCustomModeCreator(false)
  }

  const handleLanguageChange = async (newLanguage: Language) => {
    setLanguage(newLanguage)
    // Reload tasks if game is in progress
    if (gameState !== "start" && gameMode) {
      await loadTasks(gameMode, newLanguage)
    }
  }

  const renderBoard = () => {
    if (!translations) return null

    const boardGridSize = 7
    const cells = []
    const cellElements: { [key: string]: JSX.Element } = {}

    boardPath.forEach((pathCell) => {
      const isRedOnCell = redPosition === pathCell.id
      const isBlueOnCell = bluePosition === pathCell.id
      const areBothOnCell = isRedOnCell && isBlueOnCell
      const playerIconSize = areBothOnCell ? 18 : 24

      cellElements[`${pathCell.y}-${pathCell.x}`] = (
        <div key={`${pathCell.y}-${pathCell.x}`} className={`cell ${pathCell.type}`}>
          <div className="cell-number">{pathCell.id}</div>
          {pathCell.type === "start" && (
            <div className="cell-icon-text">
              <Rocket size={18} /> <p>{translations.board.start}</p>
            </div>
          )}
          {pathCell.type === "end" && (
            <div className="cell-icon-text">
              <Trophy size={18} /> <p>{translations.board.end}</p>
            </div>
          )}
          {pathCell.type === "star" && (
            <div className="cell-icon-text">
              <Star size={16} /> <p>{translations.board.star}</p>
            </div>
          )}
          {pathCell.type === "trap" && (
            <div className="cell-icon-text">
              <Bomb size={16} /> <p>{translations.board.trap}</p>
            </div>
          )}
          {pathCell.type === "path" && <div className="cell-icon-text">•</div>}

          {isRedOnCell && (
            <div
              className={`player red ${currentPlayer === "red" ? "current-turn" : ""} ${areBothOnCell ? "stacked" : ""} ${isMoving && currentPlayer === "red" ? "moving" : ""}`}
            >
              <Plane size={playerIconSize} />
            </div>
          )}
          {isBlueOnCell && (
            <div
              className={`player blue ${currentPlayer === "blue" ? "current-turn" : ""} ${areBothOnCell ? "stacked" : ""} ${isMoving && currentPlayer === "blue" ? "moving" : ""}`}
            >
              <Helicopter size={playerIconSize} />
            </div>
          )}
        </div>
      )
    })

    for (let r = 0; r < boardGridSize; r++) {
      for (let c = 0; c < boardGridSize; c++) {
        if (cellElements[`${r}-${c}`]) {
          cells.push(cellElements[`${r}-${c}`])
        } else {
          cells.push(<div key={`${r}-${c}`} className="cell empty"></div>)
        }
      }
    }
    return cells
  }

  const renderPathLines = () => {
    if (!boardPath || boardPath.length === 0) return null
    const lines = []
    const cellSize = 100 / 7

    for (let i = 0; i < boardPath.length - 1; i++) {
      const current = boardPath[i]
      const next = boardPath[i + 1]
      const startX = (current.x + 0.5) * cellSize
      const startY = (current.y + 0.5) * cellSize
      const endX = (next.x + 0.5) * cellSize
      const endY = (next.y + 0.5) * cellSize
      const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
      const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI
      const centerX = (startX + endX) / 2
      const centerY = (startY + endY) / 2
      lines.push(
        <div
          key={`line-${i}`}
          className="path-line"
          style={{
            width: `${length}%`,
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            top: `${centerY}%`,
            left: `${centerX}%`,
          }}
        />,
      )
    }
    return lines
  }

  if (!translations) {
    return (
      <div className="game-container start-container">
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (gameState === "start") {
    return (
      <div className="game-container start-container">
        <div className="start-header">
          <div className="start-header-content">
            <div className="game-logo">
              <div className="main-title-area">
                <div className="game-title-main">{translations.game.title}</div>
                <div className="game-subtitle-main">{translations.game.subtitle}</div>
                <div className="title-language-selector">
                  <LanguageSelector 
                    currentLanguage={language} 
                    onLanguageChange={handleLanguageChange} 
                    showGithub={true}
                    className="title"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="start-content">
          <div className="welcome-section">
            <h2 className="welcome-title">{translations.game.selectMode}</h2>
            <p className="welcome-description">{translations.game.modeDescription}</p>
          </div>

          <div className="modes-grid">
            {Object.entries(translations.modes).map(([key, mode]) => {
              const IconComponent = gameModeIcons[key as GameMode]
              return (
                <div
                  key={key}
                  className={`mode-card ${key === "intimate" ? "intimate-card" : ""}`}
                  onClick={() => !isLoadingTasks && startGame(key as GameMode)}
                >
                  <div className="mode-icon-container">
                    <IconComponent size={24} className="mode-icon" />
                    <span className="mode-emoji">{gameModeEmojis[key as GameMode]}</span>
                  </div>

                  <div className="mode-info">
                    <h3 className="mode-title">{mode.name}</h3>
                    <p className="mode-desc">{mode.description}</p>

                    {isLoadingTasks && gameMode === key && (
                      <div className="loading-indicator">
                        <div className="loading-spinner"></div>
                        <span>{translations.common.loading}</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
            
            {/* 已创建的自定义模式卡片 */}
            {customModes.map((mode) => (
              <div
                key={mode.id}
                className="mode-card"
                onClick={() => {
                  setCurrentCustomMode(mode)
                  startGame("custom")
                }}
              >
                <div className="mode-icon-container">
                  <Edit size={24} className="mode-icon" />
                  <span className="mode-emoji">🎨</span>
                  <button
                    className="delete-custom-mode-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteCustomMode(mode.id)
                    }}
                    title={translations.customMode.delete}
                  >
                    <X size={12} />
                  </button>
                </div>
                <div className="mode-info">
                  <h3 className="mode-title">{mode.name}</h3>
                  <p className="mode-desc">{mode.description}</p>
                </div>
              </div>
            ))}
            
            {/* 创建自定义模式卡片 */}
            <div
              className="mode-card"
              onClick={() => setShowCustomModeCreator(true)}
            >
              <div className="mode-icon-container">
                <Plus size={24} className="mode-icon" />
                <span className="mode-emoji">{gameModeEmojis.custom}</span>
              </div>
              <div className="mode-info">
                <h3 className="mode-title">{translations.customMode.title}</h3>
                <p className="mode-desc">{translations.customMode.description}</p>
              </div>
            </div>
          </div>

          <div className="game-tips">
            <div className="tip-item">
              <Users size={18} />
              <span>{translations.tips.twoPlayers}</span>
            </div>
            <div className="tip-item">
              <Heart size={18} />
              <span>{translations.tips.faceToFace}</span>
            </div>
            <div className="tip-item">
              <Sparkles size={18} />
              <span>{translations.tips.improveRelation}</span>
            </div>
          </div>

          {/* 自定义模式创建器 */}
          {showCustomModeCreator && (
            <div className="modal custom-mode-modal">
              <div className="custom-mode-creator">
                <div className="creator-header">
                  <h2>{translations.customMode.creator.title}</h2>
                  <button 
                    className="close-creator"
                    onClick={() => {
                      setShowCustomModeCreator(false)
                      setNewCustomMode({ name: '', description: '', tasks: [] })
                      setSelectedTasks({})
                      setManualTask('')
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="creator-content">
                  {/* 基本信息 */}
                  <div className="basic-info-section">
                    <div className="input-group">
                      <label>{translations.customMode.creator.modeName}</label>
                      <input
                        type="text"
                        value={newCustomMode.name}
                        onChange={(e) => setNewCustomMode(prev => ({ ...prev, name: e.target.value }))}
                        placeholder={translations.customMode.creator.modeNamePlaceholder}
                        maxLength={20}
                      />
                    </div>
                    <div className="input-group">
                      <label>{translations.customMode.creator.modeDescription}</label>
                      <input
                        type="text"
                        value={newCustomMode.description}
                        onChange={(e) => setNewCustomMode(prev => ({ ...prev, description: e.target.value }))}
                        placeholder={translations.customMode.creator.modeDescriptionPlaceholder}
                        maxLength={50}
                      />
                    </div>
                  </div>

                  {/* 任务选择 */}
                  <div className="task-selection-section">
                    <h3>{translations.customMode.creator.taskSelection}</h3>
                    
                    {/* 从组合模式中选择 */}
                    <div className="mode-task-selection">
                      <h4>{translations.customMode.creator.fromExistingModes}</h4>
                      <button 
                        className="load-tasks-btn"
                        onClick={loadAllTasksForSelection}
                        disabled={isLoadingTasks}
                      >
                        {isLoadingTasks ? translations.customMode.creator.loading : translations.customMode.creator.loadTasks}
                      </button>
                      
                      {Object.keys(availableModeTasks).length > 0 && (
                        <div className="mode-tasks-grid">
                          {(["normal", "love", "couple", "advanced", "intimate", "mixed"] as GameMode[]).map((mode) => (
                            <div key={mode} className="mode-tasks-section">
                              <h5 className="mode-section-title">
                                {(translations.modes as any)[mode]?.name || mode} ({availableModeTasks[mode]?.length || 0})
                              </h5>
                              <div className="tasks-list">
                                {availableModeTasks[mode]?.map((task, index) => (
                                  <div 
                                    key={`${mode}-${index}`}
                                    className={`task-item ${newCustomMode.tasks.includes(task) ? 'selected' : ''}`}
                                    onClick={() => {
                                      if (newCustomMode.tasks.includes(task)) {
                                        setNewCustomMode(prev => ({
                                          ...prev,
                                          tasks: prev.tasks.filter(t => t !== task)
                                        }))
                                      } else {
                                        addTaskFromMode(mode, index)
                                      }
                                    }}
                                  >
                                    <span className="task-text">{task}</span>
                                    {newCustomMode.tasks.includes(task) && <Check size={16} />}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 手动添加任务 */}
                    <div className="manual-task-section">
                      <h4>{translations.customMode.creator.manualAdd}</h4>
                      <div className="manual-task-input">
                        <input
                          type="text"
                          value={manualTask}
                          onChange={(e) => setManualTask(e.target.value)}
                          placeholder={translations.customMode.creator.manualAddPlaceholder}
                          maxLength={100}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              addManualTask()
                            }
                          }}
                        />
                        <button 
                          onClick={addManualTask}
                          disabled={!manualTask.trim() || newCustomMode.tasks.includes(manualTask.trim())}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* 已选择的任务列表 */}
                    <div className="selected-tasks-section">
                      <h4>{translations.customMode.creator.selectedTasks} ({newCustomMode.tasks.length})</h4>
                      <div className="selected-tasks-list">
                        {newCustomMode.tasks.map((task, index) => (
                          <div key={index} className="selected-task-item">
                            <span className="task-number">{index + 1}.</span>
                            <span className="task-text">{task}</span>
                            <button 
                              onClick={() => removeTaskFromCustomMode(index)}
                              className="remove-task"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="creator-actions">
                  <button 
                    className="create-btn"
                    onClick={createCustomMode}
                    disabled={!newCustomMode.name.trim() || newCustomMode.tasks.length === 0}
                  >
                    <Save size={16} />
                    {translations.customMode.creator.createButton}
                  </button>
                  <button 
                    className="cancel-btn"
                    onClick={() => {
                      setShowCustomModeCreator(false)
                      setNewCustomMode({ name: '', description: '', tasks: [] })
                      setSelectedTasks({})
                      setManualTask('')
                    }}
                  >
                    {translations.customMode.creator.cancel}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`game-container ${currentPlayer}-turn`}>
      <div className={`header ${currentPlayer}-turn`}>
        <button className="back-button" onClick={restartGame} title={translations.game.backToHome}>
          <ArrowLeft size={20} />
        </button>
        <span className="header-title">
          {translations.game.title} - {
            gameMode === "custom" 
              ? (currentCustomMode?.name || "自定义模式")
              : translations.modes[gameMode].name
          }
        </span>
        <LanguageSelector currentLanguage={language} onLanguageChange={handleLanguageChange} />
      </div>
      <div className="content">
        <div className={`turn-indicator ${currentPlayer}`}>
          {currentPlayer === "red" ? translations.game.redTurn : translations.game.blueTurn}
        </div>
        <div className={`dice-area ${currentPlayer}-turn`}>
          <div className={`dice ${currentPlayer}-turn`}>{diceValue ?? "?"}</div>
          <button
            className={`button ${currentPlayer === "blue" ? "blue" : ""}`}
            onClick={rollDice}
            disabled={isRolling || isMoving || gameState === "task" || isLoadingTasks}
          >
            {isMoving
              ? translations.common.moving
              : isRolling
                ? translations.common.rolling
                : isLoadingTasks
                  ? translations.common.preparing
                  : translations.common.rollDice}
          </button>
        </div>
        <div className="board-container">
          <div className="board">{renderBoard()}</div>
          <div className="path-lines-container">{renderPathLines()}</div>
        </div>
      </div>

      {gameState === "task" && currentTask && (
        <div className="modal">
          <div className="modal-content">
            <h2>{translations.tasks.challenge}</h2>
            <div className={`task-card ${currentTask.executor}-executor`}>
              <div className="task-title">
                {taskType === "star"
                  ? translations.tasks.starTask
                  : taskType === "trap"
                    ? translations.tasks.trapTask
                    : translations.tasks.collisionTask}
              </div>
              <div className={`executor ${currentTask.executor}`}>
                {currentTask.executor === "red" ? translations.tasks.redExecute : translations.tasks.blueExecute}
              </div>
              <div className="task-description">{currentTask.description}</div>
              <div className="task-rewards">
                {taskType === "star" && (
                  <div className="reward-info">
                    <div className="reward-success">{translations.tasks.completedReward}</div>
                    <div className="reward-fail">{translations.tasks.failedPenalty}</div>
                  </div>
                )}
                {taskType === "trap" && (
                  <div className="reward-info">
                    <div className="reward-success">{translations.tasks.completedReward}</div>
                    <div className="reward-fail">{translations.tasks.failedPenalty}</div>
                  </div>
                )}
                {taskType === "collision" && (
                  <div className="reward-info">
                    <div className="reward-success">{translations.tasks.collisionCompletedReward}</div>
                    <div className="reward-fail">{translations.tasks.collisionFailedPenalty}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="task-buttons">
              <button className="task-button complete-btn" onClick={() => handleTaskComplete(true)}>
                ✅ {translations.common.completed}
              </button>
              <button className="task-button fail-btn" onClick={() => handleTaskComplete(false)}>
                ❌ {translations.common.failed}
              </button>
            </div>
          </div>
        </div>
      )}

      {gameState === "win" && winner && (
        <div className="modal win-modal">
          <div className="win-card">
            <div className="win-celebration">
              <div className="confetti-container">
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
              </div>
              <div className="trophy-icon">
                <Trophy size={60} />
              </div>
              <h1 className="win-title">
                🎉 {winner === "red" ? translations.game.redWin : translations.game.blueWin} 🎉
              </h1>
              <p className="win-subtitle">{translations.game.selectWinTask || "选择一个胜利任务来庆祝吧！"}</p>
            </div>
            
            <div className="win-tasks-container">
              <h3 className="tasks-title">{translations.game.winTasksTitle || "胜利任务选择"}</h3>
              <div className="win-tasks-grid">
                {winTaskOptions.map((task, index) => (
                  <div
                    key={task.id}
                    className={`win-task-card ${winner}-winner`}
                    onClick={() => handleWinTaskSelect(task)}
                  >
                    <div className="task-number">{index + 1}</div>
                    <div className="task-content">
                      <Sparkles size={20} />
                      <p>{task.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="win-actions">
              <button className="skip-button" onClick={restartFromWin}>
                <ArrowLeft size={16} />
                {translations.common.skipToHome || "跳过回到首页"}
              </button>
            </div>
          </div>
        </div>
      )}

      {gameState === "winTask" && selectedWinTask && winner && (
        <div className="modal win-task-modal">
          <div className="win-task-execution-card">
            <div className="task-header">
              <Star size={32} className="task-star" />
              <h2>{translations.game.winTaskExecution || "胜利任务执行"}</h2>
            </div>
            
            <div className={`selected-task ${winner}-executor`}>
              <div className="task-executor">
                {winner === "red" ? translations.tasks.redExecute : translations.tasks.blueExecute}
              </div>
              <div className="task-description-box">
                {selectedWinTask.description}
              </div>
            </div>
            
            <div className="celebration-message">
              <Heart size={24} />
              <p>{translations.game.celebrationMessage || "完成这个任务来庆祝你们的胜利！"}</p>
            </div>
            
            <div className="win-task-actions">
              <button 
                className="complete-win-task-btn"
                onClick={handleWinTaskComplete}
              >
                ✅ {translations.common.completed}
              </button>
              <button 
                className="restart-btn"
                onClick={restartFromWin}
              >
                <RotateCcw size={16} />
                {translations.common.restart}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  )
}
