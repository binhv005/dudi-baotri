import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Deliverables from './components/Deliverables'
import PricingTable from './components/PricingTable'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import ScopeBoundaries from './components/ScopeBoundaries'
import FAQ from './components/FAQ'
import LeadForm from './components/LeadForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Toast from './components/Toast'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('Tiêu chuẩn')
  const [toastMessage, setToastMessage] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Initialize smooth scroll reveal transitions
  useScrollReveal()

  // 1. Khi reload trang phải lên lại đầu trang & Scroll progress bar
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100
        setScrollProgress(scrollPercent)
      }
    }

    window.addEventListener('scroll', handleScrollProgress)
    return () => window.removeEventListener('scroll', handleScrollProgress)
  }, [])

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage('')
    }, 3500)
  }

  // 2. Xử lý click Hotline: Desktop copy, Mobile gọi trực tiếp
  const handlePhoneClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768
    const phoneNumber = '0909163821'
    const displayPhone = '0909 163 821'

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`
    } else {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phoneNumber)
          .then(() => {
            showToast(`Đã sao chép số Hotline DUDI: ${displayPhone}`)
          })
          .catch(() => {
            showToast(`Hotline DUDI: ${displayPhone}`)
          })
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = phoneNumber
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        showToast(`Đã sao chép số Hotline DUDI: ${displayPhone}`)
      }
    }
  }

  // 3. Chọn gói và tự động cuộn đến form
  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName)
    const formElement = document.getElementById('form-dang-ky')
    if (formElement) {
      const headerOffset = 75
      const elementPosition = formElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="app-root">
      {/* Top Reading / Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* S01: Header */}
      <Header onPhoneClick={handlePhoneClick} onSelectPlan={handleSelectPlan} />

      <main>
        {/* S02: Hero Section */}
        <Hero onSelectPlan={handleSelectPlan} />

        <div className="section-divider-glow" />

        {/* S03: Vấn đề & Thực trạng */}
        <Problems />

        <div className="section-divider-glow" />

        {/* S05: Đầu ra & Phạm vi cam kết */}
        <Deliverables />

        <div className="section-divider-glow" />

        {/* S06: Bảng giá 3 gói chi tiết */}
        <PricingTable onSelectPlan={handleSelectPlan} />

        <div className="section-divider-glow" />

        {/* S07: Quy trình sự cố & tiếp nhận */}
        <Process />

        <div className="section-divider-glow" />

        {/* S08: Case study & mẫu thực tế */}
        <CaseStudies />

        <div className="section-divider-glow" />

        {/* S09: Giới hạn & Định nghĩa nghiệm thu */}
        <ScopeBoundaries />

        <div className="section-divider-glow" />

        {/* S10: Câu hỏi thường gặp */}
        <FAQ />

        <div className="section-divider-glow" />

        {/* S11: Form nhận yêu cầu */}
        <LeadForm 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
          showToast={showToast} 
        />

        {/* S12: CTA chốt hành động */}
        <FinalCTA onPhoneClick={handlePhoneClick} />
      </main>

      {/* S13: Footer pháp lý */}
      <Footer onPhoneClick={handlePhoneClick} />

      {/* Floating Action Buttons (Robot Mascot AI, Call, Zalo, Top) */}
      <FloatingActions 
        onPhoneClick={handlePhoneClick} 
        onSelectPlan={handleSelectPlan}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  )
}