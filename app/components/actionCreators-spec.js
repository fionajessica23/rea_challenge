import { expect } from 'chai';
import { addSavedListing, removeSavedListing } from './actionCreators';
import { ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';

describe('actionCreators', () => {
  it('should return correct object for addSavedListing given the id', () => {
    const listingId = '2';

    const addSavedListingAction = addSavedListing(listingId);

    expect(addSavedListingAction).to.eql({ type: ADD_SAVED_LISTING, id: listingId });
  });

  it('should return correct object for removeSavedListing given the id', () => {
    const listingId = '5';

    const removeSavedListingAction = removeSavedListing(listingId);

    expect(removeSavedListingAction).to.eql({ type: REMOVE_SAVED_LISTING, id: listingId });
  });
});
