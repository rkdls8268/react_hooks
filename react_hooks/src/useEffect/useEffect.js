import React, {useState, useEffect} from "react";

const App = () => {
    const sayHello = () => {
        console.log("hello");
    }
    const [number, setNumber] = useState(0);
    const [aNumber, setANumber] = useState(0);
    // useEffect(sayHello, []);
    // deps가 [] 비어있으면 component가 mount될 대만 sayHello 실행
    useEffect(sayHello, [number]);
    // number의 상태가 바뀔 때마다 sayHello 실행
    return (
        <div>
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>

        </div>
    )
}

export default App;