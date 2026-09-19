import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  RotateCcw, 
  Send, 
  Sparkles, 
  CheckCheck, 
  MessageSquare, 
  ChevronRight,
  Phone,
  ShieldCheck
} from 'lucide-react';

const ZALO_LINK = 'https://zalo.me/0909163821';
const HOTLINE_NUMBER = '0909 163 821';
const HOTLINE_RAW = '0909163821';

const QUICK_SUGGESTIONS = [
  { id: 'pricing', label: '💡 Báo giá các gói bảo trì ứng dụng', query: 'Chi phí các gói bảo trì ứng dụng tại DUDI như thế nào?' },
  { id: 'standard', label: '⚡ Gói Tiêu Chuẩn 2tr/tháng có gì?', query: 'Gói Tiêu Chuẩn 2.000.000đ/tháng bao gồm những hạng mục gì?' },
  { id: 'sla', label: '🛡 Cam kết SLA & Tốc độ phản hồi', query: 'Cam kết thời gian phản hồi SLA và xử lý lỗi ứng dụng như thế nào?' },
  { id: 'process', label: '🚀 Quy trình tiếp nhận & xử lý lỗi', query: 'Quy trình tiếp nhận và xử lý sự cố ứng dụng tại DUDI như thế nào?' },
  { id: 'contact', label: '📞 Gặp chuyên viên kỹ thuật 24/7', query: 'Tôi muốn gặp chuyên viên kỹ thuật tư vấn trực tiếp' }
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Xin chào! 👋\nTôi là Trợ lý AI Kỹ thuật & Bảo trì Ứng dụng DUDI.\nApp hoặc hệ thống của bạn đang gặp sự cố crash, lỗi phiên bản OS hay cần tối ưu bảo trì định kỳ?",
    time: '10:30',
    type: 'text'
  }
];

