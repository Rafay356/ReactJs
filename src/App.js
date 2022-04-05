//css files
import "./App.css";
import "./index.css";
import axios from "axios";
import React, { useState } from "react";

function Signup() {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [userName, setuserName] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  async function postUser(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/user", {
        firstName,
        lastName,
        userName,
        email,
        password,
      });
      console.log(firstName, lastName, userName, password, email);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section>
      <form onSubmit={postUser} className="Input">
        <input
          type="text"
          className="form-control"
          placeholder="First_Name"
          onChange={(e) => setfirstName(e.target.value)}
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="Last_Name"
          onChange={(e) => setlastName(e.target.value)}
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => setuserName(e.target.value)}
        ></input>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        ></input>

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}

// const Input = () => {
//   return (

//   );
// };

export default Signup;
