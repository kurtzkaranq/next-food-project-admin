import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import axios from "axios";

type Category = {
  id: number;
  name: string;
  color: string;
};

export default function BasicTable() {
  const [category, setCategory] = useState<Category[]>([]);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000").then((res) => {
      setCategory(res.data.data);
    });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">COLOR</TableCell>
              <TableCell align="right">EDIT</TableCell>
              <TableCell align="right">DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category?.map((e) => (
              <TableRow
                key={e.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.id}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {e.name}
                </TableCell>
                <TableCell align="right">{e.color}</TableCell>
                <TableCell component="th" scope="row" align="right">
                  <a href="category">a</a>
                  <Button variant="outlined" onClick={handleOpen}>
                    {" "}
                    EDIT
                  </Button>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Button variant="outlined" color="error">
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
