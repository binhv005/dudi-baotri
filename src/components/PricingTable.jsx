import React, { useEffect, useRef } from 'react'
import { Check, Flame, Sprout, Star, Rocket, ArrowRight } from 'lucide-react'

// Animated Soft Red Rounded Square Floating Canvas Background
function DynamicPixelBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = 0
    let height = 0
    let mouse = { x: -1000, y: -1000, radius: 140 }

    const updateDimensions = () => {
      if (!canvas || !canvas.parentElement) return
      const rect = canvas.parentElement.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      initPixels()
    }

    // Soft, elegant brand red & rose palette
    const palette = [
      '#EF4444', // Red 500
      '#F87171', // Red 400
      '#FCA5A5', // Red 300
      '#FECACA', // Red 200
      '#DC2626', // Brand Red 600
      '#E11D48', // Rose 600
      '#FB7185', // Rose 400
      '#FDA4AF', // Rose 300
      '#FFE4E6'  // Rose 100
    ]

    let pixels = []
    const cellSize = 32 // Larger spacing for airy, non-crowded look
    const gap = 16

    function initPixels() {
      pixels = []
      const cols = Math.ceil(width / (cellSize + gap)) + 2
      const rows = Math.ceil(height / (cellSize + gap)) + 2

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          // Low, airy density (~18% - 28%) so it never feels thick or distracting
          const density = 0.22

          if (Math.random() < density) {
            const rand = Math.random()
            let size = 16
            if (rand < 0.3) size = 8
            else if (rand < 0.6) size = 14
            else if (rand < 0.85) size = 22
            else if (rand < 0.95) size = 30
            else size = 38

            const color = palette[Math.floor(Math.random() * palette.length)]
            // Subtle, light base opacity
            const baseAlpha = 0.08 + Math.random() * 0.22
            const pulseSpeed = 0.008 + Math.random() * 0.018
            const phase = Math.random() * Math.PI * 2
            const floatSpeed = 0.15 + Math.random() * 0.3
            const baseX = c * (cellSize + gap) + (Math.random() * 18 - 9)
            const baseY = r * (cellSize + gap) + (Math.random() * 18 - 9)

            // Smooth rounded corners proportional to size
            const radius = size > 26 ? 7 : size > 16 ? 5 : size > 10 ? 3.5 : 2

            pixels.push({
              x: baseX,
              y: baseY,
              baseX,
              baseY,
              size,
              color,
              baseAlpha,
              pulseSpeed,
              phase,
              floatSpeed,
              radius
            })
          }
        }
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', updateDimensions)
    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }

    updateDimensions()

    let time = 0

    function drawRoundedRect(x, y, w, h, r) {
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.lineTo(x + w - r, y)
      ctx.arcTo(x + w, y, x + w, y + r, r)
      ctx.lineTo(x + w, y + h - r)
      ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
      ctx.lineTo(x + r, y + h)
      ctx.arcTo(x, y + h, x, y + h - r, r)
      ctx.lineTo(x, y + r)
      ctx.arcTo(x, y, x + r, y, r)
      ctx.closePath()
    }

    const render = () => {
      time += 1
      ctx.clearRect(0, 0, width, height)

      // Soft light warm backdrop gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height)
      bgGrad.addColorStop(0, '#FFF7F7')
      bgGrad.addColorStop(0.5, '#FFFFFF')
      bgGrad.addColorStop(1, '#FFF5F5')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // Draw red rounded square matrix
      for (let i = 0; i < pixels.length; i++) {
        const p = pixels[i]

        // Vertical continuous floating drift
        const animatedY = (p.baseY - (time * p.floatSpeed * 0.4) % height + height) % height

        // Interactive mouse hover reaction
        const dx = mouse.x - p.x
        const dy = mouse.y - animatedY
        const dist = Math.sqrt(dx * dx + dy * dy)
        let extraAlpha = 0
        let drawX = p.x
        let drawY = animatedY

        if (dist < mouse.radius) {
          const factor = 1 - dist / mouse.radius
          extraAlpha = factor * 0.18
          drawX += (dx / dist) * -5 * factor
          drawY += (dy / dist) * -5 * factor
        }

        // Shimmering alpha pulse
        const pulse = Math.sin(time * p.pulseSpeed + p.phase) * 0.08
        const finalAlpha = Math.max(0.04, Math.min(0.42, p.baseAlpha + pulse + extraAlpha))

        ctx.save()
        ctx.globalAlpha = finalAlpha
        ctx.fillStyle = p.color
        drawRoundedRect(drawX, drawY, p.size, p.size, p.radius)
        ctx.fill()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', updateDimensions)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pricing-dynamic-canvas"
      aria-hidden="true"
    />
  )
}

