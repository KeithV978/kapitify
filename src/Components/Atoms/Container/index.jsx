
import styled from 'styled-components'


const Container = (props) => {
  const {
    children, 
    grow,
    radius, 
    bgColor, 
    margin, 
    padding, 
    width, 
    mdWidth, 
    height, 
    flex, 
    gap, 
    maxWidth} = props;
  
  const ContainerWrapper = styled.section`
    background-color: ${bgColor || `#fff`};
    border-radius: ${radius || `20px`};
    margin: ${margin ||  `0`};
    padding: ${padding};
    ${width? width : `100%`};
    height: ${height};
    display: ${flex? "flex": "block"};
    ${flex==="column"? `flex-direction: column`: `flex-direction: row`};
    gap: ${gap || `2rem`};
    

    @media (min-width: 481px){
      width: ${mdWidth};
      max-width: ${maxWidth};
      flex-grow: ${grow};
    }
  `;
  return (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
  )
}
export default Container