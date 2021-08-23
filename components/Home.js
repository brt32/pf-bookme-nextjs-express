import React, { useEffect } from "react";
import RoomItem from "./room/RoomItem";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../redux/actions/roomActions";

const Home = () => {
  const dispatch = useDispatch();

  const { rooms, error } = useSelector((state) => state.allRooms);

  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, []);

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        {" "}
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {rooms && rooms.length === 0 ? (
          <div className="alert alert-danger">
            <strong>No Rooms</strong>
          </div>
        ) : (
          rooms.map((room) => <RoomItem key={room.id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default Home;
