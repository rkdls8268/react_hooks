import React, {useEffect, useState} from "react";
import defaultAxios from "axios";
// axios: HTTP request를 만드는 것
// axios는 instance 만드는 것을 허용하고 configuration 하고 그것과 함께 헤더를 보낼 수 있다.
// 예를 들면, baseUrl, headers와 같은 default를 설정할 때
// 만약 instance가 없으면 defaultAxios로 설정해준다.

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    console.log(opts.url);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now()); // 매번 숫자가 바뀜(즉, 매 초마다 업데이트 될 것)
    }
    const [trigger, setTrigger] = useState(0);
    useEffect(() => {
        if (!opts.url) {
            return;
        };
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            });
        }).catch(error => {
            setState({...state, loading: false, error })
        });
    }, [trigger]); // trigger가 변경되면 useEffect가 다시 생성됨.
    return {...state, refetch};
}

const App = () => {
    const {loading, data, error, refetch} = useAxios({
        url: "https://yts-proxy.now.sh/list_movies.json"
    });
    console.log(loading, error, JSON.stringify(data));
    // {loading && "Loading"}: loading을 true로 변환할 수 있는 경우 "Loading"을 반환하고 아니면 loading 반환
    // 거짓으로 변환할 수 있는 표현의 예) null, NaN, 0, 빈 문자열, undefined
    return (
        <div>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};

export default App;