import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Delete a Coffee
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Users has been deleted.",
                icon: "success",
              });
            }
            const remainingUsers = users.filter((usr) => usr._id !== id);
            setUsers(remainingUsers);
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold mb-6">Users in a Table</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>CreatedAt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id} className="bg-base-200">
                  <th>{idx + 1}</th>
                  <td>Name: {user.name}</td>
                  <td>Email :{user.email}</td>
                  <td>CreatedAT :{user?.createdAt}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-sm btn-primary"
                    >
                      X
                    </button>
                    <button className="btn btn-sm btn-secondary">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
