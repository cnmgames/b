import CoupleLudoGame from "@/components/couple-ludo-game"
import SEOContent from "@/components/seo-content"
import KeywordsContent from "@/app/keywords-content"

export default function HomePage() {
  return (
    <main id="app">
      {/* 游戏主体 */}
      <CoupleLudoGame />

      {/* SEO优化内容 - 隐藏但对搜索引擎可见 */}
      <div className="seo-hidden-content">
        <SEOContent />
      </div>

      {/* 关键词优化内容 - 提升长尾词排名 */}
      <div className="keywords-hidden-content" style={{ display: 'none' }}>
        <KeywordsContent />
      </div>
    </main>
  )
}
