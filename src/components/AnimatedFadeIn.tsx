'use client'
import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/Animated'
import { fadeIn } from '@/assets/animations/animations'

export const AnimatedFadeIn = ({
  children,
  ...other
}: { children: React.ReactNode } & AnimateOnScrollProps) => (
  <AnimateOnScroll animation={fadeIn} {...other}>
    {children}
  </AnimateOnScroll>
)