export default function PricingTable({ onSelectPlan }) {
  const plans = [
    {
      id: 'co-ban',
      name: 'Cơ bản',
      price: '800.000',
      period: '/ tháng',
      badge: 'Tiết kiệm',
      icon: Sprout,
      isFeatured: false,
      desc: 'Ứng dụng ít thay đổi, cần duy trì ổn định & phòng ngừa lỗi.',
      features: [
        'Kiểm tra định kỳ 1 lần / tháng',
        'Phản hồi trong 24h làm việc',
        'Tối đa 1 giờ kỹ thuật / tháng',
        '2 yêu cầu cập nhật dữ liệu',
        'Nhắc hạn tài khoản Store',
        'Báo cáo tóm tắt công việc'
      ]
    },
    {
      id: 'tieu-chuan',
      name: 'Tiêu chuẩn',
      price: '2.000.000',
      period: '/ tháng',
      badge: 'Được chọn nhiều nhất',
      icon: Star,
      isFeatured: true,
      desc: 'Ứng dụng chạy thường xuyên, cần theo dõi crash & cập nhật.',
      features: [
        'Kiểm tra 2 lần / tháng + Crashlytics',
        'Phản hồi trong 12h làm việc',
        'Tối đa 4 giờ kỹ thuật / tháng',
        '6 yêu cầu cập nhật dữ liệu',
        'Tối đa 1 bản phát hành Store',
        'Báo cáo kỹ thuật hàng tháng'
      ]
    },
    {
      id: 'cao-cap',
      name: 'Cao cấp',
      price: '4.000.000',
      period: '/ tháng',
      badge: 'Doanh nghiệp & SLA Cao',
      icon: Rocket,
      isFeatured: false,
      desc: 'Ứng dụng kinh doanh chính, cần SLA phản hồi 2-4h & theo dõi API.',
      features: [
        'Kiểm tra hàng tuần + Cảnh báo tự động',
        'Phản hồi nhanh trong 2h - 4h',
        'Tối đa 8 giờ kỹ thuật / tháng',
        '12 yêu cầu cập nhật dữ liệu',
        'Tối đa 2 bản phát hành Store',
        'Theo dõi API, Server & ASO Store'
      ]
    }
  ]

  return (
    <section className="section pricing-sample-section" id="bang-gia">
      {/* Dynamic Animated Pixel Mosaic Background */}
      <DynamicPixelBackground />

      <div className="container pricing-main-container">
        {/* Section Header */}
        <div className="pricing-sample-header reveal-up">
          <div className="top-recommend-pill">
            <Flame size={14} className="flame-icon" />
            <span>Lựa Chọn Khuyên Dùng</span>
          </div>

          <h2 className="pricing-main-title">
            Các Gói Dịch Vụ <span className="title-red-highlight">Bảo Trì Ứng Dụng</span>
          </h2>
          <p className="pricing-main-subtitle">
            Linh hoạt theo quy mô, tối ưu chi phí, duy trì ứng dụng vận hành liên tục.
          </p>
          <div className="header-red-dash"></div>
        </div>

        {/* Pricing Cards Grid Wrapper */}
        <div className="pricing-cards-wrapper reveal-up delay-100">
          {/* Decorative Mascot Image on top-right */}
          <div className="mascot-badge-wrap">
            <img 
              src="/mascot-faq.webp" 
              alt="DUDI AI Robot Mascot" 
              className="mascot-faq-img" 
            />
          </div>

          {/* 3 Pricing Cards */}
          <div className="pricing-sample-grid">
            {plans.map((p) => {
              const Icon = p.icon
              return (
                <div 
                  key={p.id} 
                  className={`pricing-sample-card ${p.isFeatured ? 'card-featured-red' : ''}`}
                >
                  {/* Top Header Portion of Card */}
                  <div className="card-top-section">
                    <div className="card-top-header-row">
                      <div className="card-icon-square">
                        <Icon size={20} />
                      </div>
                      <div className="card-title-badge-wrap">
                        <h3 className="card-plan-title">{p.name}</h3>
                        <span className="card-pill-tag">{p.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="card-middle-divider"></div>

                  {/* Price & Features */}
                  <div className="card-bottom-section">
                    <div className="card-price-row">
                      <span className="currency-red">₫</span>
                      <span className="price-big-num">{p.price}</span>
                      <span className="period-unit">{p.period}</span>
                    </div>

                    <div className="features-scope-title">PHẠM VI HẠN MỨC TRONG GÓI:</div>

                    <ul className="features-check-list">
                      {p.features.map((feat, idx) => (
                        <li key={idx} className="feat-check-item">
                          <div className="red-check-circle">
                            <Check size={11} strokeWidth={3} />
                          </div>
                          <span className="feat-label-text">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <button 
                      className={`plan-select-btn ${p.isFeatured ? 'btn-red-action' : 'btn-white-action'}`}
                      onClick={() => onSelectPlan(p.name)}
                    >
                      <span>Chọn gói {p.name}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .pricing-sample-section {
          padding: 38px 0 44px 0;
          background: #F8FAFC;
          position: relative;
          overflow: hidden;
        }
        .pricing-dynamic-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .pricing-main-container {
          position: relative;
          z-index: 2;
        }
        .pricing-sample-header {
          text-align: center;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .top-recommend-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
          color: #FFFFFF;
          padding: 3px 12px;
          border-radius: var(--radius-full);
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 8px;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
        }
        .flame-icon {
          color: #FEF08A;
        }
        .pricing-main-title {
          font-size: 28px;
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }
        .title-red-highlight {
          color: #DC2626;
        }
        .pricing-main-subtitle {
          font-size: 13.5px;
          color: #64748B;
          max-width: 650px;
          line-height: 1.45;
        }
        .header-red-dash {
          width: 40px;
          height: 3px;
          background: #DC2626;
          border-radius: 2px;
          margin-top: 6px;
        }

        /* Cards Wrapper & Mascot */
        .pricing-cards-wrapper {
          position: relative;
          max-width: 1120px;
          margin: 0 auto;
        }
        .mascot-badge-wrap {
          position: absolute;
          top: -85px;
          right: -36px;
          z-index: 10;
          pointer-events: none;
        }
        .mascot-faq-img {
          width: 145px;
          height: auto;
          filter: drop-shadow(0 12px 22px rgba(220, 38, 38, 0.22));
          animation: floatMascot 4s ease-in-out infinite alternate;
        }
        @keyframes floatMascot {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-6px) rotate(2deg); }
        }

        /* Grid of 3 Cards */
        .pricing-sample-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: stretch;
        }
        .pricing-sample-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pricing-sample-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px -5px rgba(220, 38, 38, 0.12);
        }

        /* Card 1 & 3 Normal Styles */
        .pricing-sample-card .card-top-section {
          padding: 16px 18px;
        }
        .card-top-header-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .card-icon-square {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: #FEF2F2;
          color: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .card-title-badge-wrap {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .card-plan-title {
          font-size: 18px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
        }
        .card-pill-tag {
          font-size: 10.5px;
          font-weight: 700;
          color: #DC2626;
          background: #FEE2E2;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .card-middle-divider {
          height: 1px;
          background: #F1F5F9;
          margin: 0 18px;
        }

        /* Featured Card 2 (Solid Red Header) */
        .card-featured-red {
          border: 2px solid #DC2626;
          box-shadow: 0 14px 35px -5px rgba(220, 38, 38, 0.2);
          transform: scale(1.02);
        }
        .card-featured-red:hover {
          transform: scale(1.02) translateY(-4px);
        }
        .card-featured-red .card-top-section {
          background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
          color: #FFFFFF;
          padding: 16px 18px;
        }
        .card-featured-red .card-icon-square {
          background: rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .card-featured-red .card-plan-title {
          color: #FFFFFF;
        }
        .card-featured-red .card-pill-tag {
          background: #FFFFFF;
          color: #DC2626;
        }
        .card-featured-red .card-middle-divider {
          display: none;
        }

        /* Bottom Section with Price & Features */
        .card-bottom-section {
          padding: 12px 18px 16px 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-price-row {
          display: flex;
          align-items: baseline;
          gap: 3px;
          margin-bottom: 10px;
        }
        .currency-red {
          font-size: 17px;
          font-weight: 800;
          color: #DC2626;
        }
        .price-big-num {
          font-size: 25px;
          font-weight: 900;
          color: #0F172A;
          line-height: 1;
        }
        .period-unit {
          font-size: 12px;
          color: #64748B;
          font-weight: 600;
        }
        .features-scope-title {
          font-size: 10.5px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .features-check-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 14px;
          flex-grow: 1;
        }
        .feat-check-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 11.5px;
          color: #334155;
          line-height: 1.3;
        }
        .red-check-circle {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #FEE2E2;
          color: #DC2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .feat-label-text {
          color: #1E293B;
          font-weight: 500;
        }

        /* Action Buttons */
        .plan-select-btn {
          width: 100%;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          transition: all 0.2s ease;
        }
        .btn-red-action {
          background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 10px rgba(220, 38, 38, 0.3);
        }
        .btn-red-action:hover {
          background: linear-gradient(135deg, #B91C1C 0%, #991B1B 100%);
          transform: translateY(-2px);
        }
        .btn-white-action {
          background: #FFFFFF;
          color: #0F172A;
          border: 1px solid #CBD5E1;
        }
        .btn-white-action:hover {
          background: #F8FAFC;
          border-color: #DC2626;
          color: #DC2626;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .pricing-sample-grid {
            grid-template-columns: 1fr;
            max-width: 460px;
            margin: 0 auto;
            gap: 24px;
          }
          .card-featured-red {
            transform: none;
          }
          .mascot-badge-wrap {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
