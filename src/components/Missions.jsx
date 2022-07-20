import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    // eslint-disable-next-line max-len
    const missionsHtmlElements = missions.map((mission) => <MissionCard key={ mission.name } name={ mission.name } year={ mission.year } country={ mission.country } destination={ mission.destination } />);

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missionsHtmlElements }
      </div>
    );
  }
}

export default Missions;
