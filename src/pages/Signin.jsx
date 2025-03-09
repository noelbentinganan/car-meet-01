const Signin = () => {
  return (
    <div className="container mx-0 my-20">
      <div className="flex flex-col items-center">
        <header className="text-6xl font-brand font-black">CarMeet</header>
        <p className="text-sm mb-11">Trade. Sell. Rent.</p>

        <form className="flex flex-col w-60">
          <input
            type="email"
            placeholder="Email"
            className="input input-primary my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-primary my-2"
          />
          <button className="btn btn-primary my-2">Sign In</button>
          <p className="text-xs">
            Don't have an account?{" "}
            <span className="text-primary font-black cursor-pointer">
              Sign Up
            </span>
          </p>
        </form>

        <p className="text-xs font-light my-3">or</p>

        <p>Google btn here</p>
      </div>
    </div>
  );
};

export default Signin;
