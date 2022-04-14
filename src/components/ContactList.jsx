import { useState } from "react";
import Contact from "./Contact";
import SearchBar from "./SearchBar";

function ContactList() {
  const [contact, setContact] = useState([
    {
      fullname: "Mehmet Güven",
      phone: "222111333",
    },
    {
      fullname: "Yağmur Yavuz",
      phone: "555111333",
    },
    {
      fullname: "Öztürk Gökkaya",
      phone: "222555333",
    },
    {
      fullname: "Muaz Erkam Özdemir",
      phone: "248521333",
    },
  ]);

  return (
    <>
      <h1>Contact List App</h1>
      <SearchBar contact={contact} />
      <Contact contact={contact} setContact={setContact} />
    </>
  );
}

export default ContactList;
