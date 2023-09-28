import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// AuthContext (from your existing code)
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // Update axios headers whenever auth.token changes
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth.token;
  }, [auth.token]);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      // update the auth when component mounts
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: parseData.user,
        token: parseData.token,
      }));
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);


// PaginationContext (new)
const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const contextValue = {
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
  };

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
}

function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
}

export { useAuth, AuthProvider, usePagination };
