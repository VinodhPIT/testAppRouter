import React from 'react'



async function getData() {

    await new Promise(resolve=>setTimeout(resolve ,3000))
  
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  
  next:{
    revalidate:0
  }
  
  
  
  
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
   
    return res.json()
  }
export default async function Hai() {
    const data = await getData()
  

  return (
    <div>

 {data.map((e)=>{


return (
    <div key={e.id}>
<p>cldcldcd</p>
    </div>
)
})} 





      
    </div>
  )
}
