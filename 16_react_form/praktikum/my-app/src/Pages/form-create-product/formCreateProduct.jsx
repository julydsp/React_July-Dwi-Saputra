import { useState } from "react";
import "./createProduct.css";

export default function FormProduct({ setingData }) {
  const [productName, setProductName] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertProductEmpty, setAlertProductEmpty] = useState("");
  const [alertPriceEmpty, setAlertPriceEmpty] = useState("");
  const [image, setImage] = useState(null);
  const [imageAlert, setImageAlert] = useState("");

  const handleProductNameChange = (event) => {
    const newProductName = event.target.value;
    setProductName(newProductName);

    let lengthAlertVisible = false;
    let symbolAlertVisible = false;

    // Validasi panjang nama produk
    if (newProductName.length > 10) {
      lengthAlertVisible = true;
    }

    // Validasi simbol
    const symbolPattern = /[@#${}/]/; // Definisikan pola simbol
    if (symbolPattern.test(newProductName)) {
      symbolAlertVisible = true;
    }

    // Menyusun pesan peringatan berdasarkan validasi
    if (lengthAlertVisible) {
      setAlertMessage("Product Name must not exceed 10 characters.");
    } else if (symbolAlertVisible) {
      setAlertMessage("Product Name cannot contain symbols.");
    } else {
      setAlertMessage(""); // Hapus pesan peringatan jika validasi berhasil
    }
  };

  const optionsCategory = [
    { value: "", label: "Choose..." },
    { value: "1", label: "kaos" },
    { value: "2", label: "jaket" },
    { value: "3", label: "celana" },
  ];

  const handleCategory = (e) => {
    const newProductCategory = e.target.value;
    setProductCategory(newProductCategory);
  };

  const onImageChange = (event) => {
    const newOnImageChange = event.target.files;

    let sizeImageAlert = false;
    let selectedImage = null;

    if (newOnImageChange && newOnImageChange[0]) {
      selectedImage = newOnImageChange[0];

      // Memeriksa ukuran file (misalnya, maksimum 5 MB)
      const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
      if (selectedImage.size > maxSizeInBytes) {
        sizeImageAlert = true;
      }
    }

    if (sizeImageAlert) {
      setImageAlert("Ukuran file terlalu besar. Maksimum 5 MB diizinkan.");
      // Tidak perlu melanjutkan jika ukuran file terlalu besar
      return;
    }

    // Memeriksa validitas gambar (misalnya, dengan menguji apakah bisa di-render)
    const img = new Image();
    img.onload = () => {
      setImage(URL.createObjectURL(selectedImage));
      setImageAlert("");
    };

    img.onerror = () => {
      setImageAlert("File yang dipilih bukan gambar yang valid.");
    };

    img.src = URL.createObjectURL(selectedImage);
  };

  const eventHandlerSubmit = (event) => {
    event.preventDefault();

    if (productName.trim() === "" && priceProduct.trim() === "") {
      alert("The xxx field must be filled in");
    } else if (productName.trim() === "") {
      setAlertProductEmpty(
        "Product Name cannot empty. Please enter a valid Product name!!!"
      );
    } else if (priceProduct.trim() === "") {
      setAlertPriceEmpty(
        "Product Price cannot empty. Please enter a valid Product Price!!!"
      );
    } else {
      alert("data berhasil disimpan");
    }

    let selectProductCategory = "";
    switch (productCategory) {
      case "1":
        selectProductCategory = "kaos";
        break;
      case "2":
        selectProductCategory = "jaket";
        break;
      case "3":
        selectProductCategory = "celana";
        break;
      default:
        selectProductCategory = "";
    }

    setingData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        productName,
        productCategory: selectProductCategory,
        productFreshness,
        image,
        priceProduct,
      },
    ]);
  };

  return (
    <main>
      <form id="productForm" method="post" action="">
        <div className="content">
          <div className="form-detail-product">
            <h3>Detail Product</h3>

            <div className="productname">
              <label htmlFor="productname" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                id="nameProduct"
                className="form-control"
                maxLength="25"
                placeholder="Input your product name"
                value={productName}
                onChange={handleProductNameChange}
              />

              <div
                className="alert alert-warning mt-2"
                id="nameLengthAlert"
                style={{ display: alertMessage ? "block" : "none" }}
                role="alert"
              >
                {alertMessage}
              </div>
              <div
                className="alert alert-danger alert-dismissible fade show mt-2"
                id="alertPrice"
                style={{ display: alertProductEmpty ? "block" : "none" }}
                role="alert"
              >
                {alertProductEmpty}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="select-category">
              <label htmlFor="productcategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select"
                id="selectCategory"
                aria-label="Default select example"
                onChange={handleCategory}
              >
                {optionsCategory.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="img">
              <label htmlFor="input-img" className="form-label">
                Product Image
              </label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control image"
                  id="inputImg"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  accept="image/*"
                  onChange={onImageChange}
                />
              </div>
              <div
                className="alert alert-danger alert-dismissible fade show mt-2"
                id="alertImage"
                style={{ display: imageAlert ? "block" : "none" }}
                role="alert"
              >
                {imageAlert}
              </div>
            </div>

            <div className="product-freshness">
              <label htmlFor="product-freshness" className="form-label">
                Product Freshness
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Brand New"
                  id="RadioDefault1"
                  checked={productFreshness === "Brand New"}
                  onChange={() => setProductFreshness("Brand New")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Second Hand"
                  id="RadioDefault1"
                  checked={productFreshness === "Second Hand"}
                  onChange={() => setProductFreshness("Second Hand")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Refufbished"
                  id="RadioDefault1"
                  checked={productFreshness === "Refufbished"}
                  onChange={() => setProductFreshness("Refufbished")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Refufbished
                </label>
              </div>
            </div>

            <div className="text-box">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="textArea"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="price">
              <label htmlFor="product-freshness" className="form-label">
                Price
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-white ">$</span>
                <input
                  type="number"
                  id="productPrice"
                  className="form-control"
                  value={priceProduct}
                  onChange={(event) => setPriceProduct(event.target.value)}
                  placeholder="1"
                />
              </div>
              <div
                className="alert alert-danger alert-dismissible fade show mt-2"
                id="alertPrice"
                style={{ display: alertPriceEmpty ? "block" : "none" }}
                role="alert"
              >
                {alertPriceEmpty}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <button type="submit" onClick={eventHandlerSubmit} className="btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
