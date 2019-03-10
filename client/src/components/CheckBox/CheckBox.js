import React from 'react'

export const CheckBox = props => {
    return (
      <div className="form-check">     
        <input className="form-check-input" key={props.id} onChange={props.handleCheck} type="checkbox" checked={props.isChecked} value={props.name} /> 
        <label className="form-check-label">{props.name}</label>
      </div>
    )
}


export default CheckBox
