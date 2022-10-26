import React, { useEffect } from "react";
// REDUX
import { getAllUsers } from "../store/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export const UserList = () => {
  // -------------------------------------------------------------------------------- //
  const { listUsers } = useSelector((state) => state.users);

  // -------------------------------------------------------------------------------- //
  const dispatch = useDispatch();

  // -------------------------------------------------------------------------------- //
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  // -------------------------------------------------------------------------------- //
  return (
    <div className="container min-vh-100">
      <div className="row">
        {listUsers.length > 0 ? (
          <>
            <h1 className="text-center mt-5 text-uppercase fst-italic">
              Lista de usuarios
            </h1>
            {listUsers.map((user, index) => {
              return (
                <div key={index} className="col-md-3 mt-5 mb-5">
                  <div className="card">
                    <img src={user.avatar} alt="avatar"></img>
                    <div className="card-body">
                      <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                      <p className="card-text">{user.email}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div
              className="alert alert-info text-center text-uppercase mt-5 mb-5"
              role="alert"
            >
              No se encontraron clientes
            </div>
          </>
        )}
      </div>
    </div>
  );
};
