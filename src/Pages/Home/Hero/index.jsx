import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../Components";

// import carousel from '../../../assets/slider_image.jpg';
import locationIcon from '../../../assets/icons/Gps_fixed.svg';
import menuIcon from '../../../assets/icons/Menu.svg';
import down_arrow from '../../../assets/icons/arrow.svg'


const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const viewWidth = 750;
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
// margin: 0rem 0 4rem 0;
gap: 1rem;
padding: 1rem;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
.section-2{order: 1;}
.section-1{order: 2;}

.location-sort-btns{
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem 0;
}
.location-sort-btns button{
  width: 100%;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: #fff;
  padding: 1rem 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  // font-size: 1.4rem;
}
.carousel-img{width: 100%}
.search-by-location{
  width: 16rem;
}
.location-header{font-weight: bold;}
.select-category{
  padding: 1rem;
}
.select-category h5{
  display: flex;
  justify-content: space-between; 
}
.select-category p{
  margin: .5rem 0;
 font-size: 2vmin;
}
@media (min-width: ${viewWidth}px){
  background-color: transparent;
  pading: 1rem 0;
  flex-direction: row;
  gap: 0 1rem;
  .section-1{order: 1;}
  .section-2{order: 2; flex: 4 1 0;}
  .section-3{order: 3; flex: 1 1 0;}

  .location-searchbar{
    background-color: #fff;
    border-radius: var(--radius);
    padding: 1rem;
    word-wrap: break-word;    
    text-align: left;
  }
  .input{
    font-size: 1vmax;
    display: flex;
    flex-direction: column;
  }
  .input > select {
    width: 6rem;
  }

  & select {
    background-color: #ededed;
    border: none;
    padding: .7rem 1.7rem;
    margin: .5rem 0;
    border-radius: 10px;
} 
  .location-searchbar div p{font-size: .9vmax;padding: .7rem 0 1rem;}

  [class^="section-"]{
    background-color: transparent;
  }
  .apply-btn{
    display: flex;
    justify-content: right;
    margin-top: 1rem;
  }

  .section-1-wrapper{
    
  }
  .select-category{
    margin-top: 1rem;
    background-color:#fff;
    border-radius: var(--radius);
  }
}

`;

   const [cities, setCities] = useState([]);
   const handleCitiesList = (event) =>{
    setCities()
   }

  return (
      <Wrapper>
        <div className="section-1">
         {screenWidth > viewWidth?
        <div className="section-1-wrapper">
           <div className="search-by-location">
            <div className="location-searchbar">
              <div>
                <h5 className="location-header">Enter Location</h5>
                <p>Put in your current location to see swaps around you.</p>
              </div>

              <div style={{display: `flex`, justifyContent: `space-between`}}>
                {[{label:"State", options:[""]},{label:"City/LGA", options:cities}].map((item)=>{
                  let {label, options} = item;
                  return <div className="input" key={options}>
                            <label htmlFor={label}>{label}</label>
                            <select onChange={handleCitiesList} name={label} id={label}>
                                {options.map((opt)=>{
                                  return <option key={opt} value={opt}>{opt}</option>
                                })}
                            </select>
                         </div>
                })}
              </div>
              <div className="apply-btn">
                <Button color="#fff" padding="0.6rem 1.9rem">Apply</Button>
              </div>
            </div>
          </div>

          <div>
            <div className="select-category">
              <h5>Select Category <i><img src={down_arrow} alt="select category" /></i></h5> 
              <p>Select your preferred category.</p>
            </div>
          </div>
        </div> : 
          <div className="location-sort-btns">
            <button> <img src={locationIcon} alt="gps" /> <p>Location</p> </button>
            <button> <img src={menuIcon} alt="categories" /> <p>Sort</p> </button>
          </div>
          }                  
        </div>

        <div className="section-2">
          {/* <img src={carousel} alt="carousel" className='carousel-img'/> */}
        </div>

        {screenWidth > viewWidth?
        <div className="section-3">
         
        </div>: null}
      </Wrapper>
  )
}

export default Hero;
