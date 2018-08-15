import { INCREMENT_COUNT, ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';

export const incrementCount = () => ({
  type: INCREMENT_COUNT,
});

export const addSavedListing = () => ({
  type: ADD_SAVED_LISTING,
});

export const removeSavedListing = () => ({
  type: REMOVE_SAVED_LISTING,
});
