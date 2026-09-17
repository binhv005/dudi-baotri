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
      {/* Subtle Background Glow */}
      <div className="dark-bg-ambient-glow" aria-hidden="true" />

      <div className="container pcb-tech-content">
        <div className="section-header reveal-up scope-header-compact">
          <div className="section-tag scope-tag-dark">
            <Scale size={13} />
            <span>Phạm Vi &amp; Định Nghĩa</span>
          </div>
          <h2 className="section-title scope-title-white">Minh Bạch Giới Hạn &amp; Thuật Ngữ</h2>
          <p className="section-desc scope-desc-light">
            Công khai rõ ràng các hạng mục ngoài gói cố định và định nghĩa nghiệm thu kỹ thuật.
          </p>
        </div>

        {/* 2 Column Layout: Out of Scope & Terms */}
        <div className="boundaries-grid">
          {/* Out of Scope Box (Dark Wine / Deep Crimson Card) */}
          <div className="boundary-card out-of-scope-red-card reveal-left delay-100">
            <div className="red-card-content">
              <div className="card-header-badge-white">
                <div className="header-icon-badge-white">
                  <ShieldX size={14} strokeWidth={2.5} className="header-icon-red" />
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
                      <AlertOctagon size={11} strokeWidth={2.5} className="out-icon-red" />
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

          {/* Definitions & Terms Timeline Box */}
          <div className="boundary-card terms-card reveal-right delay-200">
            <div className="card-header-badge dark">
              <FileCode2 size={16} />
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
                                <Icon size={14} className="badge-item-icon" />
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
          background: linear-gradient(160deg, #111726 0%, #20111A 35%, #2A131F 65%, #121724 100%);
          overflow: hidden;
          padding: 26px 0 30px 0;
        }

        .dark-bg-ambient-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 350px;
          background: radial-gradient(ellipse at center, rgba(220, 38, 38, 0.2) 0%, rgba(185, 28, 28, 0.08) 50%, transparent 75%);
          pointer-events: none;
          z-index: 1;
        }

        .pcb-tech-content {
          position: relative;
          z-index: 2;
          max-width: 1140px;
        }

        .scope-header-compact {
          margin-bottom: 14px;
          text-align: center;
        }

        .scope-tag-dark {
          background: rgba(220, 38, 38, 0.25);
          color: #FCA5A5;
          border: 1px solid rgba(220, 38, 38, 0.45);
          padding: 3px 12px;
          font-size: 11px;
          margin-bottom: 6px;
        }

        .scope-title-white {
          color: #FFFFFF !important;
          font-size: clamp(1.25rem, 2.3vw, 1.65rem);
          margin-bottom: 4px;
          font-weight: 800;
        }

        .scope-desc-light {
          color: #94A3B8 !important;
          font-size: 12.5px;
          margin-bottom: 0;
        }

        .boundaries-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: stretch;
        }

        .boundary-card {
          border-radius: 16px;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
        }

        /* Left Card - Refined Wine / Deep Burgundy (Sáng & hài hòa hơn) */
        .out-of-scope-red-card {
          position: relative;
          background: linear-gradient(145deg, #5C121D 0%, #440D15 50%, #2B070E 100%);
          color: #FFFFFF;
          border: 1px solid rgba(239, 68, 68, 0.45);
          box-shadow: 0 12px 30px -6px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.15);
          overflow: hidden;
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
          gap: 7px;
          font-size: 12.5px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 4px;
        }

        .header-icon-badge-white {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4);
          flex-shrink: 0;
        }

        .header-icon-red {
          color: #FFFFFF;
        }

        .boundary-intro-white {
          font-size: 11px;
          color: #FDA4AF;
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .out-scope-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 10px;
          flex-grow: 1;
        }

        .out-scope-item-white {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: #F1F5F9;
          line-height: 1.3;
        }

        .out-icon-badge {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(220, 38, 38, 0.3);
          border: 1px solid rgba(220, 38, 38, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .out-scope-item-white:hover .out-icon-badge {
          transform: scale(1.15);
          background: #DC2626;
        }

        .out-icon-red {
          color: #FCA5A5;
        }

        .out-scope-item-white:hover .out-icon-red {
          color: #FFFFFF;
        }

        .third-party-note-white {
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 6px 10px;
          font-size: 10.5px;
          color: #CBD5E1;
          line-height: 1.35;
        }

        .third-party-note-white strong {
          color: #FDA4AF;
        }

        /* Right Card - Crisp White */
        .terms-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 10px 28px -6px rgba(0, 0, 0, 0.35);
        }

        .card-header-badge.dark {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 4px;
        }

        .boundary-intro {
          font-size: 11px;
          color: var(--color-text-muted);
          line-height: 1.35;
          margin-bottom: 10px;
        }

        /* Sample Timeline Styles */
        .sample-timeline-wrapper {
          position: relative;
          padding-left: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .timeline-spine-line {
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 5px;
          width: 3px;
          background: linear-gradient(180deg, #0284C7 0%, #EA580C 25%, #E11D48 50%, #0D9488 75%, #DC2626 100%);
          border-radius: 3px;
        }

        .timeline-items-flow {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .sample-timeline-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          padding: 3px 6px 3px 8px;
          border-radius: 8px;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .sample-timeline-row:hover {
          background: #F8FAFC;
          transform: translateX(3px);
        }

        /* Node on Spine */
        .timeline-spine-node {
          position: absolute;
          left: -20px;
          top: 6px;
          display: flex;
          align-items: center;
        }

        .node-ring-circle {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid var(--item-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 2px #FFFFFF;
          transition: transform 0.25s ease;
        }

        .sample-timeline-row:hover .node-ring-circle {
          transform: scale(1.2);
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
          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;
          border-left: 4px solid var(--item-accent);
          margin-left: 2px;
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
          gap: 8px;
          width: 100%;
        }

        .timeline-meta-wrap {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          gap: 6px;
          flex-shrink: 0;
        }

        .timeline-big-num {
          font-family: var(--font-heading);
          font-size: 13.5px;
          font-weight: 900;
          color: var(--item-accent);
          line-height: 1;
        }

        .timeline-term-name {
          font-size: 11px;
          font-weight: 800;
          color: var(--color-dark);
          text-transform: uppercase;
          letter-spacing: 0.2px;
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
          margin: 0 4px;
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
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid var(--item-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.25s ease;
        }

        .sample-timeline-row:hover .badge-outer-ring {
          background: var(--item-accent);
          transform: scale(1.08);
        }

        .badge-inner-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .badge-item-icon {
          color: var(--item-accent);
          transition: all 0.25s ease;
        }

        .sample-timeline-row:hover .badge-inner-circle {
          background: #FFFFFF;
        }

        /* Hover Expansion for Definition */
        .timeline-def-collapse {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.25s ease, margin-top 0.25s ease;
        }

        .sample-timeline-row:hover .timeline-def-collapse {
          max-height: 80px;
          opacity: 1;
          margin-top: 4px;
        }

        .timeline-def-text {
          font-size: 11px;
          color: #475569;
          line-height: 1.4;
          background: #F8FAFC;
          padding: 5px 8px;
          border-radius: 5px;
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
