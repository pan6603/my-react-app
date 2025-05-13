import { useState } from "react";

function Count2() {
    const [count, setCount] = useState(3);

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count * 2)}>2</button>
                <button onClick={() => setCount(count / 2)}>2</button>
            </div>
        </>
    )
}

export default Count2;