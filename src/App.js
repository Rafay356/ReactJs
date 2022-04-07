//css files
import "./App.css";
import "./index.css";
//import axios from "axios";
import React, { useState } from "react";
import api from "./api";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8000/",
// });

function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function postUser(e) {
    e.preventDefault();
    try {
      console.log("aa");
      await api.post(`/user`, {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
      });
      //console.log(firstName, lastName, userName, email, password);
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
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="Last_Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={userName}
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
