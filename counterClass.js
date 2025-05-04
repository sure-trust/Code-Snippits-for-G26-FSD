import React from "react"
class Count extends React.Component{
    state={
        counter:0
    }
    render(){
        return(
            <div>
<h1>counter:{this.state.counter}</h1>
<button onClick= {()=>{
    this.setState(
        {
            counter:++this.state.counter
        }
    )
}}>+</button>
<button onClick= {()=>{
    this.setState(
        {
            counter:--this.state.counter
        }
    )
}}>-</button>
</div>
        )
}}
    
        
export default Count
    
    


