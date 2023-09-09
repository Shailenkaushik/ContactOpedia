import React from 'react'

export default function RemoveAllContacts(props) {
    const handleClick=()=>{
        console.log(props.array[0].name);
        props.array.length=0;
      if(props.array.length>0){
        console.log(props.array[0].name);
        console.log("Hello world");
      }  
      else{
        console.log("mellow")
      }
    }
  return (
    <div>
        
       <button onClick={handleClick} className='btn btn-danger form-control'>Remove All</button>
    </div>
  )
}
