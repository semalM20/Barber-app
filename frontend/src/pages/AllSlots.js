import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";

const AllSlots = () => {
  const [allSlots, setAllSlots] = useState([]);

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allSlot.url, {
      method: SummaryApi.allSlot.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllSlots(dataResponse.data);
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }

    // console.log(dataResponse);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="pb-4 bg-white">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Booking Date</th>
            <th>Time</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {allSlots.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el?.name}</td>
                <td>{moment(el?.date).format("LL")}</td>
                <td>{el?.time}</td>
                <td>{moment(el?.createdAt).format("LL")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllSlots;
