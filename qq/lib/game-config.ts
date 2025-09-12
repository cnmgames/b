export interface PathCell {
  id: number
  x: number
  y: number
  type: "start" | "end" | "star" | "trap" | "path"
  direction: "right" | "down" | "left" | "up" | null
}

// Fisher-Yates Shuffle Algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// 创建棋盘路径
export const createBoardPath = (): PathCell[] => {
  const boardSize = 7
  const path: PathCell[] = []

  const visited = Array(boardSize)
    .fill(null)
    .map(() => Array(boardSize).fill(false))

  const directions: [number, number][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0], // 右、下、左、上
  ]
  const directionNames: ("right" | "down" | "left" | "up")[] = ["right", "down", "left", "up"]
  let directionIndex = 0
  let row = 0,
    col = 0
  let pathIndex = 0

  for (let i = 0; i < boardSize * boardSize; i++) {
    visited[row][col] = true
    const nextPlannedRow = row + directions[directionIndex][0]
    const nextPlannedCol = col + directions[directionIndex][1]
    let currentDirection = directionNames[directionIndex]

    path.push({
      id: pathIndex++,
      x: col,
      y: row,
      type: "path", // Default to 'path'
      direction: null,
    })

    if (i === boardSize * boardSize - 1) {
      path[path.length - 1].direction = null
      break
    }

    if (
      nextPlannedRow < 0 ||
      nextPlannedRow >= boardSize ||
      nextPlannedCol < 0 ||
      nextPlannedCol >= boardSize ||
      visited[nextPlannedRow][nextPlannedCol]
    ) {
      directionIndex = (directionIndex + 1) % 4
      currentDirection = directionNames[directionIndex]
    }
    path[path.length - 1].direction = currentDirection
    row += directions[directionIndex][0]
    col += directions[directionIndex][1]
  }

  // Set Start and End
  if (path.length > 0) {
    path[0].type = "start"
    path[path.length - 1].type = "end"
    path[path.length - 1].direction = null
  }

  // 获取可放置特殊格子的路径位置（排除起点、终点和它们附近的格子）
  const pathCellIndices: number[] = []
  for (let i = 0; i < path.length; i++) {
    if (path[i].type === "path") {
      // 避免在起点和终点附近放置特殊格子
      if (i > 2 && i < path.length - 3) {
        pathCellIndices.push(i)
      }
    }
  }

  const numStars = 12
  const numTraps = 12
  const totalSpecialCells = numStars + numTraps

  // 确保有足够的可用位置
  if (pathCellIndices.length < totalSpecialCells) {
    console.warn("警告：可用位置不足以放置所有特殊格子")
  }

  // 实现更均匀的分布策略
  // 将路径分成多个区段，在每个区段中均匀分布特殊格子
  const availablePositions = [...pathCellIndices]
  const segmentCount = 6 // 将路径分成6个区段
  const segmentSize = Math.floor(availablePositions.length / segmentCount)
  
  // 每个区段应该放置的特殊格子数量
  const starsPerSegment = Math.floor(numStars / segmentCount)
  const trapsPerSegment = Math.floor(numTraps / segmentCount)
  const remainingStars = numStars % segmentCount
  const remainingTraps = numTraps % segmentCount

  const placedPositions = new Set<number>()

  // 在每个区段中放置特殊格子
  for (let segment = 0; segment < segmentCount; segment++) {
    const segmentStart = segment * segmentSize
    const segmentEnd = segment === segmentCount - 1 ? availablePositions.length : (segment + 1) * segmentSize
    const segmentPositions = availablePositions.slice(segmentStart, segmentEnd)
    
    // 计算当前区段应该放置的数量
    let currentSegmentStars = starsPerSegment + (segment < remainingStars ? 1 : 0)
    let currentSegmentTraps = trapsPerSegment + (segment < remainingTraps ? 1 : 0)
    
    // 随机打乱当前区段的位置
    const shuffledSegmentPositions = shuffleArray(segmentPositions)
    
    // 放置幸运星
    for (let i = 0; i < currentSegmentStars && i < shuffledSegmentPositions.length; i++) {
      const starIndex = shuffledSegmentPositions[i]
      if (!placedPositions.has(starIndex) && path[starIndex]) {
        path[starIndex].type = "star"
        placedPositions.add(starIndex)
      }
    }
    
    // 放置陷阱
    for (let i = 0; i < shuffledSegmentPositions.length && currentSegmentTraps > 0; i++) {
      const trapIndex = shuffledSegmentPositions[i]
      if (!placedPositions.has(trapIndex) && path[trapIndex] && path[trapIndex].type === "path") {
        path[trapIndex].type = "trap"
        placedPositions.add(trapIndex)
        currentSegmentTraps--
      }
    }
  }

  // 如果还有未放置的特殊格子，随机放置到剩余位置
  const remainingPositions = availablePositions.filter(pos => !placedPositions.has(pos))
  const shuffledRemainingPositions = shuffleArray(remainingPositions)
  
  let remainingStarsToPlace = numStars - Array.from(placedPositions).filter(pos => path[pos].type === "star").length
  let remainingTrapsToPlace = numTraps - Array.from(placedPositions).filter(pos => path[pos].type === "trap").length
  
  for (let i = 0; i < shuffledRemainingPositions.length && (remainingStarsToPlace > 0 || remainingTrapsToPlace > 0); i++) {
    const pos = shuffledRemainingPositions[i]
    if (path[pos] && path[pos].type === "path") {
      if (remainingStarsToPlace > 0) {
        path[pos].type = "star"
        remainingStarsToPlace--
      } else if (remainingTrapsToPlace > 0) {
        path[pos].type = "trap"
        remainingTrapsToPlace--
      }
    }
  }

  return path
}
