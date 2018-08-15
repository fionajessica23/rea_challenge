import { INCREMENT_COUNT, ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';
// import propertyData from '../state/property.data.json';

const initialState = {
  // listings: propertyData.results,
  // savedListings: propertyData.saved,
  count: 0,
};

export default (state = initialState, action) => {
  const actions = {
    [INCREMENT_COUNT]: {
      count: state.count + 1,
      // slide: state.slide < initialState.numberOfSlide ? state.slide + 1 : state.slide,
    },
    [ADD_SAVED_LISTING]: {
      // slide: state.slide > initialState.slide ? state.slide - 1 : state.slide,
    },
    [REMOVE_SAVED_LISTING]: {
      // slide: state.slide > initialState.slide ? state.slide - 1 : state.slide,
    },
  };

  return {
    ...state,
    ...actions[action.type],
  };
};
