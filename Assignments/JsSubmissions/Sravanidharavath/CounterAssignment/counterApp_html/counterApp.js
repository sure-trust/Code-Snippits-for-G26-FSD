let count=0;

const countDisplay=document.getElementById('count');
const incrementBtn=document.getElementById('increment');
const decrementBtn=document.getElementById('decrement');
const resetBtn=document.getElementById('reset');

function updateDisplay(){
    countDisplay.textContent=count;
}

incrementBtn.addEventListener('click',()=>{
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click',()=>{
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click',()=>{
    count=0;
    updateDisplay();
});