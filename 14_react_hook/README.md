**<h1>REACT HOOK<h1>**

react hook merupakan fitur baru di react 16.8 dengan hooks, kita dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas.

hooks dalam react ada beberapa hooks dasar yaitu:
1. useState
2. useEffect
3. useContext

selain hooks" dasar react ada juga hook tambahan:
1. useReducer
2. useCallback
3. useMemo
4. useRef
5. useImperativeHandle
6. useLayoutEffect
7. useDebugValue

adajuga aturan aturan ketika kita menggunakan hooks:
a. hanya panggil hooks ditingkat atas
    1. angan panggil hooks dari dalam loops, condition, atau nested function

b. hanya panggil hooks dari fungsi-fungsi react
    1. jangan memanggil hooks dari fungsi-fungsi javascript biasa
    2. kita dapat memanggil hooks dari komponen-komponen fungsi react
    3. kita dapat memanggil hooks dari custom hooks

create custom hooks kita dapat membuat hooks sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.

**<h2>TUGAS PRITORITAS 1<h2>**

1. Dengan menggunakan useEffect buatlah sebuah alert yang bertulisan “Welcome” ketika mereka membuka halaman CreateAccount.

![screenshot(432)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactHook/14_react_hook/screenshot/Screenshot%20(432).png?row=true)

2. Dengan menggunakan UseState masukkan setiap data yang kalian isi pada halaman CreateProduct ke dalam tabel. data yang akan tampil hanya no,Product Name, Product Category, Product Feshness dan Product Price. data yang lain tidak di tampilkan pada user interface. ilustrasi tabel dapat dilihat pada gambar di bawah

![screenshot(430)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactHook/14_react_hook/screenshot/Screenshot%20(430).png?row=true)

![screenshot(431)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactHook/14_react_hook/screenshot/Screenshot%20(431).png?row=true)

**<h2>TUGAS PRIORITAS 2<h2>**

1. Buatlah tombol delete berfungsi, pastikan ketika ingin melakukan delete terdapat alert/modal/notifikasi yang bertuliskan apakah kalian ingin menghapus.

    a. Jika pilih hapus maka data baru akan terhapus.
    b. Jika pilih tidak maka alert/modal/notifikasi akan hilang.

![screenshot(433)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactHook/14_react_hook/screenshot/Screenshot%20(433).png?row=true)

![screenshot(434)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactHook/14_react_hook/screenshot/Screenshot%20(434).png?row=true)

![screenshot(435)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactHook/14_react_hook/screenshot/Screenshot%20(435).png?row=true)