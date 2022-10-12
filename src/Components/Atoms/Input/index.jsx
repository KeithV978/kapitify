import styled from "styled-components"

const Input = (props) =>{
    let {type, placeHolder, name, radius, color} = props;

    const Wrapper = styled.input`
        border-radius: ${radius || `5px`};
        border: 2px solid #ccc;
        color: ${color || `#ccc`}
        font-size: 1rem;
        padding: 1rem;
        width: 100%;
    `;

return <Wrapper type={type} placeholder={placeHolder} name={name}/>
}
export default Input;

  
