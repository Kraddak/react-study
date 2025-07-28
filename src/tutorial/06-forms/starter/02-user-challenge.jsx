import React from "react";
import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    console.log("submit");
    setUsers([...users, { id: fakeId, name: name }]);
    setName("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <h4>
            <button
              type="remove"
              className="btn"
              onClick={() => {
                setUsers(users.filter((u) => u.id != user.id));
              }}
            >
              d
            </button>
            {user.name}
          </h4>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;

/*
- create state value
  - user - default value null
- create two functions
  - login - set's user equal to object with name property
  - logout - set's user equal to null
- in jsx use ? to display two different setups

- h4 with "hello there, user name" and logout button
- h4 with "please login " and login button

() => {setUsers(users.filter((u) => u.id != user.id)}
*/
