import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase";

const auth = getAuth(app);

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        setSuccess("Successfully logged in");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setSuccess("Successfully signed out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    handleSignIn(email, password);
    e.target.reset();
  };

  return (
    <div>
      <h1 className="w-full text-success mt-5">Please Login</h1>

      {user ? (
        <div>
          <button
            className="p-2 bg-danger text-black mt-2 w-full"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <p>{success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className="p-2 border"
            name="email"
            id="email"
            type="email"
            placeholder="Your Email"
          />
          <br />
          <input
            className="p-2 border mt-3"
            name="password"
            id="password"
            type="password"
            placeholder="Your Password"
          />
          <br />
          <p className="text-danger"> {error}</p>

          <button
            className="p-2 bg-danger text-black mt-2 w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
