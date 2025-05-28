import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import styles from "./ContactForm.module.css"
import * as Yup from "yup";


export default function ContactForm({ onAddContact }) {
    
    const nameFieldId = useId();
    const numberFieldId = useId();
    const initialValues = {
        name: "",
        number: ""
    }

    const handlerSubmit = (values, actions) => {
        const newContact = { id: nanoid(), ...values };
        onAddContact(newContact)
        actions.resetForm();
    }

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(5, "Too Short!").max(10, "Too Long!").required('Required')});
      

    return (    
        <Formik initialValues={initialValues} onSubmit={handlerSubmit} validationSchema={FeedbackSchema}>
            <Form className={styles.FormBox}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="name" id={nameFieldId} className={styles.textInput}></Field>
                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="number" id={numberFieldId} className={styles.textInput}></Field>
                <button type="submit" className={styles.btn}>Add contact</button>
            </Form>
        </Formik>
    )    
}