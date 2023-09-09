import React from 'react'
import axios from 'axios';
export default function AddRandomContact(props) {
    const handleClick=async()=>{
      const data = await axios.get("https://random-data-api.com/api/v2/users?size=1&is_xml=true",
      {
        headers:{},
        params:{
          size:1,
        }
      });
      const name=data.data.first_name;
      
      const email=data.data.email;
      const phone=data.data.phone_number;
       props.RandomContact({name:name,email:email,phone:phone})
    }
  return (
    <div>
      <button onClick={handleClick} className='btn btn-success form-control'>Add Random contact</button>
    </div>
  )
}
