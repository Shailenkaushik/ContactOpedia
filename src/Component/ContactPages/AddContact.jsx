import React, { useState } from 'react'

export default function AddContact(props) {

   const [errorMessage,setErrorMessage]=useState("");
   const [successMessage,setSuccessMessage]=useState("");
     const  handleAddContactFormsubmit=(e)=>{
        
        e.preventDefault();
        const name=e.target.elements.ContactName.value.trim();
        const email=e.target.elements.ContactEmail.value.trim();
        const phone=e.target.elements.ContactPhone.value.trim();
      
    const response=  props.handleAddContact({name:name,email:email,phone:phone});
      if(response.status==="success"){
        setErrorMessage("");
        setSuccessMessage(response.msg);
        document.querySelector(".contact-form").reset();
      }
       else{
        setErrorMessage(response.msg);
        setSuccessMessage("");
       } 
       }

       
  return (
    <div className='border col-12 text-white p-2'>
        <form onSubmit={handleAddContactFormsubmit} className='contact-form'>
        <div className='row p-2'>
        <div className='col-12 text-white-50'>Add a new Contact</div>
        <div className='col-12 col-md-4 p-1'>
            <input name='ContactName' className='form-control form-control-sm' placeholder='Name...' />
        </div>
        <div className='col-12 col-md-4 p-1'>
            <input name='ContactEmail' className='form-control form-control-sm' placeholder='Email...' />
        </div>
        <div className='col-12 col-md-4 p-1'>
            <input name='ContactPhone' className='form-control form-control-sm' placeholder='Phone...' />
        </div>
       {errorMessage===""?(<div></div>):
       (<div className='col-12 text-center text-danger'>
           {errorMessage}
       </div>)}
     
       {successMessage===""?(<div></div>):
       (<div className='col-12 text-center text-danger'>
           {successMessage}
       </div>)}

        <div className='col-12 col-md-6 offset-md-3 p-1'>
            <button  className='btn btn-primary btn-sm form-control'> Create</button>
        </div>
        </div>
        </form>
     </div>
  )
} 
