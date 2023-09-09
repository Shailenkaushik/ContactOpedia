
import { useState } from 'react';
import './App.css';
import AddContact from './Component/ContactPages/AddContact';
import AddRandomContact from './Component/ContactPages/AddRandomContact';
import FavoriteContacts from './Component/ContactPages/FavoriteContacts';
import GeneralContact from './Component/ContactPages/GeneralContact';
import RemoveAllContacts from './Component/ContactPages/RemoveAllContacts';
import Footer from './Component/Layout/Footer';
import Header from './Component/Layout/Header';

function App() {
  const [arr, setArr] = useState([
    {
      id: 1,
      name: "shailen",
      phone: "9667191874",
      email: "kaushikshailen131@gmail.com",
      isFavorite: false,
    },
    {
      id: 2,
      name: "hailen",
      phone: "9667191874",
      email: "kaushikshailen131@gmail.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "ailen",
      phone: "9667191874",
      email: "kaushikshailen131@gmail.com",
      isFavorite: false,
    }
  ]);

  const handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please enter a valid name" };
    } else if (newContact.phone === "") {
      return { status: "failure", msg: "Please enter a valid Phone Number" };
    }

    const duplicateReacord = arr.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone) {
        return true;
      }
    });

    if (duplicateReacord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: arr.length + 1, // Increment the id for the new contact
        isFavorite: false,
      };
      setArr([...arr, newFinalContact]); // Use spread operator to update the state
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  const Toggle = (Id) => {
    console.log("Inside app.js");
    console.log(Id);

    // Use the map function to update the 'isFavorite' property for the specific contact
    const updatedArr = arr.map(contact => {
      if (contact.id === Id) {
        return { ...contact, isFavorite: !contact.isFavorite };
      } else {
        return contact;
      }
    });

    setArr(updatedArr);
  };
  return (
    <>
      <Header></Header>
      <div className='container' style={{ minHeight: "85vh" }}>
        <div className='row py-3'>
          <div className='col-4 offset-2'>
            <AddRandomContact array={arr}></AddRandomContact>
          </div>
          <div className='col-4 '>
            <RemoveAllContacts array={arr}></RemoveAllContacts>
          </div>
          <div className='row py-2 '>
            <div className='col-8 offset-2 row'>
              <AddContact handleAddContact={handleAddContact}  />
            </div>
          </div>
          <div className='row py-2 '>
            <div className='col-8 offset-2 row'>
              <FavoriteContacts array={arr.filter(a => a.isFavorite === true)} Toggle={Toggle} />
            </div>
          </div>
          <div className='row py-2 '>
            <div className='col-8 offset-2 row'>
              <GeneralContact array={arr.filter(a => a.isFavorite === false)} Toggle={Toggle} />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
