import React, { useEffect, useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

const Ngo = () => {
  const [formData, setFormData] = useState({
    ngoName: "",
    email: "",
    phone: "",
    address: "",
    registrationNumber: "",
    website: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [ngodata, setNgodata] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch existing NGOs
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/ngos");
      setNgodata(res.data.data);
    } catch (error) {
      console.error("Error fetching NGOs:", error);
    }
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form validation
  const validate = () => {
    let errors = {};

    if (!formData.ngoName.trim()) {
      errors.ngoName = "NGO Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.registrationNumber.trim()) {
      errors.registrationNumber = "Registration number is required";
    }
    if (
      formData.website.trim() &&
      !/^(https?:\/\/)?([\w\d-]+\.)+[A-Za-z]{2,}$/.test(formData.website)
    ) {
      errors.website = "Invalid URL";
    }
    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // no page rewfresh
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const ngoData = {
      name: formData.ngoName,
      email: formData.email,
      contact_number: formData.phone,
      address: formData.address,
      registration_number: formData.registrationNumber,
      website: formData.website,
      description: formData.description,
    };

    try {
      const response = await axios.post("http://localhost:5000/ngos", ngoData);
      console.log(response.data.message);

      setFormData({
        ngoName: "",
        email: "",
        phone: "",
        address: "",
        registrationNumber: "",
        website: "",
        description: "",
      });

      fetchData();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">NGO Registration Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="ngoName" className="form-label">
                      NGO Name
                    </label>
                    <input
                      type="text"
                      id="ngoName"
                      name="ngoName"
                      className={`form-control ${
                        errors.ngoName ? "is-invalid" : ""
                      }`}
                      value={formData.ngoName}
                      onChange={handleChange}
                      required
                    />
                    {errors.ngoName && (
                      <div className="invalid-feedback">{errors.ngoName}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      className={`form-control ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                    {errors.address && (
                      <div className="invalid-feedback">{errors.address}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="registrationNumber" className="form-label">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      id="registrationNumber"
                      name="registrationNumber"
                      className={`form-control ${
                        errors.registrationNumber ? "is-invalid" : ""
                      }`}
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      required
                    />
                    {errors.registrationNumber && (
                      <div className="invalid-feedback">
                        {errors.registrationNumber}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="website" className="form-label">
                      Website (Optional)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className={`form-control ${
                        errors.website ? "is-invalid" : ""
                      }`}
                      value={formData.website}
                      onChange={handleChange}
                    />
                    {errors.website && (
                      <div className="invalid-feedback">{errors.website}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className={`form-control ${
                        errors.description ? "is-invalid" : ""
                      }`}
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Register NGO
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1>REGISTERED NGOS</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {ngodata.length > 0 ? (
          ngodata.map((data) => (
            <Card style={{ width: "18rem" }} key={data.id}>
              <Card.Body>
                <Card.Title>NGO Name: {data.name}</Card.Title>
                <Card.Title>Location: {data.address}</Card.Title>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h5>"Nothing to display"</h5>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Ngo;
