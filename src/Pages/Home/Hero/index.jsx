import { useState, useEffect } from "react";
import styled from "styled-components";

import carousel from '../../../assets/slider_image.jpg';
import locationIcon from '../../../assets/icons/Gps_fixed.svg';
import menuIcon from '../../../assets/icons/Menu.svg';


const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const viewWidth = 900;
  useEffect(() =>{
    
     window.addEventListener("resize", ()=>{
      setScreenWidth(window.screen.width)
     })
     return() =>{    
        window.removeEventListener("resize", ()=>{
          setScreenWidth(window.screen.width)
         })
    }
},[])

const Wrapper = styled.section`
display: flex;
flex-direction: column;
background-color: #fff;
margin: 0rem 0 4rem 0;
padding: 2rem 3rem;;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
.section-2{order: 1;}
.section-1{order: 2;}

.location-sort-btns{
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem 0;
}
.location-sort-btns button{
  width: 100%;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: #fff;
  padding: 1.5rem 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  // font-size: 1.4rem;
}
.carousel-img{width: 100%}

@media (min-width: 900px){
  background-color: transparent;
  pading: 1rem 0;
  flex-direction: row;
  gap: 0 2rem;
  .section-1{order: 1;background-color: #fff; }
  .section-2{order: 2; flex: 4 1 0;}
  .section-3{order: 3;flex: 1 1 0;}

 

  [class^="section-"]{
    border-radius: 20px;
  }
}

`;

  const sortList = ["Art", "Books & Comics", "Clothing & Accessories", "Collectibles", "Consumer Electronics", 
                    "Phones", "Tablets", "Consoles", "Music", "Automobiles", "School Accessories"];

  return (
      <Wrapper>
        <div className="section-1">
         {screenWidth > viewWidth?
         <div>
            <ul className='categories-list'>
                {sortList.map((item)=>{
                  return <li key={item}> <a href="http://localhost:3000">{item}</a> </li>})
                }
              </ul>
          </div>: 
          <div className="location-sort-btns">
            <button> <img src={locationIcon} alt="gps" /> <p>Location</p> </button>
            <button> <img src={menuIcon} alt="categories" /> <p>Sort</p> </button>
          </div>
          }                  
        </div>

        <div className="section-2">
          <img src={carousel} alt="carousel" className='carousel-img'/>
        </div>

        {screenWidth > viewWidth?
        <div className="section-3">
          <div></div>
          <div></div>
        </div>: null}
  </Wrapper>
  )
}

export default Hero;
