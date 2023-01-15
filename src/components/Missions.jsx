import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionsHtmlElements = missions.map((mission) => (
      <MissionCard
        key={ mission.name }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />
    ));

    return (
      <div data-testid="missions" className="missions-box">
        <Title headline="Missões" />
        <div className="missions-card-box">
          { missionsHtmlElements }
        </div>
      </div>
    );
  }
}

export default Missions;
