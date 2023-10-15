// 등장 애니메이션 (위, 아래, 좌, 우)
export const fadeIn = (direction, delay) => {
  return {
    // 숨겨져 있을 때 opacity: 0
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    // 보여줄 때 x,y값 0 원래대로, opacity: 1
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.08 * index,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  }),
};
