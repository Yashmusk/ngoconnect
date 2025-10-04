import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Container,
} from "@mui/material";
import profile1 from "./profile1.jpg";
import profile2 from "./profile2.jpg";
import profile3 from "./profile3.jpg";
import profile4 from "./profile4.jpg";
import profile5 from "./profile5.jpg";
const teamMembers = [
  {
    name: "Aashi Jain",
    role: "Full-Stack Developer",
    image: profile1,
    description:
      "Hey there! I’m Aashi Jain, pursuing my Master of Computer Applications from VITB. I have a keen interest in the latest technologies, and my expertise lies in backend development and databases.",
  },
  {
    name: "Yashi Jain",
    role: "UI/UX Designer",
    image: profile2,
    description:
      "Hi I'm Yashi Jain, pursuing my masters of computer applications from VITB. I have keen interest in Java technologies",
  },
  {
    name: "Yash Agarwal",
    role: "Backend Developer",
    image: profile3,
    description:
      "Hi I'm Yash Agarwal, pursuing my masters of computer applications from VITB. I have keen interest working on the mern stack.",
  },
  {
    name: "Akshat Krishna",
    role: "Project Manager",
    image: profile4,
    description:
      "Hi I'm Akshat Krishna, pursuing my masters of computer applications from VITB. I have keen interest working on the project mangement part.",
  },
  {
    name: "Amisha Patel",
    role: "Marketing & Outreach",
    image: profile5,
    description: "Handles promotions and NGO partnerships.",
  },
];

const NgoConnectFamily = () => {
  return (
    <Container sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Meet the NGOCONNECT Family
      </Typography>
      <Typography variant="body1" paragraph>
        The dedicated team behind NGOCONNECT, working to create a meaningful
        impact.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 300,
                mx: "auto",
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 150, height: 150, mx: "auto", mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NgoConnectFamily;
