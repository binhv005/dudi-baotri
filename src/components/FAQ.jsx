import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      q: 'Không có mã nguồn có bảo trì được không?',
      a: 'Không. DUDI cần mã nguồn hợp lệ (Git repository hoặc source code build được) để kiểm tra và sửa lỗi. Nếu chỉ có file APK/IPA, DUDI cần khảo sát riêng.'
    },
    {
      q: 'Thời gian phản hồi SLA 2 giờ có phải là sửa xong lỗi không?',
      a: 'Không. Mốc SLA (2-4h hoặc 12-24h) là thời gian tiếp nhận, phân loại và đưa ra phương án xử lý đầu tiên. Thời gian sửa hoàn tất phụ thuộc vào độ phức tạp của lỗi.'
    },
    {
      q: 'Chi phí bảo trì hàng tháng đã bao gồm phí Store và Server chưa?',
      a: 'Chưa bao gồm. Phí tài khoản Apple Developer ($99/năm), Google Play, máy chủ (Cloud/VPS), Firebase và các API bên thứ ba do khách hàng thanh toán trực tiếp.'
    },
    {
      q: 'Nếu Store (Apple/Google) từ chối duyệt bản cập nhật thì xử lý thế nào?',
      a: 'DUDI kiểm tra phản hồi từ Store và khắc phục các vấn đề mã nguồn trong hạn mức giờ của gói. Yêu cầu thay đổi lớn về luồng nghiệp vụ sẽ được báo giá riêng.'
    },
    {
      q: 'Số giờ kỹ thuật không sử dụng hết trong tháng có được cộng dồn không?',
      a: 'Không cộng dồn. Hạn mức giờ kỹ thuật, lượt cập nhật dữ liệu và bản phát hành được làm mới vào đầu mỗi chu kỳ thanh toán hàng tháng.'
    },
    {
      q: 'DUDI có đảm bảo bảo mật thông tin mã nguồn và dữ liệu không?',
      a: 'DUDI tuân thủ nguyên tắc cấp quyền tối thiểu (Least Privilege), cam kết bảo mật theo NDA, không lưu mật khẩu và thu hồi quyền khi kết thúc hợp đồng.'
    }
  ]

  // State to manage open/close accordion items (independent toggle)
  const [openMap, setOpenMap] = useState({ 0: true })

  const toggleItem = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section className="section bg-tech-white faq-section" id="faq">
      <div className="container">
        <div className="section-header reveal-up faq-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="section-title">Câu Hỏi Thường Gặp Về Dịch Vụ</h2>
          <p className="section-desc">
            Các giải đáp trọng tâm về SLA, mã nguồn và chi phí vận hành ứng dụng.
          </p>
        </div>

        {/* 1-column Centered Accordion */}
        <div className="faq-accordion-container">
          {faqs.map((item, idx) => {
            const isOpen = !!openMap[idx]
            return (
              <div 
                key={idx} 
                className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-accordion-header"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-header-left">
                    <div className="faq-icon-bubble">
                      <HelpCircle size={17} />
                    </div>
                    <span className="faq-question-text">{item.q}</span>
                  </div>
                  <div className={`faq-chevron-box ${isOpen ? 'open' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div className={`faq-accordion-collapse ${isOpen ? 'show' : ''}`}>
                  <div className="faq-accordion-body">
                    <p className="faq-answer-text">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 48px 0 56px 0;
        }
        .faq-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 32px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .faq-header .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          background: #FEE2E2;
          color: #DC2626;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          border: 1px solid rgba(220, 38, 38, 0.15);
        }
        .faq-header .section-title {
          font-size: 32px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .faq-header .section-desc {
          font-size: 15px;
          color: #64748B;
          max-width: 600px;
          line-height: 1.55;
          margin: 0 auto;
        }
        .faq-accordion-container {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-accordion-item {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
        }
        .faq-accordion-item:hover {
          border-color: rgba(220, 38, 38, 0.3);
          box-shadow: 0 6px 20px -4px rgba(220, 38, 38, 0.08);
        }
        .faq-accordion-item.active {
          border-color: rgba(220, 38, 38, 0.4);
          box-shadow: 0 8px 24px -4px rgba(220, 38, 38, 0.1);
        }
        .faq-accordion-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 14px;
          transition: background 0.2s ease;
        }
        .faq-accordion-header:hover {
          background: rgba(254, 242, 242, 0.4);
        }
        .faq-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
        }
        .faq-icon-bubble {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: #FEF2F2;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(220, 38, 38, 0.18);
          transition: all 0.2s ease;
        }
        .faq-accordion-item.active .faq-icon-bubble {
          background: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }
        .faq-question-text {
          font-size: 15.5px;
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.4;
          letter-spacing: -0.01em;
        }
        .faq-chevron-box {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #F8FAFC;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--border-subtle);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-chevron-box.open {
          transform: rotate(180deg);
          background: #FEF2F2;
          color: var(--color-primary);
          border-color: rgba(220, 38, 38, 0.25);
        }
        
        /* Smooth Accordion Body */
        .faq-accordion-collapse {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
          opacity: 0;
        }
        .faq-accordion-collapse.show {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-accordion-body {
          overflow: hidden;
        }
        .faq-answer-text {
          padding: 0 20px 18px 66px;
          margin: 0;
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .faq-accordion-header {
            padding: 14px 16px;
            gap: 10px;
          }
          .faq-question-text {
            font-size: 14.5px;
          }
          .faq-answer-text {
            padding: 0 16px 14px 16px;
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  )
}
