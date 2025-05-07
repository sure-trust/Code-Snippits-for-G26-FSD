import React, { useState } from 'react'
import './Api.css'
const Api = () => {
  const[prod,setProd] = useState([])

  useState(()=>{
      
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((res)=>res.json()
    .then((data) =>
      setProd(data)
   
    )
)


    
  },[])

  console.log(prod);
  return (
    <div className='main'>
      {prod.map(data => {
        return <>
        <div className='box'>
        <img style={{width:'500px' ,height:'350px'}} src={data.images}></img>
        <h3 style={{fontSize:'20px'}} key={data.id}>{data.title}</h3>
        <h3 key={data.description}>{data.description}</h3>
        </div>
        </>
      })}
    </div>
  )
  
}

export default Api