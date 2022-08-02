
import styled from "styled-components";

const Container = styled.div`
    border : 1px solid;
    width: 20vw;
    margin: auto;
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