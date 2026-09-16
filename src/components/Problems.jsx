import React, { useRef, useEffect, useState } from 'react'
import { AlertTriangle, AlertOctagon, Bug, ShieldAlert, UserX, DollarSign } from 'lucide-react'

export default function Problems() {
  const problems = [
    {
      id: 1,
      icon: Bug,
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80',
      category: 'Xung Đột Hệ Thống',
      title: 'Lỗi phát sinh sau khi nâng cấp hệ điều hành',
      short: 'Xung đột thư viện, văng ứng dụng, lỗi quyền vị trí & camera trên iOS / Android mới.',
      desc: 'iOS / Android cập nhật phiên bản mới dễ gây xung đột thư viện cũ, làm văng app hoặc đơ màn hình.'
    },
    {
      id: 2,
      icon: ShieldAlert,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      category: 'Rủi Ro Store',
      title: 'Cảnh báo gỡ bỏ ứng dụng từ Apple & Google Store',
      short: 'Nguy cơ bị gỡ khỏi Store do không đáp ứng kịp Target SDK & chính sách bảo mật.',
      desc: 'Kho ứng dụng liên tục nâng chuẩn Target SDK và yêu cầu bảo mật. Không xử lý kịp sẽ bị gỡ bỏ.'
    },
    {
      id: 3,
      icon: UserX,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
      category: 'Nhân Sự Vận Hành',
      title: 'Phụ thuộc hoặc mất liên lạc với nhân sự lập trình cũ',
      short: 'Mã nguồn bàn giao thiếu tài liệu, không ai chịu trách nhiệm sửa lỗi hay phát hành bản mới.',
      desc: 'Thiếu tài liệu bàn giao khiến doanh nghiệp lúng túng khi cần sửa lỗi gấp hoặc phát hành bản mới.'
    },
    {
      id: 4,
      icon: AlertOctagon,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      category: 'Giám Sát & Log',
      title: 'Không có hệ thống giám sát crash & ghi log tự động',
      short: 'Khách hàng phàn nàn lỗi nhưng không biết xảy ra ở dòng code hay thiết bị nào để sửa.',
      desc: 'Không ghi nhận được log sự cố và dòng thiết bị lỗi khiến việc tái hiện và sửa bug mất nhiều thời gian.'
    },
    {
      id: 5,
      icon: DollarSign,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
      category: 'Chi Phí Doanh Nghiệp',
      title: 'Chi phí thuê dev full-time quá tốn kém',
      short: 'Tốn 15 - 25 triệu/tháng duy trì dev trong khi nhu cầu thực tế chỉ cần vài giờ bảo trì định kỳ.',
      desc: 'Thuê dev full-time tốn 15 - 25tr/tháng dù nhu cầu thực tế chỉ cần vài giờ kỹ thuật xử lý định kỳ.'
    },
    {
      id: 6,
      icon: AlertTriangle,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
      category: 'Uy Tín Thương Hiệu',
      title: 'Rủi ro rớt hạng và mất đánh giá sao trên Store',
      short: 'Nhận bão đánh giá 1 sao do lỗi vặt kéo dài, sụt giảm uy tín và lượt tải tự nhiên.',
      desc: 'Lỗi vặt kéo dài làm giảm điểm đánh giá trên Store, sụt giảm uy tín và lượt tải tự nhiên của ứng dụng.'
    }
  ]

  // Duplicate for smooth seamless loop
  const marqueeItems = [...problems, ...problems, ...problems, ...problems]

  const containerRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)
  const [isInteracting, setIsInteracting] = useState(false)
  const animFrameId = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scrollLoop = () => {
      if (!isDragging.current && !isInteracting) {
        el.scrollLeft += 1.2
        const halfWidth = el.scrollWidth / 2
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth
        }
      }
      animFrameId.current = requestAnimationFrame(scrollLoop)
    }

    animFrameId.current = requestAnimationFrame(scrollLoop)
    return () => cancelAnimationFrame(animFrameId.current)
  }, [isInteracting])

  // Mouse Drag Events
  const onMouseDown = (e) => {
    isDragging.current = true
    setIsInteracting(true)
    startX.current = e.pageX - containerRef.current.offsetLeft
    scrollLeftStart.current = containerRef.current.scrollLeft
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX.current) * 2.2 // Speed multiplier on drag
    containerRef.current.scrollLeft = scrollLeftStart.current - walk
  }

  const onMouseUpOrLeave = () => {
    if (isDragging.current) {
      isDragging.current = false
      setTimeout(() => setIsInteracting(false), 500)
    }
  }

  // Touch Events for Mobile / Tablet
  const onTouchStart = (e) => {
    isDragging.current = true
    setIsInteracting(true)
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft
    scrollLeftStart.current = containerRef.current.scrollLeft
  }

  const onTouchMove = (e) => {
    if (!isDragging.current) return
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX.current) * 2.2
    containerRef.current.scrollLeft = scrollLeftStart.current - walk
  }

  const onTouchEnd = () => {
    isDragging.current = false
    setTimeout(() => setIsInteracting(false), 500)
  }

  return (
    <section className="section bg-tech-white problems-section" id="thuc-trang">
      <div className="container">
        <div className="section-header reveal-up">
          <div className="section-tag" style={{ background: '#FEF3C7', color: '#B45309' }}>
            <AlertTriangle size={14} />
            <span>Thực Trạng Vận Hành</span>
          </div>
          <h2 className="section-title">Những Rủi Ro Doanh Nghiệp Thường Gặp Phải</h2>
          <p className="section-desc">
            Ứng dụng cần được chăm sóc định kỳ để duy trì tính tương thích với OS và chính sách Store.
          </p>
        </div>
      </div>

      {/* Interactive Drag & Fast Scroll Carousel Track */}
      <div 
        className="interactive-scroll-container"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="scroll-track-inner">
          {marqueeItems.map((prob, idx) => {
            const Icon = prob.icon
            return (
              <div key={idx} className="problem-card-slide">
                <div className="card-inner-box">
                  {/* Category Pill Floating at Top Center of Card */}
                  <div className="prob-category-pill">
                    <div className="prob-icon-mini">
                      <Icon size={13} />
                    </div>
                    <span className="prob-cat-name">{prob.category}</span>
                  </div>

                  {/* Image Banner Covering the entire top half of card */}
                  <div className="card-img-wrap">
                    <img 
                      src={prob.image} 
                      alt={prob.title} 
                      className="card-thumb-img" 
                      loading="lazy"
                      draggable="false"
                    />
                  </div>

                  {/* Card Body Content with padding */}
                  <div className="card-body-content">
                    <h3 className="prob-title">{prob.title}</h3>

                    {/* Short Teaser shown by default */}
                    <p className="prob-teaser">{prob.short}</p>

                    {/* Detailed Description that smoothly expands on Hover */}
                    <div className="prob-detail-expanded">
                      <p className="prob-detail-text">{prob.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .problems-section {
          padding: 38px 0 42px 0;
          overflow: hidden;
        }

        /* Interactive Drag & Fast-Scroll Track Layout */
        .interactive-scroll-container {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 16px 0 28px 0;
          position: relative;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          scrollbar-width: none; /* Hide scrollbar for clean look */
          -ms-overflow-style: none;
          mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
        }

        .interactive-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .interactive-scroll-container:active {
          cursor: grabbing;
        }

        .scroll-track-inner {
          display: flex;
          gap: 24px;
          width: max-content;
          align-items: flex-start;
        }

        /* Problem Card Slide */
        .problem-card-slide {
          width: 350px;
          flex-shrink: 0;
          cursor: pointer;
          padding-top: 14px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-inner-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          height: auto;
          position: relative;
        }

        .problem-card-slide:hover .card-inner-box {
          border-color: rgba(220, 38, 38, 0.45);
          box-shadow: 0 18px 40px -8px rgba(220, 38, 38, 0.2), 0 0 0 1px rgba(220, 38, 38, 0.25);
          transform: translateY(-8px);
          background: #FFFFFF;
        }

        /* Top Category Pill Floating at Top of Card */
        .prob-category-pill {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #DC2626;
          color: #FFFFFF;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          border: 2px solid #FFFFFF;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4);
          z-index: 10;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .problem-card-slide:hover .prob-category-pill {
          transform: translateX(-50%) scale(1.05);
          box-shadow: 0 6px 18px rgba(220, 38, 38, 0.55);
        }

        .prob-icon-mini {
          color: #FFFFFF;
          display: flex;
          align-items: center;
        }

        .prob-cat-name {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #FFFFFF;
        }

        /* Image Banner Covering Upper Half of Card */
        .card-img-wrap {
          width: 100%;
          height: 160px;
          border-radius: 19px 19px 0 0;
          overflow: hidden;
          position: relative;
          background: #F1F5F9;
        }

        .card-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .problem-card-slide:hover .card-thumb-img {
          transform: scale(1.08);
        }

        /* Card Body Content Area */
        .card-body-content {
          padding: 16px 18px 18px 18px;
          display: flex;
          flex-direction: column;
        }

        .prob-title {
          font-size: 15.5px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.35;
          margin-bottom: 8px;
          min-height: 42px;
          transition: color 0.2s ease;
        }

        .problem-card-slide:hover .prob-title {
          color: #DC2626;
        }

        .prob-teaser {
          font-size: 12.5px;
          color: #64748B;
          line-height: 1.45;
          margin-bottom: 0;
        }

        /* Detail expanded on hover */
        .prob-detail-expanded {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, margin-top 0.35s ease;
        }

        .problem-card-slide:hover .prob-detail-expanded {
          max-height: 180px;
          opacity: 1;
          margin-top: 10px;
        }

        .prob-detail-text {
          font-size: 12px;
          color: #334155;
          line-height: 1.5;
          background: #F8FAFC;
          padding: 10px 12px;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .problem-card-slide {
            width: 290px;
          }
        }
      `}</style>
    </section>
  )
}
