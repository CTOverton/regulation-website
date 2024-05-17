'use client'
import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/Animated'
import { slideUp } from '@/assets/animations/animations'

export const AnimateSlideUp = ({
  children,
  ...other
}: { children: React.ReactNode } & AnimateOnScrollProps) => (
  <AnimateOnScroll animation={slideUp} {...other}>
    {children}
  </AnimateOnScroll>
)
