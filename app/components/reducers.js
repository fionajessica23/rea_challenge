import { ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';
import propertyData from '../state/property.data.json';

const initialState = {
  listings: propertyData.results,
  savedListings: propertyData.saved,
};

function addProperty(state, id) {
  const { listings, savedListings } = state;
  const existingSavedListing = savedListings.filter(savedListing => savedListing.id === id)[0];

  if (!existingSavedListing) {
    const matches = listings.filter(listing => listing.id === id);
    return {
      savedListings: [...savedListings, ...matches],
    };
  }

  return { savedListings };
}

function removeProperty(state, id) {
  const { savedListings } = state;
  const matches = savedListings.filter(listing => listing.id !== id);
  return {
    savedListings: [...matches],
  };
}

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
