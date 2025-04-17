// tastebook/src/components/ForgotPassword.jsx
import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Forgot Password</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-secondary w-100">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
