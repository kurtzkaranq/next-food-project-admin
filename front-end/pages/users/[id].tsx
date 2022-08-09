import axios, { responseEncoding } from "axios";
import { User } from "../../types/categoryType";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/router";

export default function cat({ user }: any) {
  const router = useRouter();
  console.log(user);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);

    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const address = e.target[3].value;
    const phone_number = e.target[4].value;
    const rode_id = e.target[5].value;
    const id = user.id;

    axios
      .put("http://localhost:3002/users/users/edit", {
        firstname,
        lastname,
        email,
        address,
        phone_number,
        rode_id,
        id,
      })
      .then((res) => console.log(res.statusText))
      .catch((error) => console.error(error));
    router.push("/user");
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      style={{ backgroundColor: "white" }}
    >
      <TextField
        id="standard-basic"
        defaultValue={user[0].first_name}
        name="first_name"
        label=" First Name"
        variant="standard"
        focused
        style={{ color: "white" }}
      />
      <TextField
        id="standard-basic"
        defaultValue={user[0].last_name}
        name="last_name"
        label=" Last Name"
        variant="standard"
        focused
      />
      <TextField
        id="standard-basic"
        defaultValue={user[0].email}
        name="email"
        label="Email"
        variant="standard"
        focused
      />
      <TextField
        id="standard-basic"
        defaultValue={user[0].address}
        name="address"
        label="Address"
        variant="standard"
        focused
      />
      <TextField
        id="standard-basic"
        defaultValue={user[0].phone_number}
        name="number"
        label="Number"
        variant="standard"
        focused
      />
    </Box>
    // <Box
    //         component="form"
    //         onSubmit={handleSubmit}
    //         sx={{
    //           "& > :not(style)": { m: 1, width: "25ch" },
    //         }}
    //         noValidate
    //         autoComplete="off"
    //       >
    //         <TextField
    //           id="standard-basic"
    //           defaultValue={Users[0].firstname}
    //           name="namee"
    //           label="Name"
    //           variant="standard"
    //         />

    //         <TextField
    //           id="standard-basic"
    //           defaultValue={Users[0].lastname}
    //           label="price"
    //           name="price"
    //           variant="standard"
    //         />
    //         <TextField
    //           id="standard-basic"
    //           defaultValue={Users[0].email}
    //           label="ingredients"
    //           name="ingredients"
    //           variant="standard"
    //         />
    //         <TextField
    //           id="standard-basic"
    //           defaultValue={Users[0].address}
    //           label="category_id"
    //           name="category_id"
    //           variant="standard"
    //         />
    //         <TextField
    //           id="standard-basic"
    //           defaultValue={Users[0].phone_number}
    //           label="category_id"
    //           name="category_id"
    //           variant="standard"
    //         />
    //         <TextField
    //           id="standard-basic"
    //           defaultValue={Users[0].rode_id}
    //           label="category_id"
    //           name="category_id"
    //           variant="standard"
    //         />
    //         <Select
    //           labelId="demo-simple-select-label"
    //           id="demo-simple-select"
    //           value={roles}
    //           label="Age"
    //           onChange={handleChange}
    //         >
    //           {role?.map((r, i) => {
    //             return (
    //               <MenuItem key={i} value={r.id}>
    //                 {r.role_name}
    //               </MenuItem>
    //             );
    //           })}
    //         </Select>

    //         <Button type="submit" variant="contained">
    //           Update user
    //         </Button>
    //       </Box>
  );
}
const callUser = axios.get("http://localhost:3002/users/users");
const callRole = axios.get("http://localhost:3002/role");
export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3002/users/users");
  const [role, users] = await Promise.all([callRole, callUser]);
  return {
    fallback: false,
    paths: res.data.data.map((user: User) => ({
      params: {
        id: user.id.toString(),
      },
    })),
  };
}
export async function getStaticProps({ params }: any) {
  console.log(params);
  const res = await axios.get(`http://localhost:3002/users/users/${params.id}`);
  const res1 = await axios.get(`http://localhost:3002/role`);
  const [userid, role] = await Promise.all([res, res1]);
  return {
    props: {
      user: userid.data.data,
      role: role.data.data,
    },
  };
}
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import router, { useRouter } from "next/router";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// export default function cat({ Users, role }) {
//   const router = useRouter();
//   const [categoriesData, setCategoriesData] = useState();

//   const [roles, setRoles] = useState("");
//   console.log(role);
//   const handleChange = (event) => {
//     setRoles(event.target.value);
//   };

//   console.log(Users);
//   useEffect(() => {
//     setCategoriesData(Users);
//   }, [categoriesData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);

//     const firstname = e.target[0].value;
//     const lastname = e.target[1].value;
//     const email = e.target[2].value;
//     const address = e.target[3].value;
//     const phone_number = e.target[4].value;
//     const rode_id = e.target[5].value;
//     const id = Users.id;

//     axios
//       .put("http://localhost:3001/user", {
//         firstname,
//         lastname,
//         email,
//         address,
//         phone_number,
//         rode_id,
//         id,
//       })
//       .then((res) => console.log(res.statusText))
//       .catch((error) => console.error(error));
//     router.push("/user");
//   };
//   // console.log(category && category);
//   console.log(role);
//   return (
//     <>
//       <h1 style={{ color: "black" }}>One category</h1>
//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         sx={{
//           "& > :not(style)": { m: 1, width: "25ch" },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="standard-basic"
//           defaultValue={Users[0].firstname}
//           name="namee"
//           label="Name"
//           variant="standard"
//         />

//         <TextField
//           id="standard-basic"
//           defaultValue={Users[0].lastname}
//           label="price"
//           name="price"
//           variant="standard"
//         />
//         <TextField
//           id="standard-basic"
//           defaultValue={Users[0].email}
//           label="ingredients"
//           name="ingredients"
//           variant="standard"
//         />
//         <TextField
//           id="standard-basic"
//           defaultValue={Users[0].address}
//           label="category_id"
//           name="category_id"
//           variant="standard"
//         />
//         <TextField
//           id="standard-basic"
//           defaultValue={Users[0].phone_number}
//           label="category_id"
//           name="category_id"
//           variant="standard"
//         />
//         <TextField
//           id="standard-basic"
//           defaultValue={Users[0].rode_id}
//           label="category_id"
//           name="category_id"
//           variant="standard"
//         />
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={roles}
//           label="Age"
//           onChange={handleChange}
//         >
//           {role?.map((r, i) => {
//             return (
//               <MenuItem key={i} value={r.id}>
//                 {r.role_name}
//               </MenuItem>
//             );
//           })}
//         </Select>

//         <Button type="submit" variant="contained">
//           Update user
//         </Button>
//       </Box>
//     </>
//   );
// }
