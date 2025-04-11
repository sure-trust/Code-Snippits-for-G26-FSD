import React from 'react'
import './App.css'
import { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';


const App = () => {
  const [name, setName] = useState('')
  const {surname, setSurname} = useState(null)
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [gender, setGender] = useState(null);
  const [mob,setMob] = useState(null)
  const [password,setPassword] = useState(null)


  const year = Array.from({ length: 2005 - 1960 + 1 }, (_, i) => {
    const y = 2005 - i;
    return { name: String(y), code: String(y) };
  });
  
  const number = [
    {name: '0', code: '0'},
    {name: '1', code: '1'},
    {name: '2', code: '2'},
    {name: '3', code: '3'},
    {name: '4', code: '4'},
    {name: '5', code: '5'},
    {name: '6', code: '6'},
    {name: '7', code: '7'},
    {name: '8', code: '8'},
    {name: '9', code: '9'},
    {name: '10', code: '10'},
    {name: '11', code: '11'},
    {name: '12', code: '12'},
    {name: '13', code: '13'},
    {name: '14', code: '14'},
    {name: '15', code: '15'},
    {name: '16', code: '16'},
    {name: '17', code: '17'},
    {name: '18', code: '18'},
    {name: '19', code: '19'},
    {name: '20', code: '20'},
    {name: '21', code: '21'},
    {name: '22', code: '22'},
    {name: '23', code: '23'},
    {name: '24', code: '24'},
    {name: '25', code: '25'},
    {name: '26', code: '26'},
    {name: '27', code: '27'},
    {name: '28', code: '28'},
    {name: '29', code: '29'},
    {name: '30', code: '30'},
    {name: '31', code: '30'},
  ];
  const month = [
    {name: 'जनवरी', code: '0'},
    {name: 'फ़रवरी', code: '1'},
    {name: 'मार्च', code: '2'},
    {name: 'अप्रैल', code: '3'},
    {name: 'मई', code: '4'},
    {name: 'जून', code: '5'},
    {name: 'जुलाई', code: '6'},
    {name: 'अगस्त', code: '7'},
    {name: 'सितंबर', code: '8'},
    {name: 'अक्टूबर', code: '9'},
    {name: 'नवंबर', code: '10'},
    {name: 'दिसंबर', code: '11'},
  ];
  return (

    <>
    
    <header>
    <h1 style={{color:'#0866FF', fontSize:'55px', marginTop:'80px'}}>facebook</h1>
    </header>
    <div className='main'>
    <div className='container'>
       <h2 style={{textAlign:'center' ,paddingTop:'20px'}}>नया अकाउंट बनाएँ </h2>
       <p style={{textAlign:'center', fontWeight:'200'}}>झटपट और आसानी से.</p>
       <hr></hr>
    <input style={{border:'0.5px solid grey', height:'30px',width:'200px', borderRadius:'2px', marginLeft:'12px' ,marginRight:'5px'}} type='text' placeholder='नाम' onChange={(e) => setName(e.target.value)} name />
         {console.log(name) }


         <input style={{border:'0.5px solid grey', height:'30px',width:'200px', borderRadius:'2px', marginLeft:'12px' ,marginRight:'3px'}} type='text' placeholder='सरनेम' onChange={(e) => setName (e.target.value)} surname />
         {console.log(surname) }  
         <br></br>
         <p style={{color:'grey', fontWeight:'200'}}>जन्मदिन</p>

         <Dropdown
  style={{
    border: '0.5px solid grey',
    height: '30px',
    paddingLeft: '5px',
    width: '100px',
    borderRadius: '2px',
    marginLeft: '12px',
    marginRight: '3px'
  }}
  value={selectedNumber} 
  onChange={(e) => {
    setSelectedNumber(e.value);
    console.log("Selected value:", e.value.name);
  }}
  options={number}
  optionLabel="name"
  placeholder="0"
  className="w-full md:w-14rem"
/>


<Dropdown
  style={{
    border: '0.5px solid grey',
    height: '30px',
    paddingLeft: '5px',
    width: '100px',
    borderRadius: '2px',
    marginLeft: '12px',
    marginRight: '3px'
  }}
  value={selectedMonth}
  onChange={(e) => {
    setSelectedMonth(e.value);
    console.log("Selected value:", e.value.name); 
  }}
  options={month}
  optionLabel="name"
  placeholder="जनवरी"
  className="w-full md:w-14rem"
/>

<Dropdown
  style={{
    border: '0.5px solid grey',
    height: '30px',
    paddingLeft: '5px',
    width: '100px',
    borderRadius: '2px',
    marginLeft: '12px',
    marginRight: '3px'
  }}
  value={setSelectedNumber} 
  onChange={(e) => {
    setSelectedNumber(e.value);
    console.log("Selected value:", e.value.name);
  }}
  options={year}
  optionLabel="name"
  placeholder="2025"
  className="w-full md:w-14rem"
/>
<br></br>
<br></br>
<input
  type="radio"
  id="female"
  name="gender"
  value="महिला"
  onChange={(e => setGender(e.target.value))
}
/>

<label htmlFor="female" style={{border:'0.5px solid grey', }}>महिला</label>


<input
  type="radio"
  id="male"
  name="gender"
  value="पुरुष"
  onChange={(e => setGender(e.target.value),
  console.log(gender))
}
/>

<label htmlFor="male" style={{border:'0.5px solid grey', }}>पुरुष</label>


<input
  type="radio"
  id="custom"
  name="gender"
  value="कस्टम"
  onChange={(e => setGender(e.target.value),
  console.log(gender))
}
/>

<label htmlFor="custom" style={{border:'0.5px solid grey', }}>कस्टम</label>

<br></br>
<br></br>

         <input style={{border:'0.5px solid grey', height:'30px',width:'400px', borderRadius:'2px', marginLeft:'12px' ,marginRight:'3px'}} type='text' placeholder='मोबाइल नंबर या ईमेल' onChange={(e) => setMob (e.target.value)} mob />
         {console.log(mob) }  
         <br></br>
         <br></br>
         <input style={{border:'0.5px solid grey', height:'30px',width:'400px', borderRadius:'2px', marginLeft:'12px' ,marginRight:'3px'}} type='text' placeholder='नया पासवर्ड' onChange={(e) => setPassword(e.target.value)} password />
         {console.log(password) }  
         <br></br>


        <p style={{padding:'10px',fontSize:'10px', gap:'10px' ,color:'grey'}}>शायद आपकी संपर्क जानकारी Facebook पर उन लोगों ने अपलोड की है जो हमारी सेवा का इस्तेमाल करते हैं. और जानें  <br></br> <br></br>

साइन अप करें पर क्लिक करने का मतलब है कि आप हमारी शर्तों, प्राइवेसी पॉलिसी और कुकी पॉलिसी से सहमत हैं. हो सकता है कि आपको हमारी ओर से SMS नोटिफ़िकेशन मिलें. आप किसी भी समय ऑप्ट आउट कर सकते हैं.</p>
  <button style={{backgroundColor:'green',color:'white', height:'35px',border:'none',borderRadius:'10px',fontSize:'20px',fontWeight:'700', width:'200px', alignContent:'center', alignSelf:'center' ,marginLeft:'120px'}}>साइन अप करें</button>
  <h3 style={{color:'#1877F2', textAlign:'center'}}>क्या आपका पहले से कोई अकाउंट है?</h3>
      </div>
      </div>
    </>
  )
}

export default App