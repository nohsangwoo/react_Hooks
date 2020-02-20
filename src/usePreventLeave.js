import React from 'react';

//8.usePreventLeave 예제
export const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = '';
  };
  //beforeunload 창이 닫히기 전에 함수가 실행되는것을 허락함
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);
  return { enablePrevent, disablePrevent };
};
//end of 8.usePreventLeave 예제

export default usePreventLeave;
