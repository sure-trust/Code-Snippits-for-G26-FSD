function test() {
    const b = 10
    function childTest(a) {
        return a + b
    }

    return childTest
}


const res = test()


console.log(res(2))