import styled from "styled-components"

const Input = (props) =>{
    let {type, placeHolder, name, radius, color, margin} = props;

    const Wrapper = styled.input`
        border-radius: ${radius || `5px`};
        border: 2px solid #ccc;
        // border-left-color: transparent;
        color: ${color || `#282828`};
        padding: 0.4rem;
        width: 100%;
        margin: ${margin};

        @media (min-width: 900px){
            padding: .5rem;
        }
    `;

return <Wrapper type={type} placeholder={placeHolder} name={name}/>
}
export default Input;

  
