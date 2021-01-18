import React, { useState } from 'react';
// import ReactDOM from "react-dom";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    },
]

const useTabs = (initialTab, allTabs) => {
    // Hook은 컴포넌트 최상에어서 호출되어야 한다. 
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    // allTabs에 내용이 없거나 배열이 아닐 경우 리턴
    console.log(initialTab, ", allTabs: ", allTabs);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    // const [currentIndex, setCurrentIndex] = useState(initialTab);
    // 현재 선택한 탭의 content 얻기 (선택한 content의 인덱스 얻기)
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
};

const App = () => {
    console.log(content[0]);
    const {currentItem, changeItem} = useTabs(0, content); // content 배열의 첫 번째 요소 (즉, section 1)
    return (
        <div>
            <h1>Hello!</h1>
            {content.map((section, index) => (<button onClick={() => changeItem(index)}>{section.tab}</button>))}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;