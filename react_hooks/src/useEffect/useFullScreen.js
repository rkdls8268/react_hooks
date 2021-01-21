// 이미지를 fullScreen으로 만드는 hook
import React, {useRef} from "react";

// callback passing
// 사람들에게 상태 알려주기
// API 확장시켜서 화면을 작거나 크게 만들어 줌.

const useFullscreen = (onFullscreen) => {
    const element = useRef();

    // runCb을 만들어줌으로써 triggerFull, exitFull 각각에서 확인해주지 않아도 된다.
    const runCb = isFull => {
        if (onFullscreen && onFullscreen === "function") {
            onFullscreen(isFull); // 이렇게 해주면 각각의 함수에서 runCb(true/false)를 설정해주어야 한다. 그래야 그대로 받아서 반환해주므로!
        }
    }

    // Fullscreen을 요청할 땐 element와 함께 requestFullscreen 사용
    const triggerFull = () => {
        const e = element.current;
        if (e) {
            if (e.requestFullscreen) { // chrome
                e.requestFullscreen();
            } else if (e.mozRequestFullScreen) { // firefox
                e.mozRequestFullScreen();
            } else if (e.webkitRequestFullscreen) { // opera
                e.webkitRequestFullscreen();
            } else if (e.msRequestFullscreen) { // ms
                e.msRequestFullscreen();
            }
            runCb(true);
        }
    };
    // Fullscreen에서 빠져나오고 싶을 땐 document를 통해서 빠져나옴
    // fullscreen 아닌 상태에서 exitFull 버튼 누르면 오류남 why?
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCb(false);
    };
    return {element, triggerFull, exitFull};
};

const App = () => {
    // 콜백) triggerFull이 Fullscreen으로 만들어주는 역할을 하게 되면 exitFull은 nonFullscreen으로 만들어 주는 function이 되도록 
    const onFullscreen = (isFull) => {
        console.log(isFull ? "Full":"Small");
    }
    const {element, triggerFull, exitFull} = useFullscreen(onFullscreen);
    return (
        <div>
            <div ref={element}>
                <img src="https://user-images.githubusercontent.com/31029088/105271077-3b404d00-5bda-11eb-9857-e6e82982877a.png" alt="gain.png" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
};

export default App;