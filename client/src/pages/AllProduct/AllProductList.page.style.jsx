
import styled from "styled-components";

const Container = styled.div`
    border : 1px solid;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1vw;
    div {
        border : 1px solid;
        text-align: center;
    }
`
export { Container };