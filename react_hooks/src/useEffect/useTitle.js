import React, {useState, useEffect} from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        // <title> 얻기
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title; // title 값 변경
    }
    useEffect(updateTitle, [title]); // componentDidMount, componentWillUpdate를 가지고 있는 것임
    return setTitle;
}

const App = () => {
    // titleUpdater는 setTitle을 리턴하기 때문에 setTitle과 동일한데 기본값에 의해 useTitle은 Loading...이 됨.
    const titleUpdater = useTitle("Loading...");
    // 시간 설정해서 titleUpdate하기
    setTimeout(() => titleUpdater("Home"), 3000); // titleUpdater("Home") = setTitle("Home")
    return (
        <div>
            <div className="hi_dev">Hi</div>
        </div>
    );
};

export default App;