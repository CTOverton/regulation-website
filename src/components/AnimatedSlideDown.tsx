'use client'
import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/Animated'
import { slideDown } from '@/assets/animations/animations'

export const AnimateSlideDown = ({
  children,
  ...other
}: { children: React.ReactNode } & AnimateOnScrollProps) => (
  <AnimateOnScroll animation={slideDown} {...other}>
    {children}
  </AnimateOnScroll>
)
