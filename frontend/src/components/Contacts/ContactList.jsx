import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { RiUserAddLine } from "react-icons/ri";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // getting all contacts
  const getContacts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/contacts");
      setContacts(res.data);
      setFilteredContacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // delete contact
  const handleDelete = async (contactID) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/contacts/${contactID}`
      );
      if (response) {
        getContacts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
    setFilteredContacts(filteredContacts);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <section className="contact-search mt-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <h4>
                  Contact Manager
                  <Link
                    to={"/contacts/add"}
                    className="btn btn-outline-dark btn-sm ms-2"
                  >
                    <RiUserAddLine className="me-2" />
                    New
                  </Link>
                </h4>
              </div>
            </div>

            <div className="row">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                fugiat incidunt molestias, dolorum maxime magni eveniet nisi
                alias pariatur impedit commodi at nulla quae laborum facere
                aliquid necessitatibus, ipsum architecto esse nesciunt.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <form className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Names"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-dark ms-3" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list mt-5">
        <div className="container">
          <div className="row">
            {filteredContacts.map((contact) => (
              <div className="col-md-6 mb-3" key={contact.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-4">
                        <img
                          src={contact.photo || "default-photo-url"}
                          alt="user-icon"
                          className="img-fluid rounded-circle"
                        />
                      </div>

                      <div className="col-6">
                        <ul className="list-group">
                          <li className="list-group-item">
                            Name:{" "}
                            <span className="fw-bold">{contact.name}</span>
                          </li>
                          <li className="list-group-item">
                            Mobile:{" "}
                            <span className="fw-bold">{contact.mobile}</span>
                          </li>
                          <li className="list-group-item">
                            Email:{" "}
                            <span className="fw-bold">{contact.email}</span>
                          </li>
                        </ul>
                      </div>

                      <div className="col-2 text-center">
                        <Link
                          className="btn btn-warning my-1"
                          to={`/contacts/view/${contact.id}`}
                        >
                          <FaEye />
                        </Link>
                        <Link
                          className="btn btn-success my-1"
                          to={`/contacts/edit/${contact.id}`}
                        >
                          <FaRegEdit />
                        </Link>
                        <button
                          className="btn btn-danger my-1"
                          onClick={() => handleDelete(contact.id)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
