import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankur Shukla </span>
            from <span className="purple"> Varanasi, India.</span>
            <br/>
            I am a final
            year engineering student at{" "}
            <span className="purple">
              Indian Institute of Technology (IIT BHU), Varanasi{" "}
            </span>
            .
            <br />I am also the co-founder of <span className="purple">
              {" "}
              Dhandolat{" "}
            </span>{" "}
            an ed-fintech startup. Our main aim is to make the middle and rural
            class financially learned.
            We generated a{" "}
            <span className="purple">
              {" "}
              revenue of 1.5 lacs in the first 50 days{" "}
            </span>
            of operations.
            <br />
            <br />
            Apart from coding, the things i love to do!!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Helping Businesses Grow
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving and Guiding others
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep clapping for others, until it is your turn"{" "}
          </p>
          <footer className="blockquote-footer">
            SomeOne I Don't Know Personally
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
