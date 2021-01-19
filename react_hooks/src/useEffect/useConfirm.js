// 사용자가 버튼을 클릭하는 작업을 하면 (이벤트를 실행하기 전에) 메시지를 보여준다.
import React from "react";

const useConfirm = (msg = "", callback, rejection) => {
    if (!callback || typeof callback !== "function") {
        return;
    }
    if (rejection && typeof rejection !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(msg)) { // 그냥 confirm만 쓰면 어떤 함수인지 몰라서 에러가 남
            callback();
        } else {
            rejection();
        }
    }
    return confirmAction;
}

const App = () => {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
};

export default App;