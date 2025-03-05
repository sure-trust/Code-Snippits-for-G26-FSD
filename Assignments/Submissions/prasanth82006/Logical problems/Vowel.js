let a="Thanooz"
let Vowels='aeiouAEIOU'
let count=0
for(let i=0;i<a.length;i++){
     if(Vowels.includes(a.charAt(i))){
          console.log(a.charAt(i));
          count+=1;
     }
}
console.log(`no of vowels is: ${count}`);