
import styled from "styled-components"

const Button = (props) => {
    let {
        children,
        type, 
        text, 
        border, 
        bgColor, 
        color, 
        padding, 
        radius} = props;
    
    const StyledButton = styled.button`
        display: inline-block;
        border: ${border || `none`};
        border-radius: ${radius || `5px`};
        background-color: ${bgColor || `var(--primary)`};
        color: ${color};
        padding: ${padding || `.5rem 1rem`};
        // z-index: 1;
    `;
    return<StyledButton type={type}>{children || text}</StyledButton>
}


export default Button;