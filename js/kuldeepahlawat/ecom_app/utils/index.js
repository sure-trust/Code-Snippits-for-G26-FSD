export async function getAllProducts(params) {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        
        const parsedOutput = await res.json()
        return parsedOutput
    } catch (error) {
        console.log(error)
    }
}
export function test(){
    console.log('file connected')
}


//  export default test

