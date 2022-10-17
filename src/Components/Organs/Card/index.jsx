import styled from "styled-components";
import verifiedIcon from '../../../assets/icons/verified.svg';
import popular from '../../../assets/icons/popular.svg';
import locationIcon from '../../../assets/icons/location.svg';
import heart from '../../../assets/icons/love.svg'

const Wrapper = styled.div`
box-shadow: -1px 5px 12px #ccc;
border-radius: 20px;
padding: 1.5rem 2rem;
min-width: 200px;
position: relative;

.tag img{ margin: 0 .4rem;}
.tag{
    position: absolute;
    top: 1rem;
    border-radius: 25px;
    font-size: 1rem;
    padding: .3rem 1rem;
    font-family: firma-medium;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    box-shadow: 3px 4px 4px 0px #ebeaea;
    color: #737373;
    z-index: 10;
}
.product_image{
    width: 100%;
}
.product_image_wrapper{
    // padding: .4rem 0;
}
.location{
    font-size: 1.2rem; 
    color: var(--secondary);
    padding-top: .8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .4rem;
}
.heart{
    position: absolute;
    bottom: 80px;
    right: 10px;
}
`;

const Card = ({product}) => {
    let {tag, p_img, rating, product_name, swap_for, location} = product
  return (
    <Wrapper>
        <div className="tag"> <img src={tag === "verified"? verifiedIcon: popular} alt="verified"/> <p> {tag === "verified"? "Verified": "Popular"}</p> </div>
        <div className="product_image_wrapper"> <img src={p_img} alt="product" className="product_image"/> </div>
        <div className="description">
            <div>
                <span>
                    {rating}
                    <p>{product_name} <br/> <span style={{fontWeight: `bold`}}>Swap</span> {swap_for}</p>
                </span>
            </div>
        </div>
        <div className="location"> <img src={locationIcon} alt="location" /> <p>Benin City, Edo State</p></div>
        <div className="heart"> <img src={heart} alt="heart" />  </div>
    </Wrapper>
  )
}
export default Card;