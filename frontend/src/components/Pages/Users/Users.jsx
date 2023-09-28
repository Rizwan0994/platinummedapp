// import React, { useState, useEffect } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import SearchBar from "../../Buttons/SearchBar/SearchBar";
// import Pagination from "../../Pagination/Pagination";
// import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress
// import "./Users.css";

// const Users = () => {
//   const [rows, setRows] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [originalRows, setOriginalRows] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(30); // Initial rows per page
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const rowsPerPageOptions = [10, 20, 50]; 

//   const columnsToDisplay = [
//     "name",
//     "email",
//     "phone",
//     "password",
//     "hourlyrate",
//     "paidtype",
//     "timeZone",
//     "role",
//     "Actions"
//   ];

//   const handleSearch = (text) => {
//     setSearchText(text);

//     if (text === "") {
//       setRows(originalRows);
//     } else {
//       const filteredRows = originalRows.filter((row) => {
//         return columnsToDisplay.some((column) =>
//           (row[column]?.toString() || "").toLowerCase().includes(text.toLowerCase())
//         );
//       });
//       setRows(filteredRows);
//     }
//   };

//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     fetch("http://localhost:5000/api/v1/auth/all")
//       .then((response) => response.json())
//       .then((data) => {
//         const formattedData = data;
//         setOriginalRows(formattedData);
//         setRows(formattedData.slice(0, rowsPerPage));
//       })
//       .catch((error) => {
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     const startIndex = (pageNumber - 1) * rowsPerPage;
//     const endIndex = Math.min(startIndex + rowsPerPage, originalRows.length);
//     setRows(originalRows.slice(startIndex, endIndex));
//   };

//   return (
//        <>
//       <Paper className="pages">
//         <TableContainer className="users-container">
//           <div className="search-bar-container">
//             <SearchBar placeholder="Search" onSearch={handleSearch} />
//           </div>
//           {loading ? (
//             <CircularProgress />
//           ) : error ? (
//             <div>Error fetching data: {error.message}</div>
//           ) : (
//             <Table aria-label="simple table">
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: "#3498db", color: "white" }}>
//                   {columnsToDisplay.map((header) => (
//                     <TableCell key={header}>{header}</TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((row, index) => (
//                   <TableRow key={index}>
//                     {columnsToDisplay.map((column) => (
//                       <TableCell key={column}>{row[column]}</TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//         </TableContainer>
//         {!loading && !error && (
//           <Pagination
//             totalItems={originalRows.length}
//             onPageChange={handlePageChange}
//             rowsPerPageOptions={[30, 100, 300]} // Define your rows per page options
//           />
//         )}
//       </Paper>
//     </>
//   );
// };

// export default Users;


import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import { MaterialReactTable } from 'material-react-table';

const Example = () => {
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/auth/all')
      .then((response) => {
        setApiData(response.data); // Store API data in state
      })
      .catch((error) => {
        console.error('Error fetching data from API', error);
      });
  }, []);
  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Name',
      size: 200,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      size: 250,
    },
    {
      accessorKey: 'phone',
      header: 'Phone',
      size: 150,
    },
    {
      accessorKey: 'password',
      header: 'Password',
      size: 150,
    },
    {
      accessorKey: 'hourlyrate',
      header: 'Hourly Rate',
      size: 150,
    },
    {
      accessorKey: 'paidtype',
      header: 'Paid Type',
      size: 150,
    },
    {
      accessorKey: 'timeZone',
      header: 'Time Zone',
      size: 150,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      size: 150,
    },
    {
      accessorKey: 'Actions',
      header: 'Actions',
      size: 150,
    },
  ], []);

  return (
    <div>
      <h1>User Data</h1>
      <MaterialReactTable columns={columns} data={apiData} />
    </div>
  );
};

export default Example;
