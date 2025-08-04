import {useState} from 'react';


function App() {
 const [password, setPassword] = useState("");
    const [showPassword, setshowPassword] = useState(false)
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)
    let value1,value2;

  return (   
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
   
  <h1 className="text-2xl font-bold mb-4">Password Visibility Toggle</h1>
  <div className="flex items-center">
  <input type={showPassword?"text":"password"} value1={password} 
  onChange={(event) => setPassword(event.target.value)} placeholder=' Enter your password' 
  className='border-black border-solid p-2 rounded w-64' />
  <button onClick={()=>{setshowPassword(!showPassword)}} 
  className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">{showPassword?"Hide":"Show"}</button>
  </div>
  <div className="flex items-center">
  <input type={showConfirmPassword?"text":"password"} value2={password}
  onChange={(event) => setPassword(event.target.value)} placeholder='Enter your password' 
  className='border-black border-solid p-2 rounded w-64'/>
  <button onClick={()=>{setshowConfirmPassword(!showConfirmPassword)}}
   className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">{showConfirmPassword?"Hide":"Show"}</button>
  </div>
   <button className='px-4 py-2 mt-4 text-white bg-yellow-500 rounded transition' disabled={(value1!=value2) && value1<8}>Submit</button>
   {(value1!=value2)? <p className='text-green-500'>✅Password match</p>:<p className='text-red-500'>❌Passwords are not matching and its length should be greater than 8</p>}
  </div>
    
  )
}

export default App
