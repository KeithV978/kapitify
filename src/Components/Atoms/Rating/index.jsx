import styled from "styled-components";

const Wrapper = styled.div`
& button{
    background-color: transparent;
    border: none;
    outline: none;
}
    .on{color: #fbbc05; }
    .off { color: #fedc82;}
`;
const Rating = (props) => {
    let {stars} = props;
  return (
    <Wrapper>
        {[...Array(5)].map((star, index)=>{            
            return (
                <button 
                    type="button" 
                    key={star} 
                    className={(index < stars) ? "on": "off"}
                >
                    <span className="star"> &#9733;</span>
                </button>
            )
        })}
    </Wrapper>
  )
}
export default Rating;