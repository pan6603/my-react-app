import styled from "styled-components"

const Button = styled.button`
    width: 300px;
    height: 200px;
    background: #000;
    color: ${props => props.primary ? "#fff" : "red"}
`

function Box({login}) {
    return (
        <Button primary={false}>
            <h1>{login ? "환영합니다" : "로그인을 해주세요"}</h1>
        </Button>
    )
}

export default Box;