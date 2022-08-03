import CategoryTable from "../components/CategoryTable";
import * as React from "react";
import { Category } from "../types/categoryType";
import axios from "axios";

const category = ({ categories }: any) => {
  return <CategoryTable categories={categories} />;
};
category.getInitialProps = async () => {
  const res = await axios.get("http://localhost:3000");
  const json = await res.data.data;
  return { categories: json };
};
export default category;
