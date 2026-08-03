import { useState } from "react"

function App()
{

  const initialState = {
    name : "",
    email : "",
    password : ""
  }

  const [data,setData] = useState(initialState)

  function handleChange(e)
  {
      setData({...data,[e.target.name]:e.target.value}) //
  }

  function handleSubmit(e)
  {   
      e.preventDefault();
      console.log(data)
  }

  return(
    <>
    <h1>App component</h1>

    <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" name="name"  onChange={(e)=>handleChange(e)}/> <br /><br />
          <input type="text" placeholder="email" name="email" onChange={(e)=>handleChange(e)} /> <br /><br /> 
          <input type="text" placeholder="password" name="password" onChange={(e)=>handleChange(e)}/> <br /><br />
          <input type="submit" />
      </form>
    </>
  )
}
export default App