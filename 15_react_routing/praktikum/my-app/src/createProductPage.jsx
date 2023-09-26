import Navbar from "./components/navbar/navbar";
import FormProduct from "./Pages/form-create-product/formCreateProduct";
import ListItem from "./components/tabel/productList";
import { useEffect,} from "react";
import Header from "./components/header/header";

export default function CreateProductPage({setData, data }) {
 

  useEffect(() => {
    alert("Welcome to Create Proudct");
  }, []);

  return (
    <>
      <Navbar />
      <Header/>
      <FormProduct setingData={setData} />
      <ListItem data={data} removeList={setData} />
    </>
  );
  
}
