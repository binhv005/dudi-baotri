import React from 'react'
import { 
  ShieldX, 
  HelpCircle, 
  CheckCircle2, 
  AlertOctagon, 
  FileCode2, 
  Scale, 
  Clock, 
  Database, 
  Rocket, 
  Palette, 
  AlertTriangle,
  Flag
} from 'lucide-react'

export default function ScopeBoundaries() {
  const outOfScopeItems = [
    'Viết lại toàn bộ ứng dụng hoặc tái cấu trúc lớn',
    'Phát triển tính năng mới & nâng cấp Framework lớn',
    'Thiết kế lại toàn bộ giao diện (UX/UI Redesign)',
    'Xử lý lỗi tồn đọng & mã độc từ đơn vị cũ',
    'Trực kỹ thuật 24/7 ngoài giờ làm việc',
    'Phí bên thứ ba: Apple, Google, Server, SMS OTP'
  ]

  const terms = [
    {
      num: '01',
      term: 'Một Giờ Kỹ Thuật',
      color: '#0284C7', // Cyan / Blue like sample
      icon: Clock,
      def: 'Thời gian phân tích lỗi, sửa mã nguồn, kiểm thử và đóng gói. DUDI luôn báo trước nếu phát sinh công việc vượt hạn mức tháng.'
    },
    {
      num: '02',
      term: 'Một Yêu Cầu Dữ Liệu',
      color: '#EA580C', // Orange like sample
      icon: Database,
      def: 'Một lần cập nhật nội dung văn bản, banner hoặc cấu hình dữ liệu trong khu vực màn hình có sẵn từ nguồn khách hàng cấp.'
    },
    {
      num: '03',
      term: 'Một Bản Phát Hành',
      color: '#E11D48', // Rose Red like sample
      icon: Rocket,
      def: 'Một bộ build (IPA / AAB) đóng gói cho đợt thay đổi mã nguồn đã được khách hàng nghiệm thu trước khi đưa lên Store.'
    },
    {
      num: '04',
      term: 'Chỉnh UI / UX Nhỏ',
      color: '#0D9488', // Teal like sample
      icon: Palette,
      def: 'Thay đổi văn bản, màu sắc, icon hoặc căn chỉnh lề (padding/margin) trên màn hình hiện có, không gồm thiết kế lại luồng mới.'
    },
    {
      num: '05',
      term: 'Sự Cố Nghiêm Trọng',
      color: '#DC2626', // Red
      icon: AlertTriangle,
      def: 'Ứng dụng văng khi mở (crash on launch) hoặc đứt gãy thanh toán. SLA phản hồi là mốc tiếp nhận và đưa phương án ban đầu.'
    }
  ]

  return (
    <section className="section scope-section-compact pcb-tech-section" id="gioi-han">
      {/* High-Tech Circuit Board / Schematic Vector Background */}
      <div className="pcb-bg-canvas" aria-hidden="true">
        <svg
          viewBox="0 0 1440 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="pcb-svg-root"
        >
          <defs>
            <linearGradient id="scopeTraceGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="scopeChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            <polygon id="scopeHexUnit" points="0,-24 20.78,-12 20.78,12 0,24 -20.78,12 -20.78,-12" fill="none" stroke="#CBD5E1" strokeWidth="1.2" strokeOpacity="0.65" />
          </defs>

          {/* Hexagon Honeycomb Clusters */}
          <g opacity="0.6">
            <use href="#scopeHexUnit" x="200" y="80" />
            <use href="#scopeHexUnit" x="242" y="104" />
            <use href="#scopeHexUnit" x="242" y="152" />
            <use href="#scopeHexUnit" x="200" y="176" />
            <use href="#scopeHexUnit" x="158" y="104" />
            <use href="#scopeHexUnit" x="158" y="152" />
            <use href="#scopeHexUnit" x="284" y="80" />
          </g>

          <g opacity="0.5">
            <use href="#scopeHexUnit" x="1240" y="560" />
            <use href="#scopeHexUnit" x="1282" y="584" />
            <use href="#scopeHexUnit" x="1324" y="560" />
            <use href="#scopeHexUnit" x="1282" y="536" />
          </g>

          {/* IC Chips */}
          <g transform="translate(740, 90)" opacity="0.85">
            {[-12, -4, 4, 12].map((offset, i) => (
              <React.Fragment key={`scope-chip-t-${i}`}>
                <line x1={offset} y1="-26" x2={offset} y2="-18" stroke="#94A3B8" strokeWidth="1.6" />
                <line x1={offset} y1="18" x2={offset} y2="26" stroke="#94A3B8" strokeWidth="1.6" />
                <line x1="-26" y1={offset} x2="-18" y2={offset} stroke="#94A3B8" strokeWidth="1.6" />
                <line x1="18" y1={offset} x2="26" y2={offset} stroke="#94A3B8" strokeWidth="1.6" />
              </React.Fragment>
            ))}
            <rect x="-18" y="-18" width="36" height="36" rx="3" fill="url(#scopeChipGrad)" stroke="#94A3B8" strokeWidth="1.4" />
            <rect x="-9" y="-9" width="18" height="18" rx="1.5" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" opacity="0.75" />
            <circle cx="-12" cy="-12" r="1.5" fill="#DC2626" opacity="0.8" />
          </g>

          <g transform="translate(680, 580)" opacity="0.85">
            {[-12, -4, 4, 12].map((offset, i) => (
              <React.Fragment key={`scope-chip-b-${i}`}>
                <line x1={offset} y1="-26" x2={offset} y2="-18" stroke="#94A3B8" strokeWidth="1.6" />
                <line x1={offset} y1="18" x2={offset} y2="26" stroke="#94A3B8" strokeWidth="1.6" />
                <line x1="-26" y1={offset} x2="-18" y2={offset} stroke="#94A3B8" strokeWidth="1.6" />
                <line x1="18" y1={offset} x2="26" y2={offset} stroke="#94A3B8" strokeWidth="1.6" />
              </React.Fragment>
            ))}
            <rect x="-18" y="-18" width="36" height="36" rx="3" fill="url(#scopeChipGrad)" stroke="#94A3B8" strokeWidth="1.4" />
            <rect x="-9" y="-9" width="18" height="18" rx="1.5" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" opacity="0.75" />
            <circle cx="-12" cy="-12" r="1.5" fill="#94A3B8" opacity="0.8" />
          </g>

          {/* HUD Boxes */}
          <rect x="50" y="40" width="22" height="22" fill="none" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.5" />
          <rect x="800" y="24" width="120" height="26" rx="2" fill="none" stroke="#CBD5E1" strokeWidth="1" opacity="0.4" />
          <rect x="1200" y="70" width="90" height="24" rx="2" fill="none" stroke="#CBD5E1" strokeWidth="1" opacity="0.45" />

          {/* Diagonal Slanted Stripes */}
          <g transform="translate(1160, 180)" opacity="0.55">
            {[...Array(18)].map((_, i) => (
              <line key={`scope-hash-tr-${i}`} x1={i * 6} y1="0" x2={i * 6 + 10} y2="-14" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
            ))}
          </g>

          <g transform="translate(90, 480)" opacity="0.55">
            {[...Array(26)].map((_, i) => (
              <line key={`scope-hash-bl-${i}`} x1={i * 6} y1="0" x2={i * 6 + 10} y2="-14" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
            ))}
          </g>

          <g transform="translate(480, 580)" opacity="0.6">
            {[...Array(8)].map((_, i) => (
              <line key={`scope-slash-bc-${i}`} x1={i * 8} y1="0" x2={i * 8 + 14} y2="-18" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" />
            ))}
          </g>

          {/* Circuit Traces */}
          <path d="M 20 110 L 100 110 L 130 140 L 200 140" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.65" />
          <circle cx="200" cy="140" r="3" fill="#94A3B8" />

          <path d="M 20 180 L 260 180 L 330 120 L 610 120 L 690 190 L 710 190" stroke="url(#scopeTraceGrad1)" strokeWidth="2.2" fill="none" />
          <circle cx="710" cy="190" r="4.5" fill="#94A3B8" stroke="#FFFFFF" strokeWidth="1.5" />

          <path d="M 820 180 L 1000 180 L 1060 130 L 1400 130" stroke="#94A3B8" strokeWidth="1.8" fill="none" opacity="0.75" />
          <circle cx="820" cy="180" r="3.5" fill="#94A3B8" />
          <circle cx="1400" cy="130" r="3.5" fill="#94A3B8" />

          <path d="M 20 280 L 180 280 L 240 340 L 500 340 L 560 400 L 800 400 L 850 350 L 1380 350" stroke="#CBD5E1" strokeWidth="1.6" fill="none" opacity="0.75" />
          <circle cx="180" cy="280" r="3.5" fill="#CBD5E1" />
          <circle cx="1380" cy="350" r="3.5" fill="#CBD5E1" />

          <path d="M 40 460 L 560 460" stroke="#DC2626" strokeWidth="1.8" fill="none" opacity="0.55" strokeDasharray="8 6" />
          <circle cx="560" cy="460" r="4" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />

          <path d="M 120 600 L 200 520 L 400 520 L 470 590 L 700 590 L 750 540 L 960 540 L 1010 600 L 1420 600" stroke="#94A3B8" strokeWidth="1.8" fill="none" opacity="0.75" />
          <circle cx="120" cy="600" r="3.5" fill="#94A3B8" />
          <circle cx="1420" cy="600" r="3.5" fill="#94A3B8" />
        </svg>
      </div>

      <div className="container pcb-tech-content">
        <div className="section-header reveal-up scope-header-compact">
          <div className="section-tag">
            <Scale size={14} />
            <span>Phạm Vi &amp; Định Nghĩa</span>
          </div>
          <h2 className="section-title">Minh Bạch Giới Hạn &amp; Thuật Ngữ</h2>
          <p className="section-desc">
            Công khai rõ ràng các hạng mục ngoài gói cố định và định nghĩa nghiệm thu kỹ thuật.
          </p>
        </div>

        {/* 2 Column Layout: Out of Scope & Terms */}
        <div className="boundaries-grid">
          {/* Out of Scope Box (Brand Red Background with Tech Circuit PCB Overlay) */}
          <div className="boundary-card out-of-scope-red-card reveal-left delay-100">
            {/* Embedded Cyber Circuit Board Pattern Overlay */}
            <div className="red-card-pcb-canvas" aria-hidden="true">
              <svg 
                viewBox="0 0 540 440" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="red-card-svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="redTraceGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#FECACA" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F87171" stopOpacity="0.3" />
                  </linearGradient>
                  
                  <linearGradient id="cyanTraceGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
                    <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Micro Dot Matrix Grid */}
                <g opacity="0.18">
                  {[...Array(9)].map((_, r) =>
                    [...Array(11)].map((_, c) => (
                      <circle key={`dot-${r}-${c}`} cx={30 + c * 48} cy={30 + r * 46} r="1" fill="#FFFFFF" />
                    ))
                  )}
                </g>

                {/* Circuit Traces (Top-Right to Center) */}
                <path d="M 520 40 L 410 40 L 410 120 L 320 120 L 320 190 L 260 190" stroke="url(#redTraceGlow)" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
                <circle cx="260" cy="190" r="3" fill="#FFFFFF" opacity="0.9" />
                <circle cx="520" cy="40" r="2.5" fill="#FECACA" />

                {/* Circuit Traces (Top-Left to Mid-Left) */}
                <path d="M 40 20 L 40 80 L 110 80 L 110 160 L 60 210 L 60 310" stroke="url(#redTraceGlow)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <circle cx="60" cy="310" r="3" fill="#FFFFFF" opacity="0.8" />
                <circle cx="40" cy="20" r="2.5" fill="#FECACA" />

                {/* Cyan Glowing Cyber Pulse Line */}
                <path d="M 480 90 L 480 170 L 390 170 L 390 270 L 450 270 L 450 360 L 520 360" stroke="url(#cyanTraceGlow)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                <circle cx="520" cy="360" r="3.5" fill="#38BDF8" />
                <circle cx="480" cy="90" r="3" fill="#FFFFFF" />

                {/* Bottom Center Branching Bus */}
                <path d="M 120 380 L 220 380 L 270 330 L 360 330 L 360 410" stroke="url(#redTraceGlow)" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
                <circle cx="120" cy="380" r="3" fill="#FFFFFF" opacity="0.85" />
                <circle cx="360" cy="410" r="3" fill="#FFFFFF" opacity="0.85" />

                {/* Diagonal Slanted Laser Tracks */}
                <path d="M 180 230 L 240 230 L 280 270 L 340 270" stroke="url(#redTraceGlow)" strokeWidth="1.4" opacity="0.45" />
                <circle cx="340" cy="270" r="2.5" fill="#FECACA" />

                {/* Subtle IC Chip Body Silhouette in corner */}
                <g transform="translate(470, 230)" opacity="0.35">
                  <rect x="-14" y="-14" width="28" height="28" rx="2" fill="#7F1D1D" stroke="#FECACA" strokeWidth="1" />
                  <circle cx="-9" cy="-9" r="1.5" fill="#FFFFFF" />
                  {[-8, -2, 4].map((o, i) => (
                    <React.Fragment key={i}>
                      <line x1={o} y1="-20" x2={o} y2="-14" stroke="#FECACA" strokeWidth="1.2" />
                      <line x1={o} y1="14" x2={o} y2="20" stroke="#FECACA" strokeWidth="1.2" />
                    </React.Fragment>
                  ))}
                </g>
              </svg>
            </div>

            <div className="red-card-content">
              <div className="card-header-badge-white">
                <div className="header-icon-badge-white">
                  <ShieldX size={16} strokeWidth={2.5} className="header-icon-red" />
                </div>
                <span>Hạng Mục Ngoài Gói (Báo giá riêng)</span>
              </div>
              <p className="boundary-intro-white">
                Khảo sát &amp; báo giá riêng theo từng yêu cầu:
              </p>
              <ul className="out-scope-list">
                {outOfScopeItems.map((item, idx) => (
                  <li key={idx} className="out-scope-item-white">
                    <div className="out-icon-badge">
                      <AlertOctagon size={13} strokeWidth={2.5} className="out-icon-red" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="third-party-note-white">
                <strong>Lưu ý:</strong> Phí Store, Server, API do khách hàng thanh toán trực tiếp cho nhà cung cấp.
              </div>
            </div>
          </div>

          {/* Definitions & Terms Timeline Box (Sample Style) */}
          <div className="boundary-card terms-card reveal-right delay-200">
            <div className="card-header-badge dark">
              <FileCode2 size={18} />
              <span>Định Nghĩa Thuật Ngữ Nghiệm Thu</span>
            </div>
            <p className="boundary-intro">
              Rê chuột vào từng hạng mục để xem giải nghĩa chi tiết căn cứ nghiệm thu:
            </p>

            {/* Vertical Sample Timeline */}
            <div className="sample-timeline-wrapper">
              {/* Vertical Continuous Spine Bar */}
              <div className="timeline-spine-line" aria-hidden="true" />

              <div className="timeline-items-flow">
                {terms.map((t, idx) => {
                  const Icon = t.icon
                  return (
                    <div 
                      key={idx} 
                      className="sample-timeline-row"
                      style={{ '--item-accent': t.color }}
                    >
                      {/* Left Node on Spine */}
                      <div className="timeline-spine-node">
                        <div className="node-ring-circle">
                          <div className="node-ring-inner" />
                        </div>
                        <div className="node-pointer-arrow" />
                      </div>

                      {/* Text & Content Block */}
                      <div className="timeline-content-block">
                        <div className="timeline-header-row">
                          <div className="timeline-meta-wrap">
                            <span className="timeline-big-num">{t.num}</span>
                            <h4 className="timeline-term-name">{t.term}</h4>
                          </div>

                          {/* Horizontal Dotted Connector */}
                          <div className="timeline-dotted-line" />

                          {/* Double Ring Circular Icon Badge */}
                          <div className="timeline-circle-badge">
                            <div className="badge-outer-ring">
                              <div className="badge-inner-circle">
                                <Icon size={18} className="badge-item-icon" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Detailed Definition (Expands on Hover) */}
                        <div className="timeline-def-collapse">
                          <p className="timeline-def-text">{t.def}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pcb-tech-section {
          position: relative;
          background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F1F5F9 100%);
          overflow: hidden;
          padding: 42px 0 46px 0;
        }
        .pcb-bg-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .pcb-svg-root {
          width: 100%;
          height: 100%;
          display: block;
          opacity: 0.92;
        }
        .pcb-tech-content {
          position: relative;
          z-index: 2;
        }
        .scope-header-compact {
          margin-bottom: 18px;
        }

        .boundaries-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }

        .boundary-card {
          border-radius: var(--radius-xl);
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
        }

        /* Left Card - Brand Red with Glowing PCB Circuit Overlay */
        .out-of-scope-red-card {
          position: relative;
          background: linear-gradient(145deg, #DC2626 0%, #B91C1C 55%, #991B1B 100%);
          color: #FFFFFF;
          border: 1px solid rgba(220, 38, 38, 0.5);
          box-shadow: 0 16px 36px -8px rgba(220, 38, 38, 0.4);
          overflow: hidden;
        }

        .red-card-pcb-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .red-card-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .red-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-header-badge-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .header-icon-badge-white {
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }

        .header-icon-red {
          color: #DC2626;
        }

        .boundary-intro-white {
          font-size: 11.5px;
          color: #FEE2E2;
          line-height: 1.4;
          margin-bottom: 10px;
        }

        .out-scope-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .out-scope-item-white {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12.5px;
          color: #FFFFFF;
          line-height: 1.35;
        }

        .out-icon-badge {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .out-scope-item-white:hover .out-icon-badge {
          transform: scale(1.15);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.35), 0 0 0 3px rgba(255, 255, 255, 0.4);
        }

        .out-icon-red {
          color: #DC2626;
        }

        .third-party-note-white {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 11px;
          color: #FEE2E2;
          line-height: 1.4;
        }

        /* Right Card - White */
        .terms-card {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
        }

        .card-header-badge.dark {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14.5px;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 8px;
        }

        .boundary-intro {
          font-size: 12.5px;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin-bottom: 16px;
        }

        /* Sample Timeline Styles */
        .sample-timeline-wrapper {
          position: relative;
          padding-left: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .timeline-spine-line {
          position: absolute;
          top: 14px;
          bottom: 14px;
          left: 6px;
          width: 4px;
          background: linear-gradient(180deg, #0284C7 0%, #EA580C 25%, #E11D48 50%, #0D9488 75%, #DC2626 100%);
          border-radius: 4px;
        }

        .timeline-items-flow {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sample-timeline-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          padding: 4px 8px 4px 12px;
          border-radius: 10px;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .sample-timeline-row:hover {
          background: #F8FAFC;
          transform: translateX(4px);
        }

        /* Node on Spine */
        .timeline-spine-node {
          position: absolute;
          left: -24px;
          top: 8px;
          display: flex;
          align-items: center;
        }

        .node-ring-circle {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2.5px solid var(--item-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 2px #FFFFFF;
          transition: transform 0.25s ease;
        }

        .sample-timeline-row:hover .node-ring-circle {
          transform: scale(1.25);
          background: var(--item-accent);
        }

        .node-ring-inner {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--item-accent);
        }

        .sample-timeline-row:hover .node-ring-inner {
          background: #FFFFFF;
        }

        .node-pointer-arrow {
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-left: 5px solid var(--item-accent);
          margin-left: 3px;
        }

        /* Content block */
        .timeline-content-block {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .timeline-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
        }

        .timeline-meta-wrap {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          gap: 7px;
          flex-shrink: 0;
        }

        .timeline-big-num {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 900;
          color: var(--item-accent);
          line-height: 1;
          letter-spacing: 0.5px;
        }

        .timeline-term-name {
          font-size: 12px;
          font-weight: 800;
          color: var(--color-dark);
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin-top: 0;
          transition: color 0.2s ease;
        }

        .sample-timeline-row:hover .timeline-term-name {
          color: var(--item-accent);
        }

        /* Horizontal Dotted Connector */
        .timeline-dotted-line {
          flex-grow: 1;
          height: 0;
          border-bottom: 2px dotted #CBD5E1;
          margin: 0 6px;
          transition: border-color 0.25s ease;
        }

        .sample-timeline-row:hover .timeline-dotted-line {
          border-bottom-color: var(--item-accent);
        }

        /* Double Ring Circular Badge */
        .timeline-circle-badge {
          flex-shrink: 0;
        }

        .badge-outer-ring {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid var(--item-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sample-timeline-row:hover .badge-outer-ring {
          background: var(--item-accent);
          box-shadow: 0 6px 16px -2px rgba(0, 0, 0, 0.2);
          transform: scale(1.1);
        }

        .badge-inner-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .badge-item-icon {
          color: var(--item-accent);
          transition: all 0.3s ease;
        }

        .sample-timeline-row:hover .badge-inner-circle {
          background: #FFFFFF;
        }

        .sample-timeline-row:hover .badge-item-icon {
          transform: scale(1.15);
        }

        /* Hover Expansion for Definition */
        .timeline-def-collapse {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, margin-top 0.3s ease;
        }

        .sample-timeline-row:hover .timeline-def-collapse {
          max-height: 100px;
          opacity: 1;
          margin-top: 6px;
        }

        .timeline-def-text {
          font-size: 11.5px;
          color: #475569;
          line-height: 1.45;
          background: #F8FAFC;
          padding: 6px 10px;
          border: none;
          border-radius: 6px;
          box-shadow: none;
        }

        /* Bottom Finish Row */
        .timeline-finish-row {
          position: relative;
          display: flex;
          align-items: center;
          margin-top: 4px;
          padding-left: 12px;
        }

        .finish-spine-node {
          position: absolute;
          left: -22px;
          top: 50%;
          transform: translateY(-50%);
        }

        .finish-ring-circle {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 3px #FFFFFF;
        }

        .finish-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 6px;
          border: 1.5px solid #10B981;
          color: #059669;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          background: #ECFDF5;
        }

        .finish-flag-icon {
          color: #10B981;
        }

        @media (max-width: 1024px) {
          .boundaries-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
