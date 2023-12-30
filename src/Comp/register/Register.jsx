import { useState } from "react";

const Register = () => {
  const [mail, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <h1>Please Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmail}
          name="email"
          id="email"
          type="email"
          placeholder="Your Email"
        />
        <br />
        <input
          onChange={handlePassword}
          name="password"
          id="password"
          type="password"
          placeholder="Your Password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
