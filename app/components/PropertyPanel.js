import React from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import './PropertyCard.scss';

export default function PropertyPanel(props) {
  const {
    headingText,
    results,
    handlePropBtnClick,
    buttonText,
  } = props;

  return (
    <div className="col-md-6 card-list-container">
      <h2 className="sub-heading-text">{headingText}</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <PropertyCard
              listing={result}
              handlePropBtnClick={handlePropBtnClick}
              buttonText={buttonText}
            />
          </li>))}
      </ul>
    </div>
  );
}

PropertyPanel.propTypes = {
  headingText: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.string.isRequired,
    agency: PropTypes.shape({
      brandingColors: PropTypes.shape({
        primary: PropTypes.string.isRequired,
      }).isRequired,
      logo: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
  })).isRequired,
  handlePropBtnClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
