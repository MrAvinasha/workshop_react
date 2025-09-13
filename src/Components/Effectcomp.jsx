import { useEffect, useState } from "react";

function EffectComp(){
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = '${value}';
    });

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        },500);

    });
    
        return(
            <div>
                
                <button onClick={()=>setValue(value + 1)}>Click</button>
                <h1>{count}</h1>
                
            </div>
    
        )
}
export default EffectComp