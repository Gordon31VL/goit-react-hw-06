import Contact from "../Contact/Contact"
import ContactListStyle from "./ContactList.module.css"
export default function ContactList({contacts, onDelete}) {
    return (
        <ul className={ContactListStyle.box}>
            {contacts.map((contact) => {
                return (
                    <Contact key={contact.id} contact={contact} onDelete={onDelete}></Contact>
                )
            })}
        </ul>
    )
}