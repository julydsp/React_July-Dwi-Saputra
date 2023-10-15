import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./detail-product.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../actions/productAction";

export default function DetailProduct() {
  const {
    getDetailProductResult,
    getDetailProductLoading,
    getDetailProductError,
  } = useSelector((state) => state.Products);

  console.log("data: ", getDetailProductResult);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

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
          {getDetailProductResult ? (
            <>
              <tr>
                <td>id </td>
                <td>{getDetailProductResult.id}</td>
              </tr>
              <tr>
                <td>Product Name</td>
                <td>{getDetailProductResult.productName}</td>
              </tr>
              <tr>
                <td>Product Category</td>
                <td>{getDetailProductResult.productCategory}</td>
              </tr>
              <tr>
                <td>Image Product</td>
                <td>
                  <img
                    src={getDetailProductResult.image}
                    width={"200px"}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Product Freshness</td>
                <td>{getDetailProductResult.productFreshness}</td>
              </tr>
              <tr>
                <td>Product Price</td>
                <td>{getDetailProductResult.priceProduct}</td>
              </tr>
            </>
          ) : getDetailProductLoading ? (
            <tr>
              <td colSpan="2">Tunggu Sebentar...</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="2">
                {getDetailProductError
                  ? getDetailProductError
                  : "Data Tidak Ada"}
              </td>
            </tr>
          )}
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
