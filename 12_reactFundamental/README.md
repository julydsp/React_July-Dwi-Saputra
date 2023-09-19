**<h1>REACT FUNDAMENTAL<h1>**

dalam react fundamental kita akan banyak belajar mengenai react, yang pertama yaitu:

1. jsx 
    jsx merupakan sebuah singkatan dari javascript XML yaitu sebuh ekstensi dari javascript. Dengan menggunakan jsx kita dapat mempermudah dalam menulis aplikasi kita.

    Selain itu jsx merupakan sebuah expresion. ekspresi jsx akan menjadi panggilan fungsi javascript biasa dan menjadi objek javascript. Dalam jsx jika tag tidak memiliki elemen anak atau bersifat kosong kita dapat menutupnya secara langsung dengan (/>).

2. React Komponen
    React komponen adalah bagian kode yang dapat digunakan kembali dan juga digunakan untuk menentukan tampilan, behavior, state, sebagai UI. dengan react komponen kita dapat membagi UI kita menjadi beberapa bagian komponen.

3. component composite
    Props merupakan sebuah singkatan properti yang dapat memberikan argumen/data pada component, sifat dari props yaitu read only atau tidak dapat diubah. props dapat digunakan untuk membantu membuat komponen menjadi lebih dinamis dan nanti nya dioper ke dalam component seperti hal nya memberikan atribut pada tag HTML.

    konsep one way data flow yaitu konsep yang hanya punya satu data dan hanya ada satu cara mentransfer data kebagian lain yaitu komponen parent hanya dapat mentransfer data ke komponen children melalui props tapi tidak sebaliknya komponen children tidak mentransfer data ke komponen parent.

    komposisi komponen
    react mempunyai gaya komposisi yang cukup powerfull dan react sangat merekomendasikan penggunaan komposisi untuk menggunakan kembali code antar komponen. ada dua tipe komposisi yaitu kontainmen dan spesialisasi.

4. React Lifecycle
    react lifecycle adalah siklus hidup pada komponen react. react lifecycle yaitu deratan event yang terjadi dari awal komponen itu muncul sampai kommponen itu menghilang dari aplikasi kita. ada 3 fase dalam siklus ini:
    1. render phase yaitu dimana fungsinya harus pure tidak boleh ada side effect
    2. pre-commit phase adalah sebuah fase dimana kita dapat membaca DOM
    3. commit phase yaitu fase dimana kita dapat melakukan pengolahan DOM dan melakukan side effect seperti perubahan state.

5. condition and list
    render bersyarat yaitu kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan dan kita dapat me render hanya beberapa bagian saja. dalam render bersyarat kita dapat:
    1. menggunakan IF
    2. inline if dengan operator &&
    3. inline if-else dengan ternary conditional operator
    4. mencegah komponen untuk rendering
    
    render list kita dapat membangun koleksi dari beberapa elemen dan menyertakan dalam JSX menggunakan tanda kurung kurawal

    key dapat membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.

6. struktur directori
    kita ddapat melakukan pengelompokan berdasarkan fitur atau rute, pengelompokan berdasarkan jenis file. dan yang perlu kita hindari distruktu directori yaitu hindari terlalu banyak nesting, dan jangan terlalu memikirkannya.

7. styling inline
    ada 3 cara dalam styling inline yaitu 
    1. clases dan css
        kita membuat file css dan dalam komponen kita akan menargetkan class atau id kedalam file css nya
    2. atribut style
        digunakan dalam komponen jsx dengan menambahkan atribut style didalamnya
    3. module css
        dengan menggunakan module css kita akan menggunakan class tetapi css nya hanya kescope pada suatu komponen

**TUGAS PRIORITAS 1**

 Ubahlah halaman CreateProduct.html dari project yang sudah anda buat menjadi komponen ReactJS.

 Gunakan JSX (JavaScript XML) untuk mengubah HTML kedalam ReactJS. 

 ![screenshot(409)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactFundamental/12_reactFundamental/screenshot/Screenshot%20(409).png?row=true)

 ![screenshot(410)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactFundamental/12_reactFundamental/screenshot/Screenshot%20(410).png?row=true)
 

**TUGAS PRIORITAS 2**

hubungkan CSS dan JS yang kalian gunakan pada halaman CreateProduct.html sehingga tampilan dapat bekerja dengan baik

 ![screenshot(409)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactFundamental/12_reactFundamental/screenshot/localhost_3000_.png?row=true)

 ![screenshot(411)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactFundamental/12_reactFundamental/screenshot/Screenshot%20(411).png?row=true)

**TUGAS EKSPLORASI**

Buatlah komponen-komponen ReactJS yang membagi halaman CreateProduct.html menjadi lebih kecil seperti header dan footer

 ![screenshot(413)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactFundamental/12_reactFundamental/screenshot/Screenshot%20(413).png?row=true)
 
 ![screenshot(414)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactFundamental/12_reactFundamental/screenshot/Screenshot%20(414).png?row=true)
 
 ![screenshot(415)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactFundamental/12_reactFundamental/screenshot/Screenshot%20(415).png?row=true)

 ![screenshot(409)](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/reactFundamental/12_reactFundamental/screenshot/Screenshot%20(409).png?row=true)