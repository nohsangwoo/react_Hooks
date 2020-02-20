import React, { useEffect, useRef } from 'react';
//10.useFadin
export const useFadeIn = (duration = 1, delay = 0) => {
  //default 값은 1

  const element = useRef();
  useEffect(() => {
    if (typeof duration !== 'number' || typeof delay !== 'number') {
      return;
    }
    if (element.current) {
      const {
        current: { style }
      } = element;
      console.log(style);
      style.opacity = 1;
      style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }
  }, [delay, duration]);
  return { ref: element, style: { opacity: 0 } };
};
//end of 10.useFadin

export default useFadeIn;
