import footer_logo from '../../../assets/icons/white_logo.svg';
import twitterIcon from '../../../assets/icons/twitter.svg'
import facebookIcon from '../../../assets/icons/facebook.svg'
import instagramIcon from '../../../assets/icons/instagram.svg'



import styled from "styled-components"

const Wrapper =  styled.div`
color: #ebebeb;
background-color:#011220;
// background-color: #15212c;
padding: 1rem;
margin: 3rem 0 0 0;

img{width: 100%;}

.footer_list_section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap; 
    padding: 1.5rem 0 1.5rem 0;
    width: 100%;   
}

.footer_logo{width:7rem; padding: 1.5rem 0;}
.icon_links{ display: flex; flex-direction: row; gap: 1.5rem;}
.social_icons{width: 25px;}
.title{font-size: .9rem;color: var(--secondary); font-family: firma-bold; word-wrap: break-word;}

[class^="footer_list-"]{
    display: flex;
    flex-direction: column;
    min-width: 160px;
}
.mid-section ul {text-align: right;}
[class^="footer_list-"] ul li {margin: 2rem 0; font-size: .8rem;}
.copyright{text-align: center; font-family: firma-bold, sans-serif;}
.copyright h4{line-height:40px;}
.copyright h5, .copyright h4 {font-size: .8rem;}
.badge-coming{background-color: var(--secondary); color: #ebebeb; padding: .3rem .7rem; border-radius: 25px; font-size: .5rem}
.pro-link{display: flex; flex-direction: row; gap:.6rem}
.mid-section{ text-align: right;}

@media (min-width: 550px){
    padding:1rem 2rem;
    [class^="footer_list-"]{
        min-width: 200px;
    }
    .footer_list_section{
        gap:1rem; 
    }
}
@media (min-width: 700px){
    .mid-section ul {text-align: left;}
    flex-wrap: no-wrap; 
    .footer_list-support&resources ul { text-align: left;}
    .footer_list_section{
        justify-content: space-between;
        width: 90%;
    }
    .title{width: min-content}
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
                let titles = title.toLowerCase().replace(/\s/g, '');

                return <div key={item} className={`footer_list-${titles} ${titles==="support&resources"? 'mid-section': ``}`}>
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