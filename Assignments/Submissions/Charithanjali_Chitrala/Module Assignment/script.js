<<<<<<< HEAD
import { fetchDogImage } from './dogModule.js';
document.getElementById('fetchDogBtn').addEventListener('click',async()=>{
    const imageUrl = await fetchDogImage();
    if(imageUrl){
        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('w-48','h-48','object-cover','rounded');
        document.getElementById('dogContainer').appendChild(img);
    }
=======
import { fetchDogImage } from './dogModule.js';
document.getElementById('fetchDogBtn').addEventListener('click',async()=>{
    const imageUrl = await fetchDogImage();
    if(imageUrl){
        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('w-48','h-48','object-cover','rounded');
        document.getElementById('dogContainer').appendChild(img);
    }
>>>>>>> upstream/main
});