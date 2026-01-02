import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    const formData = new FormData();
    formData.append('First Name', formDetails.firstName);
    formData.append('Last Name', formDetails.lastName);
    formData.append('Email', formDetails.email);
    formData.append('Phone', formDetails.phone);
    formData.append('Message', formDetails.message);

    try {
      const response = await fetch("https://formspree.io/f/mqabpbvn", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      setButtonText("Send");
      if (response.ok) {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message sent successfully!' });
      } else {
        setStatus({ success: false, message: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-stretch">
          <Col md={6} className="d-flex flex-column justify-content-between">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn text-center w-100 d-flex flex-column justify-content-between h-100" : "text-center w-100"}>
                  <div className="contact-left-wrapper mx-auto mt-5">
                    <div className="contact-details-box mb-4 shadow-sm">
                      <h4>My Contact Details</h4>
                      <p><i className="bi bi-envelope-fill me-2"></i><strong>Email:</strong> samithshashika.se@gmail.com</p>
                      <p><i className="bi bi-telephone-fill me-2"></i><strong>Phone:</strong>  +94 76 402 1805</p>
                    </div>
                    <img src={contactImg} alt="Contact Illustration" className="img-fluid contact-img-large mx-auto" />
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>

          <Col md={6} className="d-flex align-items-stretch">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn w-100 d-flex flex-column justify-content-between" : "w-100"}>
                  <div className="w-100">
                    <h2 className="text-white mb-4 text-center">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="h-100 d-flex flex-column justify-content-between">
                      <Row>
                        <Col sm={6} className="px-1 position-relative">
                          <input type="text" value={formDetails.firstName} placeholder="Your First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                        </Col>
                        <Col sm={6} className="px-1 position-relative">
                          <input type="text" value={formDetails.lastName} placeholder="Your Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                        </Col>
                        <Col sm={6} className="px-1 position-relative">
                          <input type="email" value={formDetails.email} placeholder="Your Email" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                        </Col>
                        <Col sm={6} className="px-1 position-relative">
                          <input type="tel" value={formDetails.phone} placeholder="Your Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                        </Col>
                        <Col sm={12} className="px-1">
                          <textarea rows="5" value={formDetails.message} placeholder="Write your message here..." onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                        </Col>
                        <Col sm={12} className="px-1 d-flex justify-content-start">
                          <button type="submit" className="square-btn"><span>{buttonText}</span></button>
                        </Col>
                        {
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                      </Row>
                    </form>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
