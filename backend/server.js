import express from "express";
import { client } from "./dbconfig.js";
import cors from "cors";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Request received:", req.originalUrl);
  console.log("Method:", req.method);
  next();
});

app.get("/", async (req, res) => {
  try {
    const products = await client.query("SELECT * FROM PRODUCT");
    res.send({ data: products.rows });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching products" });
  }
});
app.get("/ngos", async (req, res) => {
  try {
    const ngos = await client.query("SELECT * FROM NGO");
    res.send({ data: ngos.rows });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching ngos" });
  }
});
app.get("/volunteers", async (req, res) => {
  try {
    const volunteers = await client.query("SELECT * FROM Volunteers");
    res.send({ data: volunteers.rows });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching volunteers" });
  }
});

app.get("/check", (req, res) => {
  res.send("Server is running...");
});

app.post("/ngos", async (req, res) => {
  try {
    const {
      name,
      email,
      contact_number,
      address,
      registration_number,
      website,
      description,
    } = req.body;

    const query = `
      INSERT INTO NGO(name, email, contact_number, address, registration_number, website, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [
      name,
      email,
      contact_number,
      address,
      registration_number,
      website,
      description,
    ];

    const result = await client.query(query, values);

    res
      .status(201)
      .send({ message: "NGO registered successfully", data: result.rows[0] });
  } catch (error) {
    console.error("Error registering NGO:", error);
    res.status(500).send({ error: "Error registering NGO" });
  }
});

app.post("/volunteers", async (req, res) => {
  try {
    const { fullName, email, phone, areaOfInterest, availability, message } =
      req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !areaOfInterest ||
      !availability ||
      !message
    ) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const query = `
      INSERT INTO Volunteers(fullName, email, phone, areaOfInterest, availability, message)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [
      fullName,
      email,
      phone,
      areaOfInterest,
      availability,
      message,
    ];

    const result = await client.query(query, values);

    res.status(201).send({
      message: "Volunteer registered successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error registering volunteer:", error);
    res.status(500).send({ error: "Error registering volunteer" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
