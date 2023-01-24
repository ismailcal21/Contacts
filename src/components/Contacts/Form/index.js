import React, { useEffect } from "react";
import { useState } from "react";
const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  //   console.log("props", addContact);
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
    console.log(form);
    form("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Full Name"
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={onChangeInput}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            margin: "8px",
          }}
        >
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
