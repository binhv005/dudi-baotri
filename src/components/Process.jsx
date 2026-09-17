import React from 'react'
import { 
  Lightbulb, 
  Monitor, 
  Search, 
  Coins, 
  UserCheck, 
  Settings, 
  GitPullRequest 
} from 'lucide-react'

export default function Process() {
  const steps = [
    {
      step: '01',
      icon: Lightbulb,
      title: 'Tiếp nhận',
      desc: 'Ghi nhận sự cố & ticket tức thì qua Hotline/Zalo.'
    },
    {
      step: '02',
      icon: Monitor,
      title: 'Phân loại SLA',
      desc: 'Đánh giá mức độ ưu tiên và kích hoạt cam kết SLA.'
    },
    {
      step: '03',
      icon: Search,
      title: 'Khảo sát',
      desc: 'Tái hiện lỗi trên mã nguồn & thiết bị thực tế.'
    },
    {
      step: '04',
      icon: Coins,
      title: 'Vá lỗi & Sửa code',
      desc: 'Tiến hành sửa mã nguồn, tối ưu trong hạn mức giờ.'
    },
    {
      step: '05',
      icon: UserCheck,
      title: 'Kiểm thử & Store',
      desc: 'Test đa thiết bị & hỗ trợ xét duyệt lên Store.'
    },
    {
      step: '06',
      icon: Settings,
      title: 'Bàn giao & Báo cáo',
      desc: 'Báo cáo kỹ thuật chi tiết & tổng kết số giờ tháng.'
    }
  ]

  return (
    <section className="section process-wave-section" id="quy-trinh">
      {/* Pastel Organic Abstract Art Background (Matching Sample) */}
      <div className="process-abstract-bg" aria-hidden="true">
        <svg
          viewBox="0 0 1440 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="abstract-svg-canvas"
        >
          {/* Base Warm Pastel Background */}
          <rect width="100%" height="100%" fill="#FAF6E8" />

          {/* Large Soft Center Warm Glow Blob */}
          <path
            d="M 460 70 C 780 10, 1080 100, 1030 360 C 980 500, 630 540, 460 460 C 300 380, 280 170, 460 70 Z"
            fill="#F6E7B6"
            opacity="0.55"
          />

          {/* Top-Left Soft Pink Circular Blob */}
          <circle cx="110" cy="100" r="135" fill="#F8B4C4" />
          
          {/* Top-Left Crisp White Angle Accent Lines */}
          <line x1="200" y1="110" x2="250" y2="170" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          <line x1="150" y1="180" x2="220" y2="230" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

          {/* Top-Right White Circle Outline Ring */}
          <circle cx="1330" cy="95" r="90" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.9" />

          {/* Middle-Right Organic Peach / Orange Blob */}
          <path
            d="M 1440 260 C 1310 240, 1240 310, 1260 400 C 1280 480, 1360 510, 1440 540 Z"
            fill="#F7B286"
          />

          {/* Bottom-Left Pastel Lavender-Blue Wave */}
          <path
            d="M 0 430 C 70 420, 110 470, 95 530 C 85 565, 120 600, 190 600 L 0 600 Z"
            fill="#B1BCF6"
          />
          {/* Bottom-Left White Contour Line */}
          <path
            d="M 0 395 C 90 385, 140 455, 120 535 C 105 575, 145 600, 230 600"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>

      <div className="container process-content-wrap">
        {/* Section Header */}
        <div className="section-header reveal-up process-header-compact">
          <div className="section-tag">
            <GitPullRequest size={14} />
            <span>Quy Trình Chuẩn Hóa</span>
          </div>
          <h2 className="section-title">Quy Trình Xử Lý Sự Cố &amp; Tiếp Quản</h2>
          <p className="section-desc">
            Vận hành tinh gọn 6 bước với thời gian minh bạch theo cam kết SLA.
          </p>
        </div>

        {/* Circular Stepper Flowchart Container */}
        <div className="wave-flowchart-wrapper reveal-up delay-100">
          {/* Straight Connecting Line (Desktop) */}
          <div className="flow-straight-line" aria-hidden="true" />

          {/* 6 Circular Nodes */}
          <div className="wave-nodes-grid">
            {steps.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="wave-node-col">
                  {/* Step Number Badge */}
                  <span className="node-step-tag">
                    {item.step}
                  </span>

                  {/* Circular Node with Icon */}
                  <div className="wave-circle-node">
                    <div className="circle-inner-glow">
                      <Icon size={30} strokeWidth={1.8} className="node-icon-red" />
                    </div>
                  </div>

                  {/* Short Minimalist Text */}
                  <div className="node-text-wrap">
                    <h3 className="node-title">{item.title}</h3>
                    <p className="node-desc">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .process-wave-section {
          position: relative;
          background: #FAF6E8;
          overflow: hidden;
          padding: 54px 0 60px 0;
        }

        .process-abstract-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .abstract-svg-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        .process-content-wrap {
          position: relative;
          z-index: 2;
        }

        .process-header-compact {
          margin-bottom: 24px;
        }

        .wave-flowchart-wrapper {
          position: relative;
          max-width: 1140px;
          margin: 16px auto 0 auto;
          padding: 6px 0;
        }

        /* Straight Connecting Line (Desktop) */
        .flow-straight-line {
          position: absolute;
          top: 66px;
          left: calc(100% / 12);
          right: calc(100% / 12);
          height: 3px;
          background: linear-gradient(90deg, #E2E8F0 0%, #DC2626 50%, #E2E8F0 100%);
          border-radius: 9999px;
          pointer-events: none;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .wave-flowchart-wrapper:hover .flow-straight-line {
          background: linear-gradient(90deg, #DC2626 0%, #EF4444 50%, #DC2626 100%);
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.4);
        }

        /* Grid of 6 Nodes */
        .wave-nodes-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          position: relative;
          z-index: 2;
        }

        .wave-node-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .wave-node-col:hover {
          transform: translateY(-6px);
        }

        /* Step Number Tag */
        .node-step-tag {
          font-size: 11px;
          font-weight: 800;
          font-family: var(--font-heading);
          letter-spacing: 0.5px;
          color: #FFFFFF;
          background: #DC2626;
          padding: 2px 9px;
          border-radius: 9999px;
          margin-bottom: 9px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.35);
          transition: all 0.3s ease;
        }

        .wave-node-col:hover .node-step-tag {
          background: #B91C1C;
          transform: scale(1.08);
        }

        /* Circle Node Element */
        .wave-circle-node {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid #E2E8F0;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .circle-inner-glow {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #FFF5F5;
          border: 1px solid #FEE2E2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .node-icon-red {
          color: #DC2626;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* HOVER STATE */
        .wave-node-col:hover .wave-circle-node {
          border-color: #DC2626;
          box-shadow: 0 8px 24px rgba(220, 38, 38, 0.2);
          transform: scale(1.08);
        }

        .wave-node-col:hover .circle-inner-glow {
          background: #FEE2E2;
          border-color: #FCA5A5;
        }

        .wave-node-col:hover .node-icon-red {
          color: #B91C1C;
          transform: scale(1.08);
        }

        /* Minimal Text */
        .node-text-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 160px;
          padding: 0 4px;
        }

        .node-title {
          font-size: 14.5px;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 4px;
          line-height: 1.3;
          white-space: normal;
          transition: color 0.3s ease;
        }

        .wave-node-col:hover .node-title {
          color: #DC2626;
        }

        .node-desc {
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin: 0;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(6px);
          transition: opacity 0.3s ease, max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease, margin-top 0.3s ease;
        }

        .wave-node-col:hover .node-desc {
          opacity: 1;
          max-height: 80px;
          transform: translateY(0);
          margin-top: 4px;
        }

        /* Responsive Layout */
        @media (max-width: 1024px) {
          .flow-straight-line {
            display: none;
          }
          .wave-nodes-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px 14px;
          }
          .node-desc {
            opacity: 1;
            max-height: none;
            transform: none;
            margin-top: 4px;
          }
        }

        @media (max-width: 640px) {
          .wave-nodes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px 10px;
          }
          .wave-circle-node {
            width: 68px;
            height: 68px;
          }
          .circle-inner-glow {
            width: 50px;
            height: 50px;
          }
          .node-title {
            font-size: 13.5px;
          }
          .node-desc {
            font-size: 11.5px;
          }
        }
      `}</style>
    </section>
  )
}
