import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
export default function AddUser() {
  const router = useRouter();
  const getId = (id: Number) => {
    router.push(`/user/edit/${id}`);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="First Name" focused />
      <TextField label="Last Name" focused />
      <TextField label="Email" focused />
      <TextField label="Address" focused />
      <TextField label="Phone Number" focused />

      <select
        name=""
        id=""
        style={{ width: "33vw", height: "4vh", borderRadius: "5px" }}
      >
        <option value="">test </option>
        <option value="">res </option>
        <option value=""> tes1t </option>
        <option value=""> 2test</option>
      </select>
      <Button
        onClick={() => {
          getId(each.id);
        }}
        style={{
          border: "white 1px solid",
          justifyContent: "center",
        }}
      >
        submit
      </Button>
    </Box>
  );
}
