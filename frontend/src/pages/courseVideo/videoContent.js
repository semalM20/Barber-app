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
  console.log("user--->", userDetails);

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
    { id: 1, title: "Video 1", url: "videos/video1.mov" },
    { id: 2, title: "Video 2", url: "videos/video2.mov" },
    { id: 3, title: "Video 3", url: "videos/video3.mov" },
    { id: 4, title: "Video 4", url: "videos/video4.mov" },
    { id: 5, title: "Video 5", url: "videos/video5.mov" },
    { id: 6, title: "Video 6", url: "videos/video6.mov" },
    { id: 7, title: "Video 7", url: "videos/video7.mov" },
    { id: 8, title: "Video 8", url: "videos/video8.mov" },
    { id: 9, title: "Video 9", url: "videos/video9.mov" },
    { id: 10, title: "Video 10", url: "videos/video10.mov" },
    { id: 11, title: "Video 11", url: "videos/video11.mov" },
    { id: 12, title: "Video 12", url: "videos/video12.mov" },
    { id: 13, title: "Video 13", url: "videos/video13.mov" },
    { id: 14, title: "Video 14", url: "videos/video14.mov" },
    { id: 15, title: "Video 15", url: "videos/video15.mov" },
    { id: 16, title: "Video 16", url: "videos/video16.mov" },
    { id: 17, title: "Video 17", url: "videos/video17.mov" },
    { id: 18, title: "Video 18", url: "videos/video18.mov" },
    { id: 19, title: "Video 19", url: "videos/video19.mov" },
    { id: 20, title: "Video 20", url: "videos/video20.mov" },
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
