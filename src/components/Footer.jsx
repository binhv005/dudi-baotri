import React from 'react'
import { MapPin, Phone, Mail, FileText, ShieldCheck, ArrowUp, MessageSquare } from 'lucide-react'

export default function Footer({ onPhoneClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openZalo = () => {
    window.open('https://zalo.me/0909163821', '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main 3-Column Footer Grid */}
        <div className="footer-grid-sample">
          {/* Column 1: Company Info */}
          <div className="footer-col-1">
            <div className="footer-brand-header">
              <img src="/logo.webp" alt="DUDI Software Logo" className="footer-logo-square" />
              <div className="footer-brand-title">
                <span>DUDI <span className="text-red">Software</span></span>
              </div>
            </div>

            <h3 className="company-legal-title">Công ty TNHH Giải Pháp Phần Mềm DUDI</h3>
            <p className="company-spec-desc">
              Đơn vị cung cấp giải pháp bảo trì ứng dụng chuyên nghiệp theo tháng, giúp doanh nghiệp duy trì tính ổn định và tuân thủ tiêu chuẩn Store.
            </p>

            <div className="company-meta-list">
              <div className="company-meta-item">
                <FileText size={16} className="meta-icon red" />
                <span className="meta-text">Mã số thuế: <strong>0319641544</strong></span>
              </div>
              <div className="company-meta-item">
                <MapPin size={16} className="meta-icon red" />
                <span className="meta-text">Địa chỉ: 49/2 Đường 14, Phường Thủ Đức, Thành phố Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Contact Cards */}
          <div className="footer-col-2">
            <h4 className="footer-header-title">LIÊN HỆ TRỰC TIẾP</h4>
            
            <div className="contact-cards-list">
              {/* Hotline Card */}
              <button 
                className="contact-card-item" 
                onClick={onPhoneClick}
                title="Nhấn để gọi hoặc sao chép Hotline"
              >
                <div className="card-icon-box">
                  <Phone size={18} />
                </div>
                <div className="card-info">
                  <span className="card-val">Hotline: 0909 163 821</span>
                </div>
              </button>

              {/* Email Card */}
              <a 
                href="mailto:contact@dudisoftware.com" 
                className="contact-card-item"
                title="Gửi email tới DUDI"
              >
                <div className="card-icon-box">
                  <Mail size={18} />
                </div>
                <div className="card-info">
                  <span className="card-val">contact@dudisoftware.com</span>
                </div>
              </a>

              {/* Zalo OA Card */}
              <button 
                className="contact-card-item" 
                onClick={openZalo}
                title="Mở Zalo chat"
              >
                <div className="card-icon-box">
                  <MessageSquare size={18} />
                </div>
                <div className="card-info">
                  <span className="card-val">Zalo OA: 0909 163 821</span>
                </div>
              </button>
            </div>
          </div>

          {/* Column 3: Terms & Transparency */}
          <div className="footer-col-3">
            <h4 className="footer-header-title">ĐIỀU KHOẢN &amp; MINH BẠCH</h4>
            
            <ul className="transparency-list">
              <li>
                <span className="bullet-dot">•</span>
                <span>Minh bạch phạm vi theo hợp đồng</span>
              </li>
              <li>
                <span className="bullet-dot">•</span>
                <span>Nghiệm thu theo từng mốc kỹ thuật</span>
              </li>
              <li>
                <span className="bullet-dot">•</span>
                <span>Hỗ trợ xử lý lỗi phát sinh sau bàn giao</span>
              </li>
              <li>
                <span className="bullet-dot">•</span>
                <span>Bảo mật thông tin khách hàng</span>
              </li>
            </ul>

            <button className="footer-back-to-top-btn" onClick={scrollToTop}>
              <ArrowUp size={16} />
              <span>Về đầu trang</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-info">
            Copyright &copy; 2026 <strong>DUDI Software</strong>. All rights reserved.
          </div>
          
          <div className="verified-legal-badge">
            <ShieldCheck size={16} className="text-emerald" />
            <span>Thông tin đăng ký kinh doanh chính thức</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: #0B0D13;
          background-image: none;
          color: #94A3B8;
          padding: 70px 0 28px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13.5px;
        }
        .footer-grid-sample {
          display: grid;
          grid-template-columns: 1.25fr 1.15fr 1fr;
          gap: 48px;
          margin-bottom: 50px;
        }
        
        /* Column 1 */
        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .footer-logo-square {
          height: 38px;
          width: auto;
          border-radius: 0;
        }
        .footer-brand-title {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.3px;
        }
        .text-red {
          color: #EF4444;
        }
        .company-legal-title {
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 12px;
          line-height: 1.35;
        }
        .company-spec-desc {
          font-size: 13.5px;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .company-meta-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .company-meta-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #CBD5E1;
          line-height: 1.45;
        }
        .meta-icon.red {
          color: #EF4444;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .meta-text strong {
          color: #F87171;
        }

        /* Column 2 */
        .footer-header-title {
          font-size: 15px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .contact-cards-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-card-item {
          background: #121622;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          color: #F1F5F9;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
          width: 100%;
          text-align: left;
        }
        .contact-card-item:hover {
          background: #181E2E;
          border-color: rgba(220, 38, 38, 0.4);
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }
        .card-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(220, 38, 38, 0.12);
          border: 1px solid rgba(220, 38, 38, 0.25);
          color: #EF4444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .card-val {
          color: #F8FAFC;
        }

        /* Column 3 */
        .transparency-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }
        .transparency-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: #94A3B8;
          line-height: 1.45;
        }
        .bullet-dot {
          color: #EF4444;
          font-weight: bold;
        }
        .footer-back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #161B26;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          border-radius: var(--radius-md);
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }
        .footer-back-to-top-btn:hover {
          background: #DC2626;
          border-color: #EF4444;
          transform: translateY(-2px);
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.5);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .copyright-info {
          font-size: 13px;
          color: #94A3B8;
        }
        .copyright-info strong {
          color: #F1F5F9;
        }
        .verified-legal-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #10B981;
          font-weight: 600;
        }
        .text-emerald {
          color: #10B981;
        }

        @media (max-width: 1024px) {
          .footer-grid-sample {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-col-1 {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-grid-sample {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-col-1 {
            grid-column: span 1;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  )
}
