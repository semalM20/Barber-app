import React, { useState } from "react";
import "../style.css";
import "../mediaqueries.css";
import "./Booking.css";
import { useNavigate } from "react-router-dom";
import courseBoxImage1 from "../../assets/IMG-20240214-WA0009.jpg";
import courseBoxImage2 from "../../assets/IMG-20240214-WA0010.jpg";
// import courseBoxImage3 from "../../assets/IMG-20240214-WA0011.jpg";
import courseBoxImage4 from "../../assets/IMG-20240214-WA0014.jpg";
// import courseBoxImage5 from "../../assets/IMG-20240214-WA0015.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import SummaryApi from "../../common";

const Booking = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSlot = { name, date, time };
    try {
      const res = await axios.post(SummaryApi.bookSlot.url, newSlot);
      console.log(res.data);
      if (res.data.status) toast.success(res.data.message);
    } catch (error) {
      toast.error("slot is already booked");
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <>
      {/* <Header /> */}

      {/* <!-- Section 1: Book a Haircut Slot --> */}
      <div className="book-slot-section">
        <h2>Book a Haircut Slot</h2>
        {/* <!-- Placeholder action --> */}
        <form
          id="book-slot-form"
          // action="/send-email"
          // method="post"
          onSubmit={handleSubmit}
        >
          {/* <!-- Inline layout --> */}
          <div className="form-group-inline">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              {/* <!-- Date picker --> */}
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              {/* <!-- Time picker --> */}
              <input
                type="time"
                id="time"
                name="time"
                placeholder="Time"
                required
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
          </div>
          {/* <!-- Submit button --> */}
          <button
            type="submit"
            className="book-slot-btn"
            style={{ marginTop: "10px" }}
          >
            Book Slot
          </button>
        </form>
      </div>

      {/* <!-- Section 2: Book an Offline Course --> */}
      <div className="offline-course-section">
        <h2>GET ENROLLED IN OFFLINE COURSE</h2>
        <div className="course-boxes">
          <div className="course-box">
            {/* <!-- Placeholder image --> */}
            <img
              src={courseBoxImage1}
              alt="Offline Course 1"
              className="course-img"
            />
            {/* <!-- Redirect on click --> */}
            <button className="course-btn" onClick={handlePayment}>
              GET COURSE
            </button>
          </div>
          <div class="offline-content">
            <p>THERE ARE TWO OFFLINE COURSES </p>
            <p>
              ON YOUR LEFT IS THE BEGINNER BARBER COURSE SAME AS THE ONLINE
              COURSSE BUT WITH OFFLINE CLASSES{" "}
            </p>
            <p>ON YOUR RIGHT IS THE MASTERCLASS TOPUP COURSE </p>
          </div>
          <div className="course-box">
            {/* <!-- Placeholder image --> */}
            <img
              src={courseBoxImage2}
              alt="Offline Course 2"
              className="course-img"
            />
            {/* <!-- Redirect on click --> */}
            <button className="course-btn" onClick={handlePayment}>
              GET COURSE
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Section 3: Book an Online Course --> */}
      <div className="online-course-section">
        <h2>GET ENROLLED IN ONLINE COURSE</h2>
        <div className="course-boxes">
          {/* <div className="course-box">
            Placeholder image
            <img
              src={courseBoxImage3}
              alt="Online Course 1"
              className="course-img"
            />
            Redirect on click
            <button className="course-btn" onClick={handlePayment}>
              GET COURSE
            </button>
          </div> */}
          <div
            className="course-box"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            {/* <!-- Placeholder image --> */}
            <img
              src={courseBoxImage4}
              alt="Online Course 2"
              className="course-img"
            />
            <div class="course-content">
              <p>
                💈Beginner Barber Course 💈 Sign up now for our Barber courses.
                Our academy offers you the opportunity to enter a new world.
                Come let us teach you to create masterpieces with your own
                hands. The course is intended for anyone who wants to learn the
                art of haircuts. The course is intensive, with our models, where
                you will learn everything in the smallest details. In this
                course we will teach you from scratch how to cut the most modern
                haircuts! We will teach you every detail through the theoretical
                and practical form. What will you learn with us? *Hair cutting
                (sections) top part (scissors) *Using the clipper. *Use of
                scissors and comb *Correct sterilization of instruments. *
                Classic cut *Basic long mannequin hair (hair sectioning) Bonus
                Haircut that is the most used *Skin Fade (Shaver) *Beard
                (depending on the shape of the face) *Hair washing and
                techniques *Consultation with the Client. l INSPIRED STUDIO
                ACADEMY Instructor: Adrian Mecheres Contact: 07448452820 Email:
                inspiredstudioacademy@yahoo.com Thank you!
              </p>{" "}
            </div>
            {/* <!-- Redirect on click --> */}
            <button
              className="course-btn"
              onClick={handlePayment}
              style={{ marginLeft: "80px", marginTop: "80px" }}
            >
              GET COURSE
            </button>
          </div>
          {/* <div className="course-box">
            <!-- Placeholder image -->
            <img
              src={courseBoxImage5}
              alt="Online Course 3"
              className="course-img"
            />
            <!-- Redirect on click -->
            <button className="course-btn" onClick={handlePayment}>
              GET COURSE
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Booking;
