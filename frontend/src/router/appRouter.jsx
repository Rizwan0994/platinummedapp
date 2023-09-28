import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar/Sidebar';
import Nav from '../components/Navbar/Nav';
import Users from "../components/Pages/Users/Users";
import SignIn from "../components/Pages/Sign-In/SignIn";
import PageNotFound from "../components/Pages/PageNotFound";


const AppRouter = () => {
  
  const [open, setOpen] = React.useState(false);
  const auth = JSON.parse(localStorage.getItem('auth'));
  console.log(auth);
  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
        <BrowserRouter>
          <>
            <Nav onMenuIconClick={handleToggleSidebar} />
            <Sidebar open={open} onClose={handleToggleSidebar} />
            <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/" element={<Users />} />
            <Route path="*" element={<PageNotFound />} />
            </Routes>
          </>
        </BrowserRouter>


      <ToastContainer theme="light" />
    </div>
  );
};

export default AppRouter;
