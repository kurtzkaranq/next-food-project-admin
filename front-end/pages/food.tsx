import FoodTable from "../components/FoodTable";
import * as React from "react";
import { Category } from "../types/categoryType";
import axios from "axios";

const foods = ({ foods }: any) => {
  return <FoodTable foods={foods} />;
};
foods.getInitialProps = async () => {
  const res = await axios.get("http://localhost:3002/foods");
  const json = await res.data.data;
  return { foods: json };
};
export default foods;
