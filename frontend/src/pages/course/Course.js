import React from "react";
import "../style.css";
import "../mediaqueries.css";
import { Link, useNavigate } from "react-router-dom";
// import courseImage from "../../assets/masterclass.jpg";
import courseImage from "../../assets/MASTER CLASS.jpg";
import courseBoxImage1 from "../../assets/beginner.PNG";
import courseBoxImage2 from "../../assets/MASTER CLASS.jpg";
import infoItemImage1 from "../../assets/IMG-20240214-WA0016.jpg";
import infoItemImage3 from "../../assets/IMG-20240214-WA0013.jpg";

import Logo from "../../assets/Logo .jpg";
import footerimg1 from "../../assets/cpd.jpg";

const Course = () => {
  const navigate = useNavigate();

  const handleGetEnrolled = () => {
    navigate("/booking");
  };

  return (
    <>
      <section class="course-section">
        <div class="course-container">
          {/* <!-- Left Side --> */}
          <div class="course-info">
            <h1>Online Pre-Recorded Course was for £1250</h1>
            <h1>And now for first 100 people 60% OFF/- </h1>
            <h2 style={{ color: "#977656" }}>Now only for £500</h2>
            <h3>| Barbers' Most Trusted and Most Affordable</h3>
            <button class="enroll-button" onClick={handleGetEnrolled}>
              GET ENROLLED
            </button>
            {/* <button class="enroll-button">{payment}</button> */}
          </div>

          {/* <!-- Right Side --> */}
          <div class="course-image">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={courseImage}
                    alt="Avatar"
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <div class="flip-card-back">
                  <p style={{ fontSize: "15px" }}>
                    Sign up now for our Barber courses. Our academy offers you
                    the opportunity to enter a new world. Come let us teach you
                    to create masterpieces with your own hands. The course is
                    intended for anyone who wants to learn the art of haircuts.
                    The course is intensive where you will learn everything in
                    the smallest details. In this course we will teach you from
                    scratch how to cut the most modern haircuts! We will teach
                    you every detail through the theoretical and practical form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="course-selection-wrapper">
        {/* <!-- Centered heading --> */}
        <h2 class="course-selection-heading">Choose Your offline course</h2>
      </div>

      <div class="course-selection-section">
        <div class="course-box">
          <h3>BARBER BEGINNER COURSE</h3>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={courseBoxImage1}
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <p>
                  What will you learn with us? *Hair cutting (sections) top part
                  (scissors) *Using the clipper. *Use of scissors and comb
                  *Correct sterilization of instruments. * Classic cut *Basic
                  long mannequin hair (hair sectioning) Bonus Haircut that is
                  the most used *Skin Fade (Shaver) *Beard (depending on the
                  shape of the face) *Hair washing and techniques *Consultation
                  with the Client
                </p>
              </div>
            </div>
          </div>
          <div class="course-buttons">
            <button id="get-enrolled-btn" onClick={handleGetEnrolled}>
              GET ENROLLED
            </button>
          </div>
        </div>
        <div
          style={{
            width: "2px",
            height: "100%",
            backgroundColor: "#FFFFFF",
            margin: "0 20px",
          }}
        ></div>

        <div class="course-box">
          <h3>MASTER CLASS WORKSHOP 1 TO 1</h3>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={courseBoxImage2}
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <p style={{ fontSize: "15px" }}>
                  Master Class-WorkShop Educator: Adrian.M What you will learn:
                  - the top part (sections, shape, texture) The sides
                  (skin/fade, a new technique) - the uniform shape of the
                  haircut, contrast - contour, frontal area - professional
                  styling Beard (correct loss, contour, using the razor) - the
                  shape according to the physiognomy of the face -beard
                  maintenance The photo session (correct position for a
                  professional picture) Marketing and promotion At the end you
                  will receive the Diploma of participation!
                </p>
              </div>
            </div>
          </div>
          <div class="course-buttons">
            <button onClick={handleGetEnrolled}>GET ENROLLED</button>
          </div>
        </div>
      </div>
      <div class="online-info" id="online-info">
        <h2 class="online-info-heading">More Info About Online Courses</h2>
        <div class="info-grid">
          <div class="info-item">
            <img src={infoItemImage1} alt="Description of img1" />
          </div>
          <div class="info-item">
            <p style={{ color: "#977656" }}>
              <strong> Sign up now for our Barber courses. </strong>
            </p>
            <p>
              Our academy offers you the opportunity to enter a new world. Come
              let us teach you to create masterpieces with your own hands. The
              course is intended for anyone who wants to learn the art of
              haircuts. The course is intensive, with our models, where you will
              learn everything in the smallest details. In this course we will
              teach you from scratch how to cut the most modern haircuts! We
              will teach you every detail through the theoretical and practical
              form.
            </p>
            <p>
              The online course features over 50 videos and includes a special
              book authored by Adrian himself, valued at £100. However, you'll
              receive the book complimentary with your course purchase.{" "}
            </p>
          </div>
          <div class="info-item">
            <img src={infoItemImage3} alt="Description of Img3" />
          </div>
        </div>
      </div>
      <div class="offline-info" id="offline-info">
        <h2 class="offline-info-heading">More Info About Offline Courses</h2>
        <div class="info-grid">
          <div class="info-item">
            <p style={{ color: "#977656" }}>
              💈Beginner Barber Course 💈<br></br>{" "}
            </p>

            <p>
              {" "}
              What will you learn with us? <br></br>
              <strong>*Hair cutting (sections) top part (scissors)</strong>
              <strong>*Using the clipper.</strong>
              <strong>*Use of scissors and comb</strong>
              <strong>*Correct sterilization of instruments.</strong>
              <strong>* Classic cut</strong>
              <strong>*Basic long mannequin hair (hair sectioning)</strong>
              <strong>Bonus Haircut that is the most used</strong>
              <strong>*Skin Fade (Shaver)</strong>
              <strong>*Beard (depending on the shape of the face)</strong>
              <strong>*Hair washing and techniques</strong>
              <strong>*Consultation with the Client.</strong>
            </p>
            <p style={{ color: "#977656" }}>
              {" "}
              ✂ <strong>
                Equipment from the Academy during the Course
              </strong> ✂ <br></br>
            </p>
          </div>
          <div class="info-item">
            <p style={{ color: "#977656" }}>
              At the end of the Course, you can benefit from the{" "}
              <strong>Diploma (Internationally Accredited)</strong>. The group
              consists of 4 people, which allows us to pay attention to each
              student. For more details, we offer the course schedule <br></br>
              <strong>Course duration 8 weeks</strong>
              The course will start on:
              <strong>Morning schedule:</strong> Monday 9:30 / 17:00 pm
              Wednesday 9:30 /17:00 pm
              <strong>
                After finishing the Course, you will have the opportunity to
                secure a part-time job (with Your clients), we can prepare you
                well and we can find you a job quickly.
              </strong>{" "}
              (Details will be provided at the Academy, as well as the program){" "}
              <br></br>
              <strong>LOCATION - 17 Gold Street NN11RA Northampton Town</strong>
            </p>
          </div>
          <div class="info-item">
            <p style={{ color: "#977656" }}>
              {" "}
              <strong> Master Class-WorkShop Educator: Adrian.M </strong>
              <br></br>{" "}
            </p>

            <p>
              What you will learn with us ? <br></br>
              <strong>
                {" "}
                the top part (sections, shape, texture) The sides (skin/fade, a
                new technique) - the uniform shape of the haircut, contrast -
                contour, frontal area - professional styling Beard (correct
                loss, contour, using the razor) - the shape according to the
                physiognomy of the face -beard maintenance The photo session
                (correct position for a professional picture) Marketing and
                promotion At the end you will receive the Diploma of
                participation! Time schedule: We start: 11 am - My model,
                step-by-step presentation Break: 12:30 (15 minutes) Your model
                13:00 Finish 15:00 pm{" "}
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <hr />
      </div>

      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="contact">
              <h4>Contact Us</h4>
              <p>
                Email:{" "}
                <Link to="mailto:inspiredstudio95@yahoo.com">
                  inspiredstudio95@yahoo.com
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
                <Link to="https://www.tiktok.com/@inspiredstudiooacademy?_t=8mlPalzjxTc&_r=1">
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

export default Course;
