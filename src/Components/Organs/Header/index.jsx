import React from 'react'
import styled from 'styled-components'
import {SearchBar, Container} from '../../index'


// icons import
import accountIcon from '../../../assets/icons/accounts.svg';
import chatIcon from '../../../assets/icons/chat.svg';
import interestIcon from '../../../assets/icons/interest.svg'
import logo from '../../../assets/icons/logo.svg'
import Hamburger from '../../../assets/icons/Hamburger.svg'

const Header = () => {
    const HeaderWrapper = styled.header`
    margin-top: 4rem;
    padding: 3rem 0;
    justify-content: space-between;

    & > div {
      width: 70%;
      justify-content: space-evenly;
    }

    & div {cursor: pointer;}
    .menu {width: 8%;}
    .logo {width: 45%}

    & section {
      width: 100%;      
      justify-content: space-evenly;
      align-items: center;
      
    }
        
    `;
    const IconTextContainer = styled.div`
      display: flex;
      flex-direction: row;
      font-family: firma-medium, sans-serif;
      font-weight: 1rem;
      position: relative;
      
      & img { width: 120%;}
      & span { margin: 0 .7rem 0 0; align-items: center;}

     ${props => props.id === "Chat"? 
    ` & :after {
      content: "${props.NoOfChats}";
      box-shadow: 0px 2px 5px #606060;
      background-color: red;
      color: white;
      // width: 20px ;
      font-size: .9rem;
      position: absolute;
      border-radius: 10px;
      padding: .1rem .5rem;
      top: -8px;
      left: 9px;
    }`
      : ``}
    `;

    const NoOfChats = 99;

  return (
    <Container radius="0">
      <HeaderWrapper className="flex">
        <div className="flex">
          <img src={Hamburger} alt="Menu" className='menu'/> {/* this has to change. Cannot be an image */}
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <section>
          <SearchBar />
        </section>
        <section className="flex">
          {[
            {title: "Accounts", icon: accountIcon},
            {title: "Chat", icon: chatIcon},
            {title: "My Interest", icon: interestIcon}
            ].map((item)=>{
              let {icon, title} = item;
              return <IconTextContainer key={title} id={title} NoOfChats={title === "Chat"? NoOfChats: ""}>
                        <span><img src={icon} alt={title}/></span> {title}
                    </IconTextContainer>
            })}
        </section>
    </HeaderWrapper>
    </Container>
    
  )
}
export default Header;