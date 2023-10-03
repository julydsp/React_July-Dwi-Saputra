import Navbar from "./components/navbar/navbar.jsx";
import FormProduct from "./Pages/form-create-product/formCreateProduct.jsx";
import ListItem from "./components/tabel/productList.jsx";
import { useEffect } from "react";
import Header from "./components/header/header.jsx";

export default function CreateProductPage() {
  useEffect(() => {
    alert("Welcome to Create Proudct");
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <FormProduct />
      <ListItem/>
    </>
  );
}
