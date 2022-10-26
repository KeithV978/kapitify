import styled from 'styled-components';
import {Input, Button} from '../../index'
import searchIcon from '../../../assets/icons/search.svg'

const SearchBar = () => {
    const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: .1rem 0;
    

    @media (min-width: 900px){
      margin: 0;
    }
    `;
    
  return (
    <Wrapper>
        <Button padding=" 0 .6rem" radius="4px"> <img src={searchIcon} alt="search" /> </Button>
        <Input placeHolder="Find Item"/>
     </Wrapper>
  )
}
export default SearchBar;