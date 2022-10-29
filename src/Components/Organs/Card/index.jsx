import styled from "styled-components";
import {Rating} from '../../index'

import verifiedIcon from '../../../assets/icons/verified.svg';
import popular from '../../../assets/icons/popular.svg';
import locationIcon from '../../../assets/icons/location.svg';
import heart from '../../../assets/icons/love.svg'

const Wrapper = styled.div`
box-shadow: -1px 5px 12px #ccc;
border-radius: var(--radius);
padding: .5rem;
width: 9rem;
// min-width: 10vmax;

position: relative;
color: #4b4b4b;

.tag{
    position: absolute;
    top: .6rem;
    left: 1rem;
    border-radius: 25px;
    font-size: 1vmax;
    padding: .1rem .5rem;
    font-family: firma-medium, sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    box-shadow: 0px 5px 4px 0px #ebeaea;
    color: #737373;
    z-index: 10;
    gap: .2rem;
    background-color: #fff;
}
.product_image{width: 100%;} 
.location{
    font-size: 1.2vmax; 
    color: var(--secondary);
    padding-top: .4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .2rem;
}
.heart-icon{width: 100%;}
.heart{
    width: 2.5rem;
    position: absolute;
    bottom: 1.8rem;
    right: .7rem;
    cursor: pointer;
}
.description div span p{
    font-size: 1.2vmax;
} 
@media (min-width: 550px){
    min-width: 18rem;
}
@media (min-width: 700px){
    min-width: 200px;
    .tag{font-size: 1.5vmin;}
    .location{font-size: .8vmax;}
    .heart{bottom: 3rem;}
}
`;

// const Ribbon = styled.div`
// --f: .5rem;
// --r: .4rem;
// --t: .6rem;

// position: absolute;
// inset: var(--t) calc(-1*var(--f)) auto auto;
// padding: 0 .8rem var(--f) calc(1rem + var(--r));
// clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--f)), calc(100% - var(--f)) 100%,
// calc(100% - var(--f)) calc(100% - var(--f)), 0 calc(100% - var(--f)),
// var(--r) calc(50% - var(--f)/2));
// background-color: #8a8a8a;
// color: #fff;
// font-size: .6rem;
// box-shadow: 0 calc(-1*var(--f)) 0 inset #0005;
// z-index: 5;
// `;

const Card = ({product}) => {
    if (product === null) return;
    let {tag, p_img, rating, product_name, swap_for, location} = product
  return (
    <Wrapper>
        <div className="tag"> <img src={tag === "verified"? verifiedIcon: popular} alt="verified"/> <p> {tag === "verified"? "Verified": "Popular"}</p> </div>
        <div className="product_image_wrapper"> <img src={p_img} alt="product" className="product_image"/> </div>
        <div className="description">
            <div>
                <span>
                    <Rating stars={rating}/>
                    <a href="https://kapitify.com"><p>{product_name} <br/> <span style={{fontWeight: `bold`}}>Swap</span> {swap_for}</p></a>
                </span>
            </div>
        </div>
        <div className="location"> <img src={locationIcon} alt="location" /> <p>{location}</p></div>
        <div className="heart"> <img src={heart} alt="heart" className="heart-icon"/>  </div>
        {/* <Ribbon bgColor={''}>{grade}</Ribbon> */}
    </Wrapper>
  )
}
export default Card;