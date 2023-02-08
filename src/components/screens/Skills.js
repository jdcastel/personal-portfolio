// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"
// import { ProgressBar, Step } from "react-step-progress-bar";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { useEffect, useState } from "react";

export const Skills = () => {
      // const [PercentStatus, setPercentStatus] = useState(0);
      // const [ColorStatus, setColorStatus] = useState("");

      // useEffect(()=>{
      //     setPercentStatus(20);
      //     setColorStatus("#2BD73C");
      // })

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                  className={
                    isVisible ? "animate__animated animate__slideInLeft" : ""
                  }
                  >
                    <h2>Technical Skills</h2>
                    <br></br>
                    {/* <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.<br></br> Lorem Ipsum has been the industry's standard
                      dummy text.
                    </p> */}
                  </div>
                )}
              </TrackVisibility>
                    <h5>React</h5>
                    <div
                      className="bar-box"
                      responsive={responsive}
                      infinite={true}
                    >
                      <div
                        className="progressbar"
                        style={{
                          width: `${95}%`,
                        }}
                      />
                    </div>
                    <h5>Node.js</h5>
                    <div
                      className="bar-box"
                      responsive={responsive}
                      infinite={true}
                    >
                      <div
                        className="progressbar"
                        style={{
                          width: `${90}%`,
                        }}
                      />
                    </div>
                    <h5>Express.js</h5>
                    <div
                      className="bar-box"
                      responsive={responsive}
                      infinite={true}
                    >
                      <div
                        className="progressbar"
                        style={{
                          width: `${100}%`,
                        }}
                      />
                    </div>
                    <h5>JavaScript</h5>
                    <div
                      className="bar-box"
                      responsive={responsive}
                      infinite={true}
                    >
                      <div
                        className="progressbar"
                        style={{
                          width: `${85}%`,
                        }}
                      />
                    </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
