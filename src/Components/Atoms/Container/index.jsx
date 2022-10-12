import React from 'react'
import styled from 'styled-components'


const Container = (props) => {

  const {children, radius, bgColor, margin, width, height, flex} = props;
  
  const ContainerWrapper = styled.section`
    background-color: ${bgColor || `#fff`};
    border-radius: ${radius || `20px`};
    margin: ${margin ||  `2rem 0`};
    width: ${width};
    height: ${height};
    display: ${flex? "flex": "block"};
    gap: 2rem;
  `;

  return (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
  )
}
export default Container