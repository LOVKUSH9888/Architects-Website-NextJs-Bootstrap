"use client";

const Nav = () => {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LK Architects
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active d-flex" aria-current="page" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
};

export default Nav;
