import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  Paper,
  TablePagination,
  TextField,
  TableFooter
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Container, Link } from "@material-ui/core";

const users1 = [
  {
    id: 1,
    community_name:'VNR VJIET' ,
    location: 'Hyderabad',
    shares: '100k',
    views: '300k',
    registrations: 100,
     
  },
  {
    id: 2,
    community_name: 'CBIT',
    location: 'Bangalore',
    shares: '10000k',
    views: '300k',
    registrations: 10,
    
  },
  {
    id: 3,
    community_name: 'IIT Bombay' ,
    location: 'Mumbai',
    shares: '50k',
    views: '100k',
    registrations: 110,
  },
  {
    id: 4,
    community_name: 'NIT Surat',
    location: 'Gujarat',
    shares: '200k',
    views: '200k',
    registrations: 150,

  },
  {
    id: 5,
    community_name: 'Vasavi Engineering College',
    location: 'Hyderabad',
    shares: '10000k',
    views: '300k',
    registrations: 10,
    
  },
  {
    id: 6,
    community_name: 'VIT',
    location: 'Chennai',
    shares: '50k',
    views: '3k',
    registrations: 20,
    
  },
  {
    id: 7,
    community_name: 'IIIT Hyderabad',
    location: 'Hyderabad',
    shares: '20000k',
    views: '500k',
    registrations: 1000,
    
  },
  {
    id: 8,
    community_name: 'NIT Warangal',
    location: 'Warangal, Telangana',
    shares: '600k',
    views: '200k',
    registrations: 190,
    
  },
  {
    id: 9,
    community_name: 'IIIT Allahabad',
    location: 'Uttar Pradesh',
    shares: '900k',
    views: '60k',
    registrations: 40,
    
  },
  {
    id: 10,
    community_name: 'IIT Delhi',
    location: 'New Delhi',
    shares: '80k',
    views: '10k',
    registrations: 70,
    
  },
  {
    id: 11,
    community_name: 'IIT Delhi',
    location: 'New Delhi',
    shares: '80k',
    views: '10k',
    registrations: 70,
    
  },
  // Add more objects as needed
];

export default function Stats() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const header = ["Id", "Community", "Location", "Shares", "Views", "Registrations"];
  
  

  const [users, setUsers] = useState([])

  const fetchUsers = (search) => {
    const fetchAll = async () => {
        try {
            //const samples = await SampleService.get_user_samples()
            setUsers(users)
        } catch(e) {
            console.log(e)
            setUsers(users1)
        }
    }
    const fetchMatching = async () => {
        try {
            //const samples = await SampleService.search(search)
            setUsers(users)
        } catch(e) {
            console.log(e)
            setUsers(users1)
        }
    }
    if(!search) {
        fetchAll()
    } else {
        fetchMatching()
    }
  }


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users1.length) : 0;

  const handleChangePage = (user, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = user => {
    setRowsPerPage(parseInt(user.target.value, 10));
    setPage(0);
  };

  const createSortHandler = property => user => {
    setOrderBy(property);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const getSortedUsers = (users1) => {
    return users1.sort((x, y) => {
      const a = x[orderBy];
      const b = y[orderBy];
      if (orderBy === "Shares") {
        const ad = new Date(a);
        const bd = new Date(b);
        if (ad > bd) return order === "asc" ? -1 : 1;
        else if (ad < bd) return order === "asc" ? 1 : -1;
        return 0;
      }
      console.log(a, b)
      if (a > b) return order === "asc" ? -1 : 1;
      else if (a < b) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  

  return (

    <Container>
    <Box sx={{my:2}}>
      <Box
        display={{ sm: "flex" }}
        sx={{ pb: 3}}
        justifyContent={"space-between"}
      >
        <Typography variant="h6" color="primary">
          Statistics of the Event Promotions
        </Typography>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          onChange={e => {
            console.log(e.target.value)
            setSearch(e.target.value.toLowerCase())
            fetchUsers(e.target.value)
        }}
        />
      </Box>
      <TableContainer component={Paper} sx={{mt:2}}>
        <Table aria-label="user table">
          <TableHead>
            <TableRow>
              {header.map((val, i) => (
                <TableCell
                  key={i}
                  align={
                    "left"
                  }
                  onClick={createSortHandler(val)}
                  sortDirection={orderBy === val ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === val}
                    direction={orderBy === val ? order : "asc"}
                  >
                    {val}
                    {orderBy === val ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? getSortedUsers(users1).slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : getSortedUsers(users1)
            ).map(
              user =>
                (
                  <TableRow
                    key={user.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 }
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell align="left">{user.community_name}</TableCell>
                    <TableCell align="left">{user.location}</TableCell>
                    <TableCell align="left">
                         {user.shares}
                    </TableCell>
                    <TableCell align="left">
                         {user.views}
                    </TableCell>
                    <TableCell align="left">
                         {user.registrations}
                    </TableCell>
                  </TableRow>
                
                )
            )}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                colSpan={4}
                count={users1.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
   
    </Container>
  );
}