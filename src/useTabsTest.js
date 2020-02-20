import React, { Component } from 'react';
import useTabs from './useTabs';

class MyComponent extends Component {
  render() {
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

    //3. useTab 예제
    const { currentItem, changeItem } = useTabs(0, content); //default
    //end of useTab 예제
    return (
      <div>
        <h1>3. useTap Ex</h1>
        {content.map((
          section,
          index //index는 map 기본 인자 0,1,2,3...이런식으로 값을 가짐
        ) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        content : {currentItem.content}
      </div>
    );
  }
}

export default MyComponent;
