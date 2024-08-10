import React from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
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
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo URL"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>

                <div className="mb-3">
                  <select className="form-control">
                    <option value="">Select a group</option>
                    <option value="">Family</option>
                    <option value="">Friends</option>
                    <option value="">Work</option>
                    <option value="">Other</option>
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
