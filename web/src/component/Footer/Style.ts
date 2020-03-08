import styled from "styled-components";

export const Container = styled.footer`
    background-color: ${({ theme }) => theme.colors.greenLight};
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    height: 200px;
`;