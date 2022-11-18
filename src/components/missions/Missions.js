import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchMissions, HandleMissions } from '../../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  const fetchedMissions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!fetchedMissions.missions.length) {
      dispatch(FetchMissions());
    }
  }, [fetchedMissions.missions.length, dispatch]);

  const MissionHandler = (id) => {
    dispatch(HandleMissions(id));
  };

  return (
    <div className="missions">
      <table className="missions-table">
        <thead className="mission-tbl-head">
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {
            fetchedMissions.missions.map((mission) => (
              <tr key={mission.id} className="mission-details">
                <td>{mission.name}</td>
                <td className="description">{mission.description}</td>
                <td className="mission-status">
                  <p className={mission.reserved ? 'member' : 'notMember'}>
                    {mission.reserved ? 'Active member' : 'NOT A MEMBER'}
                  </p>
                </td>
                {mission.reserved && <td><button type="submit" className="leave-mission" onClick={() => MissionHandler(mission.id)}>Leave Mission</button></td>}
                {!mission.reserved && <td><button type="submit" className="join-mission" onClick={() => MissionHandler(mission.id)}>Join Mission</button></td>}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
