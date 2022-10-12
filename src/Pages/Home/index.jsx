import React from 'react'
import './home.css'
import {Header, Container} from '../../Components'
import carousel from '../../assets/slider_image.jpg'


const Home = () => {
  return (
    <div className='Home'>
      {/* Header Section */}
        <Container 
          radius="0"
          >
            <Header/>
        </Container> 
        
      {/* Hero Section */}
        <Container 
            bgColor="transparent" 
            margin="2rem"
            flex
            >

              <Container width="27%" margin="2rem 0 0 2rem">
                <ul className='categories-list'>
                  {["Art", "Books & Comics", "Clothing & Accessories", "Collectibles", "Consumer Electronics", "Phones", "Tablets", "Consoles", "Music", "Automobiles", "School Accessories"]
                  .map((item)=>{return <li key={item}> <a href="http://localhost:3000">{item}</a> </li>})}
                </ul>
              </Container>

              <Container width="70%">
                <img src={carousel} alt="carousel" className='carousel-img'/>
              </Container>

              <section className='adverts'>
                <Container width="100%" height="100%"></Container>
                <Container width="100%" height="100%"></Container>
              </section>
        </Container>
    </div>
  )
}
export default Home