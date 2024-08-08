import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactList from "../Contacts/ContactList";
import AddContact from "../Contacts/AddContact";
import ViewContact from "../Contacts/ViewContact";
import EditContact from "../Contacts/EditContact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/contacts/list"} />} />
      <Route path="/contacts/list" element={<ContactList />} />
      <Route path="/contacts/add" element={<AddContact />} />
      <Route path="/contacts/view/:contactID" element={<ViewContact />} />
      <Route path="/contacts/edit/:contactID" element={<EditContact />} />
    </Routes>
  );
};

export default AllRoutes;
