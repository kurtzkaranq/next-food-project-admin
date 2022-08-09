import UsersTable from "../components/UsersTable";
import * as React from "react";
import { User } from "../types/categoryType";
import axios from "axios";

const users = ({ users }: any) => {
  return <UsersTable users={users} />;
};
users.getInitialProps = async () => {
  const res = await axios.get("http://localhost:3002/users/users");
  const json = await res.data.data;
  return { users: json };
};
export default users;
