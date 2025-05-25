import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://super-duper-winner-g5596gwxgrqh9vwj-8000.app.github.dev/api/teams/?format=json')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-info text-white">
        <h2 className="h4 mb-0">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>{team.members ? team.members.length : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
