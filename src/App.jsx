import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
