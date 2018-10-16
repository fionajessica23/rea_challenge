import { ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';
import propertyData from '../state/property.data.json';

const rawInitialState = {
  listings: propertyData.results,
  savedListings: propertyData.saved,
};

const initialState = {
  listings: [...rawInitialState.listings, ...rawInitialState.savedListings],
  savedIds: [...rawInitialState.savedListings.map(savedListing => savedListing.id)],
};

const addProperty = ({ savedIds }, id) => {
  const uniqueSavedIds = new Set([...savedIds, id]); // Convert to set to handle duplicates

  return {
    savedIds: [...uniqueSavedIds], // Need to spread this to convert from Set
  };
};

const removeProperty = ({ savedIds }, id) => {
  const newSavedIds = savedIds.filter(listingId => listingId !== id);

  return {
    savedIds: newSavedIds,
  };
};

export default (state = initialState, action) => {
  const actions = {
    [ADD_SAVED_LISTING]: () => addProperty(state, action.id),
    [REMOVE_SAVED_LISTING]: () => removeProperty(state, action.id),
    default: () => undefined,
  };
  const updatedState = (actions[action.type] || actions.default)();

  return {
    ...state,
    ...updatedState,
  };
};
