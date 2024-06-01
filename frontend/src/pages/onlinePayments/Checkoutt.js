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
        <div className="text-center font-bold">
          <button onClick={HandleSubmit}>Buy Now !</button>
        </div>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default Checkoutt;
