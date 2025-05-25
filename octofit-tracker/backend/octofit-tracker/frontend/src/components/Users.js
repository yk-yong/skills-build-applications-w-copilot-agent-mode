import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://super-duper-winner-g5596gwxgrqh9vwj-8000.app.github.dev/api/users/?format=json')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-secondary text-white">
        <h2 className="h4 mb-0">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
