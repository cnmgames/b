'use client'

// SEO监控和分析工具
export default function SEOMonitor() {
  // 检测搜索引擎爬虫
  const detectSearchBot = () => {
    if (typeof window === 'undefined') return null
    
    const userAgent = navigator.userAgent.toLowerCase()
    const bots = {
      googlebot: /googlebot/i,
      bingbot: /bingbot/i,
      slurp: /slurp/i,
      duckduckbot: /duckduckbot/i,
      baiduspider: /baiduspider/i,
      yandexbot: /yandexbot/i,
      facebookbot: /facebookexternalhit/i,
      twitterbot: /twitterbot/i,
      linkedinbot: /linkedinbot/i,
    }

    for (const [name, regex] of Object.entries(bots)) {
      if (regex.test(userAgent)) {
        return name
      }
    }
    return null
  }

  // 记录页面访问信息
  const logPageVisit = () => {
    if (typeof window === 'undefined') return

    const bot = detectSearchBot()
    const pageInfo = {
      url: window.location.href,
      title: document.title,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      bot: bot,
      referrer: document.referrer,
      language: navigator.language,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    // 发送到分析服务（示例）
    if (bot) {
      console.log('搜索引擎爬虫访问:', bot, pageInfo)
      // 这里可以发送到你的分析服务
      // fetch('/api/seo-analytics', { method: 'POST', body: JSON.stringify(pageInfo) })
    }
  }

  // 监控页面性能
  const monitorPagePerformance = () => {
    if (typeof window === 'undefined') return

    // 页面加载完成后执行
    window.addEventListener('load', () => {
      setTimeout(() => {
        const performance = window.performance
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        const metrics = {
          // 首次内容绘制
          FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
          // 最大内容绘制
          LCP: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime,
          // 页面加载时间
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          // DNS查询时间
          dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
          // 服务器响应时间
          serverTime: navigation.responseEnd - navigation.requestStart,
          // DOM解析时间
          domParseTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        }

        console.log('页面性能指标:', metrics)
        
        // 发送性能数据到Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'page_performance', {
            event_category: 'Performance',
            load_time: Math.round(metrics.loadTime || 0),
            server_response_time: Math.round(metrics.serverTime || 0),
          })
        }
      }, 0)
    })
  }

  // 初始化监控
  if (typeof window !== 'undefined') {
    logPageVisit()
    monitorPagePerformance()
  }

  return null
} 