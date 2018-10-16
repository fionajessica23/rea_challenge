import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './App';

jest.mock('./PropertyPanel.js', () => 'PropertyPanel');

const DEFAULT_PROPS = {
  listings: [
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
  savedIds: ['5'],
  addSavedListing: () => { },
  removeSavedListing: () => { },
};

it('renders App with listings', () => {
  const tree = renderer
    .create(<App {...DEFAULT_PROPS} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders App with saved properties id equal to 9', () => {
  const propWithSavedIds = { ...DEFAULT_PROPS, savedIds: ['9'] };
  const tree = renderer
    .create(<App {...propWithSavedIds} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders App with no saved listings', () => {
  const propWithNoSavedIds = { ...DEFAULT_PROPS, savedIds: [] };
  const tree = renderer
    .create(<App {...propWithNoSavedIds} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
