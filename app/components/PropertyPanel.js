import React from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import { LISTING_PROP_TYPES } from './propTypes';
import styles from './PropertyPanel.scss';

const PropertyPanel = ({ headingText, listings, handleClick, buttonText }) => {
  const hasListings = listings.length > 0;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subHeadingText}>{headingText}</h2>
      {hasListings &&
        <ul className={styles.list}>
          {listings.map(result => (
            <li className={styles.item} key={result.id}>
              <PropertyCard
                listing={result}
                handleClick={handleClick}
                buttonText={buttonText}
              />
            </li>))}
        </ul>}
    </div>
  );
};

PropertyPanel.propTypes = {
  headingText: PropTypes.string.isRequired,
  listings: PropTypes.arrayOf(LISTING_PROP_TYPES),
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

PropertyPanel.defaultProps = {
  listings: [],
};

export default PropertyPanel;
