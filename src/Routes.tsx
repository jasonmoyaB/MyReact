import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MyStatus } from "./pages/MyProfile/MyStatus";
// import { Test } from "./pages/Test/Test";
import { Home } from "./pages/Home/Home";
import { Name } from "./pages/Test/Name";
import { TareasPage } from "./pages/Tareas/ListTareas";
import { TareasForm } from "./pages/Tareas/TareasForm";
import { users } from "./components/constants";
import Weather from "./pages/Weather/Weather";
import Crypto from "./pages/Crypto/Crypto";
import Photos from "./pages/Photos/Photos";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand">{users[0].name}
            <img src={users[0].imageUrl} alt={users[0].name}
            className="rounded-circle ms-2"
            style={{ width: "30px", height: "30px" }} />
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/test">
                    Test
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link className="nav-link" to="/my-status">
                    User Status
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Name">
                    List Names
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/Tareas">
                    Tareas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/weather">
                    Weather
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/crypto">
                    Crypto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/photos">
                    Photos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container" style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-status" element={<MyStatus />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/Name" element={<Name />} />
          <Route path="/Tareas" element={<TareasPage />} />
          <Route path="/Tareas/Crear" element={<TareasForm />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
