import { useState } from "react";
export default function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  console.log("filtered", filtered);
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullName}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total Contact({filtered.length})</p>
    </div>
  );
}
