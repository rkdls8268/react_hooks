// 알람이 실행되는 hook
import React, {} from "react";

const useNotification = (title, options) => {
    if(!("Notification" in window)) {
        return;
    }
    const fileNotif = () => {
        // Notification.permission은 read only
        // 사용자가 알림 받기를 거부했는지(denied), 허가했는지(granted), default인지 알려줌
        if (Notification.permission !== "granted") {
            // permission 요구
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, options); // 알림창 띄우기
                    console.log("granted");
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options); // 알림창 띄우기
            console.log("granted");
            // options에는 body, icon 등이 들어감
        }
    }
    return fileNotif;
}

const App = () => {
    const triggerNotif = useNotification("Notification", {body: "hi there!"});
    return (
        <div>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
};

export default App;
// safari에서는 되는데 chrome에서는 안된다 :(