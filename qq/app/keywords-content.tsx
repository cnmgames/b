"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Smartphone, Monitor, Users, Gamepad2, Zap, Gift, Star } from "lucide-react"

export default function KeywordsContent() {
  const keywordCategories = {
    core: {
      title: "核心关键词",
      keywords: [
        { word: "情侣飞行棋", search: 372, desc: "最核心的品牌词，搜索量最高" },
        { word: "情侣飞行棋游戏全集", search: 40, desc: "包含多种游戏模式的完整版本" },
        { word: "情侣飞行棋手机游戏", search: 37, desc: "专为手机优化的游戏版本" },
        { word: "情侣飞行棋在线游戏", search: 28, desc: "无需下载，在线即玩" },
      ]
    },
    interaction: {
      title: "互动游戏类",
      keywords: [
        { word: "情侣互动游戏", search: 28, desc: "增进感情的双人互动体验" },
        { word: "情侣小游戏", search: 26, desc: "轻松有趣的情侣娱乐选择" },
        { word: "情侣破冰游戏", search: 23, desc: "适合新情侣的温和互动" },
        { word: "情侣升温游戏", search: 19, desc: "快速增进感情的甜蜜游戏" },
        { word: "情侣约会游戏", search: 18, desc: "约会时光的完美伴侣" },
        { word: "情侣挑战游戏", search: 17, desc: "刺激有趣的亲密挑战" },
      ]
    },
    truthDare: {
      title: "真心话大冒险类",
      keywords: [
        { word: "真心话大冒险", search: 15, desc: "经典的情侣互动玩法" },
        { word: "情侣真心话大冒险", search: 15, desc: "专为情侣设计的真心话问题" },
        { word: "真心话大冒险情侣版", search: 12, desc: "适合情侣的特别版本" },
        { word: "真心话大冒险手机版", search: 11, desc: "手机上的真心话游戏" },
      ]
    },
    mobile: {
      title: "手机游戏类",
      keywords: [
        { word: "情侣游戏app", search: 17, desc: "手机应用形式的情侣游戏" },
        { word: "情侣游戏手机版", search: 17, desc: "适配手机的游戏版本" },
        { word: "情侣游戏在线玩", search: 15, desc: "在线游戏平台体验" },
        { word: "双人游戏情侣", search: 13, desc: "专为两人设计的游戏" },
        { word: "情侣互动小游戏", search: 11, desc: "简单易玩的互动游戏" },
      ]
    },
    longDistance: {
      title: "异地恋专用",
      keywords: [
        { word: "异地恋情侣游戏", search: 10, desc: "跨越距离的甜蜜互动" },
        { word: "异地恋游戏推荐", search: 8, desc: "适合异地恋的游戏合集" },
        { word: "远程情侣游戏", search: 6, desc: "远程也能亲密互动" },
        { word: "视频通话游戏", search: 5, desc: "通过视频一起玩的游戏" },
      ]
    },
    gifts: {
      title: "情侣礼物类",
      keywords: [
        { word: "情侣礼物推荐", search: 10, desc: "最有意义的创意礼物" },
        { word: "情人节礼物", search: 8, desc: "情人节的完美选择" },
        { word: "创意情侣礼物", search: 7, desc: "独特有趣的礼物创意" },
        { word: "纪念日礼物", search: 6, desc: "纪念特殊日子的礼物" },
        { word: "生日礼物情侣", search: 5, desc: "生日时的贴心礼物" },
      ]
    }
  }

  const gameFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "情侣飞行棋手机游戏",
      desc: "专为手机优化，支持iOS和Android系统，随时随地开启甜蜜互动时光。",
      tags: ["手机版", "移动端", "APP", "在线玩"]
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "情侣飞行棋在线游戏",
      desc: "无需下载安装，打开浏览器即可开始游戏，支持电脑版大屏体验。",
      tags: ["在线游戏", "免费", "无需下载", "电脑版"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "情侣互动游戏",
      desc: "真正的面对面互动体验，每个任务都需要当场执行，增进真实感情。",
      tags: ["互动", "面对面", "真实", "感情升温"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "异地恋情侣游戏",
      desc: "通过视频通话一起玩，让异地恋也能享受甜蜜的面对面互动时光。",
      tags: ["异地恋", "视频通话", "远程", "甜蜜互动"]
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "真心话大冒险",
      desc: "融合经典真心话大冒险玩法，专为情侣设计的任务和挑战。",
      tags: ["真心话", "大冒险", "挑战", "经典玩法"]
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "情侣礼物推荐",
      desc: "比传统礼物更有意义，创造共同回忆的创意礼物选择。",
      tags: ["礼物", "创意", "纪念", "有意义"]
    }
  ]

  const popularSearches = [
    "情侣飞行棋游戏全集免费下载",
    "情侣飞行棋手机版在线玩",
    "情侣互动游戏推荐排行榜",
    "真心话大冒险情侣版题目",
    "异地恋情侣游戏有哪些",
    "情侣破冰游戏大全",
    "情侣升温游戏怎么玩",
    "情侣约会游戏室内",
    "情侣挑战游戏任务大全",
    "情人节礼物创意推荐",
    "情侣小游戏简单好玩",
    "双人游戏情侣版免费"
  ]

  const gameAdvantages = [
    {
      title: "🆓 完全免费",
      desc: "情侣飞行棋在线游戏完全免费，无需付费即可享受所有功能"
    },
    {
      title: "📱 多平台支持",
      desc: "支持手机版、电脑版，iOS、Android、Windows、Mac全平台兼容"
    },
    {
      title: "🎮 6种游戏模式",
      desc: "从温和到激情，6种不同模式满足各阶段情侣的需求"
    },
    {
      title: "💕 真实互动",
      desc: "面对面执行任务，真实的肢体接触和眼神交流"
    },
    {
      title: "🌐 异地恋友好",
      desc: "支持视频通话同时游戏，异地恋也能甜蜜互动"
    },
    {
      title: "🔄 随时更新",
      desc: "定期更新任务内容，保持游戏的新鲜感和趣味性"
    }
  ]

  return (
    <div className="keywords-content-wrapper space-y-8">
      {/* 热门搜索词云 */}
      <section className="popular-searches">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" />
          热门搜索 - 情侣飞行棋游戏相关
        </h2>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search, index) => (
            <Badge key={index} variant="secondary" className="text-sm py-1">
              {search}
            </Badge>
          ))}
        </div>
      </section>

      {/* 关键词分类展示 */}
      <section className="keywords-categories">
        <h2 className="text-2xl font-bold mb-6">情侣飞行棋游戏关键词大全</h2>
        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="core">核心词</TabsTrigger>
            <TabsTrigger value="interaction">互动游戏</TabsTrigger>
            <TabsTrigger value="truthDare">真心话</TabsTrigger>
            <TabsTrigger value="mobile">手机版</TabsTrigger>
            <TabsTrigger value="longDistance">异地恋</TabsTrigger>
            <TabsTrigger value="gifts">礼物类</TabsTrigger>
          </TabsList>
          
          {Object.entries(keywordCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {category.keywords.map((keyword, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{keyword.word}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Badge variant="outline">搜索量: {keyword.search}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{keyword.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* 游戏特色功能 */}
      <section className="game-features">
        <h2 className="text-2xl font-bold mb-6">情侣飞行棋游戏特色功能</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gameFeatures.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{feature.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 游戏优势 */}
      <section className="game-advantages">
        <h2 className="text-2xl font-bold mb-6">为什么选择我们的情侣飞行棋游戏？</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gameAdvantages.map((advantage, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 相关游戏推荐 */}
      <section className="related-games">
        <h2 className="text-2xl font-bold mb-6">相关情侣游戏推荐</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>情侣互动小游戏合集</CardTitle>
              <CardDescription>适合各种场合的情侣小游戏</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                包含情侣破冰游戏、情侣升温游戏、情侣约会游戏等多种类型，
                让你们在不同情况下都能找到合适的游戏。
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                <Badge variant="secondary">破冰游戏</Badge>
                <Badge variant="secondary">升温游戏</Badge>
                <Badge variant="secondary">约会游戏</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>异地恋情侣游戏专区</CardTitle>
              <CardDescription>专为异地恋情侣设计</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                通过视频通话一起玩的游戏合集，让距离不再是问题。
                包含远程互动任务、同步游戏体验等功能。
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                <Badge variant="secondary">视频通话</Badge>
                <Badge variant="secondary">远程互动</Badge>
                <Badge variant="secondary">同步体验</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEO优化内容 */}
      <section className="seo-content">
        <h2 className="text-2xl font-bold mb-6">情侣飞行棋游戏全集 - 完整指南</h2>
        <div className="prose max-w-none">
          <h3>什么是情侣飞行棋游戏？</h3>
          <p>
            情侣飞行棋游戏是一种融合了经典飞行棋玩法和情侣互动元素的创新桌游。
            与传统飞行棋不同，我们的情侣飞行棋游戏全集包含了真心话大冒险、
            情侣挑战任务、亲密互动等多种元素，让游戏不仅仅是娱乐，更是增进感情的神器。
          </p>
          
          <h3>情侣飞行棋手机游戏的优势</h3>
          <p>
            我们的情侣飞行棋手机游戏支持iOS和Android系统，无需下载APP，
            直接在浏览器中即可开始游戏。手机版特别优化了触控操作，
            让你们能够随时随地开启甜蜜的互动时光。
          </p>
          
          <h3>情侣飞行棋在线游戏怎么玩？</h3>
          <p>
            情侣飞行棋在线游戏完全免费，两人轮流掷骰子移动棋子，
            踩到特殊格子时会触发各种情侣任务。任务包括真心话问答、
            亲密挑战、甜蜜互动等，需要当场执行，增加游戏的真实性和趣味性。
          </p>
          
          <h3>适合异地恋的情侣游戏</h3>
          <p>
            异地恋情侣游戏是我们的特色功能之一。通过视频通话，
            两人可以同时观看游戏画面，一起掷骰子，执行任务。
            即使相隔千里，也能享受面对面的甜蜜互动体验。
          </p>
        </div>
      </section>
    </div>
  )
} 