
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = contact => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }

  useEffect(() => {
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivedContacts) setContacts(retrivedContacts)

  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
    

  );
}

export default App;
