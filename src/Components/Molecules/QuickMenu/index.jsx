import { useState, useEffect } from "react";
import styled from "styled-components";
import homeIcon from '../../../assets/icons/home.svg'
import heartIcon from '../../../assets/icons/heart_grey.svg'
import chatIcon from '../../../assets/icons/chat.svg'

const Wrapper = styled.div`
    width: 100%;
    display: block;
    position:fixed;
    bottom: 20px;
    transition: all .4s ease-in;
    z-index: 1000;
    

    & div {
      justify-content: center;     
    }

    & ul {  
      margin: auto;
      width: 70%;
      border-radius: calc(var(--radius) + 10px);
      background-color: #fff;
      // width: min-content;
      padding: .8rem 0;
      // justify-content: center;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border: 1px solid silver;
    }

    & li {
      // flex-basis: 33.3%;
      // justify-content: center;
    }
    & img {
      width: 130%;
    }
    @media (min-width: 550px){
        display: none;
    }
`;

const QuickMenu = () => {
  const [position, setPosition] = useState(window.screenY);
  const [showQuickMenu, setShowQuickMenu] = useState(true);

  useEffect(() =>{
    window.addEventListener("scroll", ()=> {
      console.log("scrolling "+window.scrollY)
      if((position - window.scrollY) > 20 || (window.scrollY - position) > 20){
        setShowQuickMenu(false)
        setPosition(window.screenY)
      }else{
        setShowQuickMenu(true)
        setPosition(window.screenY)
      } 
      // setPosition(window.scrollY);
    })

    return() =>{
        window.removeEventListener("scroll", ()=> setShowQuickMenu(false))
    }
}, [position, showQuickMenu])
   
  return (
    <Wrapper style={showQuickMenu? {bottom: `-80px`, opacity: `0`}: {bottom: `20px`, opacity: `1`}}>
    {/* <Wrapper> */}
      <div>
        <ul>
          <li><img src={chatIcon} alt="menu-icon-1" /></li>
          <li><img src={homeIcon} alt="home-icon-2" /></li>
          <li><img src={heartIcon} alt="heart-icon-3" /> </li>
        </ul>
      </div>
    </Wrapper>
  )
}
export default QuickMenu;