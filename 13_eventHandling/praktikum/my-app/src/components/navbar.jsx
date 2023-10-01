export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-dark" href="/logo">
          Simple Header
        </a>
        <div className="button-create-account">
          <a className="button" href="/createAccount">
            Create Account
          </a>
        </div>

        <button
          className="navbar-toggler"
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
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" style={{backgroundColor: '#0d6efd', color:'#ffffff'}} href="/home">
              Home
            </a>
            <a className="nav-link" href="/features">
              Features
            </a>
            <a className="nav-link" href="/Pricing">
              Pricing
            </a>
            <a className="nav-link" href="/faqs">
              FAQs
            </a>
            <a className="nav-link" href="/about">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
