import { useState } from "react"; 
export default function Counter() {
    console.log('Counter component');
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }
    return (
        <div>
            <h2>Counter value is: {count}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

        </div>
    )
}