'use client'

import { useEffect, useState } from 'react'

export default function StructuredData() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // 如果不是客户端，返回占位符
  if (!isClient) {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: {
      "@language": "zh",
      "@value": "情侣飞行棋游戏全集",
    },
    alternateName: [
      {
        "@language": "zh",
        "@value": "情侣飞行棋手机游戏",
      },
      {
        "@language": "zh",
        "@value": "情侣飞行棋在线游戏",
      },
      {
        "@language": "en",
        "@value": "Couple Flight Chess Game",
      },
      {
        "@language": "ja",
        "@value": "カップル飛行チェス",
      },
    ],
    description: {
      "@language": "zh",
      "@value": "2025最新情侣飞行棋游戏全集，融合经典飞行棋+真心话大冒险+情趣挑战任务，支持手机版、电脑版免费在线玩，情侣互动游戏首选",
    },
    brand: {
      "@type": "Brand",
      name: "爱情飞行棋",
      alternateName: ["Love Flight Chess", "ラブフライトチェス"],
    },
    category: "情侣桌游",
    url: "https://cpfly.top",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "CNY",
      url: "https://cpfly.top",
      priceValidUntil: "2025-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2350",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "小甜甜",
        },
        reviewBody:
          "这个情侣飞行棋游戏全集真的太棒了！我和男朋友玩了好几个小时都不腻，任务设计得很有创意，让我们的感情更亲密了。强烈推荐给所有情侣！",
        inLanguage: "zh",
        datePublished: "2025-01-15",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "阿杰",
        },
        reviewBody:
          "作为异地恋情侣，这个情侣飞行棋手机游戏简直是救星！我们通过视频通话一起玩，虽然相隔千里但感觉就像在一起一样。手机版操作很流畅，体验很棒！",
        inLanguage: "zh",
        datePublished: "2025-01-10",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "小雨",
        },
        reviewBody:
          "朋友推荐的情侣互动游戏，没想到这么好玩！我们选择了情侣升温游戏模式，每个任务都让我们笑得很开心，关系也变得更亲密了。这绝对是最好的情侣约会游戏！",
        inLanguage: "zh",
        datePublished: "2025-01-08",
      },
    ],
    keywords:
      "情侣飞行棋,情侣飞行棋游戏全集,情侣飞行棋手机游戏,情侣飞行棋在线游戏,情侣互动游戏,情侣小游戏,真心话大冒险,情侣破冰游戏,情侣升温游戏,情侣约会游戏,情侣挑战游戏,异地恋情侣游戏,情侣游戏app,情侣游戏手机版,情侣游戏在线玩,双人游戏情侣,情侣互动小游戏,情侣任务游戏,情侣娱乐游戏,情侣礼物推荐,情人节礼物,恋爱游戏,增进感情的游戏,情侣桌游,couple flight chess,couple board game,couple interactive game",
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    inLanguage: ["zh", "en", "ja"],
    featureList: [
      "免费在线玩",
      "手机版支持",
      "多种游戏模式",
      "真心话大冒险",
      "情侣任务挑战",
      "异地恋支持"
    ],
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "情侣飞行棋游戏怎么玩？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "情侣飞行棋游戏结合了经典飞行棋和情侣互动元素。两人轮流掷骰子移动棋子，踩到特殊格子时会触发情侣任务，需要当场执行。游戏支持手机版和电脑版，可以免费在线玩。",
          inLanguage: "zh",
        },
      },
      {
        "@type": "Question",
        name: "情侣飞行棋手机游戏支持哪些设备？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "情侣飞行棋手机游戏支持iOS和Android系统的手机和平板。也可以在电脑浏览器中打开，支持Windows、Mac系统。无需下载APP，直接在线游戏即可。",
          inLanguage: "zh",
        },
      },
      {
        "@type": "Question",
        name: "情侣飞行棋在线游戏是免费的吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "是的！情侣飞行棋在线游戏完全免费，无需付费即可享受所有游戏模式。我们提供6种不同的游戏模式，从温和到激情，满足不同情侣的需求。",
          inLanguage: "zh",
        },
      },
      {
        "@type": "Question",
        name: "异地恋可以玩情侣飞行棋游戏吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "当然可以！异地恋情侣游戏是我们的特色功能之一。通过视频通话，两人可以同时观看游戏画面，一起掷骰子，执行任务。让异地恋也能享受面对面的甜蜜互动。",
          inLanguage: "zh",
        },
      },
      {
        "@type": "Question",
        name: "情侣飞行棋游戏有哪些模式？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "我们提供6种游戏模式：情侣破冰游戏（新手友好）、情侣升温游戏（甜蜜恋爱）、情侣互动游戏（深度交流）、情侣挑战游戏（刺激冒险）、私密成人版、随机惊喜版。每种模式都有不同的任务挑战。",
          inLanguage: "zh",
        },
      },
      {
        "@type": "Question",
        name: "情侣飞行棋游戏适合什么年龄段？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "情侣飞行棋游戏适合18岁以上的成年情侣。我们提供多种模式，从适合新手的情侣破冰游戏，到适合成熟情侣的深度互动模式，每个人都能找到适合自己的玩法。",
          inLanguage: "zh",
        },
      },
    ],
    inLanguage: ["zh", "en", "ja"],
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "情侣飞行棋游戏全集 - 爱情飞行棋",
    alternateName: ["情侣飞行棋手机游戏", "情侣飞行棋在线游戏", "Couple Flight Chess Game", "カップル飛行チェス"],
    url: "https://cpfly.top",
    description: "2025最新情侣飞行棋游戏全集，融合经典飞行棋+真心话大冒险+情趣挑战任务，支持手机版、电脑版免费在线玩",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cpfly.top/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["zh", "en", "ja"],
  }

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "爱情飞行棋",
    alternateName: ["Love Flight Chess", "ラブフライトチェス"],
    url: "https://cpfly.top",
    logo: "https://cpfly.top/images/logo.png",
    description: "专注于情侣互动游戏开发，致力于为情侣提供增进感情的创意游戏体验",
    sameAs: ["https://cpfly.top"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CN",
    },
  }

  // 软件应用结构化数据
  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "情侣飞行棋游戏全集",
    alternateName: ["情侣飞行棋手机游戏", "情侣飞行棋在线游戏", "Couple Flight Chess Game"],
    url: "https://cpfly.top",
    description: "免费在线情侣互动游戏，支持手机版、电脑版，多种游戏模式任你选择",
    applicationCategory: "GameApplication",
    operatingSystem: "Web Browser",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    memoryRequirements: "50MB",
    storageRequirements: "10MB",
    permissions: "No special permissions required",
    availableOnDevice: "Desktop, Mobile, Tablet",
    countriesSupported: ["CN", "US", "JP", "global"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CNY",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2350",
    },
    screenshot: "https://cpfly.top/images/screenshot.jpg",
    video: "https://cpfly.top/videos/gameplay.mp4",
    downloadUrl: "https://cpfly.top",
    installUrl: "https://cpfly.top",
    featureList: [
      "情侣飞行棋游戏全集",
      "情侣飞行棋手机游戏",
      "情侣飞行棋在线游戏",
      "免费在线玩",
      "多种游戏模式",
      "真心话大冒险",
      "情侣任务挑战",
      "异地恋支持",
      "手机版支持",
      "电脑版支持"
    ],
  }

  // 游戏结构化数据
  const gameStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "情侣飞行棋游戏全集",
    alternateName: ["情侣飞行棋手机游戏", "情侣飞行棋在线游戏"],
    description: "创意情侣互动游戏，融合飞行棋+真心话大冒险+情侣挑战",
    url: "https://cpfly.top",
    genre: ["Puzzle", "Board Game", "Relationship", "Interactive"],
    gamePlatform: ["Web Browser", "Mobile", "Desktop"],
    playMode: "MultiPlayer",
    numberOfPlayers: "2",
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2350",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CNY",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: "爱情飞行棋",
    },
    datePublished: "2025-01-01",
    keywords: "情侣飞行棋,情侣游戏,真心话大冒险,情侣互动游戏,情侣挑战游戏",
  }

  // 专题页面结构化数据
  const specialPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "情侣飞行棋游戏全集 - 情侣互动游戏大全",
    description: "最全的情侣飞行棋游戏合集，包含手机版、在线版、各种游戏模式",
    url: "https://cpfly.top",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: "6",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "情侣破冰游戏",
          description: "适合新手情侣的温和互动游戏模式"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "情侣升温游戏",
          description: "甜蜜恋爱版，增进感情的浪漫游戏"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "情侣互动游戏",
          description: "深度交流版，适合稳定关系的情侣"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "情侣挑战游戏",
          description: "刺激冒险版，大胆有趣的亲密挑战"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "私密成人版",
          description: "成熟情侣的深度互动体验"
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "随机惊喜版",
          description: "组合各种模式的随机游戏体验"
        }
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "首页",
          item: "https://cpfly.top"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "情侣飞行棋游戏全集",
          item: "https://cpfly.top"
        }
      ]
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gameStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(specialPageData),
        }}
      />
    </>
  )
}
