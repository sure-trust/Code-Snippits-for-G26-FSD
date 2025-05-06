// Exploring try, catch, finally and throws.



async function myfunc() {
    try {
        const res = await fetch('https://dummyjson.com/todos')
        try {

            const jsondata = await res.json()
            console.log(jsondata)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }

    } catch (error) {
        console.log(error)
        throw new Error(error)

    }
    finally {
        console.log('finaly')
    }



}
myfunc()