export default function AIChatModal({ isOpen, onClose, onSelectPlan }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isTyping, isOpen]);

  const handleReset = () => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Xin chào! 👋\nTôi là Trợ lý AI Kỹ thuật & Bảo trì Ứng dụng DUDI.\nApp hoặc hệ thống của bạn đang gặp sự cố crash, lỗi phiên bản OS hay cần tối ưu bảo trì định kỳ?",
        time: timeStr,
        type: 'text'
      }
    ]);
  };

  const generateBotResponse = (userText) => {
    const query = userText.toLowerCase().trim();

    if (query.includes('giá') || query.includes('gói') || query.includes('chi phí') || query.includes('báo giá') || query.includes('bao nhiêu')) {
      return {
        text: `DUDI cung cấp 3 gói dịch vụ bảo trì và vận hành ứng dụng di động / web app chuyên sâu:\n\n` +
          `• **Gói Cơ Bản (800.000đ / tháng)**: Giám sát Uptime, sao lưu dữ liệu hàng tuần, vá lỗi bảo mật cơ bản, hỗ trợ giờ hành chính.\n` +
          `• **Gói Tiêu Chuẩn (2.000.000đ / tháng - Khuyên dùng ⭐)**: Giám sát hiệu năng 24/7, cập nhật tương thích iOS/Android mới, xử lý lỗi crash trong 4h, backup dữ liệu hàng ngày.\n` +
          `• **Gói Cao Cấp (4.000.000đ / tháng)**: Cam kết SLA 99.9%, xử lý sự cố khẩn cấp trong 1h, tối ưu API & Database, hỗ trợ nâng cấp tính năng nhỏ.\n\n` +
          `👉 Bạn có thể xem chi tiết bảng giá hoặc liên hệ để được audit chẩn đoán ứng dụng miễn phí!`,
        actionType: 'pricing'
      };
    }

    if (query.includes('tiêu chuẩn') || query.includes('2tr') || query.includes('2 triệu') || query.includes('standard')) {
      return {
        text: `⚡ **Gói Tiêu Chuẩn (2.000.000đ/tháng)** là gói được 80% doanh nghiệp và chủ app lựa chọn:\n\n` +
          `✅ **Giám sát:** Đo lường Uptime & Crash rate 24/7 bằng hệ thống cảnh báo tự động.\n` +
          `✅ **Cập nhật:** Hỗ trợ tương thích các phiên bản iOS & Android mới nhất trên App Store / Google Play.\n` +
          `✅ **Sửa lỗi:** Khắc phục lỗi phát sinh, crash app với cam kết phản hồi trong 4 giờ.\n` +
          `✅ **Sao lưu:** Tự động backup mã nguồn & cơ sở dữ liệu hàng ngày an toàn tuyệt đối.\n` +
          `✅ **Báo cáo:** Gửi báo cáo tình trạng vận hành và đề xuất tối ưu định kỳ hàng tháng.`,
        actionType: 'standard'
      };
    }

    if (query.includes('sla') || query.includes('cam kết') || query.includes('phản hồi') || query.includes('thời gian') || query.includes('sự cố')) {
      return {
        text: `🛡 **Cam kết SLA & Tốc độ phản hồi tại DUDI:**\n\n` +
          `• **Sự cố khẩn cấp (App sập, không login/thanh toán được):** Tiếp nhận trong 15 phút, xử lý ngay trong 1 - 2 giờ.\n` +
          `• **Lỗi tính năng / Giao diện (Mức độ trung bình):** Khắc phục và cập nhật bản vá trong vòng 4 - 8 giờ làm việc.\n` +
          `• **Yêu cầu hỗ trợ thông thường:** Phản hồi và tư vấn trong vòng 30 phút.\n` +
          `• **Bảo mật & Dữ liệu:** Cam kết bảo mật 100% mã nguồn, ký kết NDA pháp lý minh bạch.`,
        actionType: 'sla'
      };
    }

    if (query.includes('quy trình') || query.includes('bước') || query.includes('tiếp nhận') || query.includes('triển khai')) {
      return {
        text: `🚀 **Quy trình 4 bước bảo trì ứng dụng chuyên nghiệp tại DUDI:**\n\n` +
          `1. **Tiếp nhận & Chẩn đoán:** Đánh giá hiện trạng mã nguồn, lỗi crash và rà soát bảo mật.\n` +
          `2. **Thiết lập Giám sát:** Cài đặt hệ thống cảnh báo tự động 24/7 và lịch backup dữ liệu.\n` +
          `3. **Bảo trì & Cập nhật:** Vá lỗi định kỳ, tối ưu tốc độ API và cập nhật thư viện / OS mới.\n` +
          `4. **Báo cáo & Đề xuất:** Tổng kết chỉ số hiệu năng và tư vấn nâng cấp định kỳ hàng tháng.`,
        actionType: 'process'
      };
    }

    if (query.includes('liên hệ') || query.includes('tư vấn') || query.includes('số điện thoại') || query.includes('gặp') || query.includes('hotline') || query.includes('zalo') || query.includes('sđt')) {
      return {
        text: `Đội ngũ Kỹ sư DUDI luôn sẵn sàng hỗ trợ kỹ thuật và tư vấn giải pháp 24/7:\n\n` +
          `📞 Hotline khẩn cấp: **${HOTLINE_NUMBER}**\n` +
          `💬 Zalo Kỹ thuật: Nhấn nút bên dưới để trao đổi trực tiếp\n` +
          `🏢 Trụ sở: TP. Hồ Chí Minh\n\n` +
          `Kỹ sư DUDI sẽ kết nối lại ngay trong vòng 15 phút để hỗ trợ ứng dụng của bạn!`,
        actionType: 'contact'
      };
    }

    return {
      text: `Cảm ơn bạn đã liên hệ! DUDI chuyên cung cấp dịch vụ bảo trì ứng dụng di động (iOS/Android), web app, giám sát uptime và vá lỗi hệ thống 24/7.\n\n` +
        `Bạn muốn tham khảo **Bảng giá**, **Chi tiết Gói Tiêu Chuẩn** hay cần **Chuyên viên kỹ thuật hỗ trợ khẩn cấp**?`,
      actionType: 'general'
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: timeStr,
      type: 'text'
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotResponse(text);
      const botTime = new Date();
      const botTimeStr = `${String(botTime.getHours()).padStart(2, '0')}:${String(botTime.getMinutes()).padStart(2, '0')}`;

      const newBotMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply.text,
        time: botTimeStr,
        actionType: botReply.actionType
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="ai-chat-backdrop" onClick={onClose} aria-hidden="true" />

      <div 
        className="ai-chat-modal-wrapper"
        role="dialog"
        aria-modal="true"
        aria-label="Cửa sổ trò chuyện với Trợ lý AI DUDI"
      >
        <div className="ai-chat-window">
          {/* 1. Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-header-info">
              <div className="ai-chat-avatar-wrapper">
                <img 
                  src="/robot-mascot.webp" 
                  alt="Trợ lý AI DUDI" 
                  className="ai-chat-avatar-img"
                />
                <span className="ai-chat-online-badge" />
              </div>

              <div className="ai-chat-title-group">
                <h3>
                  <span>Trợ lý AI DUDI</span>
                </h3>
                <p>
                  <span>Luôn sẵn sàng hỗ trợ bạn</span>
                  <span className="ai-chat-status-dot" />
                </p>
              </div>
            </div>

            <div className="ai-chat-header-actions">
              <button
                type="button"
                onClick={handleReset}
                title="Làm mới cuộc trò chuyện"
                className="ai-chat-icon-btn"
                aria-label="Làm mới chat"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                onClick={onClose}
                title="Đóng cửa sổ chat"
                className="ai-chat-icon-btn"
                aria-label="Đóng chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* 2. Messages List */}
          <div className="ai-chat-body">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';

              return (
                <div
                  key={msg.id}
                  className={`ai-chat-message-row ${isBot ? 'bot' : 'user'}`}
                >
                  <div className="ai-chat-bubble-container">
                    <div className="ai-chat-bubble">
                      <div style={{ whiteSpace: 'pre-line' }}>
                        {msg.text.split('\n').map((line, i) => {
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <React.Fragment key={i}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                              {i < msg.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          );
                        })}
                      </div>

                      {/* Bot Action Buttons */}
                      {isBot && msg.actionType && (
                        <div className="ai-chat-actions">
                          {msg.actionType === 'pricing' && (
                            <button
                              type="button"
                              onClick={() => scrollToSection('bang-gia')}
                              className="ai-chat-action-btn btn-indigo"
                            >
                              <span>Xem Bảng giá</span>
                              <ChevronRight size={13} />
                            </button>
                          )}
                          {msg.actionType === 'standard' && (
                            <button
                              type="button"
                              onClick={() => {
                                if (onSelectPlan) onSelectPlan('Tiêu chuẩn');
                                scrollToSection('form-dang-ky');
                              }}
                              className="ai-chat-action-btn btn-indigo"
                            >
                              <span>Chọn Gói Tiêu Chuẩn</span>
                              <ChevronRight size={13} />
                            </button>
                          )}
                          {msg.actionType === 'contact' && (
                            <>
                              <a
                                href={ZALO_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ai-chat-action-btn btn-blue"
                              >
                                <MessageSquare size={13} />
                                <span>Nhắn Zalo</span>
                              </a>
                              <button
                                type="button"
                                onClick={() => scrollToSection('form-dang-ky')}
                                className="ai-chat-action-btn btn-gray"
                              >
                                <span>Điền Form</span>
                              </button>
                            </>
                          )}
                          {msg.actionType === 'process' && (
                            <button
                              type="button"
                              onClick={() => scrollToSection('quy-trinh')}
                              className="ai-chat-action-btn btn-indigo"
                            >
                              <span>Quy trình 4 bước</span>
                              <ChevronRight size={13} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="ai-chat-meta">
                      <span>{msg.time}</span>
                      {!isBot && <CheckCheck size={13} className="ai-chat-seen-icon" />}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="ai-chat-message-row bot">
                <div className="ai-chat-typing-bubble">
                  <div className="ai-typing-dot" />
                  <div className="ai-typing-dot" />
                  <div className="ai-typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 3. Quick Suggestions Chips */}
          <div className="ai-chat-suggestions">
            {QUICK_SUGGESTIONS.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => handleSendMessage(chip.query)}
                className="ai-chat-chip"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* 4. Footer Input */}
          <div className="ai-chat-footer">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="ai-chat-input-form"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập tin nhắn của bạn..."
                className="ai-chat-input"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                aria-label="Gửi tin nhắn"
                className={`ai-chat-send-btn ${inputValue.trim() ? 'active' : ''}`}
              >
                <Send size={15} style={{ marginLeft: '1px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* AI Chatbot Styles matching Light Mode reference */
        .ai-chat-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.25);
          backdrop-filter: blur(1.5px);
          -webkit-backdrop-filter: blur(1.5px);
          z-index: 9990;
          animation: chatFadeIn 0.2s ease-out;
        }

        @keyframes chatFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .ai-chat-modal-wrapper {
          position: fixed;
          bottom: 24px;
          right: 88px;
          z-index: 9999;
          animation: chatSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
        }

        .ai-chat-window {
          width: 385px;
          max-width: calc(100vw - 110px);
          height: 560px;
          max-height: calc(90vh - 30px);
          background: #ffffff;
          border-radius: 28px;
          box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(226, 232, 240, 0.9);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        /* 1. Header */
        .ai-chat-header {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .ai-chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-chat-avatar-wrapper {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .ai-chat-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .ai-chat-online-badge {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background-color: #10b981;
          border: 2px solid #ffffff;
        }

        .ai-chat-title-group h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.25;
        }

        .ai-chat-title-group p {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ai-chat-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22c55e;
          display: inline-block;
        }

        .ai-chat-header-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .ai-chat-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ai-chat-icon-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        /* 2. Chat Messages Body */
        .ai-chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: #fafafa;
        }

        .ai-chat-message-row {
          display: flex;
          max-width: 88%;
          animation: chatMsgAppear 0.2s ease-out;
        }

        @keyframes chatMsgAppear {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-chat-message-row.bot {
          align-self: flex-start;
        }

        .ai-chat-message-row.user {
          align-self: flex-end;
        }

        .ai-chat-bubble-container {
          display: flex;
          flex-direction: column;
        }

        .ai-chat-bubble {
          padding: 12px 16px;
          font-size: 0.885rem;
          line-height: 1.55;
          border-radius: 20px;
          word-break: break-word;
        }

        .ai-chat-message-row.bot .ai-chat-bubble {
          background: #ffffff;
          color: #1e293b;
          border-top-left-radius: 4px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
        }

        .ai-chat-message-row.user .ai-chat-bubble {
          background: linear-gradient(135deg, #5046e5 0%, #6366f1 100%);
          color: #ffffff;
          border-top-right-radius: 4px;
          box-shadow: 0 4px 12px rgba(80, 70, 229, 0.25);
        }

        .ai-chat-bubble strong {
          font-weight: 700;
        }

        .ai-chat-meta {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: #94a3b8;
          margin-top: 4px;
        }

        .ai-chat-message-row.bot .ai-chat-meta {
          margin-left: 4px;
          justify-content: flex-start;
        }

        .ai-chat-message-row.user .ai-chat-meta {
          margin-right: 4px;
          justify-content: flex-end;
        }

        .ai-chat-seen-icon {
          color: #6366f1;
          font-size: 0.75rem;
          display: inline-flex;
        }

        /* Quick Action Buttons inside Bot Message */
        .ai-chat-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
          padding-top: 8px;
          border-top: 1px solid #f1f5f9;
        }

        .ai-chat-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 10px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .ai-chat-action-btn.btn-indigo {
          background: #eef2ff;
          color: #4f46e5;
        }

        .ai-chat-action-btn.btn-indigo:hover {
          background: #e0e7ff;
        }

        .ai-chat-action-btn.btn-blue {
          background: #0068ff;
          color: #ffffff;
        }

        .ai-chat-action-btn.btn-blue:hover {
          background: #0052cc;
        }

        .ai-chat-action-btn.btn-gray {
          background: #f1f5f9;
          color: #334155;
        }

        .ai-chat-action-btn.btn-gray:hover {
          background: #e2e8f0;
        }

        /* Typing Indicator */
        .ai-chat-typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          border-top-left-radius: 4px;
          width: fit-content;
        }

        .ai-typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #6366f1;
          animation: typingBounce 1.2s infinite ease-in-out;
        }

        .ai-typing-dot:nth-child(1) { animation-delay: -0.3s; }
        .ai-typing-dot:nth-child(2) { animation-delay: -0.15s; }
        .ai-typing-dot:nth-child(3) { animation-delay: 0s; }

        @keyframes typingBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }

        /* 3. Quick Suggestion Chips */
        .ai-chat-suggestions {
          padding: 8px 12px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          overflow-x: auto;
          white-space: nowrap;
          display: flex;
          gap: 6px;
          scrollbar-width: none;
          flex-shrink: 0;
        }

        .ai-chat-suggestions::-webkit-scrollbar {
          display: none;
        }

        .ai-chat-chip {
          padding: 6px 14px;
          border-radius: 9999px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 0.775rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          flex-shrink: 0;
        }

        .ai-chat-chip:hover {
          background: #eff6ff;
          border-color: #93c5fd;
          color: #2563eb;
        }

        /* 4. Footer Input */
        .ai-chat-footer {
          padding: 12px 14px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          flex-shrink: 0;
        }

        .ai-chat-input-form {
          display: flex;
          align-items: center;
          background: #ffffff;
          border-radius: 9999px;
          padding: 4px 6px 4px 16px;
          border: 1.5px solid #6366f1;
          box-shadow: 0 1px 4px rgba(99, 102, 241, 0.1);
          transition: all 0.2s ease;
        }

        .ai-chat-input-form:focus-within {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .ai-chat-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 0.885rem;
          color: #0f172a;
          outline: none;
          padding: 6px 0;
        }

        .ai-chat-input::placeholder {
          color: #94a3b8;
        }

        .ai-chat-send-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: #e2e8f0;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: not-allowed;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .ai-chat-send-btn.active {
          background: linear-gradient(135deg, #5046e5 0%, #6366f1 100%);
          color: #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.35);
        }

        .ai-chat-send-btn.active:hover {
          transform: scale(1.05);
        }

        /* Responsive adjustment for Mobile */
        @media (max-width: 768px) {
          .ai-chat-modal-wrapper {
            bottom: 0;
            right: 0;
            left: 0;
            top: 0;
            display: flex;
            align-items: flex-end;
            padding: 0;
          }

          .ai-chat-window {
            width: 100%;
            max-width: 100%;
            height: 82vh;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      `}</style>
    </>
  );
}