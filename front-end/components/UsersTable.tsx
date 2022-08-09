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
import { User } from "../types/categoryType";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useRouter } from "next/router";

export default function BasicTable({ users }: any) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<User[] | []>();
  useEffect(() => {
    setData(users);
  }, [users]);

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

  const router = useRouter();
  const getId = (id: Number) => {
    router.push(`/users/edit/${id}`);
  };
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">ROLE ID</TableCell>
              <TableCell align="right">FIRST NAME</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">PHONE NUMBER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((e: User) => (
              <TableRow
                key={e.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.id}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {e.role_id}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {e.first_name}
                </TableCell>
                <TableCell align="right">{e.email}</TableCell>
                <TableCell align="right">{e.address}</TableCell>
                <TableCell align="right">{e.phone_number}</TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      getId(e.id);
                    }}
                  >
                    {" "}
                    EDIT
                  </Button>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={
                      () =>
                        axios.delete("http://localhost:3002/users/delete", {
                          data: e,
                        })
                      // console.log(data);
                    }
                  >
                    DELETE
                  </Button>
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
          href="./addUser"
        >
          ADD
        </Button>
      </TableContainer>
    </Container>
  );
}
