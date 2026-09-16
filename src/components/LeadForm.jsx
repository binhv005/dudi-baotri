import React, { useState, useEffect } from 'react'
import { Send, CheckCircle2, AlertTriangle, ShieldCheck, Smartphone, Lock, RefreshCw } from 'lucide-react'

export default function LeadForm({ selectedPlan, setSelectedPlan, showToast }) {
  const [formData, setFormData] = useState({
    appName: '',
    storeLink: '',
    platforms: ['iOS', 'Android'],
    techStack: '',
    sourceCodeStatus: 'repo',
    appStatus: ['crash'],
    plan: selectedPlan || 'Tiêu chuẩn',
    phone: '',
    note: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Synchronize when selectedPlan prop changes from other sections
  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }))
    }
  }, [selectedPlan])

  const handlePlatformToggle = (platform) => {
    setFormData(prev => {
      const exists = prev.platforms.includes(platform)
      const updated = exists 
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
      return { ...prev, platforms: updated }
    })
    if (errors.platforms) {
      setErrors(prev => ({ ...prev, platforms: null }))
    }
  }

  const handleStatusToggle = (status) => {
    setFormData(prev => {
      const exists = prev.appStatus.includes(status)
      const updated = exists 
        ? prev.appStatus.filter(s => s !== status)
        : [...prev.appStatus, status]
      return { ...prev, appStatus: updated }
    })
    if (errors.appStatus) {
      setErrors(prev => ({ ...prev, appStatus: null }))
    }
  }

  const validate = () => {
    const errs = {}
    
    // Tên ứng dụng: 2-120 ký tự
    if (!formData.appName || formData.appName.trim().length < 2 || formData.appName.trim().length > 120) {
      errs.appName = 'Tên ứng dụng phải từ 2 đến 120 ký tự'
    }

    // Link store: hợp lệ nếu có nhập
    if (formData.storeLink && formData.storeLink.trim() !== '') {
      try {
        new URL(formData.storeLink)
      } catch (_) {
        errs.storeLink = 'Vui lòng nhập đường link Store hợp lệ (bắt đầu bằng http:// hoặc https://)'
      }
    }

    // Nền tảng: bắt buộc chọn ít nhất 1
    if (!formData.platforms || formData.platforms.length === 0) {
      errs.platforms = 'Vui lòng chọn ít nhất một nền tảng (iOS, Android hoặc cả hai)'
    }

    // Mã nguồn: bắt buộc
    if (!formData.sourceCodeStatus) {
      errs.sourceCodeStatus = 'Vui lòng chọn tình trạng mã nguồn hiện tại'
    }

    // Tình trạng: bắt buộc chọn ít nhất 1
    if (!formData.appStatus || formData.appStatus.length === 0) {
      errs.appStatus = 'Vui lòng chọn ít nhất một tình trạng ứng dụng'
    }

    // Gói quan tâm: bắt buộc
    if (!formData.plan) {
      errs.plan = 'Vui lòng chọn gói quan tâm'
    }

    // Điện thoại / Zalo: 9 đến 12 chữ số
    const phoneClean = formData.phone.replace(/\s+/g, '')
    const phoneRegex = /^[0-9]{9,12}$/
    if (!phoneClean || !phoneRegex.test(phoneClean)) {
      errs.phone = 'Số điện thoại hoặc Zalo phải từ 9 đến 12 chữ số hợp lệ'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      showToast('Vui lòng kiểm tra lại các trường thông tin bắt buộc.')
      return
    }

    setIsSubmitting(true)

    // Simulate safe API submission and anti-spam protection
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      showToast('Gửi thông tin thành công! Kỹ sư DUDI sẽ liên hệ sớm nhất.')
    }, 1000)
  }

  const handleReset = () => {
    setFormData({
      appName: '',
      storeLink: '',
      platforms: ['iOS', 'Android'],
      techStack: '',
      sourceCodeStatus: 'repo',
      appStatus: ['crash'],
      plan: 'Tiêu chuẩn',
      phone: '',
      note: ''
    })
    setIsSuccess(false)
    setErrors({})
  }

  return (
    <section className="section form-section-compact" id="form-dang-ky">
      <div className="container">
        <div className="section-header reveal-up form-header-compact">
          <div className="section-tag">
            <Send size={14} />
            <span>Tiếp Nhận Khảo Sát</span>
          </div>
          <h2 className="section-title">Gửi Yêu Cầu Đánh Giá Tiếp Quản Ứng Dụng</h2>
          <p className="section-desc">
            Gửi thông tin để DUDI đánh giá khả năng tiếp quản và báo phương án trong 24 giờ.
          </p>
        </div>

        {/* 2-Column Showcase: 3D Robot Mascot on Left, Form Card on Right */}
        <div className="lead-form-layout-container">
          {/* Left Column: 3D Mascot Image */}
          <div className="lead-form-mascot-col reveal-left delay-100">
            <div className="mascot-img-wrapper">
              <img 
                src="/mascot-support.webp" 
                alt="DUDI Tech Mascot App Support" 
                className="mascot-full-img"
              />
            </div>
          </div>

          {/* Right Column: Red Form Card */}
          <div className="lead-form-card-col reveal-right delay-200">
            <div className="form-card-wrapper">
              {isSuccess ? (
            <div className="form-success-box">
              <div className="success-icon-wrap">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="success-title">Tiếp Nhận Thông Tin Thành Công!</h3>
              <p className="success-msg">
                <strong>DUDI đã nhận thông tin ứng dụng và sẽ liên hệ để xác nhận khả năng tiếp quản.</strong>
              </p>
              <div className="success-summary">
                <div className="summary-line"><span>Ứng dụng:</span> <strong>{formData.appName}</strong></div>
                <div className="summary-line"><span>Gói quan tâm:</span> <strong>Gói {formData.plan}</strong></div>
                <div className="summary-line"><span>Số liên hệ:</span> <strong>{formData.phone}</strong></div>
              </div>
              <button className="btn-secondary" onClick={handleReset} style={{ marginTop: 24 }}>
                <RefreshCw size={16} />
                <span>Gửi thêm ứng dụng khác</span>
              </button>
            </div>
          ) : (
            <form className="lead-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                {/* Field 1: Tên ứng dụng */}
                <div className="form-group half-width">
                  <label htmlFor="appName" className="form-label">
                    Tên ứng dụng <span className="req">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="appName"
                    name="appName"
                    className={`form-input ${errors.appName ? 'input-error' : ''}`}
                    placeholder="Ví dụ: App Bán Hàng, Đặt Xe..."
                    value={formData.appName}
                    onChange={(e) => {
                      setFormData({ ...formData, appName: e.target.value })
                      if (errors.appName) setErrors({ ...errors, appName: null })
                    }}
                    maxLength={120}
                  />
                  {errors.appName && <span className="error-text">{errors.appName}</span>}
                </div>

                {/* Field 2: Link Store (optional) */}
                <div className="form-group half-width">
                  <label htmlFor="storeLink" className="form-label">
                    Đường dẫn Store <span className="optional">(Tùy chọn)</span>
                  </label>
                  <input 
                    type="url" 
                    id="storeLink"
                    name="storeLink"
                    className={`form-input ${errors.storeLink ? 'input-error' : ''}`}
                    placeholder="https://apps.apple.com/... hoặc Play Store"
                    value={formData.storeLink}
                    onChange={(e) => {
                      setFormData({ ...formData, storeLink: e.target.value })
                      if (errors.storeLink) setErrors({ ...errors, storeLink: null })
                    }}
                  />
                  {errors.storeLink && <span className="error-text">{errors.storeLink}</span>}
                </div>

                {/* Field 3: Nền tảng (Checkbox) */}
                <div className="form-group half-width">
                  <label className="form-label">
                    Nền tảng ứng dụng <span className="req">*</span>
                  </label>
                  <div className="checkbox-group">
                    {['iOS', 'Android'].map((platform) => (
                      <label key={platform} className="checkbox-label">
                        <input 
                          type="checkbox"
                          checked={formData.platforms.includes(platform)}
                          onChange={() => handlePlatformToggle(platform)}
                        />
                        <span className="checkbox-text">{platform}</span>
                      </label>
                    ))}
                  </div>
                  {errors.platforms && <span className="error-text">{errors.platforms}</span>}
                </div>

                {/* Field 4: Công nghệ */}
                <div className="form-group half-width">
                  <label htmlFor="techStack" className="form-label">
                    Công nghệ phát triển <span className="optional">(Nếu biết)</span>
                  </label>
                  <select 
                    id="techStack"
                    className="form-select"
                    value={formData.techStack}
                    onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                  >
                    <option value="">-- Chọn công nghệ --</option>
                    <option value="flutter">Flutter</option>
                    <option value="react-native">React Native</option>
                    <option value="native-ios-android">Native (iOS Swift / Android Kotlin)</option>
                    <option value="unknown">Chưa rõ / Cần kỹ sư kiểm tra</option>
                  </select>
                </div>

                {/* Field 5: Tình trạng mã nguồn (Source Code) */}
                <div className="form-group half-width">
                  <label htmlFor="sourceCodeStatus" className="form-label">
                    Tình trạng mã nguồn (Source Code) <span className="req">*</span>
                  </label>
                  <select 
                    id="sourceCodeStatus"
                    className="form-select"
                    value={formData.sourceCodeStatus}
                    onChange={(e) => {
                      setFormData({ ...formData, sourceCodeStatus: e.target.value })
                      if (errors.sourceCodeStatus) setErrors({ ...errors, sourceCodeStatus: null })
                    }}
                  >
                    <option value="repo">Có Repository (GitHub / GitLab / Bitbucket)</option>
                    <option value="zip">Có file mã nguồn đóng gói (.zip, .tar)</option>
                    <option value="unknown">Chưa rõ / Cần liên hệ dev cũ</option>
                  </select>

                  {/* Warning if source code is unknown */}
                  {formData.sourceCodeStatus === 'unknown' && (
                    <div className="source-warning-box">
                      <AlertTriangle size={15} />
                      <span><strong>Lưu ý:</strong> DUDI chỉ nhận bảo trì khi có mã nguồn hợp lệ. Trường hợp chưa rõ mã nguồn, chúng tôi sẽ cần khảo sát riêng.</span>
                    </div>
                  )}
                </div>

                {/* Field 6: Gói quan tâm */}
                <div className="form-group half-width">
                  <label htmlFor="plan" className="form-label">
                    Gói dịch vụ quan tâm <span className="req">*</span>
                  </label>
                  <select 
                    id="plan"
                    className="form-select"
                    value={formData.plan}
                    onChange={(e) => {
                      setFormData({ ...formData, plan: e.target.value })
                      if (setSelectedPlan) setSelectedPlan(e.target.value)
                      if (errors.plan) setErrors({ ...errors, plan: null })
                    }}
                  >
                    <option value="Cơ bản">Gói Cơ bản (800.000đ / tháng)</option>
                    <option value="Tiêu chuẩn">Gói Tiêu chuẩn (2.000.000đ / tháng)</option>
                    <option value="Cao cấp">Gói Cao cấp (4.000.000đ / tháng)</option>
                    <option value="Chưa rõ">Chưa rõ / Cần tư vấn thêm</option>
                  </select>
                </div>

                {/* Field 7: Tình trạng ứng dụng (Checkbox) */}
                <div className="form-group full-width">
                  <label className="form-label">
                    Tình trạng thực tế đang gặp phải <span className="req">*</span>
                  </label>
                  <div className="checkbox-wrap-grid">
                    {[
                      { id: 'crash', label: 'Bị crash / Văng ứng dụng đột ngột' },
                      { id: 'broken-features', label: 'Lỗi chức năng / Không dùng được tính năng' },
                      { id: 'slow', label: 'Ứng dụng bị chậm, đơ lag' },
                      { id: 'need-release', label: 'Cần build và phát hành bản cập nhật lên Store' },
                      { id: 'other', label: 'Yêu cầu bảo trì định kỳ khác' }
                    ].map((st) => (
                      <label key={st.id} className="checkbox-pill">
                        <input 
                          type="checkbox"
                          checked={formData.appStatus.includes(st.id)}
                          onChange={() => handleStatusToggle(st.id)}
                        />
                        <span className="pill-text">{st.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.appStatus && <span className="error-text">{errors.appStatus}</span>}
                </div>

                {/* Field 8: Điện thoại hoặc Zalo */}
                <div className="form-group full-width">
                  <label htmlFor="phone" className="form-label">
                    Số điện thoại hoặc Zalo tiếp nhận phản hồi <span className="req">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    placeholder="Ví dụ: 0909163821 hoặc 0987654321"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value })
                      if (errors.phone) setErrors({ ...errors, phone: null })
                    }}
                    maxLength={14}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>

              {/* Form Security & Submit Bar */}
              <div className="form-footer">
                <div className="security-guarantee">
                  <Lock size={15} />
                  <span>DUDI <strong>không</strong> thu thập token, signing key hoặc mật khẩu tài khoản qua form công khai.</span>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <span>Gửi ứng dụng để DUDI kiểm tra</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-section-compact {
          padding: 38px 0 46px 0;
          position: relative;
          background-color: #FFFFFF !important;
          background-image: 
            radial-gradient(circle at 15% 50%, rgba(220, 38, 38, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 85% 50%, rgba(56, 189, 248, 0.03) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='138.56' viewBox='0 0 160 138.56'%3E%3Cg fill='none' stroke='%23E2E8F0' stroke-width='0.75' opacity='0.75'%3E%3Cpolygon points='80,0 160,46.19 160,92.38 80,138.56 0,92.38 0,46.19'/%3E%3Cline x1='80' y1='0' x2='80' y2='138.56'/%3E%3Cline x1='0' y1='46.19' x2='160' y2='92.38'/%3E%3Cline x1='0' y1='92.38' x2='160' y2='46.19'/%3E%3Ccircle cx='80' cy='69.28' r='1.5' fill='%23CBD5E1' opacity='0.8'/%3E%3Ccircle cx='0' cy='46.19' r='1.2' fill='%23CBD5E1' opacity='0.8'/%3E%3Ccircle cx='160' cy='46.19' r='1.2' fill='%23CBD5E1' opacity='0.8'/%3E%3Ccircle cx='80' cy='0' r='1.2' fill='%23CBD5E1' opacity='0.8'/%3E%3Ccircle cx='80' cy='138.56' r='1.2' fill='%23CBD5E1' opacity='0.8'/%3E%3C/g%3E%3C/svg%3E") !important;
          background-size: auto, auto, 160px 138.56px !important;
          background-position: center, center, center center !important;
          overflow: hidden;
        }
        .form-header-compact {
          margin-bottom: 22px;
        }

        /* 2-Column Grid: 3D Mascot on Left, Red Form on Right */
        .lead-form-layout-container {
          width: 100%;
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.12fr 1.25fr;
          gap: 32px;
          align-items: center;
        }

        .lead-form-mascot-col {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: transparent;
        }

        .mascot-img-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .mascot-full-img {
          width: 100%;
          max-width: 576px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 42px rgba(220, 38, 38, 0.18));
          animation: floatLeadMascot 4.2s ease-in-out infinite alternate;
        }

        @keyframes floatLeadMascot {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-12px);
          }
        }

        .lead-form-card-col {
          width: 100%;
          position: relative;
          z-index: 5;
        }

        /* Red Form Card */
        .form-card-wrapper {
          width: 100%;
          background: linear-gradient(145deg, #DC2626 0%, #B91C1C 55%, #991B1B 100%);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(220, 38, 38, 0.4);
          padding: 18px 22px;
          box-shadow: 0 20px 45px -10px rgba(220, 38, 38, 0.35), 0 8px 24px -4px rgba(15, 23, 42, 0.08);
          color: #FFFFFF;
          position: relative;
        }
        .form-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 10px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .full-width {
          width: 100%;
        }
        .half-width {
          width: calc(50% - 5px);
        }
        .form-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 2px;
        }
        .req {
          color: #FEF08A;
          font-weight: 800;
          margin-left: 2px;
        }
        .optional {
          font-weight: normal;
          color: #FEE2E2;
          font-size: 10.5px;
        }
        .form-input, .form-select {
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: #FFFFFF;
          font-size: 12px;
          color: var(--color-dark);
          transition: var(--transition);
          height: 32px;
        }
        .form-input:focus, .form-select:focus {
          outline: none;
          background: #FFFFFF;
          border-color: #FFFFFF;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
        }
        .input-error {
          border-color: #F87171 !important;
          background: #FFF5F5 !important;
          box-shadow: 0 0 0 2px rgba(248, 113, 113, 0.4) !important;
        }
        .error-text {
          font-size: 10.5px;
          color: #FEF08A;
          font-weight: 700;
          margin-top: 2px;
          background: rgba(0, 0, 0, 0.25);
          padding: 1px 5px;
          border-radius: 3px;
          width: fit-content;
        }
        .checkbox-group {
          display: flex;
          gap: 14px;
          align-items: center;
          padding: 2px 0;
          height: 32px;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12.5px;
          font-weight: 600;
          color: #FFFFFF;
          cursor: pointer;
          user-select: none;
        }
        .checkbox-label input[type="checkbox"] {
          accent-color: #2563EB;
          width: 16px;
          height: 16px;
          cursor: pointer;
          border-radius: 3px;
        }
        .checkbox-wrap-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .checkbox-pill {
          display: inline-flex;
          align-items: center;
          cursor: pointer;
        }
        .checkbox-pill input {
          display: none;
        }
        .pill-text {
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--radius-full);
          font-size: 11px;
          font-weight: 600;
          color: #FFFFFF;
          transition: var(--transition);
        }
        .checkbox-pill:hover .pill-text {
          background: rgba(255, 255, 255, 0.25);
        }
        .checkbox-pill input:checked + .pill-text {
          background: #FFFFFF;
          border-color: #FFFFFF;
          color: #DC2626;
          font-weight: 800;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        }
        .source-warning-box {
          display: flex;
          align-items: flex-start;
          gap: 5px;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(254, 240, 138, 0.4);
          color: #FEF08A;
          padding: 5px 8px;
          border-radius: var(--radius-sm);
          font-size: 11px;
          margin-top: 4px;
          line-height: 1.35;
        }
        .form-footer {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 10px;
        }
        .security-guarantee {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          color: #FEE2E2;
          max-width: 360px;
          line-height: 1.3;
        }
        .form-submit-btn {
          background: #FFFFFF;
          color: #DC2626;
          border: none;
          font-weight: 800;
          padding: 9px 18px;
          font-size: 13px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transition: all 0.25s ease;
        }
        .form-submit-btn:hover {
          background: #FEF2F2;
          color: #B91C1C;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }

        /* Success State */
        .form-success-box {
          text-align: center;
          padding: 30px 20px;
          color: #FFFFFF;
        }
        .success-icon-wrap {
          color: #FEF08A;
          margin-bottom: 16px;
        }
        .success-title {
          font-size: 24px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 12px;
        }
        .success-msg {
          font-size: 15.5px;
          color: #FEE2E2;
          line-height: 1.6;
          max-width: 540px;
          margin: 0 auto 24px auto;
        }
        .success-summary {
          background: rgba(0, 0, 0, 0.2);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 16px 20px;
          max-width: 440px;
          margin: 0 auto;
          text-align: left;
          font-size: 13.5px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          color: #FEE2E2;
        }
        .summary-line strong {
          color: #FFFFFF;
        }

        @media (max-width: 992px) {
          .lead-form-layout-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .mascot-full-img {
            max-width: 384px;
          }
        }

        @media (max-width: 768px) {
          .form-card-wrapper {
            padding: 16px 14px;
          }
          .half-width {
            width: 100%;
          }
          .form-footer {
            flex-direction: column;
            align-items: stretch;
          }
          .form-submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
