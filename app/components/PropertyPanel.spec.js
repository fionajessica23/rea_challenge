import React from 'react';
import renderer from 'react-test-renderer';
import PropertyPanel from './PropertyPanel';

const defaultProps = {
  headingText: 'some heading text',
  results: [
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
    {
      price: '$300,000',
      agency: {
        brandingColors: {
          primary: '#111111',
        },
        logo: 'http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif',
      },
      id: '5',
      mainImage: 'http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg',
    },
  ],
  handlePropBtnClick: () => { },
  buttonText: 'some button text',
};

it('renders Property Panel with props correctly', () => {
  const tree = renderer
    .create(<PropertyPanel {...defaultProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it('renders Property Panel with no listing', () => {
//   const tree = renderer;
//   const propWithNoListing = { ...defaultProps, results: [] }
//     .create(<PropertyPanel {...propWithNoListing} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
