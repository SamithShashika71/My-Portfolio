import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "QuickAI",
      description: "A PERN-stack AI SaaS platform offering AI-powered tools, Clerk authentication, subscription billing, and a Neon PostgreSQL database.",
      imgUrl: projImg8,
      category: "AI/ML",
      link: "https://github.com/SamithShashika71/QuickAI"
    },
    {
      title: "Streamify",
      description: "A MERN-stack real-time chat and video calling app with JWT auth, friends system, 32 themes, and Stream API integration.",
      imgUrl: projImg7,
      category: "Web",
      link: "https://github.com/SamithShashika71/Streamify-Social-App"
    },
    {
      title: "SignBridge",
      description: "AI-powered mobile app for real-time Sri Lankan Sign Language gesture translation and 3D avatar-based text-to-sign rendering.",
      imgUrl: projImg9,
      category: "Mobile",
      link: "https://github.com/SamithShashika71/SignBridge"
    },
    {
      title: "PredictiveHR",
      description: "AI-powered HR analytics platform for employee churn prediction using machine learning with FastAPI, React, and PostgreSQL.",
      imgUrl: projImg5,
      category: "AI/ML",
      link: "https://github.com/SamithShashika71/PredictiveHR"
    },
    {
      title: "QuickCart",
      description: "A modern full-stack e-commerce web application built with Next.js, MongoDB, Tailwind CSS, Clerk, and Inngest.",
      imgUrl: projImg6,
      category: "Web",
      link: "https://github.com/SamithShashika71/QuickCart"
    },
    {
      title: "Smart Fan Control System",
      description: "Gesture-based fan control using MediaPipe, OpenCV, and Arduino for real-time IoT automation.",
      imgUrl: projImg3,
      category: "AI/ML",
      link: "https://github.com/SamithShashika71/Smart-Fan-Control-Using-Image-Processing"
    },
    {
      title: "Movie Review Application",
      description: "A full stack movie review application built with React (frontend), Spring Boot (backend), and MongoDB (database).",
      imgUrl: projImg2,
      category: "Web",
      link: "https://github.com/SamithShashika71/Movie-Review-Website"
    },
    {
      title: "Random Quote Generator App",
      description: "Random quotes generator with mulyiple aspects usin Flutter.",
      imgUrl: projImg4,
      category: "Mobile",
      link: "https://github.com/SamithShashika71/Random-Quote-Generator-App"
    },
    {
      title: "Food Order Website",
      description: "A responsive food ordering frontend website built with HTML & CSS.",
      imgUrl: projImg1,
      category: "Web",
      link: "https://github.com/SamithShashika71/Food-Order-Website"
    },
  ];

  const renderProjects = (category) => {
    const filtered = category === "All" ? projects : projects.filter(p => p.category === category);
    return (
      <Row>
        {filtered.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    );
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I have worked on various academic and self-initiated projects that reflect my interest in real-time systems, mobile app development, and AI integration. .</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="all">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="all">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="mobile">Mobile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="web">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="ai">AI/ML</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="all">
                        {renderProjects("All")}
                      </Tab.Pane>
                      <Tab.Pane eventKey="mobile">
                        {renderProjects("Mobile")}
                      </Tab.Pane>
                      <Tab.Pane eventKey="web">
                        {renderProjects("Web")}
                      </Tab.Pane>
                      <Tab.Pane eventKey="ai">
                        {renderProjects("AI/ML")}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
