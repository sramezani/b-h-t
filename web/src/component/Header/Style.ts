import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.olive};
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    margin: 0 0 15px 0;
`;