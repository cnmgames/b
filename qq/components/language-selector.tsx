"use client"

import { type Language, languageNames, languageFlags } from "@/lib/i18n"
import { Github } from "lucide-react"

interface LanguageSelectorProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
  showGithub?: boolean
  className?: string
}

export default function LanguageSelector({ 
  currentLanguage, 
  onLanguageChange, 
  showGithub = false,
  className = ""
}: LanguageSelectorProps) {
  const languages: Language[] = ["zh", "en", "ja"]

  return (
    <div className={`language-selector-buttons ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang}
          className={`language-btn ${lang === currentLanguage ? "active" : ""}`}
          onClick={() => onLanguageChange(lang)}
          title={languageNames[lang]}
        >
          <span className="language-flag">{languageFlags[lang]}</span>
        </button>
      ))}
      {showGithub && (
        <a
          href="https://github.com/woniu9524/couple-flying-chess"
          target="_blank"
          rel="noopener noreferrer"
          className={`github-link ${className.includes('title') ? 'title-github-link' : ''}`}
          title="GitHub 源代码"
        >
          <Github size={16} />
        </a>
      )}
    </div>
  )
}
