import React, { useEffect, useState } from 'react'

const EcomExample = () => {
  const [prodArray, setProdArray] = useState([])
  const [prodCart, setCartArray] = useState([])



  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          setProdArray(json)
          console.log(json)

        }, 1000)
      }
      )


  }, [])


  useEffect(() => {
    console.log('cart changed',prodCart)

  }, [prodCart])





  //   {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "rating": {
  //         "rate": 3.9,
  //         "count": 120
  //     }
  // }


  return (
    <div style={{ display: 'flex',  }}>

      <div style={{ width:'50%',  }}>
        <h1>products lsit</h1>
        {prodArray.length ? prodArray.map((productData, index) => {
          return (
            <div key={index + productData.title} style={{ border: '2px solid black', margin: '4px' }}>
              <img src={productData.image} width={'400'} height={'400'} />
              <h1>{productData.title}</h1>
              <h2>{productData.price}</h2>
              <h3>{productData.description}</h3>
              <h4>{productData.category}</h4>
              <button onClick={()=>{
                let newProdArray = [...prodCart]

                newProdArray.push(productData)
                setCartArray(newProdArray)

              }}>
                add to cart
              </button>
            </div>
          )
        }) : <div>we dont have data</div>}
        {/* {prodArray.length && <div> we have data</div>} */}


      </div>
      <div style={{ width:'50%',  }}>
        <h1>products Cart</h1>
        {prodCart.length > 0  &&<button>Proceed for payment</button>}
        {prodCart.length?prodCart.map((productData, index) => {
          return (
            <div key={index + productData.title} style={{ border: '2px solid black', margin: '4px' }}>
              <img src={productData.image} width={'400'} height={'400'} />
              <h1>{productData.title}</h1>
              <h2>{productData.price}</h2>
              <h3>{productData.description}</h3>
              <h4>{productData.category}</h4>
             
            </div>
          )
        }):<h1> Cart is Empty</h1>}
      </div>


    </div>
  )
}

export default EcomExample