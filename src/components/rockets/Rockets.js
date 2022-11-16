import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRockets } from "../../redux/rockets/rocketSlice";

const Rockets = () => {
  const { rockets, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === null) {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);
  
  let content;
  if (status === 'pending') {
    content = <p>Loading...</p>;
  } else if (status === 'rejected') {
    content = <p>An error occured</p>;
  } else if (status === 'success') {
    content = <p></p>;
  }

  return (
    <div>
      {content}
      <div className="rocketList">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocketCard">
            <img src={rocket.flickr_images[0]} alt="" />
            <div className="rocketContent">
              <h3 className="rocketName">{rocket.rocket_name}</h3>
              <div className="rocketDesc">
                <p>
                  <span className="status">status</span>
                  <span>{rocket.description}</span>
                </p>
              </div>
              <button type="submit">Reserve Rocket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
