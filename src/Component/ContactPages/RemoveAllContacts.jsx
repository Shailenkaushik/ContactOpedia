import React from 'react'

export default function RemoveAllContacts(props) {
    const handleClick=()=>{
       props.RemoveAll();
    }
  return (
    <div>
        
       <button onClick={handleClick} className='btn btn-danger form-control'>Remove All</button>
    </div>
  )
}
