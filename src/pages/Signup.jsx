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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { firstName, lastName, email, password } = formData;

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

      // register new user using email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // get the user from the userCredential - for database use
      const user = userCredential.user;

      // update profile
      updateProfile(auth.currentUser, {
        displayName: firstName,
      });

      console.log(user);
    } catch (error) {
      console.log(error);
    }

    console.log(formData); // <-- check object data
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="input input-primary my-2"
          id="firstName"
          value={firstName || ""}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="input input-primary my-2"
          id="lastName"
          value={lastName || ""}
          onChange={onChange}
        />

        <input
          type="email"
          placeholder="Email"
          className="input input-primary my-2"
          id="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-primary my-2"
          id="password"
          value={password}
          onChange={onChange}
        />
        <button className="btn btn-primary my-2">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
