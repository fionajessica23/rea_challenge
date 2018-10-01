import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PropertyPanel from './PropertyPanel';
import { LISTING_PROP_TYPES } from './propTypes';
import styles from './App.scss';
import * as actionCreators from './actionCreators';

const App = ({ listings, savedIds, addSavedListing, removeSavedListing }) => {
  const savedProperties = listings.filter(listing => savedIds.includes(listing.id));

  return (
    <div>
      <h1 className={styles.header}>For Sale</h1>
      <div className={styles.panelsWrapper}>
        <PropertyPanel
          headingText="Available"
          listings={listings}
          handlePropBtnClick={addSavedListing}
          buttonText="save"
        />
        <PropertyPanel
          headingText="Saved Properties"
          listings={savedProperties}
          handlePropBtnClick={removeSavedListing}
          buttonText="remove"
        />
      </div>
    </div>
  );
};

App.propTypes = {
  listings: PropTypes.arrayOf(LISTING_PROP_TYPES).isRequired,
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
