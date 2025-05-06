function vowelCount(str)
{
   let lowerCaseStr=str.toLowerCase();
   let countVowel=0;
   for(let char of lowerCaseStr)
   {
     if("aeiou".includes(char))
     {
        countVowel++;
     }
   }
   console.log("number of vowels:",countVowel);
}
vowelCount("hello world");
vowelCount("this is sravani dharavath");