'use client'

import {
  motion,
  Transition,
  useAnimation,
  useInView,
  Variants,
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { slideUp } from '@/assets/animations/animations'

export type AnimateOnScrollProps = {
  animation?: {
    initial: string
    variants: Variants
    transition?: Transition
  }
  delay?: number
  once?: boolean
  amount?: 'some' | 'all' | number
  children: React.ReactNode
} & React.HTMLProps<HTMLDivElement>

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  animation = slideUp,
  delay,
  once = true,
  amount,
  children,
  ...other
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: once, amount })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible').then((_) => {})
    } else if (!isInView && !once) {
      mainControls.start('hidden').then((_) => {})
    }
  }, [isInView, mainControls, once])

  return (
    <div ref={ref} {...other}>
      <motion.div
        variants={animation.variants}
        initial={animation.initial}
        animate={mainControls}
        transition={{
          ...animation.transition,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
