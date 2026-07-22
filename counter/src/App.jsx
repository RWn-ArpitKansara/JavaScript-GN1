import { useState } from "react"

function App()
{
  const [data,setData] = useState(100)
  
  return(
    <>
    <h1>Counter : {data} </h1>

    <button onClick={()=>setData(data+1)}> + </button>
    <button onClick={()=>setData(data-1)}> - </button>
    </>
  )
}

export default App