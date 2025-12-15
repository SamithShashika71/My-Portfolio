import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import aboutImg from '../assets/img/about-img.jpg';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={`mb-4 mb-md-0 ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`}>
                  <img src={aboutImg} alt="About Me" className="about-img" />
                </div>
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <h2 className="about-title">About Me</h2>
                  <p className="about-description">
                    I’m Samith Shashika, a dedicated Software Engineering undergraduate at SLTC Research University with a strong passion for creating meaningful digital solutions. Through both academic experience and self-driven learning, I’m gaining hands-on skills in full-stack development and cross-platform mobile applications, focusing on intuitive interfaces and scalable backend systems. My interests span across AI, real-time applications, and human-centered design, and I enjoy building technology that solves real-world problems and enhances user experiences.
                  </p>

                  {/* Custom Tabs */}
                  <div className="custom-tab-buttons">
                    <span
                      className={activeTab === "education" ? "tab active" : "tab"}
                      onClick={() => setActiveTab("education")}
                    >
                      Education
                    </span>
                    <span
                      className={activeTab === "experience" ? "tab active" : "tab"}
                      onClick={() => setActiveTab("experience")}
                    >
                      Experience
                    </span>
                  </div>

                  {/* Tab Content */}
                  {activeTab === "education" && (
                    <div className="tab-content-box">
                      <p><span className="gold-text">📘 2012–2017 — G.C.E O/L</span><br />Bandaragama Central College</p>
                      <p><span className="gold-text">📗 2018–2020 — G.C.E A/L</span><br />St. John's College Panadura</p>
                      <p><span className="gold-text">🎓 2022–2026 — BSc.(Hons) Software Engineer(Undergraduate)</span><br />SLTC Research University – Padukka</p>
                    </div>
                  )}

                  {activeTab === "experience" && (
                    <div className="tab-content-box">
                      <p><span className="gold-text">🌐 2022–Present — Web Development</span><br />Food Order Website, Movie Review Application, QuickCart (Full-Stack E-Commerce Platform), Streamify (Real-Time Chat & Video Calling App)</p>
                      <p><span className="gold-text">📱 2022–Present — Mobile App Development</span><br />BRandom Quote Generator App, SignBridge (Sign Language Translation App)</p>
                      <p><span className="gold-text">🤖 2023–Present — AI, Machine Learning & Computer Vision</span><br />Smart Fan Control System, PredictiveHR (Employee Churn Prediction), QuickAI (AI SaaS Multi-Tool Platform)</p>
                    </div>
                  )}
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
