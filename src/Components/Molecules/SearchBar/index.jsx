import styled from 'styled-components';
import {Input, Button} from '../../index'
import searchIcon from '../../../assets/icons/search.svg'

const SearchBar = () => {
    const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem 0;

    @media (min-width: 900px){
      margin: 0;
    }
    `;
    
  return (
    <Wrapper>
        <Button bgColor="#06335b" text={searchIcon}/>
        <Input placeHolder="Find Item"/>
     </Wrapper>
  )
}
export default SearchBar;