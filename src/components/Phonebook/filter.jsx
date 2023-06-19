import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChangeAction } from '../../store/Contacts/phonebookReducer';
import { selectFilters } from 'store/Contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleChange = e => {
    dispatch(filterChangeAction(e.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Filter contacts by name:</label>
      <input id="filter" type="text" value={filter} onChange={handleChange} />
    </div>
  );
};
