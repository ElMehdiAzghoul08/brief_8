// src/components/HomePage.jsx
import React, { useState } from "react";
import GenericTable from "./GenericTable";

const HomePage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', age: 30, haveAccess: true },
    { id: 2, name: 'Jane Smith', age: 25, haveAccess: false },
    { id: 3, name: 'Bob Johnson', age: 35, haveAccess: true },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'haveAccess', header: 'Have Access' },
  ];

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = (user) => {
    setUsers(users.filter((u) => u.id !== user.id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">User List</h1>
      <GenericTable
        data={users}
        columns={columns}
        onView={handleView}
        onDelete={handleDelete}
      />

      {selectedUser && (
        <div className="mt-4 p-4 bg-black rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">User Details</h2>
          <p className="mb-2"><span className="font-semibold">Name:</span> {selectedUser.name}</p>
          <p className="mb-2"><span className="font-semibold">Age:</span> {selectedUser.age}</p>
          <p className="mb-2">
            <span className="font-semibold">Access:</span> 
            <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
              selectedUser.haveAccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {selectedUser.haveAccess ? 'Yes' : 'No'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;