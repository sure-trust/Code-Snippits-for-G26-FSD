import React, { useEffect, useState } from 'react';
import './Dog.css'
const Dog = () => {
    const [dogImage, setDogImage] = useState('');
    const [suc, setSuc] = useState(false);
    const fetchSlow = () =>{
        setTimeout(()=>{
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message);
                setSuc(data.status === "success");
            });
        },3000)
    }
    const fetchDog = () => {
 
        const loading = document.getElementsByClassName('role');
        loading.innerHTML = '  <i class="fa fa-spinner fa-spin"></i>'
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setDogImage(data.message);
                setSuc(data.status === "success");
            });
     
        
    };

    // Initial fetch
    useEffect(() => {
        fetchDog();
        fetchSlow();
    }, []);

    /* 
    {message: 'https://images.dog.ceo/breeds/kuvasz/n02104029_31.jpg', status: 'success'}
    this is the response
    */
    return <>
        <div className='main'>
            <div className='box'>
                https://dog.ceo/api/breeds/image/random</div>
            <button className='hole' onClick={fetchDog}>Fetch!</button>
            <button className='role' onClick={fetchSlow}>Loading   <i class="fa fa-spinner fa-spin"></i></button>
        </div>
        <div className='json'>
            <h5 className='h5'>{'{'} <br></br> "message" : "{dogImage}" <br></br>"status": "{suc}success" <br></br>{'}'}</h5>
          
        </div>
        <div className='image'>
            <img style={{height:'300px',width:'300px'}} src={dogImage} alt='beautiful dog'></img>
        </div>
    </>
 
};

export default Dog;
