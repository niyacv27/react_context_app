import React, { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

function ProfilePage() {
  const { user, logout, updateName } = useAuthContext();
  const [newName, setNewName] = useState(user?.name || "");

  if (!user) return null;

  const handleUpdateName = () => {
    if (newName.trim()) {
      updateName(newName.trim());
    }
  };

  return (
    <div className="card">
      <h2>Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <div className="update-name">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Update name"
        />
        <button onClick={handleUpdateName} className="btn">
          Update Name
        </button>
      </div>

      <button onClick={logout} className="btn danger">
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
