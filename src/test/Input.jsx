import {useState} from 'react';

function Input(){
    const [email, setEmail] = useState("");
    return (
        <>
        <input type="text" placeholder="Email 입력" onChange={e => setEmail(e.target.value)} value={email} />
        <h1>{email}</h1>
        </>
    )
}

export default Input;