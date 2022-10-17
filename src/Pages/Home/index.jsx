import './home.css';
import {Header, Card, Footer} from '../../Components';
import Hero from './Hero'; 
import { PopularSwapper } from './PopularSwappers';


// icons import
import arrow from '../../assets/icons/arrow.svg';
import open_offers from '../../assets/icons/open_offers.svg'

import profile_img from '../../assets/images/a.jpg'
import profile2_img from '../../assets/images/b.jpg'
import profile3_img from '../../assets/images/c.jpg'
import profile4_img from '../../assets/images/d.jpg'

// data
import {products} from '../../products';
const profiles = [
  {p_img: profile_img, name: "Adam Andrews"},
  {p_img: profile2_img, name: "Olive Lane"},
  {p_img: profile3_img, name: "Esther Bassey"},
  {p_img: profile4_img, name: "Romeo Mbong"},
  {p_img: profile_img, name: "Adam Andrews"},
  {p_img: profile2_img, name: "Olive Lane"},
  {p_img: profile3_img, name: "Desire Olorunda"},
  {p_img: profile4_img, name: "Romeo Mbong"}
 ]

const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <Hero /> 
        {[
          "Recommended", 
          "Discover Swaps", 
          "Open Offers"
        ].map((title)=> {
            return <ProductsWrapper key={title} title={title} data={products}/> 
          })}
        <div className="swappers_profile ">
          <PopularSwapper profiles={profiles}/>
        </div>
        <Footer />
    </div>
  )
}
const ProductsWrapper = ({title, data}) => {
  return (
       <div className={`product-${title === "Open Offers"? `offer`: 'wrapper'}`}>
        <section className='header-text'> 
          <h3>
            <p>{title}</p> {title==="Open Offers"? <img src={open_offers} alt="open offers"/>: ''}
          </h3> 
          <h3 className='see-all'>
            <p>See All </p><img src={arrow} alt="See More" className={title === "Open Offers"? "white_arrow": ""}/> 
          </h3>
        </section>

          <section className={title === "Open Offers"? "products offers": "products "}>
            {data.map((product)=>{
              return <Card key={product} product={product}/>
            })}
          </section>
       </div>    
  )
}

export default Home