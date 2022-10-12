import styled from 'styled-components';
import {Input, Button} from '../../index'
import searchIcon from '../../../assets/icons/search.svg'

const SearchBar = () => {
    const Wrapper = styled.div``;
    
  return (
    <Wrapper className='flex'>
        <Button bgColor="#06335b" text={searchIcon}/>
        <Input placeHolder="Find Item"/>
     </Wrapper>
  )
}
export default SearchBar;