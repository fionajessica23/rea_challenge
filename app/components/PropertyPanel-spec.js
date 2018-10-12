import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PropertyPanel from './PropertyPanel';
import PropertyCard from './PropertyCard';

describe('PropertyPanel', () => {
  const DEFAULT_PROPS = {
    headingText: 'some heading text',
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
    handleClick: () => { },
    buttonText: 'some button text',
  };

  it('should call handleClick on click of the button', () => {
    const handleClickSpy = spy();
    const wrapper = shallow(<PropertyPanel
      {...DEFAULT_PROPS}
      handleClick={handleClickSpy}
    />);
    const handleClickProp = wrapper.find(PropertyCard).prop('handleClick');

    handleClickProp();

    expect(handleClickSpy.calledOnce).to.equal(true);
  });
});
