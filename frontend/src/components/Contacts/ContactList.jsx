import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

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
              <div className="col">
                <form action="" className="row">
                  <input
                    type="text"
                    classNa
                    me="form-control"
                    placeholder="Search Names"
                  />
                </form>
              </div>
              <div className="col">
                <input
                  type="submit"
                  className="btn btn-outline-dark"
                  value="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2046-uxddkt7j.png"
                        alt="user-icon"
                        className="user-icon"
                      />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li list-group-item>
                          Name : <span className="fw-bold">Vinod</span>
                        </li>
                        <li list-group-item>
                          Mobile : <span className="fw-bold">1234567890</span>
                        </li>
                        <li list-group-item>
                          Email : <span className="fw-bold">vinod@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1"></div>
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
