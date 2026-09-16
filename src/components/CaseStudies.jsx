import React, { useState, useEffect, useRef } from 'react'
import { 
  Activity, 
  ChevronDown
} from 'lucide-react'

const CASES_DATA = [
  {
    id: 1,
    accent: '#DC2626',
    image: '/case-ecommerce.webp',
    title: 'Vá Crash SDK Thanh Toán',
    desc: 'Khắc phục lỗi văng app trên Android 14+, nâng cấp SDK và phát hành bản vá sau 24h.',
    results: [
      { label: 'Tỷ lệ Crash-free', val: '99.92%', num: 99.92, decimals: 2, suffix: '%', change: 'tăng từ 95.8%' },
      { label: 'Phản hồi SLA', val: '< 3 giờ', prefix: '< ', num: 3, decimals: 0, suffix: ' giờ', change: 'giờ làm việc' },
      { label: 'Phát hành Store', val: '2 bản/tháng', num: 2, decimals: 0, suffix: ' bản/tháng', change: 'đúng kế hoạch' }
    ]
  },
  {
    id: 2,
    accent: '#0284C7',
    image: '/case-booking.webp',
    title: 'Duy Trì Chuẩn Apple Store',
    desc: 'Cấu hình Privacy Manifest, cập nhật giá dịch vụ và duyệt ngay lần gửi đầu.',
    results: [
      { label: 'Thời gian Live Store', val: '100%', num: 100, decimals: 0, suffix: '%', change: 'không gián đoạn' },
      { label: 'Yêu cầu dữ liệu', val: '6/6', num: 6, decimals: 0, suffix: '/6', change: 'hoàn thành' },
      { label: 'Đánh giá Store', val: '4.8 ★', num: 4.8, decimals: 1, suffix: ' ★', change: 'duy trì điểm cao' }
    ]
  },
  {
    id: 3,
    accent: '#10B981',
    image: '/case-inventory.webp',
    title: 'Bảo Trì App Kiểm Kê Nội Bộ',
    desc: 'Kiểm tra định kỳ hàng tháng, xử lý token bảo mật và gia hạn Certificate.',
    results: [
      { label: 'Kiểm tra hệ thống', val: '1 lần/tháng', num: 1, decimals: 0, suffix: ' lần/tháng', change: 'định kỳ' },
      { label: 'Bảo mật dữ liệu', val: '100%', num: 100, decimals: 0, suffix: '%', change: 'an toàn 100%' },
      { label: 'Tiết kiệm chi phí', val: '90%', num: 90, decimals: 0, suffix: '%', change: '800k/tháng' }
    ]
  }
]

function CountUpValue({ item, isVisible }) {
  const [displayValue, setDisplayValue] = useState(
    item.num !== undefined 
      ? (item.prefix || '') + (0).toFixed(item.decimals || 0) + (item.suffix || '') 
      : item.val
  )
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!isVisible || item.num === undefined) {
      if (item.num === undefined) setDisplayValue(item.val)
      return
    }

    if (hasAnimatedRef.current) return
    hasAnimatedRef.current = true

    const end = item.num
    const duration = 1400
    const startTime = performance.now()

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = end * easeProgress

      const formatted = (item.prefix || '') + current.toFixed(item.decimals || 0) + (item.suffix || '')
      setDisplayValue(formatted)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        const finalFormatted = (item.prefix || '') + end.toFixed(item.decimals || 0) + (item.suffix || '')
        setDisplayValue(finalFormatted)
      }
    }

    const frameId = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible, item.num, item.prefix, item.suffix, item.decimals, item.val])

  return <span>{displayValue}</span>
}

