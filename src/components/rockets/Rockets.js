import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRockets } from "../../redux/rockets/rocketSlice";

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  
  return (
    <div>Rockets</div>

    );
};

export default Rockets;
