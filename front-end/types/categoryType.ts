export type Category = {
  id: number;
  name: string;
  color: string;
};
export type Food = {
  discount: number;
  sales: number;
  id: number;
  category_id: number;
  name: string;
  price: number;
  portion: number;
  stock: number;
  image: string;
  ingredients: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  phone_number: string;
  role_id: number;
};
