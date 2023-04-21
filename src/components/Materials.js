import React from 'react'
import  { MaterialList }  from '../helpers/MaterialList'
import MaterialItem from '../components/MaterialItem'
import '../styles/Materials.css'

function Materials() {
  return (
    <div className="materials">
        <h1 className="materialTitle">EQUIPMENTS</h1>
        <div className="materialList">
          {MaterialList.map ((materialItem, key) => {
              return ( 
              <MaterialItem
               key={key}
               image={materialItem.image} 
               name={materialItem.name}
                />
        );
        })}</div>
    </div>
  )
}

export default Materials