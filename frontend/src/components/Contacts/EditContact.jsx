import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const initState = {
  name: "",
  photo: "",
  mobile: "",
  email: "",
  company: "",
  title: "",
  group: "",
};

const EditContact = () => {
  const [contactToEdit, setContactToedit] = useState(initState);
  const [groups, setGroups] = useState([]);

  const { contactID } = useParams();
  const navigate = useNavigate();

  const getContact = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/contacts/${contactID}`
      );

      const groupResponse = await axios.get(`http://localhost:3000/groups`);

      // console.log("response", response.data);
      // console.log("groupResponse", groupResponse.data);

      setContactToedit(response.data);
      setGroups(groupResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactToedit({ ...contactToEdit, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/contacts/${contactID}`,
        contactToEdit
      );

      if (response) {
        navigate("/");
      } else {
        navigate(`/contacts/list/${contactID}`);
      }
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    value={contactToEdit.name}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo URL"
                    name="photo"
                    value={contactToEdit.photo}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                    name="mobile"
                    value={contactToEdit.mobile}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={contactToEdit.email}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    name="company"
                    value={contactToEdit.company}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    value={contactToEdit.title}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <select
                    className="form-control"
                    name="group"
                    value={contactToEdit.group}
                    onChange={handleInput}
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
                src={contactToEdit.photo}
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
