import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllPost = () => {
const [data,setData] = useState([]) 
const [error,setError]=useState('')
const FetchData = async ()=>{
  const response = await fetch('http://localhost:5000/')
  const result = await response.json()
  if(!response.ok){
    console.log(result.error)
  }
if(response.ok){
  setData(result)
} 
}
  useEffect(() => {
    FetchData()
  }, [])
  console.log(data)


  
  const deleteHandler = async (id)=>{
    const response = await fetch(`http://localhost:5000/${id}`,{
      method:'DELETE'
    })

    const result  = await response.json()
    if(!response.ok){
      console.log(result.error)
      setError(error)
    }
  if(response.ok){
    setError('Deleted success')
    setTimeout(() => {
      setError('')
      FetchData()
    }, 1000);
  } 


  }
  

  return (
    <div>
      {data.map((item)=>{

return(
          <div className="card" key={item._id} >
          <div className="card-body">
            <h5 className="card-title">Name: {item.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Email: {item.email}</h6>
            <p className="card-text">Age: {item.age}</p>
            <Link to={`/${item._id}`} className="card-link">Edit</Link>
            <a href='#' className="card-link" onClick={()=>{deleteHandler(item._id)}} >Delete</a>
            {console.log(item._id)}
          </div>
        </div>
      )})}

    </div>
  )
}

export default AllPost
