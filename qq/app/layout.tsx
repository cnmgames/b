import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./seo-styles.css"
import StructuredData from "./structured-data"
import Analytics from "./analytics"

export const metadata: Metadata = {
  title: {
    default: "情侣飞行棋游戏全集免费在线玩 | 情侣互动游戏手机版 | 真心话大冒险情趣桌游 - 爱情飞行棋",
    template: "%s | 爱情飞行棋 - 情侣游戏专家",
  },
  description:
    "【2025最新】情侣飞行棋游戏全集免费在线玩！融合经典飞行棋+真心话大冒险+情趣挑战任务，超多互动环节让感情迅速升温。支持手机版、电脑版在线游戏，情侣破冰神器，异地恋也能甜蜜互动！立即开玩，体验最火爆的情侣互动游戏！",
  keywords:
    "情侣飞行棋,情侣飞行棋游戏全集,情侣飞行棋手机游戏,情侣飞行棋在线游戏,情侣互动游戏,情侣桌游,情趣情侣礼物,真心话大冒险,情侣破冰游戏,情侣升温游戏,恋爱游戏,增进感情的游戏,异地恋情侣游戏,情侣约会游戏,情侣小游戏,情侣游戏app,情侣游戏手机版,情侣游戏在线玩,双人游戏情侣,情侣互动小游戏,情侣挑战游戏,情侣任务游戏,情人节礼物,情侣礼物推荐,情侣娱乐游戏,couple flight chess,couple board game,couple interactive game,romantic couple gift,valentine gift,love game,relationship building game,long distance relationship game,couple date game,truth or dare,couple icebreaker game,couple bonding game",
  authors: [{ name: "爱情飞行棋" }],
  creator: "爱情飞行棋",
  publisher: "爱情飞行棋",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      }
    ],
    shortcut: "/favicon.png",
    apple: [
      {
        url: "/images/logo.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
  },
  openGraph: {
    title:
      "情侣飞行棋游戏全集免费在线玩 - 最火爆的情侣互动游戏 | 手机版真心话大冒险",
    description:
      "【2025最新】情侣飞行棋游戏全集免费在线玩！融合经典飞行棋+真心话大冒险+情趣挑战，支持手机版、电脑版，情侣破冰神器，异地恋也能甜蜜互动！立即开玩最火爆的情侣游戏！",
    url: "https://cpfly.top",
    siteName: "爱情飞行棋 - 情侣游戏专家",
    images: [
      {
        url: "https://cpfly.top/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "情侣飞行棋游戏全集 - 免费在线情侣互动游戏",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "情侣飞行棋游戏全集免费在线玩 - 最火爆的情侣互动游戏",
    description:
      "【2025最新】情侣飞行棋游戏全集免费在线玩！融合经典飞行棋+真心话大冒险+情趣挑战，支持手机版、电脑版，立即开玩！",
    images: ["https://cpfly.top/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://cpfly.top",
    languages: {
      "zh-CN": "https://cpfly.top",
      en: "https://cpfly.top/en",
      ja: "https://cpfly.top/ja",
    },
  },
  other: {
    "baidu-site-verification": "your-baidu-verification-code",
    "360-site-verification": "your-360-verification-code",
    "sogou_site_verification": "your-sogou-verification-code",
    "shenma-site-verification": "your-shenma-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <StructuredData />
        <link rel="canonical" href="https://cpfly.top" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#ff6b9d" />
        
        {/* 针对移动端搜索优化 */}
        <meta name="mobile-web-compatible" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* 百度移动适配 */}
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  )
}
