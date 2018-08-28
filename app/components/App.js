import React from 'react';
import PropertyPanel from './PropertyPanel';
import './App.scss';
import * as actionCreators from './actionCreators';
import { connect } from 'react-redux';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddPropBtnClick = this.handleAddPropBtnClick.bind(this);
//     this.handleRemovePropBtnClick = this.handleRemovePropBtnClick.bind(this);

//     this.state = propertyData;
//   }

//   handleAddPropBtnClick(result) {
//     this.setState(addProperty(this.state, result.id));
//   }

//   handleRemovePropBtnClick(savedProp) {
//     this.setState(removeProperty(this.state, savedProp.id));
//   }

//   render() {
//     const { results, saved } = this.state;

//     return (
//       <div className="container">
//         <h1 className="header">For Sale</h1>
//         <div className="row">
//           <PropertyPanel
//             headingText="Results"
//             results={results}
//             handlePropBtnClick={this.handleAddPropBtnClick}
//             buttonText="add property"
//           />
//           <PropertyPanel
//             headingText="Saved Properties"
//             results={saved}
//             handlePropBtnClick={this.handleRemovePropBtnClick}
//             buttonText="remove property"
//           />
//         </div>
//       </div>
//     );
//   }
// }
class App extends React.Component {
  render() {
    const {
      results,
      saved,
      addSavedListing,
      removeSavedListing,
    } = this.props;

    return (
      <div className="container">
        <h1 className="header">For Sale</h1>
        <div className="row">
          <PropertyPanel
            headingText="Results"
            results={results}
            handlePropBtnClick={addSavedListing}
            buttonText="add property"
          />
          <PropertyPanel
            headingText="Saved Properties"
            results={saved}
            handlePropBtnClick={removeSavedListing}
            buttonText="remove property"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.listings,
  saved: state.savedListings,
});

const mapActionsToProps = {
  addSavedListing: actionCreators.addSavedListing,
  removeSavedListing: actionCreators.removeSavedListing,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
