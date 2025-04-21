<<<<<<< HEAD
export async function fetchDogImage(){
    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        return data.message;
    }catch(error){
        console.error('Error fetching dog image:',error);
    }
=======
export async function fetchDogImage(){
    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        return data.message;
    }catch(error){
        console.error('Error fetching dog image:',error);
    }
>>>>>>> upstream/main
}