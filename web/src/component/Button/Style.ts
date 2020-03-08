import styled from "styled-components";

export const Container = styled.div`
    min-width: 100px;
    height: 45px;
    padding: 0 40px;
    line-height: 45px;
    background: rgb(239,184,12);
    background: linear-gradient(90deg, rgba(239,184,12,1) 0%, rgba(251,217,59,1) 100%);
    border-radius: 50px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    position:relative;
    top:50%;
    -webkit-transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    transform:translateY(-50%);

    &:hover {
        transition: all .1s ease-in-out;
        background: linear-gradient(0deg, rgba(239,184,12,1) 60%, rgba(251,217,59,1) 100%);
    }
`;
