// import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../../Components";
import popular_swapper from '../../../assets/icons/popular_swappers.svg'
import arrow from '../../../assets/icons/arrow.svg';


export const PopularSwapper = (props) => {
    let {profiles} = props;

//     const [screenWidth, setScreenWidth] = useState(window.screen.width);

//     useEffect(() =>{
//        window.addEventListener("resize", ()=>{
//         setScreenWidth(window.screen.width)
//        })

//       return() =>{
//           window.removeEventListener("resize", ()=>{
//             setScreenWidth(window.screen.width)
//            })
//       }
//   },[])
  return (
    <Container padding="1rem 0">
        <div className="popular_swaps_wrapper">
            <section className='header-text'> 
                <h3 className="pop_swap_header"><p>Popular Swappers </p><img src={popular_swapper} alt="popular swappers" /></h3>  
                <h3 className='see-all'>
                <p>See All </p> <img src={arrow} alt="See More" />
                {/* {screenWidth < 900? <><p>See All </p> <img src={arrow} alt="See More" /> </>: null} */}
                </h3>
            </section>
            <div className="profiles_wrapper">
                {profiles.map((profile)=>{
                    return <SwapperProfile key={profile} profile={profile}/>
                })}
                
            </div>
        </div>
    </Container>
  )
}
const SwapperProfile = ({profile}) => {
    let {name, p_img} = profile;
    
    const Wrapper = styled.div`
        // text-align: center;
        // width: 100px;

        text-align: -webkit-center;
        width: min-content;
    `;
    const ProfileImage = styled.div`
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background-image: url(${p_img});
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        margin: 3rem 0;

        @media (min-width: 700px){
            width: 150px;
            height: 150px;

            &:after { right: -15px; }
        }

        &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            background-color: #11f94e;
            border: 7px solid #fff;
            width: 17px;
            height: 17px;
            border-radius: 50%;
        }
        h3 {
            word-wrap: break-word;
            width: inherit;
        }
`;
    return (
        <Wrapper>
            <ProfileImage/>
            <h3>{name}</h3>
        </Wrapper>
    )
}
