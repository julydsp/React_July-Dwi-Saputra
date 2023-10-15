import "./product-list.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getListProduct } from "../../actions/productAction";

export default function ListItem() {
  const {
    getListProductResult,
    getListProductLoading,
    getListProductError,
    deleteProductResult,
  } = useSelector((state) => state.Products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (deleteProductResult) alert("deleted success");
    dispatch(getListProduct());
  }, [deleteProductResult, dispatch]);

  return (
    <div className="footer">
      <div className="title">
        <h2>List Product</h2>
      </div>

      <div className="table-responsive">
        <table id="table" className="table w-auto">
          <thead>
            <tr className="title">
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image Of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional description</th>
              <th scope="col">Product Price</th>
              <th scope="col" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="table-item">
            {getListProductResult ? (
              getListProductResult.map((product) => {
                return (
                  <tr className="tr-1" key={product.id}>
                    <td>
                      <Link to={`/detailProduct/${product.id}`} className="id">
                        {product.id}
                      </Link>
                    </td>
                    <td>{product.productName}</td>
                    <td>
                      {product.productCategory == 1
                        ? "kaos"
                        : product.productCategory == 2
                        ? "jaket"
                        : product.productCategory == 3
                        ? "celana"
                        : product.productCategory}
                    </td>
                    <td>
                      <img
                        src={product.image}
                        width={"200px"}
                        alt={product.image}
                      />
                    </td>
                    <td>{product.productFreshness}</td>
                    <td>{product.textDescription}</td>
                    <td>Rp.{product.priceProduct}</td>
                    <td className="action-1">
                      <button
                        type="button"
                        onClick={() => dispatch(deleteProduct(product.id))}
                      >
                        delete
                      </button>
                    </td>
                    <td className="action-1">
                      <Link
                        to={`/editProduct/${product.id}`}
                        className="button-edit"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : getListProductLoading ? (
              <tr>
                <td colSpan="8">Tunggu Sebentar...</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="8">
                  {getListProductError ? getListProductError : "Data Tidak Ada"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="search">
        <input
          type="text"
          id="productname"
          className="form-control fw-bold"
          placeholder="Search by Product Name"
        />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn-search">
            search
          </button>
        </div>
      </div>
    </div>
  );
}
