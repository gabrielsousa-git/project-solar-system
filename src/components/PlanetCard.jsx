import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    const planeta = `Planeta ${planetName}`;

    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ planeta } />
        <p data-testid="planet-name" className="planet-name">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
