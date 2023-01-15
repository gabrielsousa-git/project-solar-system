import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name" className="mission-name">
          { name }
        </p>
        <p data-testid="mission-year">
          { `Ano: ${year}` }
        </p>
        <p data-testid="mission-country">
          { `País de origem: ${country}` }
        </p>
        <p data-testid="mission-destination">
          { `Destino: ${destination}` }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
