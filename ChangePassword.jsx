// tastebook/src/components/ChangePassword.jsx
import React, { useState } from 'react';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password changed successfully!`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Change Password</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Current Password</label>
            <input type="password" className="form-control" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>New Password</label>
            <input type="password" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-warning w-100">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;