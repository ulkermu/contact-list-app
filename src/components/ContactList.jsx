import { useState } from "react";
import Form from "./Form";
import SearchBar from "./SearchBar";

function ContactList() {
  const [contact, setContact] = useState([
    {
      fullname: "Murat Ülker",
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
      fullname: "Selami İvedilikle",
      phone: "248521333",
    },
  ]);

  return (
    <>
      <SearchBar contact={contact} />
      <Form contact={contact} setContact={setContact} />
    </>
  );
}

export default ContactList;

/*

*/
