// navigator가 online 또는 offline이 되는 것을 막아줄 것
// 혹은 offline이 되었을 때 안내창을 띄워줄 것

import React, {useEffect, useState} from "react";

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    // default 값으로 navigator.onLine -> 웹사이트가 온라인인지 아닌지 true/false로 알려줄 것
    const handleChange = () => {
        // 만약 handleChange가 바뀐다면 
        // online, offline 두 개를 하나로 사용해서 실행하는게 더 좋을 것 같아서 만듦
        if (typeof onChange === "function") {
            onChange(navigator.onLine); 
        }
        setStatus(navigator.onLine);
    }
    
    // 즉, 상태가 online이면 handleChange를 실행한다. 
    // navigator가 online이면 항상 현재의 status를 줄 것이다. 
    // 만약 online이 바뀐다면 status를 바꿔줘야한다.
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status; // true or false
}

const App = () => {
    // network가 바뀔 떄 자동으로 function이 작동되게 하고 싶으므로 만듦.
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went Online" : "We are offline");
    };
    const online = useNetwork(); // true/false

    // 라이브러리를 만들 때 사람들이 아래의 처리를 하지 않게 해야한다. 이는 단순히 UI를 변경하는 것에 그치기 때문
    // 그래서 위의 handleNetworkChange()를 만듦!!
    return (
        <div>
            <h1>{online ? "Online" : "Offline"}</h1>
        </div>
    );
}

export default App;