import { useEffect, useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'
import '../css/reset.css'
function App() {
  const startContactList =
    [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }]
  
  const [contacts, setContacts] = useState(() => {
    try {
      const savedData = localStorage.getItem('contactList')
      return savedData ? JSON.parse(savedData) : startContactList
    } catch {
      return startContactList
    }
  });

  const [filter, setFilter] = useState('')
  
  const addContact = (newContact) => {
    setContacts((prevContact) => [...prevContact, newContact]);
  }
  
  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId)
    })
  }

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='box'>
      <ContactForm onAddContact={addContact}></ContactForm>
      <SearchBox value={filter} onFilter={setFilter}></SearchBox>
      <ContactList contacts={filterContacts} onDelete={deleteContact}></ContactList>
    </div>
  )
}

export default App
