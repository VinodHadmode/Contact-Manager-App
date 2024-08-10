import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const ContactList = () => {
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
              <div className="col-md-8">
                <form className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Names"
                  />
                  <button className="btn btn-dark ms-2" type="submit">
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
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2046-uxddkt7j.png"
                        alt="user-icon"
                        className="img-fluid rounded-circle"
                        style={{ width: "75px", height: "75px" }}
                      />
                    </div>

                    <div className="col-md-8">
                      <ul className="list-group">
                        <li className="list-group-item">
                          Name: <span className="fw-bold">Vinod</span>
                        </li>
                        <li className="list-group-item">
                          Mobile: <span className="fw-bold">1234567890</span>
                        </li>
                        <li className="list-group-item">
                          Email:{" "}
                          <span className="fw-bold">vinod@gmail.com</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link
                        className="btn btn-warning my-1"
                        to={"/contacts/view/:contactID"}
                      >
                        <FaEye />
                      </Link>
                      <Link
                        className="btn btn-success my-1"
                        to={"/contacts/edit/:contactID"}
                      >
                        <FaRegEdit />
                      </Link>
                      <Link className="btn btn-danger my-1">
                        <AiOutlineDelete />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate the above card structure for more cards */}
            <div className="col-md-6">
              {/* Repeat card code here */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2046-uxddkt7j.png"
                        alt="user-icon"
                        className="img-fluid rounded-circle"
                        style={{ width: "75px", height: "75px" }}
                      />
                    </div>

                    <div className="col-md-8">
                      <ul className="list-group">
                        <li className="list-group-item">
                          Name: <span className="fw-bold">Vinod</span>
                        </li>
                        <li className="list-group-item">
                          Mobile: <span className="fw-bold">1234567890</span>
                        </li>
                        <li className="list-group-item">
                          Email:{" "}
                          <span className="fw-bold">vinod@gmail.com</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link
                        className="btn btn-warning my-1"
                        to={"/contacts/view/:contactID"}
                      >
                        <FaEye />
                      </Link>
                      <Link
                        className="btn btn-success my-1"
                        to={"/contacts/edit/:contactID"}
                      >
                        <FaRegEdit />
                      </Link>
                      <Link className="btn btn-danger my-1">
                        <AiOutlineDelete />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
