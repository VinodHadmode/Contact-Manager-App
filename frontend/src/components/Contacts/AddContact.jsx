import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <>
      <section className="add-contacts">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <h3 className="text-success">Create Contact </h3>
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
              <form action="">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Enter name"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Photo URL"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control"
                    id=""
                    placeholder="Mobile"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id=""
                    placeholder="Email"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Company"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Title"
                  />
                </div>

                <div class="mb-3">
                  <select className="form-control">
                    <option value="">Select a group</option>
                    <option value="">Select a group</option>
                    <option value="">Select a group</option>
                    <option value="">Select a group</option>
                  </select>
                </div>
                <div class="mb-3">
                  <input
                    type="submit"
                    class="btn btn-success"
                    id=""
                    value="Create"
                  />
                  <Link className="btn btn-dark ms-2" to={"/contacts/list"}>Cancel</Link>
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
