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
                  <p className="about-description" style={{ textAlign: "justify" }}>
                    I’m Samith Shashika, a Software Engineering undergraduate at SLTC Research University with hands-on experience in full-stack web development, mobile app development, UI/UX design, and AI/ML integration. I have built real-world applications using React, Node.js, Express.js, MongoDB, PostgreSQL, and Flutter, focusing on scalable systems and intuitive user experiences. I am seeking a Software Engineering internship to gain industry experience and contribute to impactful projects that leverage modern technologies and innovative solutions.
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
                      <p><span className="gold-text">🌐 2022–Present — Web Development</span><br /> Streamify (Real-Time Chat & Video Calling App), QuickCart (Full-Stack E-Commerce Platform)</p>
                      <p><span className="gold-text">📱 2022–Present — Mobile App Development</span><br />SignBridge (Sign Language Translation App - FYP)</p>
                      <p><span className="gold-text">🤖 2023–Present — AI, Machine Learning & Computer Vision</span><br />QuickAI (AI SaaS Multi-Tool Platform), PredictiveHR (Employee Churn Prediction)</p>
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
