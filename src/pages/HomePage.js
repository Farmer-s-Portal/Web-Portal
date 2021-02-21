import React from "react";
import {useProductsContext} from '../contexts/product_context'
import Hero from "../components/Hero"


const HomePage = () =>{
     const {area,setarea,mandis} = useProductsContext();

     
  return (
    <main>
      <h1>home page</h1>
      <Hero/>
      <form>
        <h1>Search Your Nearby Mandis/markets</h1>
        <div>
        <label htmlFor="area">Area :</label>
        <select name='area' value={area} onChange={setarea}>
        <option value='all'>All</option>
        <option value='South West Delhi'>South West Delhi</option>
        <option value='Rewari,Haryana'>Rewari,Haryana</option>  
        </select> 
        </div>
      </form>
      <section className=''>
        {mandis.map((mandi,index)=>{
          const {name,location,shops,rating,area,reviews}=mandi;
            return (
              <article key={index} className=''>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Area: {area}</h3>
                {/*<Rating /> */}
                 <p>{shops} shops</p>
                 <button type='button'>Enter Mandi</button>
              </article>
            )
        })}
      </section>
    </main>
  )
}

export default HomePage;
