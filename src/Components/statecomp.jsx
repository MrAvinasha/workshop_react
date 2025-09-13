import { useState } from "react"

function StateComp(){
    const [value, setValue] = useState(0);

    return(
        <div>
            <h1>Value: {value}</h1>
            <button onClick={()=>setValue(value + 1)}>Increment</button>
            <button onClick={()=>setValue(value - 1)}>Decrment</button>
        </div>

    )
}
export default StateComp