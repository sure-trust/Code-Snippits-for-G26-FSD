// START  
// SET words = ["Megha", "Nandu", "Nandu", "Cherry", "Affu"]  
// SET reversedWords = []  

// FOR i FROM length(words) - 1 TO 0 STEP -1 DO  
//     ADD words[i] TO reversedWords  
// END FOR  

// PRINT reversedWords  
// END  




let Friends = ["Megha", "Nandu", "Nandu", "Cherry", "Affu"];
let reversedWords = []; 
for (let i = Friends.length - 1; i >= 0; i--) {
    reversedWords.push(Friends[i]); 
}
console.log(reversedWords);
