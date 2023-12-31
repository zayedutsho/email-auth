import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase";

const auth = getAuth(app);

const Register = () => {
  const [mail, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const [error, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    setSuccess("");
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email:", email);
    console.log("Password:", password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Successfully added");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setErr(error.message);
      });
  };

  return (
    <div>
      <h1 className="w-full text-success mt-5">Please Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="p-2 border"
          onChange={handleEmail}
          name="email"
          id="email"
          type="email"
          placeholder="Your Email"
        />
        <br />
        <input
          className="p-2 border mt-3"
          onChange={handlePassword}
          name="password"
          id="password"
          type="password"
          placeholder="Your Password"
        />
        <br />
        <p className="text-danger"> {error}</p>
        <p className="text-primary">{success}</p>

        <button className="p-2 bg-danger text-black mt-2 w-full" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
