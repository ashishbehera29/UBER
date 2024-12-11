import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CaptainSignup = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [Firstname,setFirstname] = useState('')
  const [Lastname,setLastname] = useState('')
  const [userData,setUserData] = useState({})

  const submitHandeler=(e)=>{
      e.preventDefault()
      setUserData({
       fullName:{
        firstname:Firstname, 
        lastname:Lastname
       },
       email:email,
       password:password
       })  
         
          
      setEmail('')
      setFirstname('')
      setLastname('')
      setPassword('')
  }
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
    <div>
    <img className="w-20 mb-3" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
    <form onSubmit={ (e)=>{submitHandeler(e)}}>

    <h3 className="text-lg  font-medium mb-2">Whats our captain Name</h3>
    <div className="flex gap-4 mb-6 ">
    <input  required className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base" type="text" placeholder="Firstname" value={Firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
    <input  required className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base" type="text" placeholder="Last name" value={Lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
    </div>
    <h3 className="text-lg font-medium mb-2">Whats our captain email</h3>
    <input  required className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" placeholder="email@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
    <input  required className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">Login</button>
    <p className="text-center">Already have a account? <Link to='/captain-login' className="text-blue-600">Login here</Link></p>
    </form>
    </div>
    <div>
      <p className="text-[10px] leading-tight">This site is Protected by
        reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service</span> apply
      </p>
    </div>
  </div>
  )
}

export default CaptainSignup
