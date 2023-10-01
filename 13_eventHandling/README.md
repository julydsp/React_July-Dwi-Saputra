**<h1>EVENT HANDLING</h1>**

Event Handling merupakan suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen

Event adalah sebuah peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan 

adapun beberapa contoh list event :
1. clipboard Events(promise terpenuhi)
2. Form Events (onChange, onSubmit)
3. Mouse Events (OnClick, onDoubleClick, onMouseOver)
4. Generic Events (onEror, onLoad)

**<h2>STATEFULL DAN STATELESS COMPONENT</h2>**

Statefull component memilik state, component ini dibuat dengan class.statefull component memiliki kelebihan yaitu memiliki lifecycle

Stateless component ini tidak memiliki state hanya prop, umumnya komponen ini dibuat dengan function karena kodenya yang lebih ringkas 

perbedaan dari statefull dan stateless komponen adalah sebagai berikut:

Statefull component:
1. mengerti tentang aplikasi
2. melakukan data fetchiing(pengambilan data)
3. berinterakti dengan aplikasi
4. tidak dapat digunakan kembali
5. meneruskan status dan data ke anak-anaknya

Stateless component:
1. tidak mengerti tentang aplikasi
2. tidak melakukan data fetching(pengambilan data)
3. tujaun utamnya adalah visualisasi
4. dapat digunakan kembali
5. hanya berkomunikasi dengan induk langsungnya

**<h3>TUGAS PRIORITAS 1</h3>**

Buatlah sebuah button dan terapkan event handling onClick pada salah satu tombol dihalaman CreateProduct.jsx. Jika tombol tersebut di-klik nantinya akan menampilkan random number di console.

![sourcode](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(417).png?row=true)

![jsx_button](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(418).png?row=true)

![viewconsole](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(419).png?row=true)

buatlah sebuah file yang berisikan object berikut
gunakan object tersebut sebagai data/text ketika ingin membuat tampilan title dan deskipsi pada tampilan di bawah. gunakan bahasa inggris sebagai bahasa seperti digambar.

![sourcecode](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(422).png?row=true)

![buttonOnClickEng](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(420).png?row=true)

![jsxmenampilkandata](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(421).png?row=true)

**<h3>TUGAS PRIORITAS 2</h3>**

Gunakan event handling onChange untuk validasi value secara realtime yang dimasukan kedalam form input. Validasi ini meliputi :

1. Product Name tidak boleh melebihi 10 karakter
2. Jika Product Name melebihi 25 karakter tambilkan pesan error atau peringatan/alert seperi "Last Name must not exceed 25 characters."

![jsxhandleOnChange](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(427).png?row=true)

![viewalert](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(423).png?row=true)

3. Product Name tidak boleh kosong. Jika field tersebut kosong saat tombol Submit/Create Product di tekan maka tampilkan alert atau error bahwa field tersebut tidak boleh kosong. Misal "Please enter a valid product name."

![alertsaatfieldkosongsemua](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(424).png?row=true)

![alertsaatproductnamekosong](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(426).png?row=true)

![alertsaatpriceproductkosong](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(425).png?row=true)

![alertsaatpriceproductkosong](https://github.com/julydsp/React_July-Dwi-Saputra/blob/feat/eventHandling/13_eventHandling/screenshot/Screenshot%20(428).png?row=true)



