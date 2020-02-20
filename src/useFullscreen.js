import React, { useRef } from 'react';
//import MyComponent from './useTabsTest';
export const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullscreen();
    }
    runCb(true);
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === 'function') {
      callback(false);
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

export default useFullscreen;
