// 기본적으로 하나의 element를 가지는데 서서이 fadein 시킬 것
// css를 가지고도 만들 수 있는데 animation을 우리 hooks에 포함시키는 방법을 알아보도록 하자.
import React, {useEffect, useRef} from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    // 이 element 안으로 나타나게 하기 위해서 useEffect를 다시 쓸 것이다.
    // 이걸 하기 전에 element의 opacity를 0로 해줄 것이다. 
    const e = element.current;
    useEffect(() => {
        if (typeof duration !== "number" || typeof delay !== "number") {
            return;
        }
        if (e) {
            e.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            e.style.opacity = 1;
            //이 hook을 더 크게 만들고 싶다면 transition 대신에 property를 사용해주면 된다. 
        }
    }, []);
    return {ref: element, style: {opacity: 0}};
}

const App = () => {
    // 커스터마이징 옵션을 주겠다. (duration, delay)
    const fadeInH1 = useFadeIn(1, 3);
    const fadeInP = useFadeIn(3, 5);
    return (
        <div>
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>HI how are you?</p>
        </div>
    );
}

export default App;