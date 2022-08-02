
import styled from "styled-components";

const Container = styled.div`
    border : 1px solid;
    width: 20vw;
    margin: auto;
    text-align: center;
    h2 {
        /* border : 1px solid; */
        width: fit-content;
        margin: auto auto .5vw auto;
        
    }
    form {
        display: flex;
        flex-direction: column;
        gap: .2vw;
        input, select, button {
            height: 5vh;
        }
    }
`
export { Container };