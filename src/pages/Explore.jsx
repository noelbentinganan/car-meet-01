import { getAuth } from "firebase/auth";
import app from "../../firebase.config";

const Explore = () => {
  const auth = getAuth(app);

  console.log(auth.currentUser);

  return <div>Explore</div>;
};

export default Explore;
