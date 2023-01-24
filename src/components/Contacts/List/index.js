import React, { useState } from "react";
import "../style.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  console.log("filtered", filtered);
  return (
    <div>
      <h1>Contacts</h1>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact, index) => {
          return (
            <li
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </li>
          );
        })}

        <p>Total Contacts({filtered.length})</p>
      </ul>
    </div>
  );
}

export default List;
