import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./index.css";
export function Footer() {
  return (
    <div>
      <BrowserRouter className="footer">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Layout() {
  return (
    <div class="footer ">
      <Link style={{ textDecoration: "none" }} to="/about">
        About
      </Link>
      <Link style={{ textDecoration: "none" }} to="/help">
        Help & support
      </Link>
      <Link style={{ textDecoration: "none" }} to="/goal">
        Popular Goal
      </Link>
      <Link style={{ textDecoration: "none" }} to="/courses">
        Courses
      </Link>

      <Outlet />
    </div>
  );
}

function About() {
  return <div>This is about section</div>;
}
function Help() {
  return <div>Help Component</div>;
}

function Goal() {
  return <div>Goal Component</div>;
}

function Courses() {
  return <div>Courses Component</div>;
}

function NoPage() {
  return <div>Page Not Found</div>;
}
