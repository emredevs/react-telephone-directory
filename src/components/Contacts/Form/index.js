import { useState, useEffect } from "react";
const initialFormValues = { fullName: "", phone_number: "" };
export default function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);
  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
    console.log(form);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullName"
          value={form.fullName}
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          value={form.phone_number}
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}
