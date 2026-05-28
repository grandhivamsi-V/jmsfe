import './App.css';
import { useState } from 'react';

function App() {

  let [name, setName] = useState("");
  let [password, setpassword] = useState("");

  let [error, seterror] = useState({
    name: "",
    password: ""
  });

  let submit = (e) => {
    e.preventDefault();

    seterror({
      name: name === "" ? "* Enter Your Name!" : "",

      password:
        password === ""
          ? "* Password is required!"
          : password.length < 6
          ? "* Password must be at least 6 characters"
          : ""
    });

    if (name !== "" && password.length >= 6) {
      alert("Form Submitted");

      setName("");
      setpassword("");

      seterror({
        name: "",
        password: ""
      });
    }
  };

  return (
    <>
      <form onSubmit={submit}>

        <label>Enter your Name : </label>

        <input
          id="inp1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {
          error.name && <p>{error.name}</p>
        }

        <br />
        <br />

        <label>Enter your password : </label>

        <input
          id="inp2"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        {
          error.password && <p>{error.password}</p>
        }

        <br />
        <br />

        <button
          id="btn"
          type="submit"
          disabled={name === "" || password.length < 6}
        >
          Submit
        </button>

      </form>
    </>
  );
}

export default App;