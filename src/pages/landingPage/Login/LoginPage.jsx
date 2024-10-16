import React from "react";
import FormLogin from '../components/Login'
import styled from "styled-components";
export const LoginPage = (props) => {
    return (
       <StyledWrapper >
        <FormLogin />
       </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
   
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    
`;