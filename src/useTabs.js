import React, { useState } from 'react';
//3. useTap 예제
export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};
//end of useTap 예제

export default useTabs;
