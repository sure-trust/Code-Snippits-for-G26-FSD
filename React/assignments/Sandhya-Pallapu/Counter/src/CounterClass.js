import React from "react"
class Count extends React.Component{
    state={
        counter:0
    }
    render(){
        return(
            <div>
                <h1>Counter App</h1>
<h2>count:{this.state.counter}</h2>
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
    
    


