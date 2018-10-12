import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { App } from './App';
import PropertyPanel from './PropertyPanel';

describe('App', () => {
  const DEFAULT_PROPS = {
    listings: [{
      price: '$650,000',
      agency: {
        brandingColors: {
          primary: '#000000',
        },
        logo: 'http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif',
      },
      id: '9',
      mainImage: 'http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg',
    }],
    savedIds: ['6', '8'],
    addSavedListing: () => { },
    removeSavedListing: () => { },
  };

  it('should pass the correct click action to each respective PropertyPanel', () => {
    const addSavedListingSpy = spy();
    const removeSavedListingSpy = spy();
    const wrapper = shallow(<App
      {...DEFAULT_PROPS}
      addSavedListing={addSavedListingSpy}
      removeSavedListing={removeSavedListingSpy}
    />);
    const propertyPanels = wrapper.find(PropertyPanel);
    const availableHandleClickProp = propertyPanels.at(0).prop('handleClick');
    const savedHandleClickProp = propertyPanels.at(1).prop('handleClick');

    availableHandleClickProp();
    expect(addSavedListingSpy.calledOnce).to.equal(true);

    savedHandleClickProp();
    expect(removeSavedListingSpy.calledOnce).to.equal(true);
  });
});
