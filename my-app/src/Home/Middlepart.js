import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Middlepart.css";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Middlepart() {
  const navigate = useNavigate(); // Initialize the navigation hook

  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel-container" style={{ marginBottom: "40px" }}>
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCCQphxgNsYK0d2EMG323t70Da0GKCz0lng&s"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Empowering Communities</h3>
              <p>Join hands to create a better tomorrow.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefpPL9ylMPNzJt_Cm81Z67qUpUHpTJYkfjQ&s"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>NGO Collaboration</h3>
              <p>Connecting NGOs to resources and volunteers.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKP8EySob9h7CGqgeeHFt_5SXk9oPnpC9M5Q&s"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Be the Change</h3>
              <p>Make a difference with your contribution.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Buttons Section */}
      <div
        className="button-section"
        style={{
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        <Button
          variant="primary"
          style={{
            margin: "20px",
            padding: "20px 40px",
            fontSize: "1.5rem",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/ngos")} // Navigate to the /ngo route
        >
          NGOS
        </Button>
        <Button
          variant="secondary"
          style={{
            margin: "20px",
            padding: "20px 40px",
            fontSize: "1.5rem",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/vol")}
        >
          VOLUNTEERS
        </Button>
        <Button
          variant="success"
          style={{
            margin: "20px",
            padding: "20px 40px",
            fontSize: "1.5rem",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/donation")}
        >
          DONATIONS
        </Button>
      </div>

      {/* Form Section */}
      <div
        style={{
          margin: "50px auto",
          padding: "30px",
          maxWidth: "600px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
        onClick={() => navigate("/donation")}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Get Involved
        </h3>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your message"
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </div>

      {/* Info Cards Section */}
      <div style={{ padding: "50px" }}>
        <Row className="g-4">
          <Col sm={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWo2w1iidHQTxmIwNK1ZWbbZMUBTh6bwLKDvXnIySzuHMDyyJgB-RIIKpb99ITZklS3gyE9aKxmo4Iy2VKAmirGfKrlHb-D20UvZP_8tol2P18ZUVoJQ8nYRZSnf7w3cp9AlX8WC71q-Y/s1600/Non+Governmental+Organisations+%2528NGOs%2529.jpg"
              />
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Learn more about how we are changing lives every day.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1SFGLs8gVnJRCf4k9zmxuZElcbrwRJha4w&s"
              />
              <Card.Body>
                <Card.Title>Volunteer Opportunities</Card.Title>
                <Card.Text>
                  Explore ways you can contribute your time and skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://static.vecteezy.com/system/resources/previews/013/766/012/non_2x/donation-box-and-charity-concept-human-hands-putting-money-cash-love-and-heart-to-donation-box-together-helping-doing-charity-illustration-free-vector.jpg"
              />
              <Card.Body>
                <Card.Title>Make a Donation</Card.Title>
                <Card.Text>
                  Support our initiatives with your generosity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Middlepart;
