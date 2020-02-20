import React, { useState } from 'react';

//2. use Input 예제
export const useInput = (initioalValue, valitator, valChar) => {
  const [value, setValue] = useState(initioalValue);
  const onChange = event => {
    const {
      target: { value }
    } = event; //event.target.value와 같은문법es6
    let willUpdate1 = true; //default값
    let willUpdate2 = true; //default값
    //console.log(value);
    //console.log(valitator(value));
    //console.log(valitator);
    if (typeof valitator === 'function') {
      willUpdate1 = valitator(value);
      //validator엔 value.length <= 10 의 조건으로 true,false를 return
      //따라서 value값을 validator함수인자로 넣어서 true or false를 반환받음
      //반환받은 값음 willUpdate에 넣어짐
    }
    if (typeof valChar === 'function') {
      willUpdate2 = valChar(value);
    }

    if (willUpdate1 && willUpdate2) {
      //willUpdate가 true일 경우에만 value값 업데이트됨
      //setValue로 value값 조정가능
      setValue(value);
    } else {
    }
  };
  return { value, onChange }; //initioalValue의 값이 합쳐진 value의 값
};
//end of useInput예제
export default useInput;
