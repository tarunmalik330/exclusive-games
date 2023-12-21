import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SevenImg from "../assets/images/png/SevenImg.png";
import { PáginasIcon } from "./IconImg";
import { ClientesIcon } from "./IconImg";
import { DivisasIcon } from "./IconImg";
import SilverImg from "../assets/images/png/SilverImg.png";
import { RightTick } from "./IconImg";
import BtnAfter from "../assets/images/webp/NavabtnAfter.webp";
import PlatinumImg from "../assets/images/png/PlatinumImg.png";
import FreeSpins from "../assets/images/png/FreeSpins.png";
import HappyHours from "../assets/images/png/HappyHours.png";
import europeanImg from "../assets/images/png/europeanImg.png";
import BtnAftetGradient from "../assets/images/webp/ColorBtnAfter.webp";
import GreenCoin from "../assets/images/png/GreenCoin.png";
import DiceImg from "../assets/images/png/DiceImg.png";
import HeartCard from "../assets/images/png/HeartCard.png";
import DiamondCard from "../assets/images/png/DiamondCard.png";
import SoloImg1 from "../assets/images/png/SoloImg1.png";
import SoloImg2 from "../assets/images/png/SoloImg2.png";

const MasRazones = () => {
  return (
    <>
      <div className=" position-relative">
        <div className="Razones_ellips position-absolute Razones_ellips1 d-lg-block d-none"></div>
        <div className="mission_leftEllips position-absolute Razones_ellips2 d-lg-block d-none"></div>
        <div className="mission_leftEllips position-absolute Razones_ellips3 d-lg-block d-none"></div>
        <div className="mission_leftEllips position-absolute Razones_ellips4 d-lg-block d-none"></div>
        <div className="mission_leftEllips position-absolute Razones_ellips5 d-lg-block d-none"></div>
        {/* -----------------------------Más razones --------------------- */}
        <Container className="py_razenos position-relative z-1">
          <Row>
            <Col lg="6" className="d-flex justify-content-lg-end">
              <img
                src={SevenImg}
                alt="SevenImg"
                className=" w-100 br_16 me-3 img_hover object_cover h-100"
              />
            </Col>
            <Col lg="6" className=" pt-5 pt-lg-0">
              <h2
                className=" text-white ff_Anton fw-normal lh_120 fs_8xl pb-sm-5 pb-4 mb-sm-2 mb-0"
                data-aos="fade-down"
              >
                Más razones para elegirnos
              </h2>
              <div class="my_box curser_pointer" data-aos="fade-down">
                <div class="d-flex box_content">
                  <PáginasIcon />
                  <div>
                    <p className=" ff_Anton fw-normal fs_2lg text-white lh_130 mb-0">
                      200
                    </p>
                    <p className=" ff_inter text-white fs_6sm fw-medium lh_160">
                      Páginas creadas
                    </p>
                  </div>
                </div>
              </div>
              <div class="my_box curser_pointer" data-aos="fade-down">
                <div class="box_content d-flex">
                  <ClientesIcon />
                  <div>
                    <p className=" ff_Anton fw-normal fs_2lg text-white lh_130 mb-0">
                      98%
                    </p>
                    <p className=" ff_inter text-white fs_6sm fw-medium lh_160">
                      Clientes Satisfechas
                    </p>
                  </div>
                </div>
              </div>
              <div class="my_box curser_pointer" data-aos="fade-down">
                <div class="box_content d-flex">
                  <DivisasIcon />
                  <div>
                    <p className=" ff_Anton fw-normal fs_2lg text-white lh_130 mb-0">
                      200
                    </p>
                    <p className=" ff_inter text-white fs_6sm fw-medium lh_160">
                      Divisas Disponibles
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* -----------------------------Nuestras ofertas------------------------- */}
        <Container id="Ofertas">
          <h2
            className=" text-white ff_Anton fs_8xl fw-normal lh_120 mb-0 pb-3 text-center"
            data-aos="zoom-in-up"
          >
            Nuestras ofertas
          </h2>
          <p
            className=" ff_inter fs_6sm fw-medium lh_160 text-white text-center pb-5 mb-2"
            data-aos="zoom-in-up"
          >
            Te ofrecemos las mejores experiencias de juegos para tus clientes.
          </p>
          <div className="silver_box py_silverbox">
            <Row className="align-items-center justify-content-center">
              <Col
                lg="6"
                className="px-4 d-flex justify-content-center justify-content-lg-start"
              >
                <img
                  src={SilverImg}
                  alt="SilverImg"
                  className=" w-100 mw_548"
                  data-aos="zoom-in-right"
                />
              </Col>
              <Col lg="6" className="col-11 pt-5 pt-lg-0">
                <h3
                  className=" text-white ff_Anton fs_2lg fw-normal lh_130 mb-0 pb-3"
                  data-aos="zoom-in-up"
                >
                  Silver
                </h3>
                <p
                  className=" ff_inter fs_6sm text-white opacity_08 fw-medium lh_160 mw_410 mb-2 pb-4"
                  data-aos="zoom-in-up"
                >
                  Diseño predeterminado, atractivo y fácil de navegar,
                  tecnología HTLM5.
                </p>
                <h2
                  className=" text-white ff_Anton fw-normal fs_8xl lh_120"
                  data-aos="zoom-in-up"
                >
                  $5000
                </h2>
                <div
                  className=" curser_pointer d-flex gap-2 pb-2 mb-1"
                  data-aos="zoom-in-up"
                >
                  <RightTick />
                  <p className=" text-white fs_6sm opacity_08 fw-medium ff_inter mw_387 mb-0">
                    Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                    Cargas manuales
                  </p>
                </div>
                <div
                  className=" curser_pointer d-flex gap-2 pb-2 mb-1"
                  data-aos="zoom-in-up"
                >
                  <RightTick />
                  <p className=" text-white fs_6sm opacity_08 fw-medium ff_inter mb-0">
                    Control de RTP (controlás qué porcentaje pagar)
                  </p>
                </div>
                <div
                  className=" curser_pointer d-flex gap-2 pb-2 mb-1"
                  data-aos="zoom-in-up"
                >
                  <RightTick />
                  <p className=" text-white fs_6sm opacity_08 fw-medium ff_inter mw_387 mb-0">
                    Bonos Editables, Happy Hours, Jackpots, Códigos
                    Promocionales Regalo
                  </p>
                </div>
                <div
                  className=" curser_pointer d-flex gap-2 pb-2 mb-1"
                  data-aos="zoom-in-up"
                >
                  <RightTick />
                  <p className=" text-white fs_6sm opacity_08 fw-medium ff_inter mw_387 mb-0">
                    Aplicación para Android y Windows de regalo.
                  </p>
                </div>
                <div
                  className=" curser_pointer d-flex gap-2 pb-5"
                  data-aos="zoom-in-up"
                >
                  <RightTick />
                  <p className=" text-white fs_6sm opacity_08 fw-medium ff_inter mw_387 mb-0">
                    Tiempo de creación 2 a 3 semanas
                  </p>
                </div>
                <div
                  className="position-relative btn_white d-inline"
                  data-aos="zoom-in-up"
                >
                  <img
                    src={BtnAfter}
                    alt="BtnAfter"
                    className="position-absolute comprar_after"
                  />
                  <button className=" bg-transparent acceso_btn text-white ff_inter fs_6sm fw-bold lh_160">
                    Comprar ahora
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* -------------------------------Luxury--------------------------------- */}
        <Container className="my_64">
          <div className="silver_box py_luxury px-3 px-sm-0">
            <Row>
              <div className="bg_luxury d-flex align-items-center justify-content-center position-relative">
                <div className="mw_419">
                  <h2
                    className=" text-center fs_2lg lh_130 ff_Anton fw-normal text-white mb-0 pb-3"
                    data-aos="fade-up"
                  >
                    Luxury
                  </h2>
                  <p
                    className="text-white opacity_08 fs_6sm ff_inter fw-medium lh_160 text-center mw_391"
                    data-aos="fade-up"
                  >
                    lleva tu experiencia de juego al siguiente nivel. Con todas
                    las características de la versión Silver y la potencia
                    adicional de la tecnología React .
                  </p>
                  <h2
                    className=" text-white fs_8xl ff_Anton fw-normal lh_120 text-center mb-0 pb-3"
                    data-aos="fade-up"
                  >
                    $9000
                  </h2>
                  <div className="d-flex gap-2 mb-2" data-aos="fade-up">
                    <div>
                      <RightTick />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0 ff_inter fs_6sm fw-medium text-white opacity_08 text-center mw_388">
                        Disponibles Payku, Pix, Depósitos en Euros,
                        Criptomonedas, Cargas manuales
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mb-2" data-aos="fade-up">
                    <div>
                      <RightTick />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0 ff_inter fs_6sm fw-medium text-white opacity_08 text-center mw_388">
                        Control de RTP (controlás qué porcentaje pagar)
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mb-2" data-aos="fade-up">
                    <div>
                      <RightTick />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0 ff_inter fs_6sm fw-medium text-white opacity_08 text-center mw_388">
                        Bonos Editables, Happy Hours, Jackpots, Códigos
                        Promocionales Regalo
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mb-2" data-aos="fade-up">
                    <div>
                      <RightTick />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0 ff_inter fs_6sm fw-medium text-white opacity_08 text-center mw_388">
                        Aplicación para Android y Windows de regalo.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mb-2" data-aos="fade-up">
                    <div>
                      <RightTick />
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <p className="mb-0 ff_inter fs_6sm fw-medium text-white opacity_08 text-center mw_388">
                        Tiempo de creación 2 a 3 semanas
                      </p>
                    </div>
                  </div>
                  <div
                    className="d-flex align-items-center justify-content-center pt-5"
                    data-aos="fade-up"
                  >
                    <div className="position-relative">
                      <img
                        src={BtnAftetGradient}
                        alt="BtnAftetGradient"
                        className=" position-absolute empezar_btn"
                      />
                      <a
                        className=" button ff_inter fs_6sm fw-bold lh_160 text_black"
                        href=""
                      >
                        Aprende más
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  src={GreenCoin}
                  alt="GreenCoin"
                  className=" position-absolute green_coin img_animate d-lg-block d-none"
                />
                <img
                  src={DiamondCard}
                  alt="DiamondCard"
                  className=" position-absolute diamond_card card_animate d-lg-block d-none"
                />
                <img
                  src={HeartCard}
                  alt="HeartCard"
                  className=" position-absolute heart_card card_animate d-lg-block d-none"
                />
                <img
                  src={DiceImg}
                  alt="DiceImg"
                  className=" position-absolute dice_img img_animate d-lg-block d-none"
                />
              </div>
            </Row>
          </div>
        </Container>
        {/* ---------------------------------Platinum------------------------------- */}
        <Container className="position-relative z-1">
          <div className="silver_box py_Platinum ">
            <Row className="justify-content-center align-items-center">
              <Col lg="5" className=" col-11">
                <h3
                  className=" text-white ff_Anton lh_130 fw-normal fs_2lg pb-3 mb-0"
                  data-aos="fade-right"
                >
                  Platinum
                </h3>
                <p
                  className=" text-white ff_inter fw-medium opacity_08 lh_160 fs_6sm mw_364 mb-2 pb-4"
                  data-aos="fade-right"
                >
                  Diseño totalmente personalizado. Contáctanos para un
                  presupuesto.
                </p>
                <h2
                  className=" text-white lh_120 fw-normal fs_8xl ff_Anton mb-0 pb-3"
                  data-aos="fade-right"
                >
                  Consultar precio
                </h2>
                <div className=" d-flex gap-2 pb-5" data-aos="fade-right">
                  <RightTick />
                  <p className=" ff_inter text-white opacity_08 fs_6sm fw-medium lh_160 mb-0">
                    Personalizable{" "}
                  </p>
                </div>
                <div
                  className="position-relative btn_white d-inline"
                  data-aos="fade-right"
                >
                  <img
                    src={BtnAfter}
                    alt="BtnAfter"
                    className="position-absolute comprar_after"
                  />
                  <button className=" bg-transparent acceso_btn text-white ff_inter fs_6sm fw-bold lh_160">
                    Comprar ahora
                  </button>
                </div>
              </Col>
              <Col lg="6" className="col-11 pt-5 pt-lg-0">
                <img
                  src={PlatinumImg}
                  alt="PlatinumImg"
                  className=" w-100"
                  data-aos="fade-left"
                />
              </Col>
            </Row>
          </div>
        </Container>
        {/* ---------------------------Ellos eligieron------------------------ */}
        <Container className=" py_apostar">
          <h2
            className=" text-white text-center ff_Anton fs_8xl fw-normal lh_120 mb-sm-3 mb-0 pb-sm-5 pb-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Ellos eligieron apostar con nosotros
          </h2>
          <Row className=" justify-content-center justify-content-lg-start">
            <Col
              lg="4"
              sm="6"
              className=" col-11"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={FreeSpins}
                  alt="FreeSpins"
                  className=" rounded-2 w-100"
                />
                <div class="overlay Img_shadow d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
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
                      Rcasinovip
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-4 pt-sm-0"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={HappyHours}
                  alt="HappyHours"
                  className=" rounded-2 w-100"
                />
                <div class="overlay Img_shadow d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
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
                      Rcasinovip
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              sm="6"
              className="col-11 pt-4 pt-lg-0"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className=" position-relative image_overlay">
                <img
                  src={europeanImg}
                  alt="europeanImg"
                  className=" rounded-2 w-100"
                />
                <div class="overlay Img_shadow d-flex justify-content-center align-items-center position-absolute top-0 rounded-2">
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
                      Rcasinovip
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" d-flex justify-content-center align-items-center">
            <p
              className=" text-center text-white lh_160 ff_inter fw-semibold fs_6sm mw_883 pt-4 mt-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Clientes satisfechos que confiaron en Exclusive Games y han
              disfrutado de emocionantes experiencias de juego.{" "}
              <span className=" d-block">
                Ahora, la próxima apuesta está en tus manos.{" "}
              </span>{" "}
              Elige ganar. Elige exclusive game.
            </p>
          </div>
        </Container>
        {/* ---------------------------Accordion--------------------------- */}
        <div className=" mb_accordion">
          <Container>
            <h2
              className=" text-white ff_Anton fs_8xl fw-normal lh_120 text-uppercase text-center pb-sm-5 pb-4 mb-sm-4"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Preguntas más frecuentes
            </h2>
            <div
              className="accordion d-flex flex-column justify-content-center align-items-center"
              id="accordionExample"
            >
              <div
                className="accordion-item w-100"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <p className=" mb-0 text-white ff_Anton fs_md fw-normal lh_130">
                      ¿Cuáles son las ventajas de elegir Juegos Exclusivos para
                      mis plataformas de juegos?
                    </p>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className=" text-white mb-0 ff_inter fw-medium lh_160 opacity_08 fs_6sm mw_880">
                      En Exclusive Games, ofrecemos experiencias únicas y
                      personalizadas, respaldadas por más de 15 años de
                      dedicación al desarrollo de multiplataformas para juegos
                      de azar.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item w-100"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <p className=" mb-0 text-white ff_Anton fs_md fw-normal lh_130">
                      ¿Cómo garantizan la seguridad de las operaciones en sus
                      juegos?
                    </p>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className=" text-white mb-0 ff_inter fw-medium lh_160 opacity_08 fs_6sm mw_880">
                      En Exclusive Games, ofrecemos experiencias únicas y
                      personalizadas, respaldadas por más de 15 años de
                      dedicación al desarrollo de multiplataformas para juegos
                      de azar.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item w-100"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <p className=" mb-0 text-white ff_Anton fs_md fw-normal lh_130">
                      ¿Cuáles son las opciones de juego disponibles en las
                      versiones Silver, Luxury y Platinum?
                    </p>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className=" text-white mb-0 ff_inter fw-medium lh_160 opacity_08 fs_6sm mw_880">
                      En Exclusive Games, ofrecemos experiencias únicas y
                      personalizadas, respaldadas por más de 15 años de
                      dedicación al desarrollo de multiplataformas para juegos
                      de azar.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item w-100"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <p className=" mb-0 text-white ff_Anton fs_md fw-normal lh_130">
                      ¿Cuánto tiempo lleva crear una plataforma con Juegos
                      Exclusivos?
                    </p>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className=" text-white mb-0 ff_inter fw-medium lh_160 opacity_08 fs_6sm mw_880">
                      En Exclusive Games, ofrecemos experiencias únicas y
                      personalizadas, respaldadas por más de 15 años de
                      dedicación al desarrollo de multiplataformas para juegos
                      de azar.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item w-100"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <p className=" mb-0 text-white ff_Anton fs_md fw-normal lh_130">
                      ¿Qué métodos de pago aceptan?
                    </p>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className=" text-white mb-0 ff_inter fw-medium lh_160 opacity_08 fs_6sm mw_880">
                      En Exclusive Games, ofrecemos experiencias únicas y
                      personalizadas, respaldadas por más de 15 años de
                      dedicación al desarrollo de multiplataformas para juegos
                      de azar.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item w-100"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <p className=" mb-0 text-white ff_Anton fs_md fw-normal lh_130">
                      ¿Puedo probar sus juegos antes de comprometerme?
                    </p>
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className=" text-white mb-0 ff_inter fw-medium lh_160 opacity_08 fs_6sm mw_880">
                      En Exclusive Games, ofrecemos experiencias únicas y
                      personalizadas, respaldadas por más de 15 años de
                      dedicación al desarrollo de multiplataformas para juegos
                      de azar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* ------------------------propia plataforma--------------------------- */}
        <Container>
          <div className="silver_box overflow-hidden py_solobox position-relative relative_img">
            <img
              src={SoloImg1}
              alt="SoloImg1"
              className=" position-absolute top-0"
            />
            <img
              src={SoloImg2}
              alt="SoloImg1"
              className=" position-absolute end-0 top-0"
            />
            <h2
              className=" ff_Anton text-white fs_2lg lh_130 fw-normal text-center position-relative z-1 px-3 px-sm-0"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Lanza tu propia plataforma en sólo 2 semanas
            </h2>
            <div
              className="d-flex align-items-center justify-content-center pt-5"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="position-relative">
                <img
                  src={BtnAftetGradient}
                  alt="BtnAftetGradient"
                  className=" position-absolute empezar_btn"
                />
                <a
                  className=" button ff_inter fs_6sm fw-bold lh_160 text_black"
                  href=""
                >
                  Leer más
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MasRazones;
