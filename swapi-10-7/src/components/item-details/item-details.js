import React, { useEffect, useState } from 'react';
import './item-details.css';


const Record = ({label, label_key, data}) => {
  return (
    <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{data[label_key]}</span>
  </li>
  )
}


const  ItemDetails =  ({itemId, swapi, children, getData, getImage}) => {
  const [state,useState] = useState({data:{}})

  useEffect(() => {
    getData(itemId).then(data => {
      setState({data:data})
    }
  )
}, [itemId])
  const {id, name, gender, birthYear, eyeColor} = state.data;  
  const itemImg = getImage(id)


    return (
      <div className="person-details card">
        <img className="person-image" src={itemImg} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { React.Children.map(children, (item)=>{
              return React.cloneElement(
                item,
                {data: state.data}
              )
            })
            }
          </ul>
        </div>
      </div>
    )
  }

export  {ItemDetails, Record};