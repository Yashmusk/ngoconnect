import React from "react";
import { Grid, Container, Box, Divider } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link

const Footer = (props) => {
  const { selectedItems } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>{/* Main Content goes here */}</Box>

      <Box
        component="footer"
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          py: 3,
          textAlign: "center",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  NGOCONNECT
                </li>
                <li style={{ marginBottom: "8px", color: "#ccc" }}>ABOUT US</li>
                <li style={{ marginBottom: "8px", color: "#ccc" }}>CAREERS</li>
                <li style={{ marginBottom: "8px", color: "#ccc" }}>TEAM</li>
                <li style={{ marginBottom: "8px" }}>
                  <Link
                    to="/ngo-connect-family"
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#fff")}
                    onMouseOut={(e) => (e.target.style.color = "#ccc")}
                  >
                    NGOCONNECT FAMILY
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  CONTACT
                </li>
                <li style={{ marginBottom: "8px", color: "#ccc" }}>
                  HELP & SUPPORT
                </li>
                <li style={{ marginBottom: "8px", color: "#ccc" }}>
                  PARTNER WITH US
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  LEGAL
                </li>
                <li style={{ marginBottom: "8px", color: "#ccc" }}>
                  TERMS AND CONDITIONS
                </li>
                <li style={{ marginBottom: "8px", color: "#ccc" }}>
                  COOKIE POLICY
                </li>
                <li style={{ marginBottom: "8px", color: "#ccc" }}>
                  REFUND POLICY
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>

        <Divider sx={{ backgroundColor: "#555", marginY: 2 }} />
      </Box>
    </Box>
  );
};

// Prop validation
Footer.propTypes = {
  selectedItems: PropTypes.array,
};

// Default props
Footer.defaultProps = {
  selectedItems: [],
};

export default Footer;