export default function CaseStudies() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [expandedCards, setExpandedCards] = useState({})

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const cases = CASES_DATA

  return (
    <section ref={sectionRef} className="section bg-tech-white cases-section-compact" id="case-study">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-up cases-header-compact">
          <div className="section-tag">
            <Activity size={14} />
            <span>Thực Tế Vận Hành</span>
          </div>
          <h2 className="section-title">Kết Quả Vận Hành Đo Lường Được</h2>
          <p className="section-desc">
            Hiệu quả thực tế từ các ứng dụng được DUDI tiếp quản vận hành và bảo vệ ổn định trên Store.
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="cases-grid">
          {cases.map((c, idx) => {
            const isExpanded = !!expandedCards[c.id]

            return (
              <div 
                key={c.id} 
                className={`case-card reveal-up delay-${(idx + 1) * 120}`}
                style={{ '--case-accent': c.accent }}
              >
                {/* Embedded Matching Image */}
                <div className="case-img-wrap">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="case-thumb-img" 
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/case-ecommerce.webp'
                    }}
                  />
                  <div className="case-img-overlay" />
                </div>

                <div className="case-card-body">
                  {/* Title */}
                  <h3 className="case-title">{c.title}</h3>

                  {/* Toggle Detail Action Button */}
                  <button 
                    type="button"
                    className="case-detail-btn"
                    onClick={() => toggleExpand(c.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Thu gọn chi tiết' : 'Xem chi tiết'}</span>
                    <ChevronDown size={14} className={`case-chevron ${isExpanded ? 'open' : ''}`} />
                  </button>

                  {/* Expandable Story Description */}
                  <div className={`case-desc-drawer ${isExpanded ? 'open' : ''}`}>
                    <p className="case-desc">{c.desc}</p>
                  </div>

                  {/* KPI Metrics Dashboard Grid */}
                  <div className="case-kpi-grid">
                    {c.results.map((r, rIdx) => (
                      <div key={rIdx} className="kpi-score-box">
                        <span className="kpi-num">
                          <CountUpValue item={r} isVisible={isVisible} />
                        </span>
                        <span className="kpi-name">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .cases-section-compact {
          padding: 38px 0 44px 0;
        }

        .cases-header-compact {
          margin-bottom: 18px;
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: start;
        }

        .case-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-subtle);
          padding: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .case-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(220, 38, 38, 0.15);
          border-color: rgba(220, 38, 38, 0.3);
        }

        /* Top Image Banner */
        .case-img-wrap {
          width: 100%;
          height: 180px;
          position: relative;
          overflow: hidden;
          background: #0F172A;
        }

        .case-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .case-card:hover .case-thumb-img {
          transform: scale(1.08);
        }

        .case-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.35) 100%);
          pointer-events: none;
        }

        .case-card-body {
          padding: 16px 16px 18px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* Main Title */
        .case-title {
          font-size: 15px;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 4px;
          line-height: 1.35;
        }

        /* Detail Toggle Button */
        .case-detail-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--case-accent);
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 6px;
          padding: 5px 10px;
          margin-top: 4px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .case-detail-btn:hover {
          background: #F1F5F9;
          border-color: #CBD5E1;
        }

        .case-chevron {
          transition: transform 0.25s ease;
        }

        .case-chevron.open {
          transform: rotate(180deg);
        }

        /* Expandable Description Drawer */
        .case-desc-drawer {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease, margin-bottom 0.25s ease;
          margin-bottom: 0;
        }

        .case-desc-drawer.open {
          max-height: 120px;
          opacity: 1;
          margin-bottom: 10px;
        }

        .case-desc {
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.5;
          padding: 2px 0 6px 0;
          background: transparent;
          border: none;
        }

        /* KPI Metrics Dashboard Grid */
        .case-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          border-top: 1px dashed #E2E8F0;
          padding-top: 14px;
          margin-top: auto;
        }

        .kpi-score-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 4px;
          background: #F8FAFC;
          border: 1px solid #EDF2F7;
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
        }

        .case-card:hover .kpi-score-box {
          background: #FFFFFF;
          border-color: #E2E8F0;
        }

        .kpi-num {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 900;
          color: var(--color-dark);
          line-height: 1.1;
        }

        .kpi-name {
          font-size: 10.5px;
          color: var(--color-text-muted);
          font-weight: 600;
          margin-top: 4px;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .cases-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}


