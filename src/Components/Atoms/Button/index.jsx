
import styled from "styled-components"

const Button = (props) => {
    let {text, border, bgColor, color} = props;
    
    const StyledButton = styled.button`
        border: ${border || `none`};
        border-radius: 5px;
        background-color: ${bgColor};
        color: ${color};
        padding: 1rem;
    `;
    return<StyledButton><img src={text} alt="btn"/></StyledButton>
}


export default Button;