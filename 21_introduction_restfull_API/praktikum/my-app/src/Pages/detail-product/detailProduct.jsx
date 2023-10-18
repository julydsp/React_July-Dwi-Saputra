import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./detail-product.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DetailProduct() {
 const [product, setProduct] = useState(null);
 const { id } = useParams();

 useEffect(() => {
   // Lakukan permintaan GET untuk mengambil detail produk berdasarkan id
   axios
     .get(`https://652431a1ea560a22a4e99249.mockapi.io/products/${id}`)
     .then((response) => {
       setProduct(response.data);
     })
     .catch((error) => {
       console.error("Error fetching product:", error);
     });
 }, [id]);

 if (!product) {
   return <div>Loading...</div>;
 }

  return (
    <div className="product-detail">
      <table className="table-product-detail">
        <thead className="title">
          <tr>
            <th scope="col" colSpan={"2"}>
              Detail Product
            </th>
          </tr>
        </thead>
        <tbody className="product">
          <tr>
            <td>id </td>
            <td>{product.id}</td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>{product.productName}</td>
          </tr>
          <tr>
            <td>Image Product</td>
            <td>
              <img src={product.image} width={"200px"} alt="" />
            </td>
          </tr>
          <tr>
            <td>Product Freshness</td>
            <td>{product.productFreshness}</td>
          </tr>
          <tr>
            <td>Product Price</td>
            <td>{product.priceProduct}</td>
          </tr>
        </tbody>
      </table>
      <div className="button">
        <Link to={`/createProduct`}>
          <button className="button-back">Back</button>
        </Link>
      </div>
    </div>
  );
}
