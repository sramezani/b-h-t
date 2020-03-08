import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    min-height: 600px;
    margin: 0 0 15px 0;

    @media (max-width: 680px) {
        display: grid;
    }
`;

export const Left = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;

    @media (max-width: 680px) {
        flex: none;
        position: relative;
        width: 100%;
        order: 2;
        flex-direction: row;
        margin: 0 0 15px 0;
        height: 300px;
    }
`;

export const LeftTop = styled.div`
    margin: 0 0 15px 0;
    flex: 1;

    @media (max-width: 680px) {
        margin: 0 15px 0 0;
    }
    
`;

export const LeftBottom = styled.div`
    flex: 1;
`;

export const Middle = styled.section`
    display: flex;
    flex: 3;
    margin: 0 15px;

    @media (max-width: 680px) {
        flex: none;
        position: relative;
        width: 100%;
        order: 1;
        margin: 0 0 15px 0;
        height: 500px;
    }
`;

export const Right = styled.section`
    display: flex;
    flex: 1;

    @media (max-width: 680px) {
        flex: none;
        position: relative;
        width: 100%;
        order: 3;
        height: 500px;
    }
`;

