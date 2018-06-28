const expect = require('chai').expect;

const StateFunction = require('../app/state/state-functions');
const propertyData = require('../app/state/property.data.json');


describe('Original state', () => {
  it('The original saved property list contain 1 property', () => {
    expect(propertyData.saved).to.have.lengthOf(1);
  });
  it('Property Id:4 is in the saved property list', () => {
    expect(propertyData.saved[0].id).to.equal('4');
  });
  it('Property Id:1 should not in the saved property list', () => {
    expect(propertyData.saved[0].id).to.not.equal('1');
  });
});

describe('State Function', () => {
  describe('#addProperty', () => {
    it('Add Property Id:3 from results property list, it should add it to the saved list', () => {
      expect(StateFunction.addProperty(propertyData, '3')).to.have.property('saved').with.lengthOf(2)
    })
    it('Add Property Id:3 from results property list, it should not be able to add it again to the saved list', () => {
      expect(StateFunction.addProperty(propertyData, '3')).to.have.property('saved').with.lengthOf(2)
    })
  });

  describe('#removeProperty', () => {
    it('Remove Property Id:1 from saved property list, it should not do anything since the property Id:1 is not in the saved list', () => {
      expect(StateFunction.removeProperty(propertyData, '1')).to.have.property('saved').with.lengthOf(2)
    })
    it('Remove Property Id:4 from saved property list, the list should now contain 1 property', () => {
      expect(StateFunction.removeProperty(propertyData, '4')).to.have.property('saved').with.lengthOf(1)
    })
  });
});
