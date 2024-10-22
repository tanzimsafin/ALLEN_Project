import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Home />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/test-exam" element={<TestExam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div className="navbar">
      <Link to="/" style={{ fontSize:"30px",fontWeight: "bold", textDecoration: "none"}}>
        ALLEN
      </Link>
      <Link style={{ textDecoration: "none" }} to="/exam">
        Exams
      </Link>
      <Link style={{ textDecoration: "none" }} to="/programme">
        Programmes
      </Link>
      <Link style={{ textDecoration: "none" }} to="/scholarship">
        Scholarships
      </Link>
      <Link style={{ textDecoration: "none" }} to="/test-exam">
        Test series
      </Link>
      <img
        style={{ padding: "10px", borderRadius: "10px" }}
        src="https://static.vecteezy.com/system/resources/thumbnails/003/720/476/small_2x/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
        height="40px"
        width="40px"
      />
      <button
        style={{
          color: "white",
          fontSize: "20px",
          padding: "15px",
          borderRadius: "20px",
        }}
      >
        Login
      </button>
    </div>
  );
}
function Home() {
  return <div>This is Home Page</div>;
}
function Exam() {
  return <div>This is exam page</div>;
}
function Programme() {
  return <div>This is programme Manue</div>;
}

function Scholarship() {
  return <div>This is Scholarshiop Page</div>;
}
function TestExam() {
  return <div>This is Test series</div>;
}
