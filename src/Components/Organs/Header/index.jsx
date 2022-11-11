import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {SearchBar} from '../../index'
// import Navbar from './NavBar';


// icons import
import accountIcon from '../../../assets/icons/accounts.svg';
import chatIcon from '../../../assets/icons/chat.svg';
import interestIcon from '../../../assets/icons/interest.svg'
import logo from '../../../assets/icons/logo.svg'
import Hamburger from '../../../assets/icons/Hamburger.svg'

const Header = () => {
    // const [open, toggleMenu] = useState(false);
    // const [scrollDistance, setScrollDistance] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const viewWidth = 550;

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
    gap: var(--gap);
    box-shadow: 1px 3px 15px 4px #dbdada;
    z-index: 1;
    position: relative;
    background-color: #fff;

    
    // & div { margin-right: .2rem; text-align:center;}
    & p {font-size:1.2vmax;}

    .menu-wrapper{position: relative;}

    .menu-icon{cursor: pointer;}
    .navbar{display: none;}
    // .menu-icon:hover .navbar{display: block;}

    .logo{ justify-content: center;}

    .account-icon-onMobile{
      width: 100%;
    }

    padding: 1rem;
    justify-content: space-between;

    & > div {
      width: 70%;
      justify-content: space-evenly;
      cursor: pointer;}

    & section {
      width: 100%;      
      justify-content: space-evenly;
      align-items: center;
    }
    .menu {width: 100%;}
  
    .menu-area{
      align-items: center;
      order: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;    
    }  

    .search-area{order: 3;}  
    .account-area{order: 1; display: flex; }  
    .account {width: 8%;}

    @media (min-width: 481px){
      .logo{width: 35%;}
    }

    @media (min-width: ${viewWidth}px){
      & section {width: 50%; }
      box-shadow: none;
      flex-direction: row;
      margin-top: 2rem;
      padding: 1rem 0;

    .logo{width: 49%;}
    .menu {width: 90%;}
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
      align-items: center;
      gap: .2rem;
     
      // For The Chat Badge
     ${props => props.id === "Chat"? 
    ` & :after {
      content: "${props.NoOfChats}";      
      background-color: red;
      color: white;
      font-size: .6vmax;
      position: absolute;
      border-radius: 25px;
      padding: .1rem .2rem;
      top: -5px;
      left: 7px;
    }`
      : ``}
    `;

    const NoOfChats = 59;

  return (
      <HeaderWrapper>
        <section className="menu-area">
            <div className="menu-wrapper">
                <img src={Hamburger} alt="Menu Icon"  className='menu-icon'/> {/* this has to change. Cannot be an image */}
                {/* <Navbar listItems={["How It Works", "Features", "Learn", "About", "FAQs", "Contact Us"]}/> */}
            </div>
              {/* <a href="https://kapitify.com" className='logo'><img src={logo} alt="logo" /></a> */}
              <div className='logo'>
                <img src={logo} alt="logo" style={{width: `100%`}}/>
              </div>

            {screenWidth < viewWidth ?
            <div className="account">
              <img src={accountIcon} alt="account" className='account-icon-onMobile'/>
            </div>: null}
        </section>

        <section className='search-area'>
          <SearchBar />
        </section>

        {screenWidth >  viewWidth ?
          <section className="account-area">
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
                            <img src={icon} alt={title} />
                            <p>{title}</p>
                      </IconTextContainer>
              })}
          </section>
        : null}
    </HeaderWrapper>    
  )
}
export default Header;