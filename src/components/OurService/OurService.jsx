import React, { useEffect, useState } from "react";
import { getServices } from "../../assets/servicesAPI"; // Import the API
import "./OurService.css";
import icon from "../../assets/icon.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurService = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        setError("Failed to load services. Please try again later.");
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="service" id="ourservice">
      <div className="service-header">
        <h1>Our Service List</h1>
        <h2>We Provide The Solution For Our Clients</h2>
        <div className="service-intro">
          <span>
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </span>
        </div>
      </div>

      <div className="service-cards">
        {error && <p className="error-message">{error}</p>}
        {services.length > 0
          ? services.map((service, index) => (
              <div className="card" key={index}>
                <div className="card-header">
                  <div className="icon">
                    <img src={icon} alt="" />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <div className="card-body">
                  <p>{service.description}</p>
                </div>
                <div className="card-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            ))
          : !error && <p>Loading services...</p>}
      </div>

      {/* Footer with left and right buttons */}
      <div className="service-footer">
        <button className="footer-button left-button">
          <FaChevronLeft />
        </button>
        <button className="footer-button right-button">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default OurService;
