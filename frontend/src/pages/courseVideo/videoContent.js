import React, { useState } from "react";
import "./videoContent.css";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
import RedirectToLogin from "../../components/RedirectToLogin";
import { useNavigate } from "react-router-dom";

const VideoContent = () => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  let onlineCourse;

  if (userDetails) {
    onlineCourse = userDetails.onlineCoursePayment === 1;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/onlineCoursePayment");
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: "1- WELCOME TO COURSE", url: "videos/VD1 INTRO1.mov" },
    { id: 2, title: "2- INTRO OF THE TUTOR", url: "videos/VD2 INTRO2.mov" },
    { id: 3, title: "3- ABOUT THE COURSE", url: "videos/WHY ISA.mov" },
    { id: 4, title: "4- INTRO OF EQUIPMENTS", url: "videos/EQUIP1 INTRO.mov" },
    { id: 5, title: "5- WHAT EQUIPMENTS DO U NEED!", url: "videos/EQUIP2.mov" },
    { id: 6, title: "6- EQUIPMENT", url: "videos/EQUIP3.mov" },
    { id: 7, title: "7- EQUIPMENT", url: "videos/EQUIP4.MOV" },
    // {
    //   id: 7,
    //   title: "7- EQUIPMENT",
    //   url: `https://res.cloudinary.com/daasd8mcs/video/upload/v1718173963/barber-videos/dx98zprv8ituvmpakvwd.mp4`,
    // },
    { id: 8, title: "8- EQUIPMENT", url: "videos/EQUIP5.mov" },
    { id: 9, title: "9- EQUIPMENT", url: "videos/EQUIP6.mov" },
    { id: 10, title: "10- EQUIPMENT", url: "videos/EQUIP7.mov" },
    { id: 11, title: "11- EQUIPMENT", url: "videos/EQUIP8.mov" },
    { id: 12, title: "12- EQUIPMENT", url: "videos/EQUIP9.mov" },
    {
      id: 13,
      title: "13- HOW TO USE THE SCISSORS",
      url: "videos/SCISSORS1.mp4",
    },
    // {
    //   id: 13,
    //   title: "13- HOW TO USE THE SCISSORS",
    //   url: "https://mega.nz/file/EuUhRCLA#MoWa5LZ95paO_ZfLOBVgpJhvqPN2vUPLJIpS_Xg4fP8",
    // },
    { id: 14, title: "14- SCISSORS PART 2", url: "videos/SCI2.mov" },
    { id: 15, title: "15- SCISSORS PART 3", url: "videos/SCI3.mov" },
    { id: 16, title: "16- SCISSORS PART 4", url: "videos/SCI4.mov" },
    { id: 17, title: "17- SCISSORS PART 5", url: "videos/SCI5.mov" },
    { id: 18, title: "18- SCISSORS PART 6", url: "videos/SCI6.MOV" },
    { id: 19, title: "19- SCISSORS PART 7", url: "videos/SCI7.MOV" },
    { id: 20, title: "20- HOW TO USE CLIPPER", url: "videos/CLIPPER.mp4" },
    // {
    //   id: 20,
    //   title: "20- HOW TO USE CLIPPER",
    //   url: "https://mega.nz/embed/hvMFHIbR#_OKZXYHhp0A3KBRYFPaCPfaem4k8kLAOo1qjcIRWIcw",
    // },
    { id: 21, title: "21- HOW TO USE THE TRIMMER ", url: "videos/TRIMMER.mov" },
    {
      id: 22,
      title: "22- WHAT IS THE RIGHT POSTURE",
      url: "videos/RIGHTPOS.mov",
    },
    { id: 23, title: "23- BONES OF THE HEAD", url: "videos/BONGS1.mov" },
    {
      id: 24,
      title: "24- RIGHT CONSULTATION WITH CLIENT",
      url: "videos/CONSTL.mov",
    },
    { id: 25, title: "25- INTRO TO ONE LENGTH", url: "videos/INTRO OL1.mov" },
    { id: 26, title: "26- ONELENGTH HAIRCUT ", url: "videos/OL HAIRCUT.mov" },
    {
      id: 27,
      title: "27- INTRO SCISSORS UNDERHAND HAIRCUT ",
      url: "videos/INTRO SCISSORS UNDERHAND.mov",
    },
    {
      id: 28,
      title: "28- UNDERHAND HAIRCUT ",
      url: "videos/UNDERHAND HAIRCUT1.mov",
    },
    {
      id: 29,
      title: "29- INTRO FOR ONE SIDE HAIRCUT",
      url: "videos/INTRO ONE SIDE.mov",
    },
    { id: 30, title: "30- ONE BACK AND SIDE", url: "videos/ONE HAIRCUT.mov" },
    {
      id: 31,
      title: "31- INTRO FOR BUZZ CUT ",
      url: "videos/INTRO BUZZCUT.mov",
    },
    { id: 32, title: "32- BUZZCUT HAIRCUT ", url: "videos/BUZZCUT.mov" },
    // {
    //   id: 32,
    //   title: "32- BUZZCUT HAIRCUT ",
    //   url: "https://mega.nz/file/5qFDDDCB#5_PVeWJjzHLev5pDCGwt7aGd6W38_kRsvOYdUxA5Ekw",
    // },
    {
      id: 33,
      title: "33- INTRO FOR CURLY TOP HAIRCUT",
      url: "videos/CURLYTOP INTRO.mov",
    },
    {
      id: 34,
      title: "34- CURLYTOP BACK AND SIDE HAIRCUT",
      url: "videos/CURLYTOP HAIRCUT.mov",
    },
    { id: 35, title: "35- SKINFADE INTRO", url: "videos/SKINFADE INTRO.mov" },
    { id: 36, title: "36- BEARD TRIM PART 1", url: "videos/BEARD1.mov" },
    { id: 37, title: "37- BEARD TRIM PART 2", url: "videos/BEARD2.mov" },
    { id: 38, title: "38- STYLING BEARD TRIM", url: "videos/BEARD3.mov" },
    // {
    //   id: 38,
    //   title: "38- STYLING BEARD TRIM",
    //   url: "https://mega.nz/file/0r0Eza5J#nBnAYn8Z6XdJmhjfI0PYm4_UZnbaXDXlYbXTcqzBCpw",
    // },
    { id: 39, title: "39- INTRO FOR BUZZCUT", url: "videos/INTRO BUZZCUT.mov" },
    { id: 40, title: "40- BUZZCUT HAIRCUT", url: "videos/BUZZCUT HAIRCUT.mov" },
  ];

  return (
    <>
      {user?._id ? (
        onlineCourse ? (
          <>
            <h6 style={{ textAlign: "center", fontSize: "40px" }}>
              Video Lectures
            </h6>
            <div className="app">
              <Sidebar videos={videos} onVideoSelect={setSelectedVideo} />
              <VideoPlayer video={selectedVideo} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center h-96">
              <h1>You have not purchased the video course</h1>
              <button
                onClick={handleClick}
                className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                purchase
              </button>
            </div>
          </>
        )
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default VideoContent;
