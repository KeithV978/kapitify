import styled from "styled-components"

const Wrapper = styled.nav`
position: absolute;
top:60px;
background-color: #fff;
color: var(--primary);
font-family: firma-semi-bold;
box-shadow: 3px 4px 12px #979797;
border-radius: 20px;
padding: 1rem 2rem;
height: 70vh;
width: 20vw;

display: none;

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
    // margin: 2rem 0;
}

`;

const NavBar = (props) => {
    let {listItems} = props;
  return (
   <Wrapper>
        <ul>
            {listItems.map((item, index)=>{
            return <li key={index}>
                        <p>{item}</p> 
                    </li>
            })}
        </ul>
   </Wrapper>  
)}
export default NavBar;