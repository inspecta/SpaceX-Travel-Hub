import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((i) => i.reserved);

  return (
    <div className='profile'>
      <div className='missions'>
        <h3>My Missions</h3>
        <div className='activeMissions'>
          <ul>
            {joinedMissions.map((mission) => {
              return (
                <li key={mission.id}>{mission.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='rockets'>
        <h2>My Rockets</h2>
      </div>
    </div>
  )
}

export default Profile;
