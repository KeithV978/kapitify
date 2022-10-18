import footer_logo from '../../../assets/icons/logo.svg';
import twitterIcon from '../../../assets/icons/twitter.svg'
import facebookIcon from '../../../assets/icons/facebook.svg'
import instagramIcon from '../../../assets/icons/instagram.svg'



import styled from "styled-components"

const Wrapper =  styled.div`
color: #626262;
background-color: #fff;
padding: 3rem 4rem;
margin: 4rem 0 0 0;

img{width: 100%;}

.footer_list_section{gap:3rem 2rem; justify-content: space-around; padding: 4rem 0 2rem 0;}
.footer_logo{width:120px; padding: 2rem 0;}
.icon_links{ display: flex; flex-direction: row; gap: 2rem;}
.social_icons{width: 25px;}
.title{color: var(--primary); font-family: firma-bold; word-wrap: break-word; width: min-content;}
.footer_list {min-width: 200px;}
.footer_list ul li {margin: 4rem 0;}
.copyright{text-align: center;}
.copyright h4{line-height:40px;}
.badge-coming{background-color: var(--primary); color: #fff; padding: .5rem .7rem; border-radius: 25px; font-size: .9rem}
.pro-link{display: flex; flex-direction: row; gap:1rem}

@media (min-width: 700px){
    .footer_list_section{
        justify-content: space-between;
    }
    .footer_list {width: calc(100%/3 - 1rem);}
}
`;
const Footer = () => {
  return (
    <Wrapper>
        <section>
            <div className="footer_logo">
                <a href="https://kapitify.com"><img src={footer_logo} alt="logo" /></a>
            </div>
            <div className="icon_links">
                <div className="social_icons">
                    <a href="https://twitter.com/kapitify">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </div>
                <div className="social_icons">
                    <a href="https://facebool.com/kapitify">
                        <img src={facebookIcon} alt="facebook" />
                    </a>
                </div>
                <div className="social_icons">
                    <a href="https://instagram.com/kapitify">
                        <img src={instagramIcon} alt="instagram" />
                    </a>
                </div>
            </div>
        </section>

        <section className="footer_list_section flex">
            {[
                {title:"Products", links:["How it works", "Features", "Browse Categories", "Kapitify Pro"]}, 
                {title: "Support & Resources", links:["Blog", "FAQs", "About Us", "Contact Us"]}, 
                {title: "Legal", links:["Terms & Conditions", "Privacy Policy"]}
            ].map((item)=>{
                let {title, links} = item;
                return <div key={item} className="footer_list">
                            <h3 className='title'>{title}</h3>
                            <ul>
                               {links.map((link)=>{
                                return  <li key={link}>
                                            <a href="https://kapitify.com/">{link === "Kapitify Pro"? <span className='pro-link'><p>{link}</p> <span className="badge-coming">Coming Soon</span> </span> : link}</a>
                                        </li>
                               })}
                            </ul>

                        </div>
            })}
        </section>

        <section className='copyright'>
             <h4>&copy; {new Date().getFullYear()} Kapitify Labs</h4>
             <h5>All Rights Reserved</h5>
        </section>
    </Wrapper>
  )
}
export default Footer;