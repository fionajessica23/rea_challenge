import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PropertyCard from './PropertyCard';

describe('PropertyCard', () => {
  const DEFAULT_PROPS = {
    listing: {
      price: '$650,000',
      agency: {
        brandingColors: {
          primary: '#000000',
        },
        logo: 'http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif',
      },
      id: '9',
      mainImage: 'http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg',
    },
    handleClick: () => { },
    buttonText: 'some button text',
  };

  context('when clicking the button', () => {
    it('should call handleClick with correct args', () => {
      const handleClickSpy = spy();
      const wrapper = shallow(<PropertyCard
        {...DEFAULT_PROPS}
        handleClick={handleClickSpy}
      />);
      const button = wrapper.find('button');

      button.simulate('click');

      expect(handleClickSpy.getCall(0).args).to.eql([DEFAULT_PROPS.listing.id]);
    });
  });
});
