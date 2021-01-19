import React, {useEffect, useRef} from "react";

// 누군가 element를 클릭했을 때 function을 실행시킬 것 
const useClick = (onClick) => {
    const element = useRef();
    // if (typeof onClick !== "function") {
    //     return;
    // }
    useEffect(() => {
        const e = element.current;
        if (e) {
            e.addEventListener("click", onClick); // onClick 이벤트 처리
        }
        // componentWillUnmount()
        return () => {
            if (e) {
                e.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
}

const App = () => {
    const sayHello = () => console.log("hello");
    const title = useClick(sayHello);
    // reference 사용
    const potato = useRef();
    setTimeout(() => potato.current?.focus(), 3000);
    return (
        <div>
            <h1 ref={title}>Hello</h1>
            <input ref={potato} placeholder="la" />
        </div>
    );
};

export default App;