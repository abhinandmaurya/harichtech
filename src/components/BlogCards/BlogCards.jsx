import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./BlogCards.css";

const BlogCards = () => {
  const blogs = [
    {
      title: "Digital Marketing",
      author: "Haricitech",
      image:
        "https://s3-alpha-sig.figma.com/img/817c/8b32/3613efcc644042502de593c976a9593f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lEPGM9FOHh5e~m0FutFy9DlJbLHbkO7wK6DmBaC0SHdOE1NmnWSiUS0Yx~VdUBPts3uGT-UNIzjlNo39fpXRgJIm2HIKKVg8EGhsmdcI2XNFARmQV4cUL76c2DOo9YbGC-7JDm1l0HRX8vkfK5bbiqMipDXX5n-4dv~uMNmRms97aIMliRkkylWmf-qKtO0OY-6wOPVaHKtjmDfjw5j8WZIH82ektx9daTQjy9XgkEebgV35WnxYmifo7CqfFPMJkUjgAOEjNmVwQ3SKs58xFn0KSY5ApZBXn5dz5KZSQ47tbtWYDTLfPsv3RJMG3wkYt0NbiN08~9y4xTszJR02AA__",
      date: "March 26, 2024",
      description:
        "Today, most people spend their time on the internet. People are getting entertainment, news, learning, and many things by using the internet. Along with this they also shop and buy things online. The use of Digital Marketing is growing...",
    },
    {
      title: "Digital Marketing",
      author: "Haricitech",
      image:
        "https://s3-alpha-sig.figma.com/img/ef32/47ed/c64b764cc1c8a7d9a719ca3a55d87696?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O98q~mbmhp8XK7G0hWillHa6sz7RkfmN~te6x2gghRbr7HGZWSRZe4tm8GG0fPadJ2CdOXRKTHjooHx7vtpmiuZZO4Tuu22pNnEpwwhV660sk6L1rS~3s98BkgEjYYsBldKDBAfZI0GiA9g~8EeKMOskJjeAov7f19Qnt3AAydpriBM7-uikD6d0uXIfjM-baNlAQ--S5yxK9DpyizEf8A93879~vKb0hcPBwyDB16ir9cbiehcKeyalRFhFC1npjDa9Ce4GuWgOj01vGq6u47xX0ljIJFUQr1WJIHBNvggEOGWW8AIUmbuNyOGk1sk2TW3Mpe~J8hLfdaWK1z36CA__",
      date: "March 26, 2024",
      description:
        "Today, most people spend their time on the internet. People are getting entertainment, news, learning, and many things by using the internet. Along with this they also shop and buy things online. The use of Digital Marketing is growing...",
    },
    {
      title: "Digital Marketing",
      author: "Haricitech",
      image:
        "https://s3-alpha-sig.figma.com/img/55fc/8de3/6bffae046fd0f7b3ac5a8fad2e1bcc92?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BlmJNDmJtdCw1Wd097xHyltbmtSJ1bFziDMMDfwpAfJ5C~DlKOH0X98H~KbhpK7m0NA9~4yiKIpHDMXHCxLF-vDsf8K84rBUDkLTLMciH~Ej3dHon-fWorrTmELV7TghiazrMNsfi8t7sv6Lj-ui0xh1HRfeIKRJ~VDbw8uP8VTncOp5Edud-6FcG25-xVSHqbbPpFn-3UxcgkBTYZp2kqAqTNtGI6RT0MdEpElpcXCvO30apadHFoqw8rtgtMgR-qPdKl27QPtEnV9AUBlfvR0famuY03ePX69kxBIOdCYv4TMGAmc~HCqTtEsMV1lV18OR1Iu4rHc85tt52SjcKg__",
      date: "March 26, 2024",
      description:
        "Today, most people spend their time on the internet. People are getting entertainment, news, learning, and many things by using the internet. Along with this they also shop and buy things online. The use of Digital Marketing is growing...",
    },
  ];

  return (
    <div className="blog-container" id="blog">
      <h1>Blog</h1>
      <h2>Our Latest Blogs</h2>
      <div className="blog-wrapper">
        {/* Left Button */}
        <button className="nav-button left-button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Blog Cards */}
        <div className="blog-card-wrapper">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-author">
                  by {blog.author} on {blog.date}
                </p>
                <p className="blog-description">{blog.description}</p>
                <a href="/" className="blog-link">
                  Read More...
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button className="nav-button right-button">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
