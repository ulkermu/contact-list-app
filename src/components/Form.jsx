import { useState } from "react";

function Form({ contact, setContact }) {
  const initialValue = { fullname: "", phone: "" }
  const [form, setForm] = useState(initialValue);

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone === "") {
      return false;
    }

    setContact([...contact, form])
    setForm(initialValue);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        onChange={inputHandler}
        className="form-input"
        value={form.fullname}
        autoComplete="off"
        name="fullname"
        type="text"
        placeholder="Contact Name"
      />
      <input
        onChange={inputHandler}
        className="form-input"
        value={form.phone}
        autoComplete="off"
        name="phone"
        type="text"
        placeholder="Phone Number"
      />
      <button className="form-button">Add New Contact</button>
    </form>
  );
}

export default Form;
