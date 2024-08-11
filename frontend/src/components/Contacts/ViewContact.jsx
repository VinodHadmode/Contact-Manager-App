import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewContact = () => {
  const [contact, setContact] = useState({});
  const [group, setGroup] = useState({});

  const { contactID } = useParams();

  const getData = async () => {
    try {
      const contactResponse = await axios.get(
        `http://localhost:3000/contacts/${contactID}`
      );
      const contactData = contactResponse.data;
      setContact(contactData);

      // Now fetch the group data based on the contact's group ID
      if (contactData.group) {
        const groupResponse = await axios.get(
          `http://localhost:3000/groups/${contactData.group}`
        );
        setGroup(groupResponse.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("Contact", contact);
  console.log("Group", group);

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

      {Object.keys(contact).length > 0 && (
        <section className="view-contact mt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={contact.photo}
                  alt="user-icon"
                  className="img-fluid rounded-circle"
                  style={{ maxWidth: "200px" }}
                />
              </div>

              <div className="col-md-8">
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Name:</strong> {contact.name}
                  </li>
                  <li className="list-group-item">
                    <strong>Mobile:</strong> {contact.mobile}
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> {contact.email}
                  </li>
                  <li className="list-group-item">
                    <strong>Company:</strong> {contact.company}
                  </li>
                  <li className="list-group-item">
                    <strong>Title:</strong> {contact.title}
                  </li>
                  <li className="list-group-item">
                    <strong>Group:</strong> {group.name || "No Group"}
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
      )}
    </>
  );
};

export default ViewContact;
