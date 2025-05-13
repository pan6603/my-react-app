import {useState} from 'react';

function Count() {
    const [count, setCount] = useState(0);
    return (
        <>
        <div>{count}
            <h1>{count}</h1>
            <button onClick={()=> setCount(count * 1)}>+1</button>
            <button onClick={()=> setCount(count / 1)}>-1</button>
        </div>
        </>
    )
}

export default Count;