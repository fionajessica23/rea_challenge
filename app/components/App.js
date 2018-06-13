import React from 'react'
import PropertyCard from './PropertyCard'
import './App.scss'
import propertyData from './property.data.json'

import {
  addProperty,
  removeProperty
} from './state-functions';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddPropBtnCLick = this.handleAddPropBtnCLick.bind(this)
    this.handleRemovePropBtnCLick = this.handleRemovePropBtnCLick.bind(this)

    this.state = propertyData;
  }

  handleAddPropBtnCLick(result) {
    this.setState(addProperty(this.state, result.id))
  }

  handleRemovePropBtnCLick(savedProp) {
    this.setState(removeProperty(this.state, savedProp.id));
  }

  render() {
    const { results, saved } = this.state

    return (
      <div className='container'>
        <h1 className='header'>For Sale</h1>
        <div className='row'>
          <div className='col-md-6 card-list-container'>
            <h2 className='sub-heading-text'>Results</h2>
            <ul>
              {results.map((result) => {
                return <li key={result.id}>
                  <PropertyCard list={result} handlePropBtnCLick={this.handleAddPropBtnCLick} btnText='add property' />
                </li>
              })}
            </ul>
          </div>

          <div className='col-md-6 card-list-container'>
            <h2 className='sub-heading-text'>Saved Properties</h2>
            <ul>
              {saved.map((savedProp) => {
                return <li key={savedProp.id}>
                  <PropertyCard list={savedProp} handlePropBtnCLick={this.handleRemovePropBtnCLick} btnText='remove property' />
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
