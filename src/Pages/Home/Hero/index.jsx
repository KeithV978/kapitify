import { useState, useEffect } from "react";
import styled from "styled-components";

import carousel from '../../../assets/slider_image.jpg';
// import locationIcon from '../../../assets/icons/location2.svg';
// import sortIcon from '../../../assets/icons/sort.svg';


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
padding: 3rem 3rem;
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
  padding: 2rem 0;
  // font-size: 1.4rem;
}

@media (min-width: 900px){
  margin: 0;

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
            <button> Location </button>
            <button> Sort </button>
          </div>
          }                  
        </div>

        <div className="section-2">
          <img src={carousel} alt="carousel" className='carousel-img'/>
        </div>

        {screenWidth > viewWidth?
        <div className="section-3">
          <div>first</div>
          <div>second</div>
        </div>: null}
  </Wrapper>
  )
}

export default Hero;
