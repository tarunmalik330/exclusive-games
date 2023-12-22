import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CasionImg from "../assets/images/png/Casionnight.png";
import BtnAftetGradient from "../assets/images/webp/ColorBtnAfter.webp";

const Elegirnos = () => {
  return (
    <>
      <div id="PorQuéElegirnos" className="bg_elegirnos position-relative z-1">
        <Container>
          <Row>
            <Col lg="6" className=" d-flex flex-column justify-content-center">
              <h2
                className=" text_black ff_Anton fs_8xl lh_120 fw-normal mb-0 pb-3"
                data-aos="zoom-in-right"
              >
                Por qué elegirnos
              </h2>
              <p
                className=" text_black ff_inter fs_6sm fw-medium lh_160 opacity_08 mw_526"
                data-aos="zoom-in-right"
              >
                Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
                todo lo invertido en fichas en la moneda que elijas. En
                Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los
                juegos interactivos que más pide la gente. Con Exclusive Games
                empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.
              </p>
              <div className="pt-4" data-aos="zoom-in-right">
                <div className="gradient_btn position-relative">
                  <img
                    src={BtnAftetGradient}
                    alt="BtnAftetGradient"
                    className=" position-absolute empezar_btn"
                  />
                  <button className=" button ff_inter fs_6sm fw-bold lh_160 text_black">
                    Aprende más
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" className=" col-12 pt-5 pt-lg-0">
              <div className="overflow-hidden" data-aos="zoom-in-left">
                <img
                  src={CasionImg}
                  alt="CasionImg"
                  className=" br_16 w-100 mw_558 img_hover"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Elegirnos;
