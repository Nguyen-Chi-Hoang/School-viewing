import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./homePage/Content";
import WebGLComponent from "./WebGLPage/WebGLComponent";
import Login from "./LoginRegisPage/Login/Login";
import Registration from "./LoginRegisPage/Registration/Registration";
import Admin from "./AdminPage/Admin";
import AdminRoute from "./routing/AdminRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Content />} />
        <Route path="/3dmap" element={<WebGLComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Protected Admin Route */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route index element={<Admin />} /> {/* Default child of /admin */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
