import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InteligenciaSvg } from "./IconImg";
import { ProactividadSvg } from "./IconImg";
import { InnovacionSvg } from "./IconImg";
import DottedImg1 from "../assets/images/png/DotedImg.png";
import DottedImg2 from "../assets/images/png/DottedImg1.png";
import SlotsImg1 from "../assets/images/webp/SlotsImg1.webp";
import SlotsImg2 from "../assets/images/webp/SlotsImg2.webp";
import SlotsImg3 from "../assets/images/webp/SlotsImg3.webp";
import SlotsImg4 from "../assets/images/webp/SlotsImg4.webp";
import SlotsImg5 from "../assets/images/webp/SlotsImg5.webp";
import SlotsImg6 from "../assets/images/webp/SlotsImg6.webp";
import BtnAfter from "../assets/images/webp/NavabtnAfter.webp";
import BtnAftetGradient from "../assets/images/webp/ColorBtnAfter.webp";

const Artibutos = () => {
  return (
    <>
      <div className="Bg_Artibutos position-relative z-1">
        <Container>
          <h2
            className=" ff_Anton text_black fs_8xl fw-normal lh_120 text-center pt_243 mb-0 pb-5 mb-2"
            data-aos="fade-up"
          >
            Nuestros Atributos de Marca
          </h2>
          <Row className=" justify-content-center justify-content-lg-start">
            <Col
              lg="4"
              sm="6"
              className=" d-flex justify-content-center justify-content-lg-start position-relative"
              data-aos="fade-up"
            >
              <img
                src={DottedImg1}
                alt="DottedImg1"
                className=" position-absolute doted_img1 d-lg-block d-none mw_273 w-100"
              />
              <div className="d-flex flex-column align-items-center justify-content-center">
                <InteligenciaSvg />
                <p className=" text_black ff_Anton fs_md text-center fw-normal lh_130 pt-3 pb-2">
                  Inteligencia
                </p>
                <p className=" mb-0 ff_inter fs_6sm fw-medium lh_160 opacity_08 text-center mw_263">
                  Comprendemos a la perfección los gustos de las personas y el
                  mundo del gaming.
                </p>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className=" d-flex justify-content-center position-relative"
              data-aos="fade-up"
            >
              <img
                src={DottedImg2}
                alt="DottedImg2"
                className=" position-absolute dotted_Img2 d-lg-block d-none mw_273 w-100"
              />
              <div className=" d-flex flex-column justify-content-center align-items-center">
                <ProactividadSvg />
                <p className=" text_black ff_Anton fs_md fw-normal lh_130 pt-3 pb-2">
                  Proactividad
                </p>
                <p className=" mb-0 ff_inter fs_6sm fw-medium lh_160 opacity_08 text-center mw_263">
                  Somos creadores de cambios que exploran nuevas formas de
                  entretenimiento.
                </p>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className=" pt-4 pt-lg-0 d-flex justify-content-lg-end justify-content-center"
              data-aos="fade-up"
            >
              <div className=" d-flex justify-content-center align-items-center flex-column">
                <InnovacionSvg />
                <p className=" text_black ff_Anton fs_md fw-normal lh_130 pt-3 pb-2">
                  Innovación
                </p>
                <p className=" mb-0 ff_inter fs_6sm fw-medium lh_160 opacity_08 text-center mw_263">
                  Pensamos fuera de la caja para estar siempre un paso adelante.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container id="Tragamonedas" className="py_slots">
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <h2
              className=" text_black text-center fs_8xl fw-normal lh_120 mb-0 pb-3 ff_Anton"
              data-aos="zoom-in-up"
            >
              Slots{" "}
            </h2>
            <p
              className=" text_black opacity_08 fs_6sm fw-medium lh_160 ff_inter mw_904 mb-2 pb-5 text-center"
              data-aos="zoom-in-up"
            >
              En Exclusive Games, ofrecemos una selección de más de 600 juegos
              de los principales desarrolladores, como Aristocrat, Amatic, EGT,
              Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
              trabaja incansablemente para innovar y ampliar nuestra oferta de
              experiencias, garantizando la máxima seguridad con operaciones
              protegidas por cifrado SSL de 256 bits.
            </p>
          </div>
          <Row className=" justify-content-center justify-content-lg-center">
            <Col lg="4" sm="6" className=" col-11" data-aos="fade-down-right">
              <div className=" position-relative image_overlay">
                <img
                  src={SlotsImg1}
                  alt="SlotsImg1"
                  className=" rounded-2 w-100"
                />
                <div class="overlay d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
                  <div className="position-relative btn_white">
                    <img
                      src={BtnAfter}
                      alt="BtnAfter"
                      className="position-absolute acceso_after"
                    />
                    <a
                      className=" acceso_btn text-white ff_inter fs_6sm fw-bold lh_160"
                      href=""
                    >
                      Jugar
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-sm-0 pt-4"
              data-aos="fade-down-right"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={SlotsImg2}
                  alt="SlotsImg2"
                  className=" rounded-2 w-100"
                />
                <div class="overlay d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
                  <div className="position-relative btn_white">
                    <img
                      src={BtnAfter}
                      alt="BtnAfter"
                      className="position-absolute acceso_after"
                    />
                    <a
                      className=" acceso_btn text-white ff_inter fs_6sm fw-bold lh_160"
                      href=""
                    >
                      Jugar
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-lg-0 pt-4"
              data-aos="fade-down-right"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={SlotsImg3}
                  alt="SlotsImg3"
                  className=" rounded-2 w-100"
                />
                <div class="overlay d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
                  <div className="position-relative btn_white">
                    <img
                      src={BtnAfter}
                      alt="BtnAfter"
                      className="position-absolute acceso_after"
                    />
                    <a
                      className=" acceso_btn text-white ff_inter fs_6sm fw-bold lh_160"
                      href=""
                    >
                      Jugar
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-4"
              data-aos="fade-down-left"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={SlotsImg4}
                  alt="SlotsImg4"
                  className=" rounded-2 w-100"
                />
                <div class="overlay d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
                  <div className="position-relative btn_white">
                    <img
                      src={BtnAfter}
                      alt="BtnAfter"
                      className="position-absolute acceso_after"
                    />
                    <a
                      className=" acceso_btn text-white ff_inter fs_6sm fw-bold lh_160"
                      href=""
                    >
                      Jugar
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-4"
              data-aos="fade-down-left"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={SlotsImg5}
                  alt="SlotsImg5"
                  className=" rounded-2 w-100"
                />
                <div class="overlay d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
                  <div className="position-relative btn_white">
                    <img
                      src={BtnAfter}
                      alt="BtnAfter"
                      className="position-absolute acceso_after"
                    />
                    <a
                      className=" acceso_btn text-white ff_inter fs_6sm fw-bold lh_160"
                      href=""
                    >
                      Jugar
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-4"
              data-aos="fade-down-left"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={SlotsImg6}
                  alt="SlotsImg6"
                  className=" rounded-2 w-100"
                />
                <div class="overlay d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
                  <div className="position-relative btn_white">
                    <img
                      src={BtnAfter}
                      alt="BtnAfter"
                      className="position-absolute acceso_after"
                    />
                    <a
                      className=" acceso_btn text-white ff_inter fs_6sm fw-bold lh_160"
                      href=""
                    >
                      Jugar
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center pt-5">
            <div className=" position-relative">
              <img
                src={BtnAftetGradient}
                alt="BtnAftetGradient"
                className=" position-absolute empezar_btn"
              />
              <a
                className=" button ff_inter fs_6sm fw-bold lh_160 text_black"
                href=""
              >
                Mostrar más
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Artibutos;
