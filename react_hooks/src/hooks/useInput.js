import React, { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event.target);
    };
    return { value, onChange };
    /* return value; 와 return {value} 의 차이점
    {value}는 {value: value} 의 형태로 반환해준다.
    */
}

const App = () => {
    const name = useInput('Mr.');
    return (
        <div>
            <h1>Hello!</h1>
            <input placeholder="Name" {...name}></input>
            {/* value={name.value} onChange={name.onChange} 는 {...name} 과 같이 쓸 수 있음 => unpack*/}
        </div>
    )
}; 

export default App;