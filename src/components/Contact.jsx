import { useState } from "react";

function Contact({ contact }) {
  const [search, setSearch] = useState("");

  const filteredContact = contact.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(search.toLowerCase())
    );
  });

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  console.log(filteredContact, "filteredContact");

  return (
    <div className="search">
      <input className="search-input" placeholder="Search Contact" onChange={searchHandler} />

      <ul className="search-list">
        {filteredContact.map((contact, key) => (
          <li className="search-items" key={key}>
            <div className="search-name">{`${contact.fullname}`}</div>
            <div className="search-phone">{`${contact.phone}`}</div>
          </li>
        ))}
      </ul>
      {filteredContact.length > 1 ? `Total Contacts (${filteredContact.length})` : `Contact (${filteredContact.length})`
      }
    </div>
  );
}

export default Contact;