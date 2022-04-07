//css files
import "./App.css";
import "./index.css";
//import axios from "axios";
import React, { useState } from "react";
//import api from "./api";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8000/",
// });

function Signup() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [username, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function postUser(e) {
    e.preventDefault();
    try {
      const userSignup = {
        first_name: firstname,
        last_name: lastname,
        username: username,
        email: email,
        password: password,
      };

      await fetch(`http://127.0.0.1:8000/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userSignup),
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section>
      <form onSubmit={postUser} className="Input">
        <h1>SignUp</h1>
        <input
          type="text"
          className="form-control"
          placeholder="First_Name"
          value={firstname}
          onChange={(e) => setfirstName(e.target.value)}
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="Last_Name"
          value={lastname}
          onChange={(e) => setlastName(e.target.value)}
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setuserName(e.target.value)}
        ></input>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
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
