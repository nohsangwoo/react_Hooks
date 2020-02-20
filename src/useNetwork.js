import React, { useEffect, useState } from 'react';
//11. useNetwork
export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  //네트워크 상태가 online인지 offline인지 체크해줌
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, [handleChange]);
  return status;
};
//end of 11. useNetwork

export default useNetwork;
