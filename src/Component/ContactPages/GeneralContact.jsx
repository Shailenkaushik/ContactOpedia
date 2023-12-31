import React from 'react'
import Contact from './Contact'

export default function GeneralContact(props) {
  return (
    <div
      className='col-12 py-2'
      style={{borderRadius:"10px",backgroundColor:"#323637"}}
    >
    <div className='text-center text-white-50'>Other Contacts</div>
      <div className='p-2'> 
      {props.array.map((arr,index)=>(
        <Contact contact={arr} key={index} Toggle={props.Toggle} RemoveContact={props.RemoveContact}  />
      ))}
    </div>
    </div>
  )
}
