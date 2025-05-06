
    let nums=[3,4,9,90,5,60]
        let smallest=nums[0]
        let largest=nums[0]
        for(let i=1;i<nums.length;i++){   
        

        
        if(nums[i]<smallest)
         { smallest=nums[i]

        }
        if(nums[i]>largest){
            largest=nums[i]
        }
    }   

console.log("smallest number:",smallest)
console.log("largest number",largest)
