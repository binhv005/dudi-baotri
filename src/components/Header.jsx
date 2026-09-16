import React, { useState, useEffect } from 'react'
import { Phone, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react'

export default function Header({ onPhoneClick, onSelectPlan }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/logo.webp" alt="DUDI Software Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">DUDI <span className="logo-highlight">SOFTWARE</span></span>
            <span className="logo-subtitle">Application Maintenance</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <button onClick={() => scrollToSection('van-de')} className="nav-link">Vấn đề</button>
          <button onClick={() => scrollToSection('dau-ra')} className="nav-link">Đầu ra</button>
          <button onClick={() => scrollToSection('bang-gia')} className="nav-link">Bảng giá</button>
          <button onClick={() => scrollToSection('quy-trinh')} className="nav-link">Quy trình</button>
          <button onClick={() => scrollToSection('gioi-han')} className="nav-link">Phạm vi</button>
          <button onClick={() => scrollToSection('faq')} className="nav-link">Hỏi đáp</button>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button 
            className="btn-primary header-cta-btn"
            onClick={() => scrollToSection('form-dang-ky')}
          >
            <span>Gửi ứng dụng</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <button onClick={() => scrollToSection('van-de')} className="mobile-nav-link">Vấn đề thường gặp</button>
          <button onClick={() => scrollToSection('dau-ra')} className="mobile-nav-link">Đầu ra bàn giao</button>
          <button onClick={() => scrollToSection('bang-gia')} className="mobile-nav-link">Bảng giá 3 gói</button>
          <button onClick={() => scrollToSection('quy-trinh')} className="mobile-nav-link">Quy trình xử lý sự cố</button>
          <button onClick={() => scrollToSection('gioi-han')} className="mobile-nav-link">Giới hạn & Định nghĩa</button>
          <button onClick={() => scrollToSection('faq')} className="mobile-nav-link">Câu hỏi thường gặp</button>
          
          <div className="mobile-menu-footer">
            <button className="mobile-phone-btn" onClick={onPhoneClick}>
              <Phone size={16} />
              <span>Hotline: 0909 163 821</span>
            </button>
            <button 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={() => scrollToSection('form-dang-ky')}
            >
              Gửi ứng dụng để DUDI kiểm tra
            </button>
          </div>
        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid rgba(226, 232, 240, 0.7);
          transition: all 0.3s ease;
        }
        .header-scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.08);
          border-bottom-color: rgba(220, 38, 38, 0.15);
        }
        .header-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }
        .header-logo:hover .logo-img {
          transform: scale(1.05);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--color-dark);
          line-height: 1.1;
        }
        .logo-highlight {
          color: var(--color-primary);
        }
        .logo-subtitle {
          font-size: 10.5px;
          color: var(--color-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          background: none;
          border: none;
          padding: 8px 14px;
          font-size: 14.5px;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-tint);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header-phone-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          background: #F8FAFC;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-dark);
          cursor: pointer;
          transition: var(--transition);
        }
        .header-phone-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background: var(--color-primary-tint);
        }
        .phone-icon {
          color: var(--color-primary);
        }
        .header-cta-btn {
          padding: 10px 20px;
          font-size: 14px;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-dark);
          cursor: pointer;
          padding: 6px;
        }
        .mobile-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 15px 25px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          padding: 16px 24px;
          gap: 6px;
          animation: fadeIn 0.2s ease;
        }
        .mobile-nav-link {
          background: none;
          border: none;
          text-align: left;
          padding: 12px 10px;
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-main);
          border-bottom: 1px solid #F1F5F9;
          cursor: pointer;
        }
        .mobile-nav-link:hover {
          color: var(--color-primary);
        }
        .mobile-menu-footer {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mobile-phone-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: #F8FAFC;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-weight: 700;
          color: var(--color-dark);
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .header-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .header-phone-btn {
            display: none;
          }
          .logo-subtitle {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
