import React, { useRef, useState, useEffect } from 'react'
import { 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  UploadCloud, 
  RefreshCw, 
  Smartphone, 
  Key, 
  Database,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Deliverables() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  // 6 Real Web Photography Images (Non-AI, Authentic tech & mobile dev photos from Unsplash)
  const outputs = [
    {
      icon: RefreshCw,
      tag: 'Kiểm tra định kỳ',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      title: 'Kiểm tra sức khỏe định kỳ',
      desc: 'Rà soát tính ổn định và độ tương thích với hệ điều hành iOS / Android mới.'
    },
    {
      icon: Smartphone,
      tag: 'Giám sát 24/7',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      title: 'Theo dõi & Báo cáo Crash',
      desc: 'Giám sát tỷ lệ crash qua Crashlytics, phát hiện sớm nguyên nhân gây lỗi.'
    },
    {
      icon: Database,
      tag: 'Linh hoạt',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      title: 'Cập nhật dữ liệu theo yêu cầu',
      desc: 'Thay đổi nội dung, banner, bảng giá theo yêu cầu từ khách hàng.'
    },
    {
      icon: UploadCloud,
      tag: 'Store Readiness',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      title: 'Hỗ trợ phát hành lên Store',
      desc: 'Build bản phát hành (AAB / IPA), ký chứng chỉ và gửi duyệt Store.'
    },
    {
      icon: ShieldCheck,
      tag: 'SLA Cam kết',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      title: 'Xử lý lỗi trong hạn mức giờ',
      desc: 'Khắc phục sự cố kỹ thuật, xung đột thư viện theo định mức giờ minh bạch.'
    },
    {
      icon: FileText,
      tag: 'Minh bạch 100%',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      title: 'Báo cáo vận hành minh bạch',
      desc: 'Báo cáo số giờ kỹ thuật đã dùng, nhật ký lỗi đã sửa và đề xuất tối ưu.'
    }
  ]

  const requiredInputs = [
    { title: 'Mã nguồn ứng dụng' },
    { title: 'Tài khoản Store' },
    { title: 'Server & API (nếu có)' }
  ]

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      
      const itemWidth = scrollRef.current.querySelector('.deliverable-slide-card')?.clientWidth || 340
      const index = Math.round(scrollLeft / (itemWidth + 14))
      setActiveIndex(Math.min(Math.max(0, index), outputs.length - 1))
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true })
      checkScroll()
      return () => el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const slide = (direction) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.querySelector('.deliverable-slide-card')?.clientWidth || 340
      const scrollAmount = (itemWidth + 14) * (direction === 'left' ? -1 : 1)
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollToIndex = (idx) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.querySelector('.deliverable-slide-card')?.clientWidth || 340
      scrollRef.current.scrollTo({
        left: (itemWidth + 14) * idx,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="section deliverables-section-compact pcb-tech-section" id="dau-ra">
      {/* High-Tech Circuit Board / Schematic Vector Background (Red Neon Cyber Edition) */}
      <div className="pcb-bg-canvas" aria-hidden="true">
        <svg
          viewBox="0 0 1440 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="pcb-svg-root"
        >
          <defs>
            <linearGradient id="traceGradRedPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#F87171" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.5" />
            </linearGradient>
            
            <linearGradient id="traceGradRedGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FECACA" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="chipBodyGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E080D" />
              <stop offset="100%" stopColor="#170306" />
            </linearGradient>

            <polygon id="hexUnitRed" points="0,-24 20.78,-12 20.78,12 0,24 -20.78,12 -20.78,-12" fill="none" stroke="#DC2626" strokeWidth="1.2" strokeOpacity="0.45" />
          </defs>

          {/* Hexagon Clusters */}
          <g className="hex-group" opacity="0.6">
            <use href="#hexUnitRed" x="220" y="70" />
            <use href="#hexUnitRed" x="262" y="94" />
            <use href="#hexUnitRed" x="262" y="142" />
            <use href="#hexUnitRed" x="220" y="166" />
          </g>

          <g className="hex-group" opacity="0.5">
            <use href="#hexUnitRed" x="1240" y="480" />
            <use href="#hexUnitRed" x="1282" y="504" />
            <use href="#hexUnitRed" x="1324" y="480" />
          </g>

          {/* Red Glowing Traces */}
          <path d="M 20 80 L 140 80 L 180 120 L 260 120" stroke="#7F1D1D" strokeWidth="1.5" fill="none" opacity="0.8" />
          <circle cx="260" cy="120" r="3" fill="#EF4444" opacity="0.9" />
          
          <path d="M 20 160 L 280 160 L 340 100 L 600 100 L 660 160 L 700 160" stroke="url(#traceGradRedPrimary)" strokeWidth="2" fill="none" />
          <circle cx="700" cy="160" r="4" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1.5" />
          
          <path d="M 40 380 L 520 380" stroke="url(#traceGradRedGlow)" strokeWidth="2" fill="none" opacity="0.85" />
          <circle cx="520" cy="380" r="4" fill="#EF4444" stroke="#160306" strokeWidth="1.5" />

          <path d="M 780 180 L 980 180 L 1040 120 L 1380 120" stroke="#7F1D1D" strokeWidth="1.6" fill="none" opacity="0.75" />
          <circle cx="1380" cy="120" r="3.5" fill="#EF4444" opacity="0.9" />
        </svg>
      </div>

      <div className="container pcb-tech-content">
        {/* Compact Section Header */}
        <div className="section-header reveal-up deliverables-header-compact">
          <div className="section-tag deliverables-tech-tag">
            <CheckCircle2 size={13} />
            <span>Cam Kết Bàn Giao</span>
          </div>
          <h2 className="section-title deliverables-tech-title">Đầu Ra Cụ Thể Trong Từng Gói Bảo Trì</h2>
          <p className="section-desc deliverables-tech-desc">
            Cam kết các hạng mục đầu ra minh bạch cùng hình ảnh thực tế bàn giao cho ứng dụng.
          </p>
        </div>

        {/* Carousel / Slider Container */}
        <div className="deliverables-slider-wrapper reveal-up delay-100">
          {/* Controls Bar */}
          <div className="slider-controls-bar">
            <div className="slider-arrows">
              <button 
                type="button" 
                className={`slider-arrow-btn ${!canScrollLeft ? 'disabled' : ''}`}
                onClick={() => slide('left')}
                aria-label="Xem thẻ trước"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                type="button" 
                className={`slider-arrow-btn ${!canScrollRight ? 'disabled' : ''}`}
                onClick={() => slide('right')}
                aria-label="Xem thẻ tiếp theo"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Scrollable Multi-Card Track */}
          <div className="deliverables-track" ref={scrollRef}>
            {outputs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="deliverable-slide-card">
                  {/* Embedded Visual Image */}
                  <div className="slide-card-img-wrap">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="slide-card-img" 
                      loading="lazy" 
                    />
                    <div className="slide-card-img-overlay" />
                    <span className="slide-card-tag">{item.tag}</span>
                  </div>

                  {/* Card Info */}
                  <div className="slide-card-body">
                    <div className="slide-card-header">
                      <div className="slide-icon-box">
                        <Icon size={16} />
                      </div>
                      <h3 className="slide-card-title">{item.title}</h3>
                    </div>
                    <p className="slide-card-desc">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Compact Requirements from client box */}
        <div className="client-inputs-box reveal-scale delay-200">
          <div className="inputs-box-header">
            <div className="inputs-header-left">
              <Key size={15} className="inputs-icon" />
              <h4 className="inputs-title">Thông Tin Cần Thiết Để Tiếp Quản (Tối giản)</h4>
            </div>
            <div className="inputs-security-badge">
              <ShieldCheck size={13} className="text-success" />
              <span>Cam kết bảo mật theo NDA &amp; không lưu mật khẩu riêng tư</span>
            </div>
          </div>

          <div className="inputs-cards-grid">
            {requiredInputs.map((input, idx) => (
              <div key={idx} className="input-card">
                <span className="input-card-number">0{idx + 1}</span>
                <span className="input-card-title">{input.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .deliverables-section-compact {
          position: relative !important;
          background-color: #88131A !important;
          background: radial-gradient(ellipse at 50% 10%, #DC2626 0%, #A81822 45%, #6B0E14 100%) !important;
          overflow: hidden !important;
          padding: 34px 0 38px 0 !important;
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
          opacity: 0.85;
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
        .deliverables-header-compact {
          margin-bottom: 14px;
        }
        
        .deliverables-tech-tag {
          background: rgba(220, 38, 38, 0.28) !important;
          color: #FECACA !important;
          border: 1px solid rgba(239, 68, 68, 0.5) !important;
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.35) !important;
          padding: 4px 12px !important;
          font-size: 11.5px !important;
          margin-bottom: 8px !important;
        }

        .deliverables-tech-title {
          color: #FFFFFF !important;
          font-size: 26px !important;
          font-weight: 800 !important;
          letter-spacing: -0.4px;
          margin-bottom: 6px !important;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
        }

        .deliverables-tech-desc {
          color: #FECACA !important;
          font-size: 13px !important;
          margin-bottom: 0 !important;
          opacity: 0.9;
        }

        /* Slider Wrapper */
        .deliverables-slider-wrapper {
          position: relative;
          margin-bottom: 16px;
        }

        .slider-controls-bar {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 10px;
          padding: 0 2px;
        }

        .slider-arrows {
          display: flex;
          gap: 8px;
        }

        .slider-arrow-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(45, 8, 14, 0.9);
          border: 1px solid rgba(220, 38, 38, 0.4);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .slider-arrow-btn:hover:not(.disabled) {
          background: #DC2626;
          border-color: #EF4444;
          color: #FFFFFF;
          transform: scale(1.06);
          box-shadow: 0 0 12px rgba(220, 38, 38, 0.6);
        }

        .slider-arrow-btn.disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        /* Multi-card Track: Shows 3-4 cards horizontally */
        .deliverables-track {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 4px 2px 8px 2px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .deliverables-track::-webkit-scrollbar {
          display: none;
        }

        /* Individual Compact Card with High-Contrast Pure White Glass */
        .deliverable-slide-card {
          flex: 0 0 calc(33.333% - 10px);
          min-width: 310px;
          max-width: 360px;
          scroll-snap-align: start;
          background: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.38);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .deliverable-slide-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.45), 0 0 0 2px #DC2626;
        }

        .slide-card-img-wrap {
          width: 100%;
          height: 130px;
          position: relative;
          overflow: hidden;
          background: #F1F5F9;
        }

        .slide-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s ease;
        }

        .deliverable-slide-card:hover .slide-card-img {
          transform: scale(1.06);
        }

        .slide-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.4) 100%);
        }

        .slide-card-tag {
          position: absolute;
          top: 8px;
          right: 8px;
          font-size: 10.5px;
          font-weight: 700;
          color: #FFFFFF;
          background: #DC2626;
          padding: 2px 9px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .slide-card-body {
          padding: 14px 16px 16px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #FFFFFF;
        }

        .slide-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .slide-icon-box {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #FEE2E2;
          color: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid #FECDD3;
        }

        .slide-card-title {
          font-size: 14.5px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.3;
          margin: 0;
        }

        .slide-card-desc {
          font-size: 12px;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        /* Compact Requirements box */
        .client-inputs-box {
          background: #FFFFFF;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          padding: 12px 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        .inputs-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 4px;
        }
        .inputs-header-left {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .inputs-icon {
          color: #DC2626;
          flex-shrink: 0;
        }
        .inputs-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
        }
        .inputs-security-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11.5px;
          color: #059669;
          font-weight: 600;
        }
        .inputs-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .input-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
        }
        .input-card-number {
          font-size: 11px;
          font-weight: 800;
          color: #FFFFFF;
          font-family: monospace;
          background: #DC2626;
          padding: 2px 6px;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .input-card-title {
          font-weight: 700;
          color: #0F172A;
          font-size: 12.5px;
        }

        @media (max-width: 1024px) {
          .deliverable-slide-card {
            flex: 0 0 calc(50% - 8px);
            min-width: 280px;
          }
        }

        @media (max-width: 768px) {
          .deliverables-section-compact {
            padding: 28px 0 32px 0 !important;
          }
          .deliverable-slide-card {
            flex: 0 0 85%;
            min-width: 250px;
          }
          .inputs-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
