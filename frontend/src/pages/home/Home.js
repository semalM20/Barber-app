import React, { useEffect, useState } from "react";
import "../style.css";
import "./Home.css";
import "../mediaqueries.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo .jpg";

import SlideImage1 from "../../assets/IMG-20240214-WA0009.jpg";
import SlideImage2 from "../../assets/IMG-20240214-WA0008.jpg";
import SlideImage3 from "../../assets/IMG-20240214-WA0010.jpg";
import SlideImage4 from "../../assets/IMG-20240214-WA0013.jpg";

import iBoxImage1 from "../../assets/spray.PNG";
import iBoxImage2 from "../../assets/clipper.PNG";
import iBoxImage3 from "../../assets/comb.PNG";
import iBoxImage4 from "../../assets/dryer.PNG";
import iBoxImage5 from "../../assets/clips.PNG";

import mBoxImage2 from "../../assets/IMG-20240228-WA0007.jpg";
import mBoxImage3 from "../../assets/IMG-20240214-WA0016.jpg";

import introImage1 from "../../assets/IMG-20240214-WA0014.jpg";
import introImage2 from "../../assets/intopic.jpg";

import sliderImage1 from "../../assets/IMG-20240214-WA0008.jpg";
import sliderImage2 from "../../assets/IMG-20240214-WA0012.jpg";
import sliderImage3 from "../../assets/IMG-20240214-WA0017.jpg";
import sliderImage4 from "../../assets/IMG-20240214-WA0015.jpg";
import sliderImage5 from "../../assets/IMG-20240214-WA0013.jpg";
import sliderImage6 from "../../assets/IMG-20240214-WA0008.jpg";
import sliderImage7 from "../../assets/IMG-20240214-WA0012.jpg";
import sliderImage8 from "../../assets/IMG-20240214-WA0017.jpg";
import sliderImage9 from "../../assets/IMG-20240214-WA0015.jpg";
import sliderImage10 from "../../assets/IMG-20240214-WA0013.jpg";

import footerimg1 from "../../assets/cpd.jpg";

