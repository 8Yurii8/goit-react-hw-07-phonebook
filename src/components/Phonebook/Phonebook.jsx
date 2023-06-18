import React, { useEffect } from 'react';
import css from './style.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../api/api';
import { Filter } from './filter';
const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={filteredContacts} />
        </div>
      ) : (
        <p>No contacts yet.</p>
      )}
    </div>
  );
};

export default Phonebook;
