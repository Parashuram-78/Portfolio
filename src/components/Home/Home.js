import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/19144008.jpg";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Namaste!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🙏
                </span>
              </h1>

              <h1 className="heading-name">
                Myself
                <strong className="main-name"> ANKUR SHUKLA </strong>
              </h1>
              <div style={{ display: "flex" }}>
                <h1 className="heading-name"> I am a</h1>
                <div className="main-name" style={{marginLeft:10, marginTop:-5}}>
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
