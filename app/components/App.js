import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PropertyPanel from './PropertyPanel';
import './App.scss';
import * as actionCreators from './actionCreators';

const App = ({ listings, savedIds, addSavedListing, removeSavedListing }) => {
  const savedProperties = listings.filter(listing => savedIds.includes(listing.id));

  return (
    <div className="container">
      <h1 className="header">For Sale</h1>
      <div className="row">
        <PropertyPanel
          headingText="Results"
          results={listings}
          handlePropBtnClick={addSavedListing}
          buttonText="add property"
        />
        <PropertyPanel
          headingText="Saved Properties"
          results={savedProperties}
          handlePropBtnClick={removeSavedListing}
          buttonText="remove property"
        />
      </div>
    </div>
  );
};

App.propTypes = {
  listings: PropTypes.arrayOf(PropTypes.shape({
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
  savedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  addSavedListing: PropTypes.func.isRequired,
  removeSavedListing: PropTypes.func.isRequired,
};

const mapStateToProps = ({ listings, savedIds }) => ({
  listings,
  savedIds,
});

const mapActionsToProps = {
  addSavedListing: actionCreators.addSavedListing,
  removeSavedListing: actionCreators.removeSavedListing,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
