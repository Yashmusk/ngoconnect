import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Carousel,
  Table,
  Alert,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    availability: "",
    message: "",
  });
  const [volunteers, setVolunteers] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/volunteers");
      console.log("API Response:", res.data);
      setVolunteers(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) {
      console.error("Error fetching volunteers", error);
    }
  };
  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate form fields
  const validate = () => {
    let errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!formData.areaOfInterest.trim()) {
      errors.areaOfInterest = "Area of interest is required";
    }

    if (!formData.availability.trim()) {
      errors.availability = "Availability information is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Please tell us why you want to volunteer";
    }

    return errors;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Volunteer Registration Data:", formData);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      areaOfInterest: "",
      availability: "",
      message: "",
    });

    setErrors({});

    // Redirect to the new page after successful submission
    navigate("/thank-you");
  };

  return (
    <>
      <Header />

      <Container fluid className="p-0">
        {/* Hero Section */}
        <div
          className="hero-section"
          style={{
            position: "relative",
            height: "400px",
            background:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5hpJHK1_HEvu-a8gSZSA5a6VE9JbzZH-8w&s') center/cover no-repeat",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h1>Join Our Volunteer Team</h1>
            <p>
              Your passion can change lives. Become a part of our community of
              dedicated volunteers.
            </p>
            <Button
              variant="light"
              onClick={() =>
                document.getElementById("volunteerForm").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Register Now
            </Button>
          </div>
        </div>

        {/* Volunteer Registration Form */}
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="shadow-sm">
                <Card.Header className="bg-primary text-white">
                  <h3 className="mb-0">Volunteer Registration</h3>
                </Card.Header>
                <Card.Body>
                  <Form id="volunteerForm" onSubmit={handleSubmit} noValidate>
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        isInvalid={!!errors.fullName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.fullName}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="areaOfInterest">
                      <Form.Label>Area of Interest</Form.Label>
                      <Form.Control
                        type="text"
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        placeholder="e.g., Community Outreach, Event Management"
                        isInvalid={!!errors.areaOfInterest}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.areaOfInterest}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="availability">
                      <Form.Label>Availability</Form.Label>
                      <Form.Control
                        type="text"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        placeholder="e.g., Weekends, Evenings"
                        isInvalid={!!errors.availability}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.availability}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="message">
                      <Form.Label>Why do you want to volunteer?</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us your motivation"
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Register as Volunteer
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Additional Attractive Sections */}
        <Container className="my-5">
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYfQWYL_AX0NR4hbOYA6pDfsVYoT0oYfADA&s"
                  alt="Volunteer Experience"
                />
                <Card.Body>
                  <Card.Title>Volunteer Experience</Card.Title>
                  <Card.Text>
                    Hear from our volunteers about their journeys and the impact
                    they have made. Join us and create your own inspiring story.
                  </Card.Text>
                  <Button variant="outline-primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59wHXvruqLdu8Fh7IA5pz_xNHSQZIzkmrgg&s"
                  alt="Volunteer Benefits"
                />
                <Card.Body>
                  <Card.Title>Volunteer Benefits</Card.Title>
                  <Card.Text>
                    Gain valuable experience, make meaningful connections, and
                    enjoy the rewards of giving back to your community.
                  </Card.Text>
                  <Button variant="outline-primary">Discover Benefits</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Testimonials Section */}
        <Container className="my-5">
          <h2 className="text-center mb-4">What Our Volunteers Say</h2>
          <Carousel variant="dark">
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Text>
                        "Volunteering here has truly transformed my life. I feel
                        appreciated, and every day brings new challenges and
                        rewards."
                      </Card.Text>
                      <Card.Footer className="text-muted">
                        - Alex, Community Volunteer
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Text>
                        "A wonderful platform that connects passionate people
                        with meaningful opportunities. I highly recommend
                        joining this team!"
                      </Card.Text>
                      <Card.Footer className="text-muted">
                        - Maria, Event Coordinator
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Text>
                        "The volunteer community here is like a family. The
                        experience is enriching both personally and
                        professionally."
                      </Card.Text>
                      <Card.Footer className="text-muted">
                        - John, Volunteer Leader
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
        <h2 className="mt-4">Registered Volunteers</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Area of Interest</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(volunteers) && volunteers.length > 0 ? (
              volunteers.map((volunteer) => (
                <tr key={volunteer._id}>
                  <td>{volunteer.full_name}</td>
                  <td>{volunteer.email}</td>
                  <td>{volunteer.phone}</td>
                  <td>{volunteer.area_of_interest}</td>
                  <td>{volunteer.availability}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No volunteers found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>

      <Footer />
    </>
  );
};

export default Volunteer;
