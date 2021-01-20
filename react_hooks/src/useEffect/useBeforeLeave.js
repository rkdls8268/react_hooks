// 기본적으로 탭을 닫을 떄 실행되는 function
// 마우스가 페이지를 벗어날 때 실행시키는 함수
import React, {useEffect} from "react";

const useBeforeLeave = (onBefore) => {
    const handle = event => {
        // console.log(event);
        const {clientY} = event;
        if (clientY <= 0) { // clientY가 0보다 작은 경우는 위를 향할 때!
            onBefore();
        }
    };
    useEffect(() => {
        if (typeof onBefore !== "function"){
            return;
        }
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
}

const App = () => {
    const msg = () => console.log("plz don't leave");
    useBeforeLeave(msg);
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}

export default App;