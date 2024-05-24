import React from "react";
import "../style.css";
import "./Home.css";
import "../mediaqueries.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo .jpg";
//slide image
import SlideImage1 from "../../assets/IMG-20240214-WA0009.jpg";
import SlideImage2 from "../../assets/IMG-20240214-WA0008.jpg";
import SlideImage3 from "../../assets/IMG-20240214-WA0010.jpg";
import SlideImage4 from "../../assets/IMG-20240214-WA0013.jpg";
//image box
import iBoxImage1 from "../../assets/IMG-20240214-WA0007.jpg";
import iBoxImage2 from "../../assets/IMG-20240214-WA0009.jpg";
import iBoxImage3 from "../../assets/IMG-20240214-WA0014.jpg";
import iBoxImage4 from "../../assets/IMG-20240214-WA0009.jpg";
import iBoxImage5 from "../../assets/IMG-20240214-WA0009.jpg";
//medium box
import mBoxImage1 from "../../assets/IMG-20240214-WA0008.jpg";
import mBoxImage2 from "../../assets/IMG-20240228-WA0007.jpg";
import mBoxImage3 from "../../assets/IMG-20240214-WA0016.jpg";
//intro image
import introImage1 from "../../assets/IMG-20240214-WA0014.jpg";
import introImage2 from "../../assets/intopic.jpg";
//slider image
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
// import video1 from "../../assets/why ISA main page.MOV";
// import video2 from "../../assets/intromain.MOV";
// import video3 from "../../assets/why ISA main page.MOV";
// import video4 from "../../assets/why ISA main page.MOV";

const Home = () => {
  const navigate = useNavigate();

  const handleGetCourse = () => {
    navigate("/course");
  };

  return (
    <>
      <section class="background-section">
        <div class="slider-container hidden">
          <div class="slider-container">
            <div class="slider">
              <div class="slide">
                <img src={SlideImage1} style={{ height: "600px" }} alt="Img1" />
              </div>
              <div class="slide">
                <img src={SlideImage2} style={{ height: "600px" }} alt="Img2" />
              </div>
              <div class="slide">
                <img src={SlideImage3} style={{ height: "600px" }} alt="Img3" />
              </div>
              <div class="slide">
                <img src={SlideImage4} style={{ height: "600px" }} alt="Img4" />
              </div>
            </div>
            {/* <!-- button for get course  -->                 */}
            <div class="button-container">
              <button class="rectangle-button" onClick={handleGetCourse}>
                GET COURSE
              </button>
            </div>
            <div class="slider-navigation">
              <div class="dots"></div>
              <div class="dots"></div>
              <div class="dots"></div>
              <div class="dots"></div>
            </div>
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
                  src="videos/video1.mov"
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
                  src="videos/video2.mov"
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
                  src="videos/video1.mov"
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
                  src="videos/video1.mov"
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
              <p>Technique 1</p>
            </div>
            <div class="image-box">
              <img src={iBoxImage2} class="center-image" alt="Img2" />
              <p>Technique 2</p>
            </div>
            <div class="image-box">
              <img src={iBoxImage3} class="center-image" alt="Img3" />
              <p>Technique 3</p>
            </div>
            <div class="image-box">
              <img src={iBoxImage4} class="center-image" alt="Img4" />
              <p>Technique 4</p>
            </div>
            <div class="image-box">
              <img src={iBoxImage5} class="center-image" alt="Img5" />
              <p>Technique 5</p>
            </div>
          </div>
        </div>
        <h3>Additional Information</h3>
        <p>Here's some additional information about our course:</p>
        <div class="medium-boxes">
          <div class="medium-box">
            <img src={mBoxImage1} alt="Topic 1 Img" />
            <h4>Topic 1</h4>
          </div>
          <div class="medium-box">
            <img src={mBoxImage2} alt="Topic 1 Img" />
            <h4>Topic 2</h4>
          </div>
          <div class="medium-box">
            <img src={mBoxImage3} alt="Topic 1 Img" />
            <h4>Topic 3</h4>
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
          {/* <!-- Contact Us --> */}
          <div class="footer-content">
            <div class="contact">
              <h4>Contact Us</h4>
              <p>
                Email:{" "}
                <Link to="mailto:example@example.com">example@example.com</Link>
              </p>
              <p>
                Phone: <Link to="tel:+123456789">+123456789</Link>
              </p>
            </div>

            {/* <!-- Social Media --> */}
            <div class="social-media">
              <h4>Follow Us</h4>
              <div class="social-icons">
                <Link to="#">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i class="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>

            {/* <!-- Map --> */}
            <div class="map">
              <h4>Location</h4>
              {/* <!-- Embed your map here --> */}
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

          {/* <!-- Footer Divider --> */}
          <hr class="footer-divider" />

          {/* <!-- Bottom Content --> */}
          <div class="bottom-content">
            {/* <!-- Logo --> */}
            <div class="logo">
              {/* <!-- Your logo image --> */}
              <img src={Logo} alt="Logo" />
            </div>

            {/* <!-- Copyright --> */}
            <div class="copyright">
              <p>
                Copyright&copy; 2024 INSPIRED STUDIO ACADEMY. All rights
                reserved.
              </p>
              <p>
                Created by <Link to="#">Saun Studios</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
