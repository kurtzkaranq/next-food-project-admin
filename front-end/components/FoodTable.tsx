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
import { Food } from "../types/categoryType";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";

export default function BasicTable({ foods }: any) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Food[] | []>();
  useEffect(() => {
    setData(foods);
  }, [foods]);
  //   function deleteHandler(e: Category) {
  //     console.log(e.id);
  //   }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="right">STOCK</TableCell>
              <TableCell align="right">INGREDIENTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((e: Food) => (
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
                <TableCell align="right">{e.price}</TableCell>
                <TableCell align="right">{e.stock}</TableCell>
                <TableCell align="right">{e.ingredients}</TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Button variant="outlined"> EDIT</Button>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={
                      () =>
                        axios.delete("http://localhost:3002/delete", {
                          data: e,
                        })
                      // console.log(data);
                    }
                  >
                    DELETE
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}></Box>
                  </Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <hr />
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100px",
            marginInline: "auto",
            border: "1px solid black",
            marginBottom: "10px",
          }}
          href="./addFood"
        >
          ADD
        </Button>
      </TableContainer>
    </Container>
  );
}
