import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";

const VoteResult = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Ambil data dari server saat komponen dipasang
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/userss");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  return (
    <div className="bg-slate-200">
      <NavbarAdmin />
      <table class="my-0">
        <thead class="font-bold text-xl">
          <tr>
            <th>No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td key={index}>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoteResult;
