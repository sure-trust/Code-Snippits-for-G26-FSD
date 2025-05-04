<<<<<<< HEAD
function vowelCounter(str){
    let cnt=0;
    let vowels=['a','e','i','o','u'];
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            cnt++;
        }
    }
    console.log("vowels:",cnt);
}
    vowelCounter("Hello!")

=======
function vowelCounter(str){
    let cnt=0;
    let vowels=['a','e','i','o','u'];
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            cnt++;
        }
    }
    console.log("vowels:",cnt);
}
    vowelCounter("Hello!")

>>>>>>> upstream/main
