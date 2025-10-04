import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Carousel,
  Modal,
} from "react-bootstrap";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Donation = () => {
  // State for the donation form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    amount: "",
    message: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // State to control payment options modal
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // State for the selected payment method (if needed later)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Validate donation form fields
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
    if (!formData.amount.trim()) {
      errors.amount = "Donation amount is required";
    } else if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      errors.amount = "Please enter a valid donation amount";
    }
    return errors;
  };

  // Handle donation form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // If form is valid, show the payment options modal
    setShowPaymentModal(true);
  };

  // Handle selection of a payment option in the modal
  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
    // In a real application, you would proceed with the payment gateway integration here.
    alert(
      `You selected ${method} payment method. Proceeding with a donation of $${formData.amount}.`
    );
    // Optionally, close the modal and reset the form:
    setShowPaymentModal(false);
    setFormData({
      fullName: "",
      email: "",
      amount: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <Container fluid className="p-0">
        <div
          className="donation-hero"
          style={{
            background:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVTgoVY4zegTGU5nNCtNKN95K8UIvfds0rw&s') center/cover no-repeat",
            height: "400px",
            position: "relative",
            color: "#fff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h1>Make a Difference Today</h1>
            <p>
              Your contribution can transform lives and empower communities.
            </p>
            <Button
              variant="light"
              onClick={() =>
                document
                  .getElementById("donationForm")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Donate Now
            </Button>
          </div>
        </div>
      </Container>

      {/* Donation Form Section */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Header className="bg-success text-white">
                <h3 className="mb-0">Donation Form</h3>
              </Card.Header>
              <Card.Body>
                <Form id="donationForm" onSubmit={handleSubmit} noValidate>
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

                  <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Donation Amount (USD)</Form.Label>
                    <Form.Control
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Enter donation amount"
                      isInvalid={!!errors.amount}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.amount}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message (Optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={3}
                    />
                  </Form.Group>

                  <Button variant="success" type="submit" className="w-100">
                    Donate Now
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Payment Options Modal */}
      <Modal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please choose your preferred payment method:</p>
          <div className="d-grid gap-3">
            <Button
              variant="primary"
              onClick={() => handlePaymentSelection("Card")}
            >
              Pay with Card
            </Button>
            <Button
              variant="info"
              onClick={() => handlePaymentSelection("UPI")}
            >
              Pay with UPI
            </Button>
            <Button
              variant="secondary"
              onClick={() => handlePaymentSelection("Net Banking")}
            >
              Pay with Net Banking
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Impact Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Your Donation Matters</h2>
            <p>
              Every dollar you donate helps us provide essential services to
              those in need. Your support enables us to run community programs,
              offer medical aid, and empower individuals with education and
              skills. Together, we create lasting change.
            </p>
            <ul>
              <li>Provide food and shelter for the underprivileged</li>
              <li>Support education initiatives for children</li>
              <li>Improve healthcare and community services</li>
              <li>Empower local communities for sustainable growth</li>
            </ul>
          </Col>
          <Col md={6}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUc_wj_4KqtwaB-nOpXjW5KujyrpwlNGZEQw&s"
              alt="Impact"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>
      </Container>

      {/* Donation Process Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">How Your Donation is Used</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <i
                  className="bi bi-heart-fill"
                  style={{ fontSize: "2rem", color: "#e74c3c" }}
                ></i>
                <h5 className="mt-3">Direct Impact</h5>
                <p>
                  Your donation goes straight to community programs and those in
                  need.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ fontSize: "2rem", color: "#27ae60" }}
                ></i>
                <h5 className="mt-3">Transparent Spending</h5>
                <p>
                  We ensure that all funds are managed transparently and
                  responsibly.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <i
                  className="bi bi-graph-up-arrow"
                  style={{ fontSize: "2rem", color: "#2980b9" }}
                ></i>
                <h5 className="mt-3">Long-term Growth</h5>
                <p>
                  Investing in sustainable projects that create long-lasting
                  change.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Donor Testimonials Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">What Our Donors Say</h2>
        <Carousel variant="dark">
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Text>
                      "I am proud to support this NGO. Their transparent
                      approach and visible impact inspire me to donate
                      regularly."
                    </Card.Text>
                    <Card.Footer className="text-muted">
                      - Samantha, Donor
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
                      "Every donation, no matter the size, makes a difference.
                      I'm grateful for the meaningful work they do!"
                    </Card.Text>
                    <Card.Footer className="text-muted">
                      - David, Donor
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
                      "Supporting this cause has been a fulfilling experience.
                      Their commitment to transparency and community impact is
                      truly remarkable."
                    </Card.Text>
                    <Card.Footer className="text-muted">
                      - Rachel, Donor
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Footer />
    </>
  );
};

export default Donation;
