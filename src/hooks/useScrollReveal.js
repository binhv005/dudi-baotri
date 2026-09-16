import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-up, .reveal-scale, .reveal-left, .reveal-right, .reveal-stagger')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        // If already visible in viewport, reveal immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed')
        }
        observer.observe(el)
      })
    }

    observeAll()

    // Watch for DOM changes (Vite HMR, dynamic renders)
    const mutationObserver = new MutationObserver(() => {
      observeAll()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}

