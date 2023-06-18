import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../api/api';
import { validationSchema } from '../validate/validationSchema';

import css from './style.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const onSubmit = ({ name, number }, actions) => {
    if (isContactExist(name)) {
      alert(`Name ${name} is already in contacts`);
      return;
    }

    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));

    actions.resetForm();
  };

  const isContactExist = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form className={css.contact}>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="number">Number</label>
            <Field type="tel" id="number" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" disabled={!formik.isValid}>
            add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
