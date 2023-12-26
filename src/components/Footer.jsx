import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageLogo from "../assets/images/png/PageLogo.png";
import { InstagramIcon } from "./IconImg";
import { FacebookIcon } from "./IconImg";
import { InIcon, Mail, Phone } from "./IconImg";

const Footer = () => {
  return (
    <>
      <div className="bg-black mt_footer position-relative">
        <div className="Footer_leftEllips Footer_Ellips position-absolute bottom-0 d-lg-block d-none"></div>
        <div className="Footer_rightEllips Footer_Ellips position-absolute bottom-0 d-lg-block d-none"></div>
        <Container className="custom_container py_footer">
          <Row>
            <Col lg="4">
              <img
                src={PageLogo}
                alt="PageLogo"
                className=" mw_210 w-100 curser_pointer"
              />
              <p className=" mw_369 ff_inter fs_6sm fw-medium lh_160 opacity_08 text-white pt-3 mb-0">
                En Exclusive Games somos un equipo apasionado de personas
                dedicadas al desarrollo de multiplataformas para juegos de azar
              </p>
              <div className=" d-flex pt-4 pb-lg-5 pb-0 gap-3">
                <div className="icon_circle d-flex justify-content-center align-items-center">
                  <InstagramIcon />
                </div>
                <div className="icon_circle d-flex justify-content-center align-items-center">
                  <FacebookIcon />
                </div>
                <div className="icon_circle d-flex justify-content-center align-items-center">
                  <InIcon />
                </div>
              </div>
            </Col>
            <Col lg="8" className=" mt-5 mt-lg-0">
              <Row>
                <Col
                  lg="4"
                  sm="6"
                  className="col-12 d-flex align-items-center justify-content-lg-center"
                >
                  <ul className="p-0">
                    <li className="text-white ff_inter fw-bold lh_160 fs_6sm mb-0 pb-3">
                      Menú principal
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        Hogar
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        Misión
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        Tragamonedas
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        Por qué elegirnos
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        Ofertas
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg="4" sm="6" className="col-12">
                  <ul className="p-0">
                    <li className="text-white ff_inter fw-bold lh_160 fs_6sm mb-0 pb-3">
                      Atención al cliente
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        ¿Necesitas ayuda?
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        política de privacidad
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        Términos de servicios
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg="4" sm="6" className="col-12 pt-4 pt-lg-0">
                  <ul className="p-0">
                    <li className="text-white ff_inter fw-bold lh_160 fs_6sm mb-0 pb-3">
                      Ponerse en contacto
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm text-nowrap nav_line position-relative"
                        href=""
                      >
                        {" "}
                        <Mail /> juegosexclusivos@gmail.com
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="ff_inter text-white opacity_08 fw-medium lh_160 fs_6sm nav_line position-relative"
                        href=""
                      >
                        <Phone /> (101)342-7873
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="border-top border_color"></div>
        <Container className="custom_container">
          <p className="py-4 text-center text-white ff_inter fw-medium mb-0 fs_6sm lh_160 opacity_05">
            © Juegos exclusivos - Todos los derechos reservados 2023
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
