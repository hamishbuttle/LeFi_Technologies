import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms"
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./components/AuthProvider";

export default function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/controlcenter" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
        </AuthProvider>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}
