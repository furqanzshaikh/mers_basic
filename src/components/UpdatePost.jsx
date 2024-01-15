import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePost = () => {

  const {id} =useParams();
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState('')

const  navigate=useNavigate()

 const sigleUser = async ()=>{

 
const response = await fetch(`http://localhost:5000/${id}`)
const result = await response.json()

if(!response.ok){
  console.log(result.error)

}
if(response.ok){
console.log(result)
setName(result.name)
setEmail(result.email)
setAge(result.age)

} 

 const handleEdit = async (e)=>{
e.preventDefault()
const updateduser ={name,email,age} 
const response = await fetch(`http://localhost:5000/${id}`,{
  method:'PATCH',
  body:JSON.stringify(updateduser)
})
const result = await response.json()


if(!response.ok){
  console.log(result.error)

}
if(response.ok){

navigate('/all')

} 


 }
 
}

const handleEdit = async (e)=>{
  e.preventDefault()
  const updateduser ={name,email,age} 
  const response = await fetch(`http://localhost:5000/${id}`,{
    method:'PATCH',
    body:JSON.stringify(updateduser),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const result = await response.json()
  
  
  if(!response.ok){
    console.log(result.error)
  
  }
  if(response.ok){
  
  navigate('/all')
  
  } 
  
  
   }


useEffect(()=>{
  sigleUser()
},[])


  return (
    <div className='container my-2'>

    <h2 className='text-center'></h2>
    
    
    <form onSubmit={handleEdit}>
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

export default UpdatePost