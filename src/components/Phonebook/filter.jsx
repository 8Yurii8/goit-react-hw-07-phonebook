import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChangeAction } from '../store/phonebookReducer';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

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
