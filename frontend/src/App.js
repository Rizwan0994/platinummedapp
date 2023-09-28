// App.js
import * as React from 'react';
import Nav from './components/Navbar/Nav';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import { AuthProvider, PaginationProvider } from "./contextApi/appContext";
import AppRouter from "./router/appRouter";
import AuthRouter from './router/authRouter';
// // Define a new component for the Navbar and Sidebar
// function Main() {
//   const [open, setOpen] = React.useState(false);
//   //const location = useLocation();

//   const handleToggleSidebar = () => {
//     setOpen(!open);
//   };

//   // Conditionally render Nav and Sidebar based on the current route
//   // if (location.pathname === '/sign-in') {
//   //   return (
//   //     <div className="">
//   //       <Routes>
//   //         <Route path="/sign-in" element={<SignIn />} />
//   //       </Routes>
//   //     </div>
//   //   );
//   // } else {
//     return (
//       <div className="">
//         <Nav onMenuIconClick={handleToggleSidebar} />
//         {/* <Sidebar open={open} onClose={handleToggleSidebar} /> */}
//       </div>
//     );
//   }


export default function App() {
  return (
    <PaginationProvider>
    <AuthProvider>
    <AppRouter />

  </AuthProvider>
  </PaginationProvider>
  );
}
