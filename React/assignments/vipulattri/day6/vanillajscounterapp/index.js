var count = 0;
function inc(){
    count++;
    console.log(count);
    const change = document.getElementsByClassName('changing')[0];
    change.innerText = count;
}
function dec(){
    count--;
    console.log(count);
    const change = document.getElementsByClassName('changing')[0];
    change.innerText = count;
}