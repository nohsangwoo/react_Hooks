import React, { useEffect, useRef } from 'react';
//6. useClick 예제
export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);
  return element;
};
//end of 6. useClick 예제

export default useClick;
