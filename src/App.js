import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useInput from './useInput';
import useBeforeLeave from './useBeforeLeave';
import useNetwork from './useNetwork';
import useTitle from './useTitle';
import useFadeIn from './useFadeIn';
import usePreventLeave from './usePreventLeave';
import useConfirm from './useConfirm';
import useClick from './useClick';
import useTabs from './useTabs';
import useScroll from './useScroll';
import useFullscreen from './useFullscreen';
import useNotification from './useNotification';
import useAxios from './useAxios';
//npm install axios 설치후 사용가능

//====================================================
const App = () => {
  //1. useState 예제
  const [item, setItem] = useState(1);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };
  const resetItem = () => {
    setItem(1);
  };
  //end of use state예제

  //2. useInput예제
  const maxLen = value => value.length <= 10; //해당 길이가 10이상이면 false반환
  const exeptChar = value => !value.includes('@');
  const name = useInput('Mr.', maxLen, exeptChar); //initioalValue로 전해짐
  const email = useInput('@');
  //end of useInput예제예제

  //3. useTab 예제
  const content = [
    {
      tab: 'section 1',
      content: "i'm the con content of the section 1"
    },
    {
      tab: 'section 2',
      content: "i'm the con content of the section 2"
    }
  ];
  const { currentItem, changeItem } = useTabs(0, content); //default
  //end of 3useTab 예제

  //4. useEffect 예제
  const sayHello = () => console.log('hello');
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  //ComponentWillUpdate의기능을함
  //맨 첫번째 인자의 함수는, 두번째 인자값이 변경될때만 실행됨.
  //즉 number변수에 변화가 있을때만 sayHello의 함수가 작동
  //
  //useEffect(sayHello,); 이상태에서는
  //ComponentDidMount, ComponentDidUnmount, ComponentWillUpdate의 기능을 가지고있음
  //4. end of useEffect 예제

  //5. useTitle
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 5000);
  //

  //6. useClick 예제 getElementByid와 비슷한것
  const sayHello_2 = () => console.log('hello');
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000);
  const title = useClick(sayHello_2);
  //end of 6 useClick 예제

  //7. useConfirm
  const deleteWorld = () => console.log('Deleting the world...');
  const abort = () => {
    console.log('Aborted');
  };
  const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);
  //7. end of useConfirm

  //8. usePreventLeave 예제
  const { enablePrevent, disablePrevent } = usePreventLeave();
  //end of 8. usePreventLeave 예제

  //9. useBeforeLeave
  const begForLife = () => console.log('pls dont leave');
  useBeforeLeave(begForLife);
  //end of 9. useBeforeLeave

  //10.useFadeIn
  const fadeInH1 = useFadeIn();
  useEffect(() => {});
  //end of 10.useFadeIn

  //11.useNetwork
  const handleNetworkChange = online => {
    console.log(online ? 'We just went online' : 'We are offline');
  };
  const onLine = useNetwork(handleNetworkChange);
  //end of 11.useNetwork

  //12. useScroll
  const { y } = useScroll();
  //end of 12. useScroll

  //13. useFullScreen 예제
  const onFullS = isFull => {
    console.log(isFull ? 'We are full' : 'we are small');
  };
  //end of 13. useFullScreen 예제
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  //14. useNotification
  const triggerNotif = useNotification('Can I steal ur oshiri?', {
    body: 'I love keiko oshiri'
  });

  //15 useAxios
  const { loading, data, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json'
  });

  return (
    <div className="App" style={{ height: '1000vh' }}>
      <div className="useStateEx">
        <h1>1. useState Ex</h1>
        <h2>item {item}</h2>
        <h2>Start with Hooks!</h2>
        <h3>setItem : {setItem}</h3>
        <button onClick={incrementItem}>Increment</button>
        <button onClick={decrementItem}>Decrement</button>
        <button onClick={resetItem}>Reset</button>
      </div>
      <div className="useInputEx">
        <h1>2. useInput Ex</h1>
        <input
          placeholder="name"
          {
            ...name
            /*value={name.value} onChange{name.onChage} 를 생략*/
          }
        ></input>
        <input placeholder="email" {...email}></input>
      </div>
      <div className="useTabEx">
        <h1>3. useTap Ex</h1>
        {content.map((
          section,
          index //index는 map 기본 인자 0,1,2,3...이런식으로 값을 가짐
        ) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        content : {currentItem.content}
      </div>
      <div className="useEffectEx">
        <h1>4. useEffect Ex</h1>
        <div>Hi</div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      </div>
      <div className="useTitleEx">
        <h1>5. useTitleEx</h1>
      </div>
      <div className="useClickEx">
        <h1 ref={title}>6. useClickEx</h1>
        <span>
          if you click the useClickEx, you'll see "say Hello" in the console
          window.
        </span>
        <input ref={input} placeholder="la"></input>
      </div>
      <div className="useConfirmEx">
        <h1 ref={title}>7. useConfirmEx</h1>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
      <div className="usePreventLeaveEx">
        <h1 ref={title}>8. usePreventLeaveEx</h1>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>UnProtect</button>
      </div>
      <div className="useBeforeLeaveEx">
        <h1>9. useBeforeLeave</h1>
      </div>
      <div className="useFadinEx">
        <h1 {...fadeInH1}>10. useFadin</h1>
      </div>
      <div className="useNetworkEx">
        <h1>11. useNetwork</h1>
        <h3>{onLine ? 'online' : 'offline'}</h3>
      </div>
      <div className="useScrollEx">
        <h1>12. useScroll</h1>
        <h2
          style={{
            color: y > 100 ? 'red' : 'blue'
          }}
        >
          if this scroll is change then it's change the color blue->red
        </h2>
      </div>
      <div className="useFullScreenEx">
        <h1>13. useFullScreen</h1>
        <div ref={element}>
          <img
            style={{ height: 200 }}
            src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/75360971_2607561625987883_108205765296689893_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=mjJCo_203JYAX_sckXY&oh=19d6b50a16bdf5bcab24c8a240d5aa30&oe=5ECD542B"
          />
          <button onClick={exitFull}>Exit fullScreen</button>
        </div>
        <button onClick={triggerFull}>Make fullScreen</button>
      </div>
      <div className="useNotificationEx">
        <h1>14. useNotificationEx</h1>
        <button onClick={triggerNotif}>Notification</button>
      </div>
      <div className="useAxiosEx">
        <h1>15. useAxiosEx</h1>
        <h2>{data && data.status}</h2>
        <span>{loading && 'Loading'}</span>
        <button onClick={refetch}>useAxios_Refetch_BTN</button>
      </div>
    </div>
  );
};

export default App;
