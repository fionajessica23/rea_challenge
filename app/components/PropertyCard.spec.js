import React from 'react';
import renderer from 'react-test-renderer';
import PropertyCard from './PropertyCard';

const DEFAULT_PROPS = {
  listing:
    {
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
  handleClick: () => {},
  buttonText: 'some button text',
};

it('renders Property Card correctly', () => {
  const tree = renderer
    .create(<PropertyCard {...DEFAULT_PROPS} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

