import React, { useEffect, useState } from "react";
import UserEditModel from "../user-edit-model/UserEditModel";
import UserLoading from "../user-loading/UserLoading";
const ManageUser = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(true);
  const [editUser, setEditUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [reload, editUser]);

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    }).then((res) => setReload((p) => !p));
  };
  const productItems = data?.map((item) => (
    <div key={item?.id} className="user__card">
      <div className="user__img"></div>
      <div className="user__heading">
        <h3 className="user__title">
          {item?.firstName} {item?.lastName}
        </h3>
      </div>
      <h4 className="user__age"> {item?.age} years old</h4>
      <p className="user__email">{item?.email}</p>
      <div className="btns">
        <button onClick={() => handleDeleteUser(item?.id)}>Delete</button>
        <button onClick={() => setEditUser(item)}>Edit</button>
      </div>
    </div>
  ));
  return (
    <>
      <div className="user__wrapper">{productItems}</div>
      {editUser ? (
        <UserEditModel setData={setEditUser} editUser={editUser} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ManageUser;
