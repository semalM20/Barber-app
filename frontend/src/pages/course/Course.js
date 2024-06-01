import React from "react";
import "../style.css";
import "../mediaqueries.css";
import { Link, useNavigate } from "react-router-dom";
import courseImage from "../../assets/IMG-20240214-WA0014.jpg";
import courseBoxImage1 from "../../assets/IMG-20240214-WA0012.jpg";
import courseBoxImage2 from "../../assets/IMG-20240214-WA0012.jpg";
import infoItemImage1 from "../../assets/IMG-20240214-WA0016.jpg";
import infoItemImage2 from "../../assets/IMG-20240214-WA0015.jpg";
import infoItemImage3 from "../../assets/IMG-20240214-WA0013.jpg";
import infoItemImage4 from "../../assets/IMG-20240214-WA0016.jpg";
import infoItemImage5 from "../../assets/IMG-20240214-WA0015.jpg";
import infoItemImage6 from "../../assets/IMG-20240214-WA0017.jpg";

const Course = () => {
  const navigate = useNavigate();

  const handleGetEnrolled = () => {
    navigate("/booking");
  };

  return (
    <>
      <section className="course-section">
        <div className="course-container">
          <div className="course-info">
            <h1>Online Pre-Recorded Courses for £1,000</h1>
            <h3>| Barbers' Most Trusted and Most Affordable</h3>
            <button className="enroll-button" onClick={handleGetEnrolled}>
              GET ENROLLED
            </button>
          </div>

          <div className="course-image">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={courseImage}
                    alt="Avatar"
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <p>
                    Master Class-WorkShop Educator: Adrian.M What you will
                    learn: - the top part (sections, shape, texture) The sides
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
          </div>
        </div>
      </section>
      <div className="course-selection-wrapper">
        <h2 className="course-selection-heading">Choose Your Course</h2>
      </div>

      <div className="course-selection-section">
        <div className="course-box">
          <h3>Online</h3>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={courseBoxImage1}
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>DISCRIPTION</h1>
                <p>
                  Sign up now for our Barber courses. Our academy offers you the
                  opportunity to enter a new world. Come let us teach you to
                  create masterpieces with your own hands. The course is
                  intended for anyone who wants to learn the art of haircuts.
                  The course is intensive where you will learn everything in the
                  smallest details. In this course we will teach you from
                  scratch how to cut the most modern haircuts! We will teach you
                  every detail through the theoretical and practical form.
                </p>
              </div>
            </div>
          </div>
          <div className="course-buttons">
            <button id="get-enrolled-btn" onClick={handleGetEnrolled}>
              GET ENROLLED
            </button>

            <button>
              <Link to="#online-info" className="more-info-button"></Link>MORE
              INFO
            </button>
          </div>
        </div>

        <div className="course-box">
          <h3>Offline</h3>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={courseBoxImage2}
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>DISCRIPTION</h1>
                <p>
                  What will you learn with us? *Hair cutting (sections) top part
                  (scissors) *Using the clipper. *Use of scissors and comb
                  *Correct sterilization of instruments. * Classic cut *Basic
                  long mannequin hair (hair sectioning) Bonus Haircut that is
                  the most used *Skin Fade (Shaver) *Beard (depending on the
                  shape of the face) *Hair washing and techniques *Consultation
                  with the Client.l
                </p>
              </div>
            </div>
          </div>
          <div className="course-buttons">
            <button onClick={handleGetEnrolled}>GET ENROLLED</button>

            <button>MORE INFO</button>
          </div>
        </div>
      </div>
      <div className="online-info" id="online-info">
        <h2 className="online-info-heading">More Info About Online Courses</h2>
        <div className="info-grid">
          <div className="info-item">
            <img src={infoItemImage1} alt="Description of img1" />
          </div>
          <div className="info-item">
            <img src={infoItemImage2} alt="Description of Img2" />
          </div>
          <div className="info-item">
            <img src={infoItemImage3} alt="Description of Img3" />
          </div>
        </div>
      </div>
      <div className="offline-info" id="offline-info">
        <h2 className="offline-info-heading">
          More Info About Offline Courses
        </h2>
        <div className="info-grid">
          <div className="info-item">
            <img src={infoItemImage4} alt="Description of Img1" />
          </div>
          <div className="info-item">
            <img src={infoItemImage5} alt="Description of Img2" />
          </div>
          <div className="info-item">
            <img src={infoItemImage6} alt="Description of Img2" />
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
    </>
  );
};

export default Course;
