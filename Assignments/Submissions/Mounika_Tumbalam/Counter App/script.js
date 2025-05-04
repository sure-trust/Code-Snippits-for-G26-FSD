const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('inc');
const decrementBtn = document.getElementById('dec');
const resetBtn = document.getElementById('reset-btn');

let cnt=0;
incrementBtn.addEventListener('click', () =>{
    cnt++;
    countDisplay.textContent=cnt;
})
decrementBtn.addEventListener('click', () =>{
    if(cnt>0)
        cnt--;
    countDisplay.textContent=cnt;
})
resetBtn.addEventListener('click', () =>{
    cnt=0;
    countDisplay.textContent=cnt;
})