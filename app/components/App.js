import React from 'react';
import PropTypes from 'prop-types';
import PropertyPanel from './PropertyPanel';
import './App.scss';
import * as actionCreators from './actionCreators';
import { connect } from 'react-redux';

function App(props) {
  const { listings, addSavedListing, removeSavedListing } = props;

  const results = listings.filter(listing => listing.isSaved === false);
  const saved = listings.filter(listing => listing.isSaved === true);

  return (
    <div className="container">
      <h1 className="header">For Sale</h1>
      <div className="row">
        <PropertyPanel
          headingText="Results"
          results={results}
          handlePropBtnClick={addSavedListing}
          buttonText="add property"
        />
        <PropertyPanel
          headingText="Saved Properties"
          results={saved}
          handlePropBtnClick={removeSavedListing}
          buttonText="remove property"
        />
      </div>
    </div>
  );
}

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
  addSavedListing: PropTypes.func.isRequired,
  removeSavedListing: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listings: state.listings,
});

const mapActionsToProps = {
  addSavedListing: actionCreators.addSavedListing,
  removeSavedListing: actionCreators.removeSavedListing,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
