import React, { useState} from "react";
import { v4 as uuid } from 'uuid'

const FormFilter = (props) => {
  const [characters, setCharacters] = useState('')
  const [formValues, setFormValues] = useState({
    name: "",
  });

  const onInputChange = (event) => {
    const inputThatChanged = event.target.name;
    const newValueForInput = event.target.value;
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newCharacter = {
      id: uuid(),
      name: formValues.name,
    };
    setCharacters([...characters, newCharacter]);
  };

  // const filterCharacters = props.filterCharacters.filter(character => {
  //   return formValues.name;
  // })

  return (
    <form onSubmit={onFormSubmit}>
      <input
        onChange={onInputChange}
        value={formValues.name}
        name='name'
        type='text'
        placeholder='search character'
        
      />
      <button>Search</button>
   </form>

  )
};
export default FormFilter;