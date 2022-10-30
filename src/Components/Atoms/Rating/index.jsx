import styled from "styled-components";

const Wrapper = styled.div`
display: flex; 
flex-direction: row; 
align-items: center;

& button{
    background-color: transparent;
    border: none;
    outline: none;
 }

    .star{ font-size: 1.8vmax; }
    .on{color: #fbbc05; }
    .off { color: #fedc82;}
    .rating_number{font-size: 1vmax;}
    @media (min-width: 700px){
        .star{ font-size: 1.2vmax; }
        .rating_number{font-size: .9vmax;}
    }
`;
const Rating = (props) => {
    let {stars} = props;
  return (
    <Wrapper> 
        <div> 
            {[...Array(5)].map((star, index)=>{  
                return <button 
                    type="button" 
                    key={star} 
                    className={(index < stars) ? "on": "off"}
                >
                    <span className="star"> &#9733;</span>
                </button>
            })} 
           
        </div>  <span className="rating_number">{` (${stars}) `}</span>
    </Wrapper>
  )
}
export default Rating;