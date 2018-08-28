import { ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';

export const addSavedListing = id => ({
  type: ADD_SAVED_LISTING,
  id,
});

export const removeSavedListing = id => ({
  type: REMOVE_SAVED_LISTING,
  id,
});
