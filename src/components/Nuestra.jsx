import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PokerImg from "../assets/images/webp/PokerImg.webp";
import { TextArrow } from "./IconImg";
import Aviator from "../assets/images/webp/AviatorImg.webp";

const Nuestra = () => {
  return (
    <>
      <div
        id="Misión"
        className="mt_1 pt-5 mt-0 mt-lg-4 pb-5 mb-5 position-relative"
      >
        <div className=" position-absolute mission_leftEllips"></div>
        <div className=" position-absolute mission_leftEllips mission_RightEllips"></div>
        <div className="mission_centerEllips position-absolute start-50 top-50"></div>
        <Container className=" position-relative z-1">
          <Row>
            <Col
              lg="6"
              className=" col-12 d-flex align-items-center flex-lg-column flex-column-reverse"
            >
              <div
                className=" pt-5 pt-lg-0 overflow-hidden"
                data-aos="zoom-out-right"
              >
                <img
                  src={PokerImg}
                  alt="PokerImg"
                  className=" w-100 mw_538 br_16 img_hover"
                />
              </div>
              <div>
                <h3
                  className=" ff_Anton fs_8xl lh_120 text-white fw-normal mb-0 pt-4 pt-sm-5 mt-md-2 mt-0 pb-3"
                  data-aos="zoom-out-right"
                >
                  Nuestra Visión
                </h3>
                <p
                  className=" ff_inter opacity_08 fs_6sm text-white fw-medium lh_160 mw_444"
                  data-aos="zoom-out-right"
                >
                  Nuestra visión es ser líderes indiscutibles en la industria de
                  los juegos de azar y llevar nuestra pasión por el
                  entretenimiento más allá de las fronteras. Imagina un mundo
                  donde la emoción y la diversión no tengan límites, y ese es el
                  mundo que queremos crear contigo.
                </p>
                <div data-aos="zoom-out-right">
                  <TextArrow />
                </div>
              </div>
            </Col>
            <Col lg="6" className=" col-12 d-flex flex-column">
              <div>
                <div className=" pt-5 pt-lg-0">
                  <h3
                    className=" ff_Anton fw-normal fs_8xl text-white lh_120 mb-0 pb-3"
                    data-aos="zoom-out-right"
                  >
                    Nuestra Misión
                  </h3>
                  <p
                    className=" text-white fs_6sm fw-medium lh_160 opacity_08 ff_inter mw_444 mb-0 pb-4"
                    data-aos="zoom-out-right"
                  >
                    Nuestra misión es simple pero poderosa: proporcionarte la
                    más amplia gama de soluciones de entretenimiento de alta
                    calidad y rentabilidad. Estamos comprometidos a elevar tus
                    expectativas y brindarte experiencias inigualables.
                  </p>
                  <div data-aos="zoom-out-right">
                    <TextArrow />
                  </div>
                </div>
                <div className=" overflow-hidden" data-aos="zoom-out-right">
                  <img
                    src={Aviator}
                    alt="Aviator"
                    className=" w-100 mw_538 br_16 pt-5 mt-2 img_hover"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Nuestra;
