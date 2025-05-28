import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'
import '../css/reset.css'
function App() {

  return (
    <div className='box'>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
