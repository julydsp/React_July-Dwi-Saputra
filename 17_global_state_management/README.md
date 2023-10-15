**<h1>Global State Management</h1>**

global state management bisa kita artikan menjadi bagaimana kita memanage atau mengatur sebuah state secara global, jadi state bisa dipanggil di component manapun yang kita butuhkan tanpa harus mengoper opernya.untuk materi kali ini kita menggunakan redux dikarenakan redux sangat populer.

kapan kita menggunakan redux :
1. banyak state yang perlu ditaruh dibanyak tempat
2. state app sering berubah
3. logic untuk mengubah state kompleks
4. ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

adapun redux libraries dan toolnya :
1. redux toolkit
2. redux devtools extension
3. react redux

komponen penting di redux :
1. action : digunakan untuk memberikan informasi dari aplikasi ke store
2. reducer : pure javascript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan  state aplikasi terbaru 
3. store : objek sentral yang menyimpan state pada aplikasi

**TUGAS PRIORITAS 1**

1. Rubahlah list products yang sebelumnya berupa state biasa menjadi global state menggunakan redux.

 ![screenshot(454)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(454).png?row=true)

 ![screenshot(455)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(455).png?row=true)

 ![screenshot(456)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(456).png?row=true)

2. Masukkan data user ke dalam Initial state seperti contoh di bawah
const initialState = {

products: [

{

id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",

productName: "John",

productCategory: "Doe",

productFreshness: "Doe",

productPrice: "Doe",

image: "Doe",

additionalDescription: "Doe",

}

]

};

 ![screenshot(457)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(457).png?row=true)

 3. Pastikan data List Product (ilustrasi pada gambar) berasal dari initialState pada store.

 ![screenshot(458)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(458).png?row=true)

**TUGAS PRIORITAS 2**

1. Tambahkan fitur untuk menambah, mengedit, dan menghapus data user dalam komponen ListProduct.jsx dengan menggunakan action dan reducer yang sesuai. untuk form edit/menambah kalian dapat menggunakan komponent CreateProduct.jsx atau membuat komponen lain jika diperlukan.

**menambahkan**

 ![screenshot(459)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(459).png?row=true)

 **setelah dihapus**

 ![screenshot(460)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(460).png?row=true)
 
 **menampilkan value sebelum di edit di form edit**

 ![screenshot(461)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(461).png?row=true)

 **mengisi/mengganti data baru di form edit**

 ![screenshot(462)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(462).png?row=true)

 **tampil data baru setelah di edit**

 ![screenshot(463)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/global_state_management/17_global_state_management/screenshot/Screenshot%20(463).png?row=true)

