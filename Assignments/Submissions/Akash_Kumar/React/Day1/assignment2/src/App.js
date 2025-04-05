// Simple Form
// Build a form with:

//     Name input
//     Email input
//     Submit button
//     Success message


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text" className="name_input" placeholder="Enter name"></input>
      <input type="email" className="email_input" placeholder="Enter email"></input>
      <button className="submit_button">Submit</button>
      <div className="success_message">Form submitted successfully!</div>
    </div>
  );
}

function events(){
  const nameInput = document.querySelector('.name_input');
  const emailInput = document.querySelector('.email_input');
  const submitButton = document.querySelector('.submit_button');
  const successMessage = document.querySelector('.success_message');
  submitButton.addEventListener('click', () => {
    if(nameInput.value !== '' && emailInput.value !== ''){
      // successMessage.style.display = 'block';
      console.log(`User name: ${nameInput}`)
      console.log(`Email : ${emailInput}`)
      } else {
        // successMessage.style.display = 'none';
        console.log("Please fill the details")
        }
    });
}

export default App;
