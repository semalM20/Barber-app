import React from "react";
import { useSelector } from "react-redux";
import RedirectToLogin from "../../components/RedirectToLogin";
import axios from "axios";

const Checkoutt = ({ paymentType, amount }) => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  const HandleSubmit = async (e) => {
    e.preventDefault();

    let res = await axios.post("http://localhost:5900/api/payment", {
      paymentType,
      amount,
      userId: userDetails._id,
    });

    if (res && res.data) {
      let link = res.data.data.links[1].href;
      window.location.href = link;
    }
  };

  return (
    <>
      {user?._id ? (
        <div className="flex justify-center flex-col items-center h-96">
          <p>You have not purchased the course yet!</p>
          <p>Click below to buy it</p>
          <button
            onClick={HandleSubmit}
            className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
          >
            Buy Now !
          </button>
        </div>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default Checkoutt;
