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
    <section className="section process-wave-section pcb-tech-section" id="quy-trinh">
      {/* High-Tech Circuit Board / Schematic Vector Background (Red Cyber Edition) */}
      <div className="pcb-bg-canvas" aria-hidden="true">
        <svg
          viewBox="0 0 1440 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="pcb-svg-root"
        >
          <defs>
            <linearGradient id="procTraceGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FCA5A5" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="procChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E080D" />
              <stop offset="100%" stopColor="#170306" />
            </linearGradient>

            <polygon id="procHexUnit" points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11" fill="none" stroke="#DC2626" strokeWidth="1.2" strokeOpacity="0.65" />
          </defs>

          {/* Hexagon Honeycomb Clusters */}
          <g opacity="0.65">
            <use href="#procHexUnit" x="160" y="70" />
            <use href="#procHexUnit" x="198" y="92" />
            <use href="#procHexUnit" x="198" y="136" />
            <use href="#procHexUnit" x="160" y="158" />
            <use href="#procHexUnit" x="122" y="92" />
            <use href="#procHexUnit" x="122" y="136" />
          </g>

          <g opacity="0.55">
            <use href="#procHexUnit" x="1260" y="440" />
            <use href="#procHexUnit" x="1298" y="462" />
            <use href="#procHexUnit" x="1336" y="440" />
            <use href="#procHexUnit" x="1298" y="418" />
          </g>

          {/* IC Chips */}
          <g transform="translate(680, 80)" opacity="0.95">
            {[-10, -3, 3, 10].map((offset, i) => (
              <React.Fragment key={`proc-chip-t-${i}`}>
                <line x1={offset} y1="-24" x2={offset} y2="-16" stroke="#7F1D1D" strokeWidth="1.5" />
                <line x1={offset} y1="16" x2={offset} y2="24" stroke="#7F1D1D" strokeWidth="1.5" />
                <line x1="-24" y1={offset} x2="-16" y2={offset} stroke="#7F1D1D" strokeWidth="1.5" />
                <line x1="16" y1={offset} x2="24" y2={offset} stroke="#7F1D1D" strokeWidth="1.5" />
              </React.Fragment>
            ))}
            <rect x="-16" y="-16" width="32" height="32" rx="3" fill="url(#procChipGrad)" stroke="#DC2626" strokeWidth="1.3" />
            <rect x="-8" y="-8" width="16" height="16" rx="1" fill="#170306" stroke="#EF4444" strokeWidth="1" opacity="0.9" />
            <circle cx="-10" cy="-10" r="1.5" fill="#EF4444" opacity="0.9" />
          </g>

          <g transform="translate(780, 480)" opacity="0.95">
            {[-10, -3, 3, 10].map((offset, i) => (
              <React.Fragment key={`proc-chip-b-${i}`}>
                <line x1={offset} y1="-24" x2={offset} y2="-16" stroke="#7F1D1D" strokeWidth="1.5" />
                <line x1={offset} y1="16" x2={offset} y2="24" stroke="#7F1D1D" strokeWidth="1.5" />
                <line x1="-24" y1={offset} x2="-16" y2={offset} stroke="#7F1D1D" strokeWidth="1.5" />
                <line x1="16" y1={offset} x2="24" y2={offset} stroke="#7F1D1D" strokeWidth="1.5" />
              </React.Fragment>
            ))}
            <rect x="-16" y="-16" width="32" height="32" rx="3" fill="url(#procChipGrad)" stroke="#DC2626" strokeWidth="1.3" />
            <rect x="-8" y="-8" width="16" height="16" rx="1" fill="#170306" stroke="#EF4444" strokeWidth="1" opacity="0.9" />
            <circle cx="-10" cy="-10" r="1.5" fill="#EF4444" opacity="0.9" />
          </g>

          {/* HUD Boxes */}
          <rect x="60" y="36" width="20" height="20" fill="none" stroke="#DC2626" strokeWidth="1.2" opacity="0.5" />
          <rect x="740" y="20" width="110" height="24" rx="2" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.45" />
          <rect x="1300" y="60" width="80" height="22" rx="2" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.45" />

          {/* Diagonal Slanted Stripes */}
          <g transform="translate(1140, 160)" opacity="0.6">
            {[...Array(16)].map((_, i) => (
              <line key={`proc-hash-tr-${i}`} x1={i * 6} y1="0" x2={i * 6 + 10} y2="-14" stroke="#991B1B" strokeWidth="1.8" strokeLinecap="round" />
            ))}
          </g>

          <g transform="translate(100, 360)" opacity="0.6">
            {[...Array(24)].map((_, i) => (
              <line key={`proc-hash-bl-${i}`} x1={i * 6} y1="0" x2={i * 6 + 10} y2="-14" stroke="#991B1B" strokeWidth="1.8" strokeLinecap="round" />
            ))}
          </g>

          <g transform="translate(420, 480)" opacity="0.65">
            {[...Array(8)].map((_, i) => (
              <line key={`proc-slash-bc-${i}`} x1={i * 8} y1="0" x2={i * 8 + 14} y2="-18" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" />
            ))}
          </g>

          {/* Circuit Traces */}
          <path d="M 20 80 L 100 80 L 130 110 L 200 110" stroke="#7F1D1D" strokeWidth="1.5" fill="none" opacity="0.8" />
          <circle cx="200" cy="110" r="3" fill="#EF4444" opacity="0.9" />

          <path d="M 20 160 L 260 160 L 320 100 L 560 100 L 630 170 L 650 170" stroke="url(#procTraceGrad1)" strokeWidth="2" fill="none" />
          <circle cx="650" cy="170" r="4" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1.5" />

          <path d="M 750 160 L 980 160 L 1040 110 L 1380 110" stroke="#7F1D1D" strokeWidth="1.7" fill="none" opacity="0.8" />
          <circle cx="750" cy="160" r="3.5" fill="#EF4444" />
          <circle cx="1380" cy="110" r="3.5" fill="#FCA5A5" opacity="0.9" />

          <path d="M 20 220 L 240 220 L 280 260 L 460 260 L 510 310 L 780 310" stroke="#7F1D1D" strokeWidth="1.6" fill="none" opacity="0.8" />
          <circle cx="780" cy="310" r="3.5" fill="#EF4444" />

          <path d="M 40 400 L 580 400" stroke="#EF4444" strokeWidth="1.8" fill="none" opacity="0.75" strokeDasharray="8 6" />
          <circle cx="580" cy="400" r="4" fill="#EF4444" stroke="#160306" strokeWidth="1.5" />

          <path d="M 140 500 L 220 420 L 410 420 L 480 490 L 680 490 L 730 440 L 980 440 L 1030 490 L 1420 490" stroke="#7F1D1D" strokeWidth="1.8" fill="none" opacity="0.8" />
          <circle cx="140" cy="500" r="3.5" fill="#EF4444" />
          <circle cx="1420" cy="490" r="3.5" fill="#EF4444" opacity="0.9" />

          <path d="M 850 530 L 1400 530" stroke="#7F1D1D" strokeWidth="1.5" fill="none" opacity="0.75" />
          <circle cx="850" cy="530" r="3" fill="#EF4444" />
        </svg>
      </div>

      <div className="container pcb-tech-content">
        {/* Section Header */}
        <div className="section-header reveal-up process-header-compact">
          <div className="section-tag process-tech-tag">
            <GitPullRequest size={14} />
            <span>Quy Trình Chuẩn Hóa</span>
          </div>
          <h2 className="section-title process-tech-title">Quy Trình Xử Lý Sự Cố &amp; Tiếp Quản</h2>
          <p className="section-desc process-tech-desc">
            Vận hành tinh gọn 6 bước với thời gian minh bạch theo cam kết SLA.
          </p>
        </div>

        {/* Circular Stepper Flowchart Container */}
        <div className="wave-flowchart-wrapper reveal-up delay-100">
          {/* Straight Connecting Laser Line (Desktop) */}
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
                      <Icon size={32} strokeWidth={1.8} className="node-icon-red" />
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
        .pcb-tech-section {
          position: relative !important;
          background-color: #88131A !important;
          background: radial-gradient(ellipse at 50% 10%, #DC2626 0%, #A81822 45%, #6B0E14 100%) !important;
          overflow: hidden !important;
          padding: 48px 0 54px 0 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .pcb-bg-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
          opacity: 0.9;
        }
        .pcb-svg-root {
          width: 100%;
          height: 100%;
          display: block;
        }
        .pcb-tech-content {
          position: relative;
          z-index: 2;
        }
        .process-wave-section {
          position: relative;
          overflow: hidden;
        }

        .process-header-compact {
          margin-bottom: 18px;
        }

        .process-tech-tag {
          background: rgba(220, 38, 38, 0.28) !important;
          color: #FECACA !important;
          border: 1px solid rgba(239, 68, 68, 0.5) !important;
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.35) !important;
        }

        .process-tech-title {
          color: #FFFFFF !important;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.7);
        }

        .process-tech-desc {
          color: #FECACA !important;
          opacity: 0.9;
        }

        .wave-flowchart-wrapper {
          position: relative;
          max-width: 1140px;
          margin: 16px auto 0 auto;
          padding: 6px 0;
        }

        /* Straight Connecting Laser Line (Desktop) */
        .flow-straight-line {
          position: absolute;
          top: 66px;
          left: calc(100% / 12);
          right: calc(100% / 12);
          height: 3px;
          background: linear-gradient(90deg, #DC2626 0%, #F87171 50%, #DC2626 100%);
          box-shadow: 0 0 14px rgba(239, 68, 68, 0.85);
          border-radius: 9999px;
          pointer-events: none;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .wave-flowchart-wrapper:hover .flow-straight-line {
          background: linear-gradient(90deg, #EF4444 0%, #FFFFFF 50%, #EF4444 100%);
          box-shadow: 0 0 20px rgba(239, 68, 68, 1);
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

        /* Step Number Tag - High Prominence */
        .node-step-tag {
          font-size: 11.5px;
          font-weight: 800;
          font-family: var(--font-heading);
          letter-spacing: 0.5px;
          color: #FFFFFF;
          background: #DC2626;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          padding: 2px 10px;
          border-radius: 9999px;
          margin-bottom: 9px;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.65);
          transition: all 0.3s ease;
        }

        .wave-node-col:hover .node-step-tag {
          background: #EF4444;
          color: #FFFFFF;
          border-color: #FFFFFF;
          box-shadow: 0 0 16px rgba(239, 68, 68, 0.9);
          transform: scale(1.08);
        }

        /* Circle Node Element: Luminous Bright White / Light Frost Glass */
        .wave-circle-node {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35), 0 0 16px rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .circle-inner-glow {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FEE2E2 0%, #FFF1F2 100%);
          border: 1.5px solid #FECDD3;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .node-icon-red {
          color: #DC2626;
          filter: drop-shadow(0 2px 4px rgba(220, 38, 38, 0.25));
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* HOVER STATE: Glowing Crimson Tech Accent */
        .wave-node-col:hover .wave-circle-node {
          background: #FFFFFF;
          border-color: #DC2626;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45), 0 0 24px rgba(220, 38, 38, 0.6);
          transform: scale(1.1);
        }

        .wave-node-col:hover .circle-inner-glow {
          background: #FEE2E2;
          border-color: #F87171;
        }

        .wave-node-col:hover .node-icon-red {
          color: #B91C1C;
          transform: scale(1.1);
          filter: drop-shadow(0 2px 8px rgba(220, 38, 38, 0.4));
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
          font-size: 15px;
          font-weight: 800;
          color: #FFFFFF !important;
          margin-bottom: 4px;
          line-height: 1.3;
          white-space: normal;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
          transition: color 0.3s ease;
        }

        .wave-node-col:hover .node-title {
          color: #F87171 !important;
        }

        .node-desc {
          font-size: 12px;
          color: #94A3B8 !important;
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
          color: #CBD5E1 !important;
        }

        /* Responsive Layout */
        @media (max-width: 1024px) {
          .flow-straight-line {
            display: none;
          }
          .wave-nodes-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 28px 16px;
          }
          .wave-circle-node {
            width: 76px;
            height: 76px;
          }
          .circle-inner-glow {
            width: 58px;
            height: 58px;
          }
        }

        @media (max-width: 640px) {
          .wave-nodes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 12px;
          }
          .wave-circle-node {
            width: 70px;
            height: 70px;
          }
          .circle-inner-glow {
            width: 54px;
            height: 54px;
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
