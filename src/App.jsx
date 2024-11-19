import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import ContactUs from "./pages/contactUs";

function App() {
  return (
    <Router>
      <div className=" min-h-screen bg-[#eee]">
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;