const Home = () => {
  const images = [SlideImage1, SlideImage2, SlideImage3, SlideImage4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const navigate = useNavigate();

  const handleGetCourse = () => {
    navigate("/course");
  };

  return (
    <>
      <section class="background-section">
        <div class="slider-container hidden">
          <div className="slider-container">
            <div className="slider">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? "active" : ""}`}
                  style={{ display: index === currentSlide ? "block" : "none" }}
                >
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider-navigation">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dots ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>

          <div class="button-container">
            <button class="rectangle-button" onClick={handleGetCourse}>
              GET COURSE
            </button>
          </div>
          <div class="rectangle-container">
            <h2>WHY INSPIRED STUDIO ACADEMY ?</h2>
            <p>
              Our Course it’s held from Our Instructor Adrian which is very
              professional and have experience He build his own strategy to make
              you a professional barber in a sort period time ! All the
              information to grow you and understanding everything to achieve it
            </p>
            <div class="video-boxes">
              <div class="video-box">
                <video
                  src="videos/mainpgintro .mp4"
                  controls
                  style={{
                    height: "300px",
                    width: "300px",
                    backgroundColor: "black",
                  }}
                ></video>
              </div>
              <div class="video-box">
                <video
                  src="videos/certification.mp4"
                  controls
                  style={{
                    height: "300px",
                    width: "300px",
                    backgroundColor: "black",
                  }}
                ></video>
              </div>
              <div class="video-box">
                <div class="black-square">
                  <video
                    src="videos/feedbackstudent.mp4"
                    controls
                    style={{
                      height: "300px",
                      width: "300px",
                      backgroundColor: "black",
                    }}
                  ></video>
                </div>
              </div>
              <div class="video-box">
                <video
                  src="videos/offlineclass.mp4"
                  controls
                  style={{
                    height: "300px",
                    width: "300px",
                    backgroundColor: "black",
                  }}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about-section">
        <div class="container">
          <h2>About Course</h2>

          <p>
            Our course is designed to provide you with comprehensive training in
            barbering skills. Led by our experienced instructor Adrian, you'll
            learn the latest techniques and strategies to become a professional
            barber.
          </p>
          <div class="image-boxes">
            <div class="image-box">
              <img src={iBoxImage1} class="center-image" alt="Img1" />
              <p>Technique-1</p>
            </div>
            <div class="image-box">
              <img src={iBoxImage2} class="center-image" alt="Img2" />
              <p>Technique-2</p>
            </div>
            <div class="image-box">
              <img src={iBoxImage3} class="center-image" alt="Img3" />
              <p>Technique-3</p>
            </div>
            <div class="image-box">
              <img src={iBoxImage4} class="center-image" alt="Img4" />
              <p>Technique-4</p>
            </div>
            <div class="image-box">
              <img src={iBoxImage5} class="center-image" alt="Img5" />
              <p>Technique-5</p>
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: "20px" }}>
          Here's some additional information about our course:
        </h2>
        <div class="medium-boxes">
          <div class="medium-box">
            <p>
              About the offline classes, We have small groups only 4 Students at
              the time which give us more attention to each Student and focus
              and make sure everyone understands everything.
            </p>
            <p>
              AND We have already graduated over 25 Students in one year and
              they are barbers ,working in the Shops
            </p>
          </div>
          <div class="medium-box">
            <img src={mBoxImage2} alt="Topic 1 Img" />
          </div>
          <div class="medium-box">
            <img src={mBoxImage3} alt="Topic 1 Img" />
          </div>
        </div>
      </section>
      <div class="intro-section">
        <div class="intro-image">
          <img src={introImage1} alt="Tutor Img" />
        </div>
        <div class="intro-content">
          <h2>About Our Tutor</h2>
          <p>
            Adrian Mecheres brings over four years of expertise in the field of
            barbering and education. With a passion for both grooming and
            teaching, Adrian has honed his skills to provide top-notch services
            while also sharing his knowledge with aspiring barbers. His
            dedication to the craft and commitment to education have earned him
            recognition among peers and clients alike. Whether in the barber's
            chair or the classroom, Adrian embodies professionalism and
            excellence
          </p>
          <p>
            Struggling with mastering techniques and aspiring to become a
            proficient barber can enhance one's skills and understanding,
            leading to excellence and continuous growth.
          </p>
        </div>
        <div class="intro-image">
          <img src={introImage2} alt="Tutor Img" />
        </div>
      </div>
      <div class="slider-section">
        <div class="custom-slider">
          <div class="slides">
            <img src={sliderImage1} alt="Slide 1" />
            <img src={sliderImage2} alt="Slide 2" />
            <img src={sliderImage3} alt="Slide 3" />
            <img src={sliderImage4} alt="Slide 4" />
            <img src={sliderImage5} alt="Slide 5" />

            <img src={sliderImage6} alt="Slide 1" />
            <img src={sliderImage7} alt="Slide 2" />
            <img src={sliderImage8} alt="Slide 3" />
            <img src={sliderImage9} alt="Slide 4" />
            <img src={sliderImage10} alt="Slide 5" />
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="contact">
              <h4>Contact Us</h4>
              <p>
                Email:{" "}
                <Link to="mailto:inspiredstudioacademy@yahoo.com">
                  inspiredstudioacademy@yahoo.com
                </Link>
              </p>
              <p>
                Phone: <Link to="tel:+44 7448 452820">+44 7448 452820</Link>
              </p>
            </div>

            <div class="social-media">
              <h4>Follow Us</h4>
              <div class="social-icons">
                <Link to="https://www.facebook.com/share/m7GZw25V2h9tMhzL/?mibextid=LQQJ4d">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="https://www.tiktok.com/@inspiredstudioacademy?_t=8mOoZU2JHou&_r=1">
                  <i class="fab fa-tiktok"></i>
                </Link>
                <Link to="https://www.instagram.com/inspiredstudioacademy?igsh=Nm9vNDkzZ2lpZXdl">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="https://www.facebook.com/share/ywdnnUVTta5eHf1P/?mibextid=LQQJ4d">
                  <i class="fab fa-facebook-f"></i>
                </Link>
              </div>
            </div>

            <div class="map">
              <h4>Location</h4>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.2774179981798!2d-0.9003022411032054!3d52.2388409162286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770eddf393c93d%3A0x1f147663b8914137!2s17%20Gold%20St%2C%20Northampton%20NN1%201RA!5e0!3m2!1sen!2suk!4v1712803196249!5m2!1sen!2suk"
                width="200"
                height="150"
                title="map-iframe"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <hr class="footer-divider" />

          <div class="bottom-content">
            <div class="logo">
              <img src={Logo} alt="Logo" />
            </div>

            <div class="copyright">
              <p>
                Copyright&copy; 2024 INSPIRED STUDIO ACADEMY. All rights
                reserved.
              </p>
              <p>
                Created by <Link to="#">Saun Studios</Link>
              </p>
            </div>
            <div class="footerimage">
              <img src={footerimg1} alt="Slide 1" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
