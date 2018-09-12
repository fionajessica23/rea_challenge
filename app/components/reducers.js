import { ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';
import propertyData from '../state/property.data.json';

const rawInitialState = {
  listings: propertyData.results,
  savedListings: propertyData.saved,
  // savedIds: [],
};

const initialState = {
  listings: [...rawInitialState.listings, ...rawInitialState.savedListings],
  savedIds: [...rawInitialState.savedListings.map(savedListing => savedListing.id)],
};

const addProperty = (state, id) => {
  // FIXME: Only add if it doesn't exist already (with Set)
  const { savedIds } = state;
  const existingId = savedIds.includes(id);

  return {
    savedIds: !existingId ? [...savedIds, id] : savedIds,
  };
};

function removeProperty(state, id) {
  const { savedIds } = state;
  const newSavedIds = savedIds.filter(listingId => listingId !== id);

  return {
    savedIds: newSavedIds,
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
