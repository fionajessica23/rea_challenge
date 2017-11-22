import React from 'react'

export default function PropertyCard(props) {
  var result = props.result

  return (
    <div>
      <div>{result.id}</div>
      <div>{result.mainImage}</div>
      <div>{result.agency.logo}</div>
      <div>{result.price}</div>
      <button onClick={() => { props.handleAddPropBtnCLick(result) }}>add property</button>
      <br/>
      <br/>
    </div>
  )
}
