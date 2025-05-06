









function test() {
    const randomnum = Math.random()
    // 0 => 1   ---> 0.22

    const theNum = parseInt(randomnum * 25)
    console.log({ randomnum })
    console.log(theNum)
    let engLet = 'qwertyuiop[asdfghjklzxcvbnm,.[];'



    const passwordGenrator = (arg) => {
        let randomPassword = ""



        let count = arg //100


        while (count--) {

            const randomIndex = Math.random() * engLet.length
            const parsedIndex = parseInt(randomIndex)
            randomPassword += engLet[parsedIndex]

        }

        console.log(randomPassword)
    }
    // some calculations

    return function funcWithAns(b) {
        console.log(theNum * b, 'into returned fucntion')
        passwordGenrator(theNum * b)
    }
}


const outFunc = test()



outFunc(20)