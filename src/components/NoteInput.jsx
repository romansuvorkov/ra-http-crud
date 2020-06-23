import React, { useState} from 'react';

function NotesInput(props) {

  const { onAdd } = props;

  const [form, setForm] = useState({
    text: ''
  });

  const handleChange = event => {
    const {value} = event.target;
    setForm(prevForm => ({...prevForm, text: value}));
    console.log(form.text);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      onAdd(form.text);
      setForm({text: ''});
  }

  return (
    <form className="input_wraper" onSubmit={handleSubmit}>
      <label htmlFor="input">New Note</label>
      <textarea id="input" className="input" value={form.text} onChange={handleChange}/>
      <button className="input_btn" type="submit">&#10148;</button>
    </form>
  );
}

export default NotesInput;