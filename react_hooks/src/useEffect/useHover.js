import React, {useRef, useEffect} from 'react';

const useHover = (onHover) => {
    const element = useRef();
    const e = element.current;
    
    useEffect(() => {
        if (typeof onHover !== "function") {
            return;
        }
        if (e) {
            e.addEventListener("mouseenter", onHover);
        }
        return () => {
            if (e) {
                e.removeEventListener("mouseenter", onHover);
            }
        };
    }, [onHover]);
    return element;
}

const App = () => {
    const sayHello = () => {console.log("hello")};
    const hover = useHover(sayHello); // hover 될 때마다 sayHello 호출됨
    return (
        <div>
            <h1 ref={hover}>hello</h1>
        </div>
    );
};

export default App;