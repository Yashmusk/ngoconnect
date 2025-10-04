import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const ThankYou = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card className="text-center shadow-lg p-4" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <h1 className="text-success">Thank You!</h1>
          <p className="mt-3">
            We truly appreciate your willingness to volunteer and be a part of
            our mission. Our team will reach out to you soon with the next
            steps.
          </p>
          <p>
            Meanwhile, feel free to explore our website and learn more about our
            initiatives.
          </p>
          <Button variant="primary" as={Link} to="/">
            Go to Home
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ThankYou;
