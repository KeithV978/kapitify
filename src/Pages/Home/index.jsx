import React from 'react'
import './home.css'
import {Header, Container} from '../../Components'


const Home = () => {
  return (
    <div className='Home'>
      {/* Header Section */}
        <Container radius="0">
            <Header/>
        </Container> 
        
      {/* Hero Section */}
        <Container bgColor="transparent" margin="2rem">
            <Container width="fit-content">
              <ul className='categories-list'>
                {["Art", "Books & Comics", "Clothing & Accessories", "Collectibles", "Consumer Electronics", "Phones", "Tablets", "Consoles", "Music", "Automobiles", "School Accessories"]
                .map((item)=>{return <li key={item}> <a href="http://localhost:3000">{item}</a> </li>})}
              </ul>
            </Container>
            <section className='carousel'></section>
            <section className='advets'></section>
        </Container>
    </div>
  )
}
export default Home