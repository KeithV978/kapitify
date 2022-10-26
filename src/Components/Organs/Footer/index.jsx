import footer_logo from '../../../assets/icons/logo.svg';
import twitterIcon from '../../../assets/icons/twitter.svg'
import facebookIcon from '../../../assets/icons/facebook.svg'
import instagramIcon from '../../../assets/icons/instagram.svg'



import styled from "styled-components"

const Wrapper =  styled.div`
color: #fff;

background-color:#011220;
// background-color: #15212c;
padding: 1rem 2rem;
margin: 3rem 0 0 0;

img{width: 100%;}

.footer_list_section{
    gap:1rem 2rem; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap; 
    padding: 1.5rem 0 1.5rem 0;
    
}

.footer_logo{width:7rem; padding: 1.5rem 0;}
.icon_links{ display: flex; flex-direction: row; gap: 1.5rem;}
.social_icons{width: 25px;}
.title{color: var(--secondary); font-family: firma-bold; word-wrap: break-word; width: min-content;}

[class^="footer_list-"]{
    min-width: 200px;
    display: flex;
    flex-direction: column;
}
// [class^="footer_list-"] ul {}
[class^="footer_list-"] ul li {margin: 2rem 0;}
.copyright{text-align: center; font-family: firma-bold, sans-serif;}
.copyright h4{line-height:40px;}
.badge-coming{background-color: var(--secondary); color: #fff; padding: .3rem .7rem; border-radius: 25px; font-size: .8rem}
.pro-link{display: flex; flex-direction: row; gap:.6rem}
.footer_list-support&resources{ text-align: right;}
@media (min-width: 700px){
    flex-wrap: no-wrap; 
    .support&resources{ text-align: left;}
    .footer_list_section{
        justify-content: space-between;
    }
    
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

        <section className="footer_list_section">
            {[
                {title:"Products", links:["How it works", "Features", "Browse Categories", "Kapitify Pro"]}, 
                {title: "Support & Resources", links:["Blog", "FAQs", "About Us", "Contact Us"]}, 
                {title: "Legal", links:["Terms & Conditions", "Privacy Policy"]}
            ].map((item)=>{
                let {title, links} = item;
                return <div key={item} className={`footer_list-${title.toLowerCase().replace(/\s/g, '')}`}>
                            <h3 className='title'>{title}</h3>
                            <ul>
                               {links.map((link)=>{
                                return  <li key={link}>
                                            <a href="https://kapitify.com/">{link === "Kapitify Pro"? <p className='pro-link'><p>{link}</p> <p className="badge-coming">Coming Soon</p> </p> : link}</a>
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