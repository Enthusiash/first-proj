import React from 'react'

function MaterialItem({name, image}) {
  return (
    <div className="materialItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
    </div>
  )
}

export default MaterialItem