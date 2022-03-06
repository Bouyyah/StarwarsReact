import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { CircularProgress, Typography } from "@mui/material";

const columns = [
  { id: "name", label: "Name", minWidth: 60 },
  { id: "model", label: "Model", minWidth: 60 },
  { id: "manufacturer", label: "Manufacturer", minWidth: 90 },
  { id: "model", label: "Model", minWidth: 90 },
  { id: "cost_in_credits", label: "Cost in credit", minWidth: 90 },
  { id: "max_atmosphering_speed", label: "Max speed", minWidth: 90 },
  { id: "cargo_capacity", label: "Cargo capacity", minWidth: 90 },
  { id: "consumables", label: "Consumables", minWidth: 90 },
  { id: "vehicle_class", label: "Vehicle class", minWidth: 90 },
];

function Vehicles() {
  const [vehicle, setVehicle] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    console.log(pageNumber);
    axios
      .get(`https://swapi.dev/api/vehicles/?page=${pageNumber}&format=json`)
      .then((response) => {
        setVehicle(response.data);
      });
  }, [pageNumber]);

  if (!vehicle)
    return (
      <div className="progress">
        <CircularProgress sx={{ color: "#fddb3a" }} size={85} />
      </div>
    );

  return (
    <div className="vehicles">
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#fddb3a",
          marginTop: 4,
          marginBottom: 4
        }}
      >
        Star Wars vehicles:
      </Typography>
      
    <Paper sx={{ width: "100%", overflow: "hidden", }}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <i><b>{column.label}</b></i>
                  
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicle.results.map((infos,i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id+i} align={column.align}>
                          {infos[column.id]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={-1}
        component="div"
        rowsPerPage={10}
        page={pageNumber-1}
        onPageChange={(e, page) => setPageNumber(page+1)}
        count={39}
      />
    </Paper>
    </div>
  );
}

export default Vehicles;
