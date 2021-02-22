import React from "react";
import {useProductsContext} from '../contexts/product_context'
import Hero from "../components/Hero"
import {Card,Button} from "react-bootstrap"

const HomePage = () =>{
     const {area,setarea,mandis} = useProductsContext();

     
  return (
    <main>
      <h1>home page</h1>
      <Hero/>
      <form className='container'>
        {/* <h1>Search Your Nearby Mandis/markets</h1> */}
        <div style={{margin:'0 0 15px 0'}}>
        {/* <label htmlFor="area">Area :</label> */}
        <select name='area' value={area} onChange={setarea}>
        <option value='all'>Select the mandi which best suits you</option>
        <option value='South West Delhi'>South West Delhi</option>
        <option value='Rewari,Haryana'>Rewari,Haryana</option>  
        </select> 
        </div>
      </form>
      {/* <section className=''>
        {mandis.map((mandi,index)=>{
          const {name,location,shops,rating,area,reviews}=mandi;
            return (
              <article key={index} className=''>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Area: {area}</h3> */}
                {/*<Rating /> */}
                 {/* <p>{shops} shops</p>
                 <button type='button'>Enter Mandi</button>
              </article>
            )
        })}
      </section> */}
      <section className='container'>
      <div className='row'>
        {mandis.map((mandi,index)=>{
          const {name,location,shops,rating,area,reviews}=mandi;
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 col-xsm-12'>
              <Card> 
                <Card.Body>
                  <Card.Title>
                    {name.toUpperCase()}
                  </Card.Title>
                  <Card.Subtitle style={{color:'grey',texttransform:'capitalize'}}>
                    {location}
                  </Card.Subtitle>
                  <Card.Text>
                    There are {shops} shops in {area}
                  </Card.Text>
                  <Button variant="outline-success" block>Enter {name.toUpperCase()} mandi</Button>
                </Card.Body>
              </Card>
              </div>
            )
        })}
        </div>
      </section>
    </main>
  )
}

export default HomePage;
