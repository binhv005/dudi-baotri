import React, { useState, useEffect } from 'react'
import { Phone, ArrowUp } from 'lucide-react'
import AIChatModal from './AIChatModal'

export default function FloatingActions({ onPhoneClick, onSelectPlan }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

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
    <>
      {/* Floating AI Chatbot Modal */}
      <AIChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        onSelectPlan={onSelectPlan}
      />

      <div className="floating-actions-widget" role="region" aria-label="Widget liên hệ nhanh">
        {/* 1. Nút Robot Mascot AI (Ở TRÊN CÙNG) */}
        <button 
          type="button"
          data-chat-toggle="true"
          onClick={() => setIsChatOpen(prev => !prev)}
          className={`widget-btn widget-ai ${isChatOpen ? 'active' : ''}`}
          title="Chat với Trợ lý AI Bảo trì Ứng dụng DUDI"
          aria-label="Mở Trợ lý AI DUDI"
        >
          <span className="widget-ai-ping"></span>
          <div className="widget-ai-img-wrap">
            <img 
              src="/robot-mascot.webp" 
              alt="Trợ lý AI DUDI" 
              className="widget-ai-img"
            />
          </div>
          <span className="widget-ai-dot"></span>
        </button>

        {/* 2. Nút Call (Đỏ) */}
        <button 
          className="widget-btn widget-call" 
          onClick={onPhoneClick}
          aria-label="Gọi hotline hoặc sao chép"
          title="Gọi hoặc sao chép Hotline: 0909 163 821"
        >
          <Phone size={22} className="widget-phone-icon" />
        </button>

        {/* 3. Nút Zalo (Xanh dương) */}
        <button 
          className="widget-btn widget-zalo" 
          onClick={openZalo}
          aria-label="Chat Zalo"
          title="Chat Zalo với DUDI: 0909 163 821"
        >
          <span className="zalo-text">Zalo</span>
        </button>

        {/* 4. Nút Lên Đầu Trang */}
        <button 
          className="widget-btn widget-top" 
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          title="Về đầu trang"
        >
          <ArrowUp size={22} />
        </button>
      </div>

      <style>{`
        .floating-actions-widget {
          position: fixed;
          right: 24px;
          bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 9999;
          animation: floatInWidget 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .widget-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          outline: none;
          position: relative;
        }

        .widget-btn:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
        }

        /* 1. Robot AI Mascot Button */
        .widget-btn.widget-ai {
          background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
          padding: 2px;
          box-shadow: 0 8px 22px rgba(220, 38, 38, 0.45);
        }

        .widget-btn.widget-ai.active,
        .widget-btn.widget-ai:hover {
          transform: scale(1.12) translateY(-2px);
          box-shadow: 0 12px 28px rgba(220, 38, 38, 0.65);
        }

        .widget-ai-ping {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(220, 38, 38, 0.35);
          animation: pingRing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          pointer-events: none;
        }

        @keyframes pingRing {
          75%, 100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        .widget-ai-img-wrap {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #FFFFFF;
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }

        .widget-ai-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .widget-btn.widget-ai:hover .widget-ai-img {
          transform: scale(1.12);
        }

        .widget-ai-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #10B981;
          border: 2px solid #FFFFFF;
          z-index: 20;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* 2. Call Button (Red) */
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

        /* 3. Zalo Button (Blue with bold text) */
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

        /* 4. Top Button (Dark Crimson Red) */
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
            width: 48px;
            height: 48px;
          }
          .zalo-text {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  )
}