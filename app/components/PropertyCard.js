import React from 'react'


export default function PropertyCard(props) {
  var list = props.list

  return (
    <div>
      <div>{list.id}</div>
      <div>{list.mainImage}</div>
      <div>{list.agency.logo}</div>
      <div>{list.price}</div>
      <button onClick={() => { props.handlePropBtnCLick(list) }}>{props.btnText}</button>
      <br/>
      <br/>
    </div>
  )
}
