import React from 'react'
import { ArrowRight, CheckCircle2, Smartphone, Zap, Flame, Shield, Layers } from 'lucide-react'

export default function TargetAudience({ onSelectPlan }) {
  const audiences = [
    {
      id: 'co-ban',
      planName: 'Cơ bản',
      price: '800.000đ',
      period: '/ tháng',
      badge: 'Ổn định & Tiết kiệm',
      title: 'Ứng dụng ít thay đổi',
      desc: 'App đã chạy ổn định, ít thêm tính năng, cần duy trì hoạt động trên Store và ngừa lỗi phát sinh.',
      needs: [
        'Kiểm tra định kỳ 1 lần / tháng',
        'Nhắc hạn Store & tên miền',
        '2 yêu cầu cập nhật dữ liệu',
        '1 giờ kỹ thuật xử lý sự cố'
      ],
      ctaText: 'Xem gói Cơ bản'
    },
    {
      id: 'tieu-chuan',
      planName: 'Tiêu chuẩn',
      price: '2.000.000đ',
      period: '/ tháng',
      badge: 'Phổ biến nhất',
      popular: true,
      title: 'Ứng dụng hoạt động thường xuyên',
      desc: 'App có người dùng hàng ngày, cần theo dõi crash, sửa lỗi nhanh và cập nhật định kỳ lên Store.',
      needs: [
        'Kiểm tra 2 lần/tháng + Crashlytics',
        'Phản hồi trong 12 giờ làm việc',
        '4 giờ kỹ thuật + 1 bản release',
        '6 yêu cầu cập nhật dữ liệu'
      ],
      ctaText: 'Xem gói Tiêu chuẩn'
    },
    {
      id: 'cao-cap',
      planName: 'Cao cấp',
      price: '4.000.000đ',
      period: '/ tháng',
      badge: 'Doanh nghiệp & E-Commerce',
      title: 'Ứng dụng là kênh kinh doanh chính',
      desc: 'App tạo doanh thu chính (TMĐT, đặt lịch), cần SLA 2-4h, giám sát server/API và cập nhật liên tục.',
      needs: [
        'Kiểm tra hàng tuần + Giám sát tự động',
        'Phản hồi nhanh trong 2 - 4 giờ',
        '8 giờ kỹ thuật + 2 bản release',
        '12 yêu cầu cập nhật + Backlog'
      ],
      ctaText: 'Xem gói Cao cấp'
    }
  ]

  return (
    <section className="section audience-section-compact" id="doi-tuong">
      {/* Decorative ambient elements matching the sample */}
      <div className="purple-ambient-glow"></div>
      <div className="purple-particles-overlay"></div>

      <div className="container relative-z">
        <div className="section-header reveal-up audience-header-compact">
          <div className="section-tag audience-tag-violet">
            <Layers size={14} />
            <span>Phân Loại Nhu Cầu</span>
          </div>
          <h2 className="section-title audience-title-white">Ứng Dụng Của Bạn Thuộc Nhóm Nào?</h2>
          <p className="section-desc audience-desc-light">
            Chọn giải pháp phù hợp với quy mô vận hành và cam kết SLA cần thiết cho ứng dụng của bạn.
          </p>
        </div>

        <div className="audience-grid">
          {audiences.map((item, idx) => (
            <div 
              key={item.id} 
              className={`audience-card ${item.popular ? 'audience-card-popular' : ''} reveal-up delay-${(idx + 1) * 100}`}
            >
              {item.popular && (
                <div className="popular-badge-top">
                  <Flame size={13} />
                  <span>Được đề xuất nhiều nhất</span>
                </div>
              )}

              <div className="card-top">
                <span className="group-badge">{item.badge}</span>
                <h3 className="group-title">{item.title}</h3>
                <p className="group-desc">{item.desc}</p>
              </div>

              <div className="needs-list">
                <span className="needs-title">Hạng mục trọng tâm:</span>
                {item.needs.map((need, nIdx) => (
                  <div key={nIdx} className="need-item">
                    <CheckCircle2 size={15} className="need-icon" />
                    <span>{need}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`audience-cta-btn ${item.popular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => onSelectPlan(item.planName)}
              >
                <span>{item.ctaText}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .audience-section-compact {
          padding: 46px 0 52px 0;
          position: relative;
          overflow: hidden;
          background-color: #120726;
          background-image: 
            radial-gradient(circle at 85% 15%, rgba(192, 132, 252, 0.22) 0%, transparent 45%),
            radial-gradient(circle at 15% 85%, rgba(147, 51, 234, 0.18) 0%, transparent 45%),
            linear-gradient(135deg, rgba(18, 7, 38, 0.88) 0%, rgba(26, 11, 46, 0.82) 50%, rgba(14, 5, 30, 0.92) 100%),
            url('/purple-tech-bg.png');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .relative-z {
          position: relative;
          z-index: 2;
        }
        .purple-ambient-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 1;
        }
        .purple-particles-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(251, 191, 36, 0.4) 1px, transparent 1px), radial-gradient(rgba(236, 72, 153, 0.35) 1px, transparent 1px);
          background-size: 80px 80px, 120px 120px;
          background-position: 0 0, 40px 40px;
          opacity: 0.6;
          pointer-events: none;
          z-index: 1;
        }
        .audience-header-compact {
          margin-bottom: 24px;
        }
        .audience-tag-violet {
          background: rgba(168, 85, 247, 0.16) !important;
          color: #E9D5FF !important;
          border: 1px solid rgba(192, 132, 252, 0.35) !important;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
        }
        .audience-title-white {
          color: #FFFFFF !important;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }
        .audience-desc-light {
          color: #E2E8F0 !important;
        }
        .audience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: stretch;
          padding-top: 14px;
        }
        .audience-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.75);
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.35);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .audience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 38px -10px rgba(0, 0, 0, 0.45);
          border-color: rgba(255, 255, 255, 1);
        }
        
        /* Prominently Highlighted Middle Card matching sample */
        .audience-card-popular {
          background: #FFFFFF;
          border: 2.5px solid #DC2626;
          box-shadow: 0 24px 50px -8px rgba(220, 38, 38, 0.35), 0 0 30px rgba(168, 85, 247, 0.22);
          transform: translateY(-10px);
          z-index: 5;
          padding: 28px 22px;
        }
        .audience-card-popular:hover {
          transform: translateY(-16px);
          box-shadow: 0 30px 60px -8px rgba(220, 38, 38, 0.45), 0 0 40px rgba(168, 85, 247, 0.35);
          border-color: #B91C1C;
        }
        .popular-badge-top {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
          color: #FFFFFF;
          padding: 5px 16px;
          border-radius: var(--radius-full);
          border: 2px solid #FFFFFF;
          font-size: 11.5px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(220, 38, 38, 0.45);
          letter-spacing: 0.3px;
        }
        .card-top {
          margin-bottom: 14px;
        }
        .group-badge {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--color-primary);
          background: #FEE2E2;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          margin-bottom: 8px;
        }
        .audience-card-popular .group-badge {
          background: #DC2626;
          color: #FFFFFF;
        }
        .group-title {
          font-size: 17.5px;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .audience-card-popular .group-title {
          font-size: 18.5px;
          color: #0F172A;
        }
        .group-desc {
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        .needs-list {
          margin-top: 10px;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .needs-title {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 8px;
        }
        .need-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 12.5px;
          color: var(--color-text-main);
          margin-bottom: 6px;
          line-height: 1.35;
        }
        .need-icon {
          color: var(--color-success);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .audience-cta-btn {
          width: 100%;
          padding: 11px 16px;
          font-size: 13.5px;
        }
        .audience-card-popular .audience-cta-btn {
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
          font-weight: 800;
        }

        @media (max-width: 1024px) {
          .audience-grid {
            grid-template-columns: 1fr;
            max-width: 550px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
