import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CreatePost =  () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [age,setAge]=useState('')
const [error , setError]= useState('');


const navigate= useNavigate()

const handleSubmit = async (e)=>{
  e.preventDefault ()
  const AddUser = {name,email,age}
  const response = await fetch('http://localhost:5000/',{
method:'POST',
body:JSON.stringify(AddUser),
headers:{
  "Content-Type" :"application/json",

},});

  const result = await response.json()


  if(!response.ok){
    console.log(result.error)
    setError(result.error)
  }
if(response.ok){
console.log(result)
setError('')
setAge('')
setEmail('')
setName('')
navigate('/all')
}

}



  return (
    <div className='container my-2'>

<h2 className='text-center'></h2>


<form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={(e)=>{
  setName(e.target.value)
}} />
<input type="text" value={email} onChange={(e)=>{
setEmail(e.target.value)
}}  />
<input type="text" value={age}  onChange={(e)=>{
setAge(e.target.value)
}}/>

<button>Submit</button>
</form>

    </div>
  )
}

export default CreatePost
