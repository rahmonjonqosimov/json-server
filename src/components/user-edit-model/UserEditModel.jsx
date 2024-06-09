import React, { useEffect } from "react";
import { toast } from "react-toastify";

const UserEditModel = ({ setData, editUser }) => {
  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log("ok");
    fetch(`http://localhost:4000/users/${editUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(editUser),
    }).then(() => setData(null));
  };
  return (
    <>
      <div onClick={() => setData(null)} className="edit__overlay"></div>
      <form onSubmit={handleUpdateUser} className={`edit__form`}>
        <label htmlFor="fname">Last Name *</label>
        <input
          value={editUser?.lastName}
          onChange={(e) => setData((p) => ({ ...p, lastName: e.target.value }))}
          type="text"
          placeholder="Last Name *"
          id="fname"
          required
        />
        <label htmlFor="lname">First Name *</label>
        <input
          value={editUser?.firstName}
          onChange={(e) =>
            setData((p) => ({ ...p, firstName: e.target.value }))
          }
          type="text"
          placeholder="First Name *"
          id="lname"
          required
        />
        <label htmlFor="age">Age *</label>
        <input
          value={editUser?.age}
          onChange={(e) => setData((p) => ({ ...p, age: e.target.value }))}
          type="number"
          placeholder="Age *"
          id="age"
          required
        />
        <label htmlFor="email">Email *</label>
        <input
          value={editUser?.email}
          onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
          type="email"
          placeholder="Email *"
          id="email"
          required
        />
        <label htmlFor="addres">Addres *</label>
        <textarea
          value={editUser?.addres}
          onChange={(e) => setData((p) => ({ ...p, addres: e.target.value }))}
          name="addres"
          rows={4}
          id="addres"
          placeholder="Addres *"
          required
        ></textarea>
        <button>Save</button>
        <button
          type="button"
          onClick={() => setData(null)}
          style={{ marginTop: "10px" }}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default UserEditModel;
