import React from 'react';
import PropTypes from 'prop-types';
import styles from './PropertyCard.scss';

const PropertyCard = ({ listing, handlePropBtnClick, buttonText }) => {
  const cardDivStyle = {
    backgroundColor: `${listing.agency.brandingColors.primary}`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} style={cardDivStyle}>
        <img src={listing.agency.logo} alt="Agency logo" />
      </div>

      <div className={styles.image}>
        <img src={listing.mainImage} alt={`Property ${listing.id}`} />
      </div>

      <div className={styles.footer}>
        <div className={styles.priceHolder}>{listing.price}</div>
        <button className={styles.buttonAddRemove} onClick={() => { handlePropBtnClick(listing.id); }}>{buttonText}</button> 
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  listing: PropTypes.shape({
    price: PropTypes.string.isRequired,
    agency: PropTypes.shape({
      brandingColors: PropTypes.shape({
        primary: PropTypes.string.isRequired,
      }).isRequired,
      logo: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
  }).isRequired,
  handlePropBtnClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default PropertyCard;
