import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// firebase imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import app from "../../firebase.config";

const Signup = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password1: "",
  });
  const { firstName, lastName, email, password, password1 } = formData;

  const navigate = useNavigate();

  // onChange fn
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // onSubmit fn
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);

      // password validation
      if (!password || !password1) {
        setError("Both fields are required");
        return;
      }
      if (password !== password1) {
        setError("Passwords do not match");
        return;
      }

      // register new user using email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // get the user from the userCredential - for database use - for database use - use uid reference for setDoc
      const user = userCredential.user;

      // update profile
      updateProfile(auth.currentUser, {
        displayName: firstName,
      });

      // save to firestore
      const formDataCopy = { ...formData }; // <-- copy form data state
      delete formDataCopy.password; // <-- delete password
      delete formDataCopy.password1; // <-- delete password
      formDataCopy.timestamp = serverTimestamp(); // <-- add timestamp property in formDataCopy

      await setDoc(doc(db, "users", user.uid), formDataCopy); // <-- set/ add the  document

      console.log(formDataCopy);

      navigate("/");
    } catch (error) {
      console.log(error);
    }

    // console.log(formData); // <-- check object data
  };

  return (
    <div className="container mx-0 my-20">
      <div className="flex flex-col items-center">
        <header className="text-4xl font-brand font-black mb-11">
          Sign Up
        </header>

        <form className="flex flex-col w-60 " onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="First Name"
            className="input input-primary my-2"
            id="firstName"
            value={firstName || ""}
            onChange={onChange}
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            className="input input-primary my-2"
            id="lastName"
            value={lastName || ""}
            onChange={onChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-primary my-2"
            id="email"
            value={email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-primary my-2"
            id="password"
            value={password}
            onChange={onChange}
            required
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="input input-primary my-2"
            id="password1"
            value={password1}
            onChange={onChange}
            required
          />

          {error && (
            <p className="alert alert-error alert-soft text-xs">{error}</p>
          )}

          <button className="btn btn-primary my-2">Sign Up</button>

          <p className="text-xs">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-info font-black font-brand cursor-pointer"
            >
              Sign In Instead
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
