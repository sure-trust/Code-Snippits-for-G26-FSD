import { useState } from "react"

function HelloWorld() {
    const [countState, setCountState] = useState(0)
    const [countState1, setCountState1] = useState(0)
    // array of 2 elelmnts 
    // first element will be your state => this.state
    // second element is going to be your setStatefucntion => this.setState
    /***
     * this.state = {
     *      test:0
     * }
     * this.setState
     */




    return <div className="hello_world">
        <div>Counter:{countState}</div>
        <button onClick={()=>{
            
            setCountState((oldState)=>{
                return oldState+10
            })
        }}>
            Increment
        </button>
    </div>
}


export default HelloWorld