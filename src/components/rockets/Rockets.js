import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, bookRockets } from '../../redux/rockets/rocketSlice';

const Rockets = () => {
  const { rockets, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === null) {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const BookingHandler = (id) => {
    dispatch(bookRockets(id));
  };

  return (
    <div className="rocketList">
      {status === 'pending' ? (
        <p>Loading...</p>
      ) : (
        <div>
          {rockets.map((rocket) => (
            <div key={rocket.id} className="rocketCard">
              <img src={rocket.flickr_images[0]} className="rocket-img" alt="rockes" />
              <div className="rocketContent">
                <h3 className="rocketName">{rocket.rocket_name}</h3>
                <div className="rocketDesc">
                  <p>
                    {rocket.active && <span className="status">Reserved</span>}
                    {rocket.description}
                  </p>
                </div>
                <button className={rocket.active ? 'cancel' : 'reserve'} id={rocket.id} type="submit" onClick={() => BookingHandler(rocket.id)}>
                  {rocket.active ? 'Cancel Reservations' : 'Reserve Rockets'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rockets;
