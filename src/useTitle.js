import React, { useEffect, useState } from 'react';
//5. useTitle 예제
export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
//5. end of useTitle 예제

export default useTitle;
