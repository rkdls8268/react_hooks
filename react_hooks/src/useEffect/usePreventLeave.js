import React from "react";

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = " "; // 이거 안넣어주면 안되는데 이유가 뭘까?
    }
    // API에 뭔가를 보냈고 사람들이 닫지 않기를 바란다면 이걸 보호할 수 있게 활성화
    const enablePrevent = () => {
        window.addEventListener("beforeunload", listener);
    }
    // API가 응답을 해서 괜찮은 상태라면 닫는걸 신경쓰지 않아도 됨. 즉, 보호 활성화 X
    const disablePrevent = () => {
        window.removeEventListener("beforeunload", listener);
    }

    return { enablePrevent, disablePrevent };
}

const App = () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();

    return (
        <div>
            <button onClick={enablePrevent}>protect</button>
            <button onClick={disablePrevent}>unprotect</button>
        </div>
    );
};

export default App;