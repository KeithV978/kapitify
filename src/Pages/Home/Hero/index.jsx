import { Container } from "../../../Components"
import carousel from '../../../assets/slider_image.jpg'

const Hero = () => {
  return (
      <Container 
      bgColor="transparent" 
      margin="2rem"
      flex="row"
      >
        <Container mdWidth="max-content" margin="0 0 0 2rem" width>
          <ul className='categories-list'>
            {["Art", "Books & Comics", "Clothing & Accessories", "Collectibles", "Consumer Electronics", "Phones", "Tablets", "Consoles", "Music", "Automobiles", "School Accessories"]
            .map((item)=>{return <li key={item}> <a href="http://localhost:3000">{item}</a> </li>})}
          </ul>
        </Container>

        <Container margin="0" grow="2">
          <img src={carousel} alt="carousel" className='carousel-img'/>
        </Container>

        <Container flex="column" className='adverts' bgColor="transparent" gap="1rem 2rem" mdWidth="1fr">
          <Container width="100%" height="50%" gap="1rem" radius="12px">first</Container>
          <Container width="100%" height="50%" gap="1rem" radius="12px">second</Container>
        </Container>
  </Container>
  )
}

export default Hero;
