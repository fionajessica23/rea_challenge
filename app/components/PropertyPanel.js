import React from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import styles from './PropertyPanel.scss';

const PropertyPanel = ({ headingText, results, handlePropBtnClick, buttonText }) => {
  const hasResults = results.length > 0;

  return hasResults ?
    <div>
      <h2 className={styles.subHeadingText}>{headingText}</h2>
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
    :
    <div>
      <h2 className={styles.subHeadingText}>{headingText}</h2>
    </div>;
};

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
  })),
  handlePropBtnClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

PropertyPanel.defaultProps = {
  results: [],
};

export default PropertyPanel;
