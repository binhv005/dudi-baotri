import React from 'react'
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Zap } from 'lucide-react'

export default function FinalCTA({ onPhoneClick }) {
  const scrollToForm = () => {
    const el = document.getElementById('form-dang-ky')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const openZalo = () => {
    window.open('https://zalo.me/0909163821', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section final-cta-section" id="lien-he">
      <div className="container final-cta-container">
        <div className="cta-box-tech reveal-scale">
          {/* City Sunset Background Image */}
          <div className="final-cta-bg" aria-hidden="true" />

          {/* Balanced Tint Overlay */}
          <div className="final-cta-overlay" aria-hidden="true" />

          <div className="cta-content-inner">
            {/* Centered Tag & Title */}
            <div className="cta-header-center reveal-up delay-100">
              <div className="cta-tag">
                <Zap size={14} />
                <span>Khởi Động Bảo Trì Ngay Hôm Nay</span>
              </div>
              <h2 className="cta-heading">
                Bảo Vệ Ứng Dụng Của Bạn Khỏi Rủi Ro Gián Đoạn &amp; Bị Gỡ Khỏi Store
              </h2>
            </div>

            {/* Centered CTA Buttons Area */}
            <div className="cta-center-actions reveal-up delay-200">
              <button className="btn-primary cta-action-btn" onClick={scrollToForm}>
                <span>Gửi ứng dụng để DUDI kiểm tra</span>
                <ArrowRight size={18} />
              </button>

              <div className="cta-direct-channels">
                <span className="channels-label">Hoặc liên hệ kỹ thuật trực tiếp:</span>
                <div className="channels-row">
                  <button className="channel-pill phone" onClick={onPhoneClick}>
                    <Phone size={14} />
                    <span>0909 163 821</span>
                  </button>
                  <button className="channel-pill zalo" onClick={openZalo}>
                    <MessageCircle size={14} />
                    <span>Chat Zalo</span>
                  </button>
                </div>
              </div>

              {/* 2 Perks displayed on the exact same line */}
              <div className="cta-perks-center">
                <div className="perk-item">
                  <ShieldCheck size={16} className="text-success" />
                  <span>Không phát sinh chi phí ẩn</span>
                </div>
                <span className="perk-divider" aria-hidden="true">•</span>
                <div className="perk-item">
                  <ShieldCheck size={16} className="text-success" />
                  <span>Khảo sát mã nguồn trước khi ký hợp đồng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          padding: 60px 24px 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
          background: transparent;
        }

        .final-cta-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .cta-box-tech {
          position: relative;
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          padding: 70px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        /* Sunset City Background Image */
        .final-cta-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/c9cf009b350522e080e5f1725cf18df6.jpg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          z-index: 1;
        }

        /* Overlay */
        .final-cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(10, 15, 28, 0.86) 100%);
          z-index: 2;
        }

        .cta-content-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-header-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 28px;
          width: 100%;
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 18px;
          background: rgba(220, 38, 38, 0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #FECACA;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          border: 1px solid rgba(220, 38, 38, 0.6);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .cta-heading {
          font-size: 34px;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.35;
          max-width: 860px;
          margin: 0 auto;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 6px rgba(0, 0, 0, 0.85);
        }

        .cta-center-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 620px;
          gap: 18px;
        }

        .cta-action-btn {
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 800;
          width: 100%;
          max-width: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 8px 30px rgba(220, 38, 38, 0.65);
        }

        .cta-direct-channels {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 100%;
          max-width: 440px;
        }

        .channels-label {
          font-size: 13.5px;
          color: #F1F5F9;
          font-weight: 600;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95);
        }

        .channels-row {
          display: flex;
          gap: 12px;
          width: 100%;
        }

        .channel-pill {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .channel-pill.phone {
          background: rgba(255, 255, 255, 0.22);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .channel-pill.phone:hover {
          background: rgba(255, 255, 255, 0.35);
          border-color: #FFFFFF;
        }

        .channel-pill.zalo {
          background: #0068FF;
          color: #FFFFFF;
          border: 1px solid #388BFD;
          box-shadow: 0 4px 15px rgba(0, 104, 255, 0.4);
        }

        .channel-pill.zalo:hover {
          background: #0056D2;
        }

        /* 2 Perks in 1 Single Line */
        .cta-perks-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-direction: row;
          flex-wrap: nowrap;
          white-space: nowrap;
          margin-top: 6px;
        }

        .perk-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          color: #FFFFFF;
          font-weight: 600;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95);
          white-space: nowrap;
        }

        .perk-divider {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .final-cta-section {
            padding: 40px 16px 60px;
          }
          .cta-box-tech {
            padding: 40px 20px;
            border-radius: 18px;
          }
          .cta-heading {
            font-size: 22px;
          }
          .channels-row {
            flex-direction: column;
          }
          .cta-perks-center {
            flex-direction: column;
            gap: 8px;
            white-space: normal;
          }
          .perk-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
