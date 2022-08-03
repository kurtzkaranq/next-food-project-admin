import axios, { responseEncoding } from "axios";
import { Category } from "../../../types/categoryType";

export default function cat({ category }) {
  console.log(category);
  return (
    <>
      <h1>One category</h1>
    </>
  );
}
export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3000/");

  return {
    fallback: false,
    paths: res.data.data.map((category) => ({
      params: {
        id: category.id.toString(),
      },
    })),
  };
}
export async function getStaticProps({ params }) {
  console.log(params);
  const res = await axios.get(`http://localhost:3000/${params.id}`);

  return {
    props: {
      category: res.data.data,
    },
  };
}
