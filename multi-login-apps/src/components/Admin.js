import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";
import "./Admin.css";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      setUsers(users.filter((user) => user.id !== id));
      await axios.delete(`http://localhost:5000/api/users/delete/${id}`);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <table>
      <NavbarAdmin />
      <thead>
        <tr>
          <th>ID</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button
                className="delete"
                type="button"
                onClick={() => handleDelete(user.id)}
              >
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Admin;
