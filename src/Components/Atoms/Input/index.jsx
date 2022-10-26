import styled from "styled-components"

const Input = (props) =>{
    let {type, placeHolder, name, radius, color} = props;

    const Wrapper = styled.input`
        border-radius: ${radius || `5px`};
        border: 2px solid #ccc;
        // border-left-color: transparent;
        color: ${color || `#282828`};
        padding: .3rem;
        width: 100%;

        @media (min-width: 900px){
            padding: .5rem;
        }
    `;

return <Wrapper type={type} placeholder={placeHolder} name={name}/>
}
export default Input;

  
