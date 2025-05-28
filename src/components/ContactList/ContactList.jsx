import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import ContactListStyle from "./ContactList.module.css"
import { deleteContact } from "../../redux/contactsSlice";

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.contacts)
    const filter = useSelector(state => state.filters.filter)
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    const handlerDelete = id => {
        dispatch(deleteContact(id))
    }

    return (
        <ul className={ContactListStyle.box}>
            {filteredContacts.map((contact) => {
                return (
                    <Contact key={contact.id} contact={contact} onDelete={handlerDelete}></Contact>
                )
            })}
        </ul>
    )
}