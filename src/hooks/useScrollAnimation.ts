import { useState, useEffect, useRef, RefObject } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: UseScrollAnimationOptions = {},
): { ref: RefObject<T>; isVisible: boolean } => {
  const { threshold = 0.1, triggerOnce = false } = options
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false)
          }
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref, threshold, triggerOnce])

  return { ref, isVisible }
}
