import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";
export default function Contacts() {
  const [contacts, setContacts] = useState([
    { fullName: "emre", phone_number: 1234 },
    { fullName: "koray", phone_number: 1323 },
    { fullName: "apo", phone_number: 12326 },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}
