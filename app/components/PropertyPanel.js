import React from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import './PropertyCard.scss';

export default function PropertyPanel(props) {
  const {
    headingText,
    results,
    handlePropBtnCLick,
    buttonText,
  } = props;

  return (
    <div className="col-md-6 card-list-container">
      <h2 className="sub-heading-text">{headingText}</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <PropertyCard
              list={result}
              handlePropBtnCLick={handlePropBtnCLick}
              buttonText={buttonText}
            />
          </li>))}
      </ul>
    </div>
  );
}

PropertyPanel.propTypes = {
  headingText: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlePropBtnCLick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
