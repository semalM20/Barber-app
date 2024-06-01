import React from "react";
import { useNavigate } from "react-router-dom";

const Failed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/onlineCoursePayment");
  };

  return (
    <div>
      <h3>Payment Failed</h3>
      <button
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
      >
        Try again
      </button>
    </div>
  );
};

export default Failed;
