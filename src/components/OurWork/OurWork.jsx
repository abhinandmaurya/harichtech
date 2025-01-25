import React, { useEffect, useState } from "react";
import "./OurWork.css";
import { fetchWorkData } from "../../assets/api";
import { FaArrowDownLong } from "react-icons/fa6";

const OurWork = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkData()
      .then((workData) => {
        setData(workData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="work-container" id="ourwork">
      <h2 className="work-title">Our Work</h2>
      <h3 className="work-subtitle">What we have done</h3>
      <p className="work-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <div className="grid-container">
        {data.map((item, index) => (
          <div key={item.id} className="grid-item">
            <div className="image-container">
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className="image"
              />
              <div className="overlay">
                <h4 className="overlay-title">{item.title}</h4>
                <p className="overlay-description">{item.description}</p>
              </div>
              <img
                src={item.image}
                alt={`Dimmed Image ${item.id}`}
                className="dimmed-image"
              />
            </div>
          </div>
        ))}
      </div>
      <button className="work-btn">
        View More <FaArrowDownLong className="icon" />
      </button>
    </div>
  );
};

export default OurWork;
