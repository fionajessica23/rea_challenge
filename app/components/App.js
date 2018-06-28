import React from 'react';
import PropertyPanel from './PropertyPanel';
import './App.scss';
import propertyData from './../state/property.data.json';

import {
  addProperty,
  removeProperty,
} from './../state/state-functions';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddPropBtnClick = this.handleAddPropBtnClick.bind(this);
    this.handleRemovePropBtnClick = this.handleRemovePropBtnClick.bind(this);

    this.state = propertyData;
  }

  handleAddPropBtnClick(result) {
    this.setState(addProperty(this.state, result.id));
  }

  handleRemovePropBtnClick(savedProp) {
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
            handlePropBtnClick={this.handleAddPropBtnClick}
            buttonText="add property"
          />
          <PropertyPanel
            headingText="Saved Properties"
            results={saved}
            handlePropBtnClick={this.handleRemovePropBtnClick}
            buttonText="remove property"
          />
        </div>
      </div>
    );
  }
}
