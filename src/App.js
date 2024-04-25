import "./App.css";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import Theem from "./theem.png";
import Gallery from "./pages/Gallery/Gallery";
import { FaBars } from "react-icons/fa";
import { useEffect } from "react";

function App() {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <Navbar
        expand="lg"
        className={` position-absolute w-100 background-color: rgba(255, 0, 0, 0.4)`}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src={Theem} height={80} width={80} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "gre" }}
          >
            <FaBars color="white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link
                href="/"
                className={`${
                  !location.pathname.endsWith("/") ? "text-black" : ""
                } text-uppercase`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/courses"
                className={`${
                  !location.pathname.endsWith("/") ? "text-black" : ""
                } text-uppercase`}
              >
                Our courses
              </Nav.Link>
              <Nav.Link
                href="/gallery"
                className={`${
                  !location.pathname.endsWith("/") ? "text-black" : ""
                } text-uppercase`}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                href="/about"
                className={`${
                  !location.pathname.endsWith("/") ? "text-black" : ""
                } text-uppercase`}
              >
                About us
              </Nav.Link>
              <Nav.Link
                href="http://localhost:3000"
                className={`${
                  !location.pathname.endsWith("/") ? "text-black" : ""
                } text-uppercase`}
              >
                Admin Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
