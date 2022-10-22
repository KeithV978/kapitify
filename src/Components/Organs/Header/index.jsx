import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {SearchBar, Container} from '../../index'
import Navbar from './NavBar';


// icons import
import accountIcon from '../../../assets/icons/accounts.svg';
import chatIcon from '../../../assets/icons/chat.svg';
import interestIcon from '../../../assets/icons/interest.svg'
import logo from '../../../assets/icons/logo.svg'
import Hamburger from '../../../assets/icons/Hamburger.svg'

const Header = () => {
    const [open, toggleMenu] = useState(false);
    // const [scrollDistance, setScrollDistance] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    useEffect(() =>{
      // window.addEventListener("scroll", ()=> {
      //   setScrollDistance(window.scrollY)
        
      //  })
       window.addEventListener("resize", ()=>{
        setScreenWidth(window.screen.width)
       })
      

      return() =>{
          // window.removeEventListener("scroll", ()=> {
          //   setScrollDistance(window.scrollY)
          // })
          window.removeEventListener("resize", ()=>{
            setScreenWidth(window.screen.width)
           })
      }
  },[])
     

    const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    box-shadow: 1px 3px 15px 4px #dbdada;
    z-index: 1;
    position: relative;

    // flex-wrap: wrap;
    // margin: 1rem;
    padding: 2rem;
    justify-content: space-between;

    & > div {
      width: 70%;
      justify-content: space-evenly;
    }

    & div {cursor: pointer;}
   
    .logo img{width: 100%}
    // .logo{ width: 3.5rem;}

    & section {
      width: 100%;      
      justify-content: space-evenly;
      align-items: center;
    }
    .menu {width: 100%;}
    .menu-wrapper{position: relative;}
    .menu-area{
      align-items: center;
      order: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      // gap: 6rem;
      // padding: 0 0 0 6rem;
           
    }  
    .search-area{order: 3;}  
    .account-area{order: 1;}  


    @media (min-width: 900px){
      & section {
        width: 50%; 
      }
    box-shadow: none;
    flex-direction: row;
    margin-top: 4rem;
    padding: 3rem 0;

    .menu-area{
      justify-content: space-around;
      order: 1;
      width: 30%; 
    }  
    .search-area{order: 2;}  
    .account-area{order: 2;}  
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

      // For The Chat Badge
     ${props => props.id === "Chat"? 
    ` & :after {
      content: "${props.NoOfChats}";
      box-shadow: 0px 1px 2px #606060;
      background-color: red;
      color: white;
      // width: 20px ;
      font-size: .9rem;
      position: absolute;
      border-radius: 10px;
      padding: .1rem .6rem;
      top: -8px;
      left: 9px;
    }`
      : ``}
    `;

    const NoOfChats = 59;

  return (
    <Container radius="0">
      <HeaderWrapper>
        <section className="menu-area">
            <div className="menu-wrapper">
              <div className='menu'>
                <img src={Hamburger} alt="Menu"  onMouseEnter={() => toggleMenu(!open)}/> {/* this has to change. Cannot be an image */}
              </div>
              <Navbar listItems={["How It Works", "Features", "Learn", "About", "FAQs", "Contact Us"]}/>         
            </div>

            <div className="logo">
              <img src={logo} alt="logo"/>
            </div>
            
            {screenWidth <  900 ?
            <div className="account">
              <img src={accountIcon} alt="account" />
            </div>: null}
        </section>

        <section className='search-area'>
          <SearchBar />
        </section>

        {screenWidth >  900 ?
          <section className="account-area flex">
            {[
              {title: "Accounts", icon: accountIcon},
              {title: "Chat", icon: chatIcon},
              {title: "My Interest", icon: interestIcon}
              ].map((item)=>{
                let {icon, title} = item;
                return <IconTextContainer 
                          key={title} 
                          id={title} 
                          NoOfChats={title === "Chat"? NoOfChats: ""}>
                            <span><img src={icon} alt={title}/></span> 
                            <p>{title}</p>
                      </IconTextContainer>
              })}
          </section>
        : null}
    </HeaderWrapper>
    </Container>
    
  )
}
export default Header;