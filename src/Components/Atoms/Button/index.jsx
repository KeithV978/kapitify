
import styled from "styled-components"

const Button = (props) => {
    let {type, text, border, bgColor, color} = props;
    
    const StyledButton = styled.button`
        border: ${border || `none`};
        border-radius: 5px;
        background-color: ${bgColor};
        color: ${color};
        padding: 1rem;
    `;
    return<StyledButton type={type}><img src={text} alt="btn"/></StyledButton>
}


export default Button;