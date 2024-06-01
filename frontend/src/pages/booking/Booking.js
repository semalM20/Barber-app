import React, { useState } from "react";
import "../style.css";
import "../mediaqueries.css";
import "./Booking.css";
import { Link, useNavigate } from "react-router-dom";
import courseBoxImage1 from "../../assets/IMG-20240214-WA0009.jpg";
import courseBoxImage2 from "../../assets/IMG-20240214-WA0010.jpg";
import courseBoxImage4 from "../../assets/IMG-20240214-WA0014.jpg";
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
      if (res.data.status) toast.success(res.data.message);
    } catch (error) {
      toast.error("slot is already booked");
    }
  };

  const navigate = useNavigate();

  const handleOnlineCoursePayment = () => {
    navigate("/onlineCoursePayment");
  };
  const handleOfflineBCoursePayment = () => {
    navigate("/offlineBCoursePayment");
  };
  const handleOfflineMCoursePayment = () => {
    navigate("/offlineMCoursePayment");
  };

  return (
    <>
      <div className="book-slot-section">
        <h2>Book a Haircut Slot</h2>
        <form id="book-slot-form" onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="book-slot-btn"
            style={{ marginTop: "10px" }}
          >
            Book Slot
          </button>
        </form>
      </div>

      <div className="offline-course-section">
        <h2>GET ENROLLED IN OFFLINE COURSE</h2>
        <div className="course-boxes">
          <div className="course-box">
            <img
              src={courseBoxImage1}
              alt="Offline Course 1"
              className="course-img"
            />

            <button
              className="course-btn"
              onClick={handleOfflineBCoursePayment}
            >
              GET COURSE
            </button>
          </div>
          <div className="offline-content">
            <p>THERE ARE TWO OFFLINE COURSES </p>
            <p>
              ON YOUR LEFT IS THE BEGINNER BARBER COURSE SAME AS THE ONLINE
              COURSSE BUT WITH OFFLINE CLASSES{" "}
            </p>
            <p>ON YOUR RIGHT IS THE MASTERCLASS TOPUP COURSE </p>
          </div>
          <div className="course-box">
            <img
              src={courseBoxImage2}
              alt="Offline Course 2"
              className="course-img"
            />

            <button
              className="course-btn"
              onClick={handleOfflineMCoursePayment}
            >
              GET COURSE
            </button>
          </div>
        </div>
      </div>

      <div className="online-course-section">
        <h2>GET ENROLLED IN ONLINE COURSE</h2>
        <div className="course-boxes">
          <div
            className="course-box"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <img
              src={courseBoxImage4}
              alt="Online Course 2"
              className="course-img"
            />
            <div className="course-content">
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

            <Link>
              <button
                className="course-btn"
                onClick={handleOnlineCoursePayment}
                style={{ marginLeft: "80px", marginTop: "80px" }}
              >
                GET COURSE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
