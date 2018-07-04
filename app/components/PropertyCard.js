import React from 'react';
import PropTypes from 'prop-types';
import './PropertyCard.scss';


export default function PropertyCard(props) {
  const { listing, handlePropBtnClick, buttonText } = props;

  const cardDivStyle = {
    backgroundColor: `${listing.agency.brandingColors.primary}`,
  };

  return (
    <div className="card-container">
      <div className="card-header" style={cardDivStyle}>
        <img src={listing.agency.logo} alt="Agency logo" />
      </div>

      <div className="card-image">
        <img src={listing.mainImage} alt={`Property ${listing.id}`} />
      </div>

      <div className="card-footer">
        <div className="card-price-holder">{listing.price}</div>
        <div className="card-button-holder">
          <button className="button-add-remove" onClick={() => { handlePropBtnClick(listing); }}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

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
