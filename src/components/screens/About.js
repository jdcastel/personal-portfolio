import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";
import colorSharp from "../../assets/img/color-sharp.png";

export const About = () => {

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };



  return (
    <section className="about" id="abouts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInLeft" : ""
                    }
                  >
                    <h2>About Me</h2>
                    <br></br>
                    <p>
                      I am currently in my last year studying Computer
                      Programming and Analysis at Seneca College; I have been
                      participating in intensive training in IT programs where I
                      have developed solid programming skills and have had the
                      opportunity to develop other essential areas such as
                      DevOps and Cloud Computing.
                      <br />
                      <br />I have developed teamwork skills, looking for ways
                      to work efficiently, accurately, and always successfully
                      managing many stressful situations resolving them under
                      time pressure.
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </section>
  );
};
