import "./style.scss"


const Navbar = () => (
    <>
<nav className="navbar navbar-expand-xxl navbar-dark bg-dark" aria-label="Ninth navbar example">
    <div className="container-xl">
      <a className="navbar-brand" href="#home">DevPortfolio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleXxl">
        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
        
        )

export default Navbar;