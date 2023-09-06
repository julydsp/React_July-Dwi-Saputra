document.addEventListener("DOMContentLoaded", function () {
  const productNameInput = document.getElementById("nameProduct");
  const productPriceInput = document.getElementById("productPrice");
  const nameLengthAlert = document.getElementById("nameLengthAlert");
  const alertSimbols = document.getElementById("alertSimbols");
  const productForm = document.getElementById("productForm");
  const alertProduct = document.querySelector(".alert");
  const alertPrice = document.querySelector("#alertPrice");
  const alertDangerProduct = document.querySelector("#alertDangerProduct");
  const tabel = document.getElementById("table");
  const deleteButton = document.getElementById("buttonDelete");

  let dataProduct = [];

  productNameInput.addEventListener("input", function () {
    if (productNameInput.value.length > 10) {
      alertProduct.textContent = "Product Name must not exceed 25 characters.";
      alertProduct.style.display = "block";
    } else {
      nameLengthAlert.style.display = "none";
    }
  });

  productNameInput.addEventListener("input", function () {
    productName = productNameInput.value;
    // Validasi karakter yang tidak diizinkan
    if (
      productName.includes("@") ||
      productName.includes("#") ||
      productName.includes("{}") ||
      productName.includes("/")
    ) {
      alertProduct.textContent = "Product Name must not contain symbols.";
      alertProduct.style.display = "block";
      // Menghentikan pengiriman data ke halaman lain
    } else {
      alertSimbols.style.display = "none";
    }
  });

  productForm.addEventListener("submit", function (event) {
    if (
      productNameInput.value.trim() === "" &&
      productPriceInput.value.trim() === ""
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
      event.preventDefault();
      formProduct();
    }
  });

  function formProduct() {
    const productName = productNameInput.value;
    const productCategorySelectInput =
      document.getElementById("selectCategory").value;
    const productImageInput = document.getElementById("inputImg").value;
    const productFreshnessInput =
      document.getElementsByName("flexRadioDefault");
    const productTextAreaInput = document.getElementById("textArea").value;
    const productPrice = productPriceInput.value;
    let freshness = "";
    for (const radio of productFreshnessInput) {
      if (radio.checked) {
        freshness = radio.value;
      }
    }
    console.log(
      productName,
      productCategorySelectInput,
      productImageInput,
      freshness,
      productTextAreaInput,
      productPrice
    );

    const data = {
      name: productName,
      selectCategory: productCategorySelectInput,
      imageInput: productImageInput,
      freshnessProduct: freshness,
      textArea: productTextAreaInput,
      price: productPrice,
    };

    dataProduct.push(data);
    console.log(dataProduct);
    showdata();

    // let tabelproduct = "";
    // dataProduct.forEach((tr) => {
    //   tabelproduct += `<tr class="tr-1">
    //       <th scope="row">1</th>
    //       <td>${tr.name}</td>
    //       <td>${tr.selectCategory}</td>
    //       <td>${tr.imageInput}</td>
    //       <td>${tr.freshnessProduct}</td>
    //       <td>${tr.textArea}</td>
    //       <td>${tr.price}</td>
    //     </tr>`;
    // });
    // tabel.innerHTML = tabelproduct;
  }
  function showdata() {
     let tabelproduct = "";
    dataProduct.forEach((tr) => {
      tabelproduct += `<tr class="tr-1">
          <th scope="row">1</th>
          <td>${tr.name}</td>
          <td>${tr.selectCategory}</td>
          <td>${tr.imageInput}</td>
          <td>${tr.freshnessProduct}</td>
          <td>${tr.textArea}</td>
          <td>${tr.price}</td>
        </tr>`;
    });
    tabel.innerHTML = tabelproduct;
  }


  deleteButton.addEventListener("click", function(){
    dataProduct.pop();
    showdata();
    console.log(dataProduct);
  })
});

