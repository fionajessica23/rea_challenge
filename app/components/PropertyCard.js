import React from 'react';
import PropTypes from 'prop-types';
import { LISTING_PROP_TYPES } from './propTypes';
import styles from './PropertyCard.scss';

const PropertyCard = ({ listing, handleClick, buttonText }) => {
  const cardDivStyle = {
    backgroundColor: `${listing.agency.brandingColors.primary}`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} style={cardDivStyle}>
        <img src={listing.agency.logo} alt="Agency logo" />
      </div>
      <img className={styles.image} src={listing.mainImage} alt={`Property ${listing.id}`} />
      <div className={styles.footer}>
        <div className={styles.priceHolder}>{listing.price}</div>
        <button
          className={styles.buttonAddRemove}
          onClick={() => handleClick(listing.id)}
        >{buttonText}
        </button>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  listing: LISTING_PROP_TYPES.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default PropertyCard;
