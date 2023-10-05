import "./header.css";
import ShoppingBag from "../../../assets/shoppingBag";
import LogoUser from "../../../assets/user";
export default function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light position-fixed ">
      <div className="container-fluid">
        <a className="navbar-brand col-2 text-light" href="#">
          Selcouth.
        </a>
        <div className="nav-icon col-4">
          <ul>
            <li>
              <a href="#keranjang">
               <ShoppingBag/>
              </a>
            </li>
            <li>
              <a href="#login">
                <LogoUser/>
              </a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end col-6 "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text-light">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              about Us
            </a>
            <a className="nav-link" href="#">
              service
            </a>
            <a className="nav-link" href="#">
              produk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
