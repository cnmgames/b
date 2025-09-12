export type Language = "zh" | "en" | "ja"

export interface Translations {
  common: {
    loading: string
    start: string
    restart: string
    completed: string
    failed: string
    rollDice: string
    rolling: string
    moving: string
    preparing: string
    skipToHome: string
  }
  game: {
    title: string
    subtitle: string
    selectMode: string
    modeDescription: string
    redTurn: string
    blueTurn: string
    redWin: string
    blueWin: string
    backToHome: string
    selectWinTask: string
    winTasksTitle: string
    winTaskExecution: string
    celebrationMessage: string
  }
  modes: {
    normal: { name: string; description: string }
    love: { name: string; description: string }
    couple: { name: string; description: string }
    advanced: { name: string; description: string }
    intimate: { name: string; description: string }
    mixed: { name: string; description: string }
  }
  customMode: {
    title: string
    description: string
    create: string
    edit: string
    delete: string
    deleteConfirm: string
    creator: {
      title: string
      close: string
      basicInfo: string
      modeName: string
      modeDescription: string
      modeNamePlaceholder: string
      modeDescriptionPlaceholder: string
      taskSelection: string
      fromExistingModes: string
      loadTasks: string
      loading: string
      manualAdd: string
      manualAddPlaceholder: string
      selectedTasks: string
      taskCount: string
      createButton: string
      cancel: string
      nameRequired: string
      tasksRequired: string
    }
    messages: {
      createSuccess: string
      deleteSuccess: string
      loadTasksError: string
    }
  }
  board: {
    start: string
    end: string
    star: string
    trap: string
  }
  tasks: {
    challenge: string
    starTask: string
    trapTask: string
    collisionTask: string
    redExecute: string
    blueExecute: string
    completedReward: string
    failedPenalty: string
    collisionCompletedReward: string
    collisionFailedPenalty: string
    emptyQueue: string
  }
  tips: {
    twoPlayers: string
    faceToFace: string
    improveRelation: string
  }
  toast: {
    redForward: string
    blueForward: string
    redBackward: string
    blueBackward: string
    redStay: string
    blueStay: string
    redFailedToStart: string
    blueFailedToStart: string
    redCompleted: string
    blueCompleted: string
  }
}

const translations: Record<Language, Translations> = {}

export async function loadTranslations(lang: Language): Promise<Translations> {
  if (translations[lang]) {
    return translations[lang]
  }

  try {
    const response = await fetch(`/locales/${lang}.json`)
    if (!response.ok) {
      throw new Error(`Failed to load translations for ${lang}`)
    }
    const data = await response.json()
    translations[lang] = data
    return data
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error)
    // Fallback to Chinese if loading fails
    if (lang !== "zh") {
      return loadTranslations("zh")
    }
    throw error
  }
}

export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key]?.toString() || match
  })
}

export const languageNames: Record<Language, string> = {
  zh: "中文",
  en: "English",
  ja: "日本語",
}

export const languageFlags: Record<Language, string> = {
  zh: "🇨🇳",
  en: "🇺🇸",
  ja: "🇯🇵",
}
