import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const [contactToEdit, setContactToedit] = useState({});
  const [groups, setGroups] = useState([]);

  const { contactID } = useParams();

  const getContact = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/contacts/${contactID}`
      );

      const groupResponse = await axios.get(`http://localhost:3000/groups`);

      console.log("response", response.data);
      console.log("groupResponse", groupResponse.data);

      setContactToedit(response.data);
      setGroups(groupResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContact();
  }, []);
  return (
    <>
      <section className="edit-contacts">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <h3 className="text-primary">Edit Contact</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                nemo tempore ex nulla perferendis quibusdam vero omnis autem
                debitis, tenetur ipsam animi ullam ut consectetur optio quidem.
                Atque, odio odit!
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name=""
                    value={contactToEdit.name}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo URL"
                    name=""
                    value={contactToEdit.photo}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                    name=""
                    value={contactToEdit.mobile}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name=""
                    value={contactToEdit.email}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    name=""
                    value={contactToEdit.company}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name=""
                    value={contactToEdit.title}
                  />
                </div>

                <div className="mb-3">
                  <select
                    className="form-control"
                    name=""
                    value={contactToEdit.group}
                  >
                    <option value="">Select a group</option>
                    {groups.length > 0 &&
                      groups.map((group) => {
                        return (
                          <option key={group.id} value={group.id}>
                            {group.name}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="mb-3">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Save Changes"
                  />
                  <Link className="btn btn-dark ms-2" to={"/contacts/list"}>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-md-6 text-center">
              <img
                className="user-icon img-fluid rounded-circle border"
                src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2046-uxddkt7j.png"
                alt="user-icon"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditContact;
