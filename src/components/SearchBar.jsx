import { useState } from "react";

function SearchBar({ contact }) {
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
          <li className="search-items" key={key}>{`${contact.fullname} ${contact.phone}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
