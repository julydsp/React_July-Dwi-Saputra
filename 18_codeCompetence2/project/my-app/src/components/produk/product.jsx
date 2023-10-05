import "./product.css";
import productImage from "./product.jfif";
export default function Product() {
  return (
    <div>
      <div className="title">
        <label htmlFor="text">
          <h1>NEW ARRIVAL</h1>
        </label>
      </div>

      <main className="main-content">
        <div className="content">
          <div className="content-product">
            <div className="product">
              <div className="product-image">
                <img src={productImage} alt="" />
              </div>
              <p>selcouth | cargo-pants</p>
              <div className="btn-buy">
                <a href="">Rp. 87.000</a>
              </div>
            </div>
          </div>
          <div className="content-product">
            <div className="product">
              <div className="product-image">
                <img src={productImage} alt="" />
              </div>
              <p>selcouth | cargo-pants</p>
              <div className="btn-buy">
                <a href="">Rp. 87.000</a>
              </div>
            </div>
          </div>
          <div className="content-product">
            <div className="product">
              <div className="product-image">
                <img src={productImage} alt="" />
              </div>
              <p>selcouth | cargo-pants</p>
              <div className="btn-buy">
                <a href="">Rp. 87.000</a>
              </div>
            </div>
          </div>
          <div className="content-product">
            <div className="product">
              <div className="product-image">
                <img src={productImage} alt="" />
              </div>
              <p>selcouth | cargo-pants</p>
              <div className="btn-buy">
                <a href="">Rp. 87.000</a>
              </div>
            </div>
          </div>
          <div className="content-product">
            <div className="product">
              <div className="product-image">
                <img src={productImage} alt="" />
              </div>
              <p>selcouth | cargo-pants</p>
              <div className="btn-buy">
                <a href="">Rp. 87.000</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
