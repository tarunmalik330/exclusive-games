import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Logo from "../assets/images/png/PageLogo.png";
import BtnAfter from "../assets/images/webp/NavabtnAfter.webp";
import BtnAftetGradient from "../assets/images/webp/ColorBtnAfter.webp";

const Header = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div className="bg_header min_vh_100 d-flex flex-column">
        <nav className="bg_nav py_19 position-relative z-3">
          <Container className="custom_container">
            <div className=" d-flex align-items-center justify-content-between">
              <img
                src={Logo}
                alt="Logo"
                className=" mw_210 w-100 h-100 curser_pointer"
              />
              <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white ff_inter fs_6sm fw-medium lh_160 opacity_08 nav_line position-relative"
                    href="#Hogar"
                  >
                    Hogar
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white ff_inter fs_6sm fw-medium lh_160 opacity_08 nav_line position-relative"
                    href="#Misión"
                  >
                    Misión
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white ff_inter fs_6sm fw-medium lh_160 opacity_08 nav_line position-relative"
                    href="#Tragamonedas"
                  >
                    Tragamonedas
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white ff_inter fs_6sm fw-medium lh_160 opacity_08 nav_line position-relative"
                    href="#PorQuéElegirnos"
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white ff_inter fs_6sm fw-medium lh_160 opacity_08 nav_line position-relative"
                    href="#Ofertas"
                  >
                    Ofertas
                  </a>
                </li>
                <li className=" d-block d-lg-none">
                  {" "}
                  <a
                    className=" acceso_btn text-white ff_inter fs_6sm fw-bold lh_160"
                    href=""
                  >
                    Acceso
                  </a>
                </li>
              </ul>
              <div className="btn_white d-none d-lg-block position-relative">
                <img
                  src={BtnAfter}
                  alt="BtnAfter"
                  className="position-absolute acceso_after"
                />
                <a
                  className=" acceso_btn text-white ff_inter fs_6sm fw-bold lh_160"
                  href=""
                >
                  Acceso
                </a>
              </div>
              <div
                onClick={() => setshow(!show)}
                className={`${show ? "" : "cross"} navline`}
              >
                <span className="crl-1"></span>
                <span className="crl-2"></span>
                <span className="crl-3"></span>
              </div>
            </div>
          </Container>
        </nav>
        <Container
          id="Hogar"
          className="py_header custom_container py-xl-0 flex-grow-1 d-flex flex-column justify-content-center align-items-center"
        >
          <h1
            className=" text-uppercase fs_2xxl text-white fw-normal ff_Anton lh_120 pb-3 text-center mw_505 mb-0"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Exclusive Games. Pasión por ganar
          </h1>
          <p
            className=" mw_727 ff_inter fs_6sm fw-medium lh_160 opacity_08 text-white text-center mb-0 pb_40"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            En Exclusive Games somos un equipo apasionado de personas dedicados
            al desarrollo de multiplataformas para juegos de azar. A lo largo de
            nuestra vida consumimos todo tipo de juegos hasta que un día
            decidimos crear los propios.
          </p>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="gradient_btn position-relative">
              <img
                src={BtnAftetGradient}
                alt="BtnAftetGradient"
                className=" position-absolute empezar_btn"
              />
              <button className="button ff_inter fs_6sm fw-bold lh_160 text_black">
                Empezar
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
