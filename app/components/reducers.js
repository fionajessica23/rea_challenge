import { ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';
import propertyData from '../state/property.data.json';

const rawInitialState = {
  listings: propertyData.results,
  savedListings: propertyData.saved,
};

const preparedListings = rawInitialState.listings.map(listing => ({
  ...listing,
  isSaved: false,
}));

const preparedSavedListings = rawInitialState.savedListings.map(savedListing => ({
  ...savedListing,
  isSaved: true,
}));

const initialState = {
  listings: [...preparedListings, ...preparedSavedListings],
};

function addProperty(state, id) {
  const { listings } = state;
  const choosenListing = listings.filter(listing => listing.id === id)[0];

  if (choosenListing.isSaved === false) {
    choosenListing.isSaved = true;
    return {
      listings: [...listings, ...choosenListing],
    };
  }

  return { listings };
}

function removeProperty(state, id) {
  const { listings } = state;
  const choosenListing = listings.filter(listing => listing.id === id)[0];

  if (choosenListing.isSaved === true) {
    choosenListing.isSaved = false;
    return {
      listings: [...listings, ...choosenListing],
    };
  }

  return { listings };
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
