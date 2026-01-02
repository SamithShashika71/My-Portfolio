import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={`skill-bx ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                  <h2>Skills</h2>
                  <p>I have hands-on experience with modern tools and frameworks in software development. <br />My skill set includes following areas:</p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={meter1} alt="html" />
                      <h5>HTML</h5>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="css" />
                      <h5>CSS</h5>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="css" />
                      <h5>Tailwind CSS</h5>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="javascript" />
                      <h5>JavaScript</h5>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="react" />
                      <h5>React</h5>
                    </div>

                    <div className="item">
                      <img src={meter2} alt="nodejs" />
                      <h5>Node.js</h5>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="python" />
                      <h5>Python</h5>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="java" />
                      <h5>Java</h5>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="oop" />
                      <h5>OOP</h5>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="dart" />
                      <h5>Dart</h5>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="flutter" />
                      <h5>Flutter</h5>
                    </div>

                    <div className="item">
                      <img src={meter2} alt="ml" />
                      <h5>Machine Learning</h5>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="mysql" />
                      <h5>MySQL</h5>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="mongodb" />
                      <h5>MongoDB</h5>
                    </div>

                    <div className="item">
                      <img src={meter2} alt="postgresql" />
                      <h5>PostgreSQL</h5>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="figma" />
                      <h5>Figma</h5>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="git" />
                      <h5>Git/GitHub</h5>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="postman" />
                      <h5>Postman</h5>
                    </div>
                  </Carousel>
                </div>
              }
            </TrackVisibility>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
