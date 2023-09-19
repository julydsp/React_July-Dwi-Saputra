document.addEventListener("DOMContentLoaded", function () {
  const productNameInput = document.getElementById("nameProduct");
  const productPriceInput = document.getElementById("productPrice");
  const alertSimbols = document.getElementById("alertSimbols");
  const productForm = document.getElementById("productForm");
  const alertProduct = document.querySelector(".alert");
  const alertPrice = document.querySelector("#alertPrice");
  const alertDangerProduct = document.querySelector("#alertDangerProduct");
  const deleteButton = document.getElementById("buttonDelete");

  //event listener, validasi ketika melakukan inputan
  productNameInput.addEventListener("input", function () {
    productName = productNameInput.value;

    if (productName.length > 10) {
      alertProduct.textContent = "Product Name must not exceed 25 characters.";
      alertProduct.style.display = "block";
    } else {
      alertProduct.style.display = "none";
    }
    if (
      productName.includes("@") ||
      productName.includes("#") ||
      productName.includes("{}") ||
      productName.includes("/")
    ) {
      alertProduct.textContent = "Product Name must not contain symbols.";
      alertProduct.style.display = "block";
    } else {
      alertSimbols.style.display = "none";
    }
  });

  // event listener, validasi ketika button submit diklik
  productForm.addEventListener("submit", function (event) {
    if (
      productNameInput.value.trim() === "" &&
      productPriceInput.value.trim() === ""
    ) {
      alert("The xxx field must be filled in");
      event.preventDefault();
    } else if (productNameInput.value.trim() === "") {
      alertDangerProduct.style.display = "block";
      event.preventDefault();
    } else if (productPriceInput.value.trim() === "") {
      alertPrice.style.display = "block";
      event.preventDefault();
    } else {
      alert("data berhasil disimpan");
      event.preventDefault();
      formProduct();
    }
  });

  //membuat variabel array kosong untuk menampung objek
  const dataProduct = [];

  //function mengambil sebuah value
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

    //menyatukan value menjadi sebuah objek
    const dataNewProduct = {
      name: productName,
      selectCategory: productCategorySelectInput,
      imageInput: productImageInput,
      freshnessProduct: freshness,
      textArea: productTextAreaInput,
      price: productPrice,
    };

    dataProduct.push(dataNewProduct);
    showdata(dataProduct);
  }

  function showdata(dataProduct) {
    const tabel = document.getElementById("table");

    while (tabel.firstChild) {
      tabel.removeChild(tabel.firstChild);
    }

    //mengiterasi setiap element dataProduct
    dataProduct.forEach((data) => {
      const {
        name,
        selectCategory,
        imageInput,
        freshnessProduct,
        textArea,
        price,
      } = data;

      const tr = document.createElement("tr"); 

      const tdNumber = document.createElement("td"); 
      tdNumber.textContent = "101";
      tr.appendChild(tdNumber);

      const tdName = document.createElement("td");
      tdName.textContent = name; 
      tr.appendChild(tdName);

      const tdSelectCategory = document.createElement("td");
      tdSelectCategory.textContent = selectCategory;
      tr.appendChild(tdSelectCategory);

      const tdImageInput = document.createElement("td");
      tdImageInput.textContent = imageInput;
      tr.appendChild(tdImageInput);

      const tdFreshness = document.createElement("td");
      tdFreshness.textContent = freshnessProduct;
      tr.appendChild(tdFreshness);

      const tdTextArea = document.createElement("td");
      tdTextArea.textContent = textArea;
      tr.appendChild(tdTextArea);

      const tdPrice = document.createElement("td");
      tdPrice.textContent = price;
      tr.appendChild(tdPrice);

      tabel.appendChild(tr); 
    });
  }

  //eventlistener ketika button delete diklik
  deleteButton.addEventListener("click", function () {
    dataProduct.pop(); 
    showdata(dataProduct);
  });
});
