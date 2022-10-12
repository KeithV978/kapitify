import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
`;
const PgLoading = styled.div`
    width: 100%;
    height: 99vh;
    position: relative;

    & div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border:3px solid #56cb97;
        border-top-color: #06335b;
        border-radius: 50%;
        animation: ${rotate} 3s linear infinite;
    }
`;
const PageLoading = () => {
  return (
    <PgLoading>
        <div></div>
    </PgLoading>
  )
}
export default PageLoading