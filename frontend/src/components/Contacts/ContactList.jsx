import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const getData = async () => {
    axios
      .get("http://localhost:3000/contacts")
      .then((res) => {
        console.log(res.data);
        setContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="contact-search mt-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-success ms-2">
                    <FiPlusCircle className="me-2" />
                    New
                  </Link>
                </p>
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
                  />
                  <button className="btn btn-outline-dark ms-2" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list mt-5">
        <div className="container">
          <div className="row">
            {contacts.map((contact) => (
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
                            Name: <span className="fw-bold">{contact.name}</span>
                          </li>
                          <li className="list-group-item">
                            Mobile: <span className="fw-bold">{contact.mobile}</span>
                          </li>
                          <li className="list-group-item">
                            Email: <span className="fw-bold">{contact.email}</span>
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
                        <button className="btn btn-danger my-1">
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
