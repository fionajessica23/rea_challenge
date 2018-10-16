import { expect } from 'chai';
import reducer from './reducers';
import { ADD_SAVED_LISTING, REMOVE_SAVED_LISTING } from './actions';

describe('reducer', () => {
  it('should handle adding ids', () => {
    const initialState = { savedIds: ['4', '5', '6'] };
    const id = '7';
    const action = { type: ADD_SAVED_LISTING, id };

    const updatedState = reducer(initialState, action);

    expect(updatedState.savedIds).to.eql(['4', '5', '6', '7']);
  });

  it('should handle adding duplicate ids', () => {
    const initialState = { savedIds: ['4', '5', '6'] };
    const id = '5';
    const action = { type: ADD_SAVED_LISTING, id };

    const updatedState = reducer(initialState, action);

    expect(updatedState.savedIds).to.eql(['4', '5', '6']);
  });

  it('should remove the id from savedIds', () => {
    const initialState = { savedIds: ['1', '2', '3'] };
    const id = '1';
    const action = { type: REMOVE_SAVED_LISTING, id };

    const updatedState = reducer(initialState, action);

    expect(updatedState.savedIds).to.eql(['2', '3']);
  });

  it('should handle removing id that is not in savedIds', () => {
    const initialState = { savedIds: ['1', '2', '3'] };
    const id = '4';
    const action = { type: REMOVE_SAVED_LISTING, id };

    const updatedState = reducer(initialState, action);

    expect(updatedState.savedIds).to.eql(['1', '2', '3']);
  });
});
