import React, { useState, useEffect } from 'react'
import { Phone, ArrowUp } from 'lucide-react'

export default function FloatingActions({ onPhoneClick }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past Hero (approx 350px)
      if (window.scrollY > 350) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const openZalo = () => {
    window.open('https://zalo.me/0909163821', '_blank', 'noopener,noreferrer')
  }

  if (!isVisible) return null

  return (
    <div className="floating-actions-widget" role="region" aria-label="Widget liên hệ nhanh">
      {/* 1. Nút Call (Đỏ trên cùng) */}
      <button 
        className="widget-btn widget-call" 
        onClick={onPhoneClick}
        aria-label="Gọi hotline hoặc sao chép"
        title="Gọi hoặc sao chép Hotline: 0909 163 821"
      >
        <Phone size={22} className="widget-phone-icon" />
      </button>

      {/* 2. Nút Zalo (Xanh dương ở giữa với chữ Zalo) */}
      <button 
        className="widget-btn widget-zalo" 
        onClick={openZalo}
        aria-label="Chat Zalo"
        title="Chat Zalo với DUDI: 0909 163 821"
      >
        <span className="zalo-text">Zalo</span>
      </button>

      {/* 3. Nút Lên Đầu Trang (Tối màu ở dưới cùng) */}
      <button 
        className="widget-btn widget-top" 
        onClick={scrollToTop}
        aria-label="Lên đầu trang"
        title="Về đầu trang"
      >
        <ArrowUp size={22} />
      </button>

      <style>{`
        .floating-actions-widget {
          position: fixed;
          right: 24px;
          bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 999;
          animation: floatInWidget 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .widget-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          outline: none;
        }

        .widget-btn:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
        }

        /* 1. Call Button (Red) */
        .widget-btn.widget-call {
          background: #DC2626;
          color: #FFFFFF;
        }
        .widget-btn.widget-call:hover {
          background: #EF4444;
        }
        .widget-phone-icon {
          transform: rotate(0deg);
        }

        /* 2. Zalo Button (Blue with bold text) */
        .widget-btn.widget-zalo {
          background: #0068FF;
          color: #FFFFFF;
        }
        .widget-btn.widget-zalo:hover {
          background: #0056D2;
        }
        .zalo-text {
          font-family: var(--font-heading), sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        /* 3. Top Button (Dark Crimson Red) */
        .widget-btn.widget-top {
          background: #7F1D1D;
          color: #FFFFFF;
          border: 1px solid rgba(220, 38, 38, 0.4);
        }
        .widget-btn.widget-top:hover {
          background: #DC2626;
          border-color: #EF4444;
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.6);
        }

        @keyframes floatInWidget {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 768px) {
          .floating-actions-widget {
            right: 16px;
            bottom: 20px;
            gap: 10px;
          }
          .widget-btn {
            width: 46px;
            height: 46px;
          }
          .zalo-text {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}
