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
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80',
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
    <section className="section deliverables-section-compact" id="dau-ra">
      <div className="container">
        {/* Compact Section Header */}
        <div className="section-header reveal-up deliverables-header-compact">
          <div className="section-tag">
            <CheckCircle2 size={13} />
            <span>Cam Kết Bàn Giao</span>
          </div>
          <h2 className="section-title">Đầu Ra Cụ Thể Trong Từng Gói Bảo Trì</h2>
          <p className="section-desc">
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

          {/* Slider Horizontal Track */}
          <div className="deliverables-track" ref={scrollRef}>
            {outputs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="deliverable-slide-card">
                  {/* Photo Banner with Tag */}
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

                  {/* Body Content */}
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

        {/* Requirements Strip (What customer provides) */}
        <div className="client-inputs-box reveal-up delay-200">
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
          position: relative;
          background: transparent;
          overflow: hidden;
          padding: 40px 0 46px 0;
        }

        .deliverables-header-compact {
          margin-bottom: 18px;
        }

        /* Slider Wrapper */
        .deliverables-slider-wrapper {
          position: relative;
          margin-bottom: 18px;
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
          width: 32px;
          height: 32px;
          border-radius: 50%;
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

        .slider-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: var(--color-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.06);
        }

        .slider-arrow-btn:hover:not(.disabled) {
          background: #DC2626;
          border-color: #DC2626;
          color: #FFFFFF;
          transform: scale(1.06);
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
          padding: 4px 2px 10px 2px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .deliverables-track::-webkit-scrollbar {
          display: none;
        }

        /* Individual Card */
        .deliverable-slide-card {
          flex: 0 0 calc(33.333% - 10px);
          min-width: 310px;
          max-width: 360px;
          scroll-snap-align: start;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .deliverable-slide-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(220, 38, 38, 0.3);
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
