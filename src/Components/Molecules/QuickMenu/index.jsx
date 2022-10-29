import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: block;
    position:fixed;
    bottom: 20px;
    

    & div {
      justify-content: center;     
    }

    & ul {  
      margin: auto 0;
      border-radius: var(--radius);
      background-color: #fff;
      width: min-content;
      padding: .8rem 1rem;
      justify-content: center;
      display: flex;
      flex-direction: row;
      justify-content-space-evenly;
    }

    @media (min-width: 550px){
        display: none;
    }
`;

const QuickMenu = () => {
  return (
    <Wrapper>
      <div>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </div>
    </Wrapper>
  )
}
export default QuickMenu;