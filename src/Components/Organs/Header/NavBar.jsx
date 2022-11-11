import styled, {keyframes} from "styled-components"

const slideUp = keyframes`
    0%{margin-top: 60px; opacity: 0;}
    100%{margin-top: 0; opacity: 1;}
`;
const Wrapper = styled.nav`
position: absolute;
top:1rem;
z-index: 100;
background-color: #fff;
color: var(--primary);
font-family: firma-semi-bold;
box-shadow: 3px 4px 12px #979797;
border-radius: 20px;
padding: 1rem 2rem;
width: 20vw;
transition: all .4s ease-in;
animation: ${slideUp} .4s ease-in;

// display: none;

& ul{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
}
& ul li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: .6rem;
}

`;

const NavBar = (props) => {
    let {listItems} = props;
  return (
   <Wrapper>
        <ul>
            {listItems.map((item, index)=>{
            return <li key={index}>
                        <a href="https://kapitify.com">{item}</a> 
                    </li>
            })}
        </ul>
   </Wrapper>  
)}
export default NavBar;