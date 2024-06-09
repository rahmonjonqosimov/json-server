import React from "react";
import { toast } from "react-toastify";

const CreateUser = () => {
  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData.entries());
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <form onSubmit={handleNewUserSubmit} className="create__product__form">
      <label htmlFor="fname">Last Name *</label>
      <input
        name="lastName"
        type="text"
        placeholder="Last Name *"
        id="fname"
        required
      />
      <label htmlFor="lname">First Name *</label>
      <input
        name="firstName"
        type="text"
        placeholder="First Name *"
        id="lname"
        required
      />
      <label htmlFor="age">Age *</label>
      <input name="age" type="number" placeholder="Age *" id="age" required />

      <label htmlFor="email">Email *</label>
      <input
        name="email"
        type="email"
        placeholder="Email *"
        id="email"
        required
      />
      <label htmlFor="addres">Addres *</label>
      <textarea
        name="addres"
        rows={4}
        id="addres"
        placeholder="Addres *"
        required
      ></textarea>
      <button> Add</button>
    </form>
  );
};

export default CreateUser;
