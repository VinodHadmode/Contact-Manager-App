import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initState = {
  name: "",
  photo: "",
  mobile: "",
  email: "",
  company: "",
  title: "",
  group: "",
};

const AddContact = () => {
  const [state, setState] = useState(initState);
  const [allgroup, setAllGroup] = useState({});

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("state", state);

    try {
      const response = await axios.post(
        `http://localhost:3000/contacts`,
        state
      );
      if (response) {
        toast.success("Contact added successfully!");
        navigate("/contacts/list");
      }
    } catch (error) {
      toast.error("Failed to add contact!");
      console.log(error);
    }
  };

  const getAllGroups = async () => {
    try {
      const response = await axios.get("http://localhost:3000/groups");
      // console.log("response", response);
      setAllGroup(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  return (
    <>
      <section className="add-contacts">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <h4 className="text-success">Create Contact </h4>
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
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                    value={state.name}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Photo URL"
                    name="photo"
                    value={state.photo}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    required={true}
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                    name="mobile"
                    value={state.mobile}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    required={true}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    name="company"
                    value={state.company}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    value={state.title}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-3">
                  <select
                    className="form-control"
                    name="group"
                    value={state.group}
                    onChange={handleInput}
                  >
                    <option value="">Select a group</option>
                    {allgroup.length > 0 &&
                      allgroup.map((group) => {
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
                    className="btn btn-success"
                    value="Create"
                  />
                  <Link className="btn btn-dark ms-2" to={"/contacts/list"}>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddContact;
