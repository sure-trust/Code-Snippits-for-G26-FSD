export async function getAllProduct() { 
     try {
       const res = await fetch("https://fakestoreapi.com/products");
       const parsedOutput = await res.json();
       return parsedOutput;
     } catch (error) {
       console.error("Error fetching products:", error);
     }
   }
   
   export function test() {
     console.log("File connected");
   }
   
