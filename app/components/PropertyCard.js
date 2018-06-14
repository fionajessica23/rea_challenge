import React from 'react';
import './PropertyCard.scss';


export default function PropertyCard(props) {
  const { list } = props;

  const cardDivStyle = {
    backgroundColor: `${list.agency.brandingColors.primary}`,
  };

  return (
    <div className="card-container">
      <div className="card-header" style={cardDivStyle}>
        <img src={list.agency.logo} alt="Agency logo" />
      </div>

      <div className="card-image">
        <img src={list.mainImage} alt={`Property ${list.id}`} />
      </div>

      <div className="card-footer">
        <div className="card-price-holder">{list.price}</div>
        <div className="card-button-holder">
          <button className="button-add-remove" onClick={() => { props.handlePropBtnCLick(list); }}>{props.btnText}</button>
        </div>
      </div>
    </div>
  );
}
