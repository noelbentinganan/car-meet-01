import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
