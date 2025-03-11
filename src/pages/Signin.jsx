import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// firebase imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const navigate = useNavigate();

  // onChange fn - this will get the values inside the inputs
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

      // create new user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // validation - if user successfully created, navigate to "/"
      if (userCredential.user) {
        navigate("/explore");
      }
    } catch (error) {
      console.log(error);
    }

    console.log(formData); // <-- check formData object
  };

  return (
    <div className="container mx-0 my-20">
      <div className="flex flex-col items-center">
        <header className="text-6xl font-brand font-black">CarMeet</header>
        <p className="text-sm mb-11">Trade. Sell. Rent.</p>

        <form className="flex flex-col w-60" onSubmit={onSubmit}>
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
          <button className="btn btn-primary my-2">Sign In</button>

          <p className="text-xs">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-info font-black font-brandS cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </form>

        <p className="text-xs font-light my-3">or</p>

        <p>Google btn here</p>
      </div>
    </div>
  );
};

export default Signin;
