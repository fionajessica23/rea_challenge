import PropTypes from 'prop-types';

const LISTING_PROP_TYPES = PropTypes.shape({
  price: PropTypes.string.isRequired,
  agency: PropTypes.shape({
    brandingColors: PropTypes.shape({
      primary: PropTypes.string.isRequired,
    }).isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
});

export default LISTING_PROP_TYPES;
