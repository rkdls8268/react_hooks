// 유저가 스크롤해서 무언가를 지나쳤을 때 색상을 바꾸던가 등을 할 수 있음
import React, {useState, useEffect} from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = event => {
        // console.log("y: ", window.scrollY, ", x: ", window.scrollX);
        setState({y: window.scrollY, x: window.scrollX}); // x, y좌표 값 저장
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
}

const App = () => {
    const { y } = useScroll(); // y좌표 값만 필요 (상하 스크롤)
    // 스크롤을 할 때 y좌표 값이 100 이하이면 파란색, 아니면 빨간색을 보여줄 것
    return (
        <div style={{height: "1000vh"}}>
            <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>Hello</h1>
        </div>
    );
};

export default App;