import React, { useState } from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        // console.log(event.target);
        const {
            target: {value}
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
    /* return value; 와 return {value} 의 차이점
    {value}는 {value: value} 의 형태로 반환해준다.
    */
}

const App = () => {
    const maxLen = (item) => item.length <= 10;
    // const maxLen = value => !value.includes("@");
    const name = useInput('Ms.', maxLen);
    console.log('...name: ',{...name});
    // ...는 전개 연산자로 좌항에서 명시적으로 할당되지 않은 나머지 배열 값들을 할당
    return (
        <div>
            <h1>Hello!</h1>
            <input placeholder="Name" {...name}></input>
            {/* value={name.value} onChange={name.onChange} 는 {...name} 과 같이 쓸 수 있음 => unpack*/}
        </div>
    )
}; 

export default App;