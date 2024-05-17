export const fadeIn = {
  initial: 'hidden',
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
  transition: {
    duration: 0.5,
    ease: 'easeOut',
  },
}

export const slideRight = {
  initial: 'hidden',
  variants: {
    hidden: {
      x: -25,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
  transition: {
    duration: 0.5,
    ease: 'easeOut',
  },
}

export const slideLeft = {
  initial: 'hidden',
  variants: {
    hidden: {
      x: 25,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
  transition: {
    duration: 0.5,
    ease: 'easeOut',
  },
}

export const slideUp = {
  initial: 'hidden',
  variants: {
    hidden: {
      y: 75,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  transition: {
    duration: 0.5,
    ease: 'easeOut',
  },
}

export const slideDown = {
  initial: 'hidden',
  variants: {
    hidden: {
      y: -75,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  transition: {
    duration: 0.5,
    ease: 'easeOut',
  },
}

export const revealRight = {
  initial: 'hidden',
  variants: {
    hidden: {
      width: 0,
    },
    visible: {
      width: '100%',
    },
  },
  transition: {
    duration: 0.5,
    ease: 'easeOut',
  },
}
