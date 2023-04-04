import { useContext } from "react";
import { myContext } from "./App";
function Col(){
    let ob=useContext(myContext)
    return(
        <>
        <h1>Component 1:{ob.data.firstcounter}</h1>
    


        <button onClick={()=>ob.dispatch({type:"Increment1",value:1})}>Increment 1</button>
<button onClick={()=>ob.dispatch({type:"Decrement1",value:1})}>Decrement 1 </button>
<button onClick={()=>ob.dispatch({type:"Increment10",value:10})}>Increment 10</button>
<button onClick={()=>ob.dispatch({type:"Decrement10",value:10})}>Decrement10</button>
<button onClick={()=>ob.dispatch({type:"Reset1"})}>Reset 1</button><br></br><br></br>

        </>
    )
}
export default Col;