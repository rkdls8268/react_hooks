import React, {useEffect, useRef} from "react";

// 누군가 element를 클릭했을 때 function을 실행시킬 것 
const useClick = (onClick) => {
    const element = useRef();
    
    useEffect(() => {
        // condition syntax(if)는 useEffect와 쓰일 수 없다고 함.
        // useEffect() 안에서 if문 사용해주면 해결됨.
        if (typeof onClick !== "function") {
            return;
        }
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
    // ? 사용하지 않으면 오류남. 아마 mount가 너무 빨리되어서 potato.current가 극 초반에는 존재하지 않게 되므로 오류나는 것 같다.
    return (
        <div>
            <h1 ref={title}>Hello</h1>
            <input ref={potato} placeholder="la" />
        </div>
    );
};

export default App;