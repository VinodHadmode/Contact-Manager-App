import React from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
  return (
    <>
      <section className="view-contacts-intro py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-warning">View Contact</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                tempora neque doloribus laborum sunt impedit quidem earum cumque
                esse architecto sequi vitae molestiae deserunt atque quos
                eligendi, nihil molestias nisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="view-contact mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2046-uxddkt7j.png"
                alt="user-icon"
                className="img-fluid rounded-circle"
                style={{ maxWidth: "200px" }}
              />
            </div>

            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Name:</strong> Vinod
                </li>
                <li className="list-group-item">
                  <strong>Mobile:</strong> 1234567890
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> vinod@gmail.com
                </li>
                <li className="list-group-item">
                  <strong>Company:</strong> ABC Corp
                </li>
                <li className="list-group-item">
                  <strong>Title:</strong> Software Developer
                </li>
                <li className="list-group-item">
                  <strong>Group:</strong> Development
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col text-center">
              <Link
                to="/contacts/list"
                className="btn btn-warning"
                type="button"
              >
                Back to Contacts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewContact;
