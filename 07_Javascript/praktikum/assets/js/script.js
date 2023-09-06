document.addEventListener("DOMContentLoaded", function () {
  const nameLengthAlert = document.getElementById("nameLengthAlert");
  const alertSimbols = document.getElementById("alertSimbols");
  const productNameInput = document.getElementById("nameProduct");
  const productForm = document.getElementById("productForm");
  const alertProduct = document.querySelector(".alert");

  productNameInput.addEventListener("input", function () {
    if (productNameInput.value.length > 10) {
      alertProduct.innerHTML = "Product Name must not exceed 25 characters.";
      alertProduct.style.display = "block";
    } else {
      nameLengthAlert.style.display = "none";
    }
  });
  productNameInput.addEventListener("input", function (event) {
    const productName = productNameInput.value;

    // Validasi karakter yang tidak diizinkan
    if (
      productName.includes("@") || productName.includes("#") || productName.includes("{}") || productName.includes("/")
    ) {
      alertProduct.innerHTML = "Product Name must not contain symbols.";
      alertProduct.style.display = "block";
      event.preventDefault(); // Menghentikan pengiriman data ke halaman lain
    } else {
      alertSimbols.style.display = "none";
    }
  });
  productForm.addEventListener("submit", function (event) {
    const productNameInput = document.getElementById("nameProduct");
    const productPriceInput = document.getElementById("productPrice");
    const alertPrice = document.querySelector("#alertPrice");
    const alertDangerProduct = document.querySelector("#alertDangerProduct");

    if (
      productNameInput.value.trim() === "" && productPriceInput.value.trim() === ""
    ) {
      alert("The xxx field must be filled in");
      event.preventDefault();
    } else if (productNameInput.value.trim() === "") {
      alertDangerProduct.style.display = "block";
      event.preventDefault(); // Menghentikan pengiriman data ke halaman lain
    } else if (productPriceInput.value.trim() === "") {
      alertPrice.style.display = "block";
      event.preventDefault(); // Menghentikan pengiriman data ke halaman lain
    } else {
      alert("data berhasil disimpan");
    }
  });
});
