import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar/Sidebar';
import Nav from '../components/Navbar/Nav';
import Users from "../components/Pages/Users/Users";
import SignIn from "../components/Pages/Sign-In/SignIn";
const AuthRouter = () => {
    const [open, setOpen] = React.useState(false);
    const auth = JSON.parse(localStorage.getItem('auth'));
    console.log(auth);
    const handleToggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <div>
            {auth?.user ? ( // User is authenticated
                
                <>
               
                    <Nav onMenuIconClick={handleToggleSidebar} />
                    <Sidebar open={open} onClose={handleToggleSidebar} />
                    <Users />

                </>

            ) : ( // User is not authenticated
                <SignIn />
            )}

            <ToastContainer theme="light" />
        </div>
    );
};

export default AuthRouter;