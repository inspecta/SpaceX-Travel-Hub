import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchMissions } from '../../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);

  const fetchedMissions = useSelector((state) => state.missions);

  return (
    <div className='missions'>
      <table className='missions-table'>
        <thead className='mission-tbl-head'>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fetchedMissions.missions.map((mission, index) => {
            return (
              <tr key={index} className='mission-details'>
                <th>{mission.mission_name}</th>
                <td>{mission.description}</td>
                <td><button type='button' className='member_status'>NOT A MEMBER</button></td>
                <td><button type='submit' className='mission_status'>Join Mission</button></td>
              </tr>
            );
          })};
        </tbody>
      </table>
    </div>
  )
}

export default Missions;
