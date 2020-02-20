import React, { useEffect } from 'react';
//9.useBeforeLeave
//일정범위 밖으로 마우스가 나갈때(커스텀가능) 작동
export const useBeforeLeave = onBefore => {
  const handle = event => {
    const { clientY } = event; //es6문법
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return;
    }
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, [handle, onBefore]); //한번만 실행되길 원할때
};
//end of 9.useBeforeLeave

export default useBeforeLeave;
