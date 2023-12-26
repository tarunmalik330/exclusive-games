import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JackpotImg from "../assets/images/webp/JackpotImg.webp";
import { RightTick } from "./IconImg";
import PlatformaLeft from "../assets/images/webp/PlatformaImgLeft.webp";
import PlatformaRight from "../assets/images/webp/PlataformaRightImg.webp";
import Blackjack from "../assets/images/webp/BlackJack.webp";
import Roulette from "../assets/images/webp/EuropeanRoulette.webp";
import LiveBetting from "../assets/images/webp/LiveBetting.webp";
import BtnAfter from "../assets/images/webp/NavabtnAfter.webp";

const Jackpot = () => {
  return (
    <>
      <div className="bg_Potenciando position-relative">
        <div className="mission_leftEllips jackpot_ellips position-absolute"></div>
        <div className=" mission_leftEllips position-absolute bottom-0 end-0"></div>
        <Container className="py_jackpot custom_container">
          <Row className=" align-items-center justify-content-lg-center justify-content-start">
            <Col lg="5" className=" col-12 d-flex align-items-start">
              <div className="overflow-hidden" data-aos="zoom-in-right">
                <img
                  src={JackpotImg}
                  alt="JackpotImg"
                  className=" w-100 jackpot_img img_hover"
                />
              </div>
            </Col>
            <Col
              lg="6"
              className=" col-12 pt-lg-0 pt-4 d-flex flex-column justify-content-center ps-4"
            >
              <div>
                <h2
                  className=" ff_Anton fs_8xl fw-normal lh_120 text-white mb-0 pb-3"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Potenciando sus elecciones
                </h2>
                <p
                  className=" ff_inter fs_6sm fw-medium lh_160 opacity_08 text-white"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Con Exclusive Game lo mejor está de tu lado.
                </p>
                <div
                  className=" curser_pointer d-flex gap-2 pb-2 mb-1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <RightTick />
                  <p className=" ff_inter fs_6sm fw-medium lh_160 opacity_08 text-white mb-0">
                    Tecnología HTML5
                  </p>
                </div>
                <div
                  className=" curser_pointer d-flex gap-2 pb-2 mb-1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <RightTick />
                  <p className=" ff_inter fs_6sm fw-medium lh_160 opacity_08 text-white mb-0">
                    Versión PC y móvil
                  </p>
                </div>
                <div
                  className=" curser_pointer d-flex gap-2 pb-2 mb-1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <RightTick />
                  <p className=" ff_inter fs_6sm fw-medium lh_160 opacity_08 text-white mb-0">
                    Control de RTP (controlás qué porcentaje pagar)
                  </p>
                </div>
                <div
                  className=" curser_pointer d-flex gap-2 pb-2 mb-1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <RightTick />
                  <p className=" ff_inter fs_6sm fw-medium lh_160 opacity_08 text-white mb-0">
                    Bonos editables, happy hours, Jackpots, códigos
                    promocionales.
                  </p>
                </div>
                <div
                  className=" curser_pointer d-flex gap-2 pb-4"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <RightTick />
                  <p className=" ff_inter fs_6sm fw-medium lh_160 opacity_08 text-white mb-0">
                    Aplicación para android y windows de regalo.
                  </p>
                </div>
                <p
                  className=" ff_inter fs_6sm fw-medium lh_160 text-white opacity_08"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Te reintegramos todo lo invertido en fichas en la moneda que
                  elijas.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center custom_container">
          <div className="Platforma_box w-100 d-flex justify-content-center px-4 px-lg-0 relative_img">
            <img
              src={PlatformaRight}
              alt="PlatformaRight"
              className="position-absolute end-0 bottom-0 relative_img"
            />
            <img
              src={PlatformaLeft}
              alt="PlatformaLeft"
              className="position-absolute start-0 bottom-0 relative_img"
            />
            <h2
              className=" position-relative z-1 text-white ff_Anton fs_8xl fw-normal lh_120 text-center mw_520"
              data-aos="fade-up"
            >
              lanza tu propia plataforma en sólo 2 semanas
            </h2>
          </div>
        </Container>
        <Container className="py_vivo custom_container">
          <h2
            className="pb-5 mb-sm-3 mb-0 position-relative z-1 text-white text-center ff_Anton fs_8xl fw-normal lh_120"
            data-aos="zoom-in"
          >
            Juegos en vivo
          </h2>
          <Row className=" justify-content-center justify-content-lg-start">
            <Col lg="4" sm="6" className=" col-11" data-aos="zoom-in">
              <div className=" position-relative image_overlay">
                <img
                  src={Blackjack}
                  alt="Blackjack"
                  className=" rounded-2 w-100"
                />
                <div className="overlay Img_shadow d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
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
                      Reproducir ahora
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-4 pt-sm-0"
              data-aos="zoom-in"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={Roulette}
                  alt="Roulette"
                  className=" rounded-2 w-100"
                />
                <div className="overlay Img_shadow d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
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
                      Reproducir ahora
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-4 pt-lg-0"
              data-aos="zoom-in"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={LiveBetting}
                  alt="LiveBetting"
                  className=" rounded-2 w-100"
                />
                <div className="overlay Img_shadow d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
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
                      Reproducir ahora
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Jackpot;
