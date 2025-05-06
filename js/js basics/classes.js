class human {


    constructor(){
        this.hands = 2
        this.legs = 2
        this.eyes = 2
        this.brain = 1


    }
}


// Abstraction, Encapsulation, Inheritance, and Polymorphism

// Inheritance
class kuldeep extends human{
        #weight
    constructor(){
        super()
        this.brain = '1 head , 1 in knees'
        this.#weight = 65


    }


    getWeight(){
        return this.#weight
    }
    setWeight(value){

        this.#weight = value
        return this.#weight
    }


}

class vipul extends human{
    constructor(){
        super()
    }
}


const obj = new kuldeep()

console.log(obj.getWeight())
console.log(obj.setWeight(75))