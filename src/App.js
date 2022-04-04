//css files
import "./App.css";
import "./index.css";
import Axios from "axios";
import React from "react";

function Signup() {
  const getUser = () => {
    Axios.get("http://127.0.0.1:8000/user").then((res) => {
      console.log(res);
    });
  };
  return (
    <section>
      <form className="Input">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
        ></input>

        <input
          type="password"
          className="form-control"
          placeholder="Password"
        ></input>
        <button onClick={getUser} className="btn btn-primary">
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
