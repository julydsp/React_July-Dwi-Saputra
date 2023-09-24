import Navbar from "./components/navbar";
import Header from "./components/header";
import FormProduct from "./components/formProduct";
import ListItem from "./components/listItem";
import { useEffect, useState } from "react";

export default function CreateProductPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    alert("Welcome to Create Proudct");
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <FormProduct setingData={setData} />
      <ListItem data={data} removeList={setData} />
    </>
  );
}
