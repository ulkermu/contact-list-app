import { useState } from "react";
import Form from "./Form";
import Contact from "./Contact";

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
    {
      fullname: "Arif Can Ercam",
      phone: "248531586",
    },
  ]);

  return (
    <>
      <h1>Contact List</h1>
      <Contact contact={contact} />
      <Form contact={contact} setContact={setContact} />
    </>
  );
}

export default ContactList;
