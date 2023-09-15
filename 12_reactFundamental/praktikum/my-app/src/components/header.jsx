export default function Header (){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white pe-4 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-dark col-3" href="/logo">
            Simple Header
          </a>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-9 justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active px-3 bg-primary text-white rounded"
                aria-current="page"
                href="/home"
              >
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