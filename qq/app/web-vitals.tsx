'use client'

import { useEffect } from 'react'

// Web Vitals性能监控
export default function WebVitals() {
  useEffect(() => {
    // 动态导入web-vitals库
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 发送性能数据到Google Analytics
      function sendToGA(metric: any) {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          })
        }
      }

      // 监控核心网页指标
      getCLS(sendToGA)  // 累积布局位移
      getFID(sendToGA)  // 首次输入延迟
      getFCP(sendToGA)  // 首次内容绘制
      getLCP(sendToGA)  // 最大内容绘制
      getTTFB(sendToGA) // 到达首字节时间
    })
  }, [])

  return null
} 