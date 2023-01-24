import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123",
    },
    {
      fullname: "Ayse",
      phone_number: "456457",
    },
    {
      fullname: "Nazli",
      phone_number: "567568",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
