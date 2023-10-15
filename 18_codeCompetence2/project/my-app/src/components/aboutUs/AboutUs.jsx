import pictAboutUs from "./pict-aboutUs.jpg";
import "./about-us.css";
export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="pict-aboutUs">
        <img src={pictAboutUs} alt="" />
      </div>
      <div className="content-aboutUs">
        <h1>About Us</h1>
        <label htmlFor="">selcouthsupremacy</label>
        <p>
          Selamat datang di website kami, tempat di mana kami menghadirkan
          beragam fashion dengan brand yang kami miliki untuk menemani gaya
          Anda. Kami adalah komunitas pecinta fashion yang berdedikasi untuk
          memberikan pengalaman belanja terbaik kepada Anda.
          <br />
          <br />
          Visi Kami :
          <br />
          Kami berkomitmen untuk menjadikan setiap pembelian fashion
          Anda menjadi pengalaman yang tak terlupakan. Dengan koleksi berbagai
          kategori fashion yang kami miliki, kami hadir untuk memenuhi kebutuhan
          gaya Anda, mulai dari pakaian, sepatu, hingga aksesori. 
          <br />
          Mengapa Memilih Kami? 
          <br />
          <br />
          1. Koleksi Terlengkap 
          <br />
          Kami menawarkan berbagai macam pilihan fashion di brand selcouthsupremacy ini, sehingga Anda dapat
          mengekspresikan diri dengan gaya yang sesuai dengan kepribadian Anda.
          <br />
          2. Kualitas Terbaik 
          <br />
          Kami hanya menjual produk-produk berkualitas
          tinggi dan terpercaya, sehingga Anda dapat merasa percaya
          diri dengan setiap pembelian. 
          <br />
          3.Pengalaman Belanja Online yang Mudah
          <br />
          Kami telah merancang website kami untuk memudahkan Anda dalam mencari
          dan membeli produk fashion favorit Anda. Dengan beberapa klik, Anda
          dapat menemukan apa yang Anda cari. 
          <br />
          4.Pelayanan Pelanggan yang Ramah
          <br />
          Tim kami selalu siap membantu Anda dengan pertanyaan atau masalah yang
          mungkin Anda hadapi selama berbelanja di website kami. 
          <br />
          <br />
          Terima kasih
          telah memilih kami sebagai destinasi fashion Anda. Kami berharap Anda
          menikmati pengalaman berbelanja di website kami dan menemukan produk
          fashion yang sempurna untuk melengkapi gaya Anda.
        </p>
      </div>
    </div>
  );
}
