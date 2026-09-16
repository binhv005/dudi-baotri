import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero({ onSelectPlan }) {
  const scrollToForm = () => {
    const el = document.getElementById('form-dang-ky')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPricing = () => {
    const el = document.getElementById('bang-gia')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section hero-section" id="hero">
      <div className="container hero-container">
        {/* Glass Content Card */}
        <div className="hero-text-card reveal-up is-revealed">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <Sparkles size={14} className="badge-icon" />
            <span>DỊCH VỤ BẢO TRÌ ỨNG DỤNG CHUYÊN NGHIỆP</span>
          </div>

          {/* Title with exact 2-line break ("ỨNG" on the second line) */}
          <h1 className="hero-title">
            <span className="title-line title-dark">DỊCH VỤ BẢO TRÌ &amp; VẬN HÀNH</span>
            <span className="title-line title-red">ỨNG DỤNG DI ĐỘNG</span>
          </h1>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button className="btn-primary hero-btn-main" onClick={scrollToForm}>
              <span>Gửi ứng dụng để DUDI kiểm tra</span>
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary hero-btn-sub" onClick={scrollToPricing}>
              <span>Xem chi tiết 3 gói</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 90px;
          padding-bottom: 40px;
          position: relative;
          background-image: url('/3e2fcfcb-4c94-4612-8d29-4d69881ea699.png');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          box-sizing: border-box;
        }
        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          max-width: var(--max-width);
        }
        .hero-text-card {
          max-width: 740px;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 38px 44px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 48px -10px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(220, 38, 38, 0.1);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #FFFFFF;
          border: 1px solid #FECDD3;
          color: var(--color-primary);
          border-radius: var(--radius-full);
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 18px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.12);
        }
        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-primary);
          box-shadow: 0 0 0 rgba(220, 38, 38, 0.4);
          animation: pulseGlow 2s infinite;
        }
        .badge-icon {
          color: var(--color-primary);
        }
        .hero-title {
          font-family: 'Orbitron', 'Michroma', 'Plus Jakarta Sans', sans-serif;
          font-size: 32px;
          font-weight: 900;
          line-height: 1.35;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .title-line {
          display: block;
        }
        .title-dark {
          color: #0B1120;
          margin-bottom: 4px;
        }
        .title-red {
          color: #DC2626;
          font-weight: 900;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-btn-main {
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.2px;
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
        }
        .hero-btn-sub {
          padding: 13px 24px;
          font-size: 14.5px;
          font-weight: 700;
          background: #FFFFFF;
          color: var(--color-dark);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }
        .hero-btn-sub:hover {
          background: #F8FAFC;
        }

        @media (max-width: 1024px) {
          .hero-text-card {
            padding: 32px 28px;
          }
          .hero-title {
            font-size: 26px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 60px;
            min-height: auto;
          }
          .hero-text-card {
            padding: 24px 18px;
          }
          .hero-title {
            font-size: 22px;
            line-height: 1.4;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-main, .hero-btn-sub {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
