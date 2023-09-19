
document.addEventListener("DOMContentLoaded", function () {
   const formInput = document.getElementById("formInput");
   const firstName = document.getElementById("first-name");
   const lastName = document.getElementById("last-name");
//    const email = document.getElementById("email");
//    const textArea = document.getElementById("Textarea");

   formInput.addEventListener("submit", function(e){
    if (firstName.value.trim() === "" && lastName.value.trim() === "") {
      alert("Data tidak boleh kosong");
      e.preventDefault();
    } else {
      alert("data berhasil disimpan");
      e.preventDefault();
    }
   });
});


