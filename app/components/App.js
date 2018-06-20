import React from 'react';
import PropertyPanel from './PropertyPanel';
import PropertyCard from './PropertyCard';
import './App.scss';
import propertyData from './property.data.json';

import {
  addProperty,
  removeProperty,
} from './state-functions';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddPropBtnCLick = this.handleAddPropBtnCLick.bind(this);
    this.handleRemovePropBtnCLick = this.handleRemovePropBtnCLick.bind(this);

    this.state = propertyData;
  }

  handleAddPropBtnCLick(result) {
    this.setState(addProperty(this.state, result.id));
  }

  handleRemovePropBtnCLick(savedProp) {
    this.setState(removeProperty(this.state, savedProp.id));
  }

  render() {
    const { results, saved } = this.state;

    return (
      <div className="container">
        <h1 className="header">For Sale</h1>
        <div className="row">
          <PropertyPanel
            headingText="Results"
            results={results}
            handlePropBtnCLick={this.handleAddPropBtnCLick}
            buttonText="add property"
          />
          <PropertyPanel
            headingText="Saved Properties"
            results={saved}
            handlePropBtnCLick={this.handleRemovePropBtnCLick}
            buttonText="remove property"
          />
        </div>
      </div>
    );
  }
}
