import React, { useState, useEffect } from 'react';
import { Consumer } from '../swapi-context';

import './item-list.css';



// export default class ItemList extends Component {

//   render() {
//     return (
//       <ul className="item-list list-group">
//         <li className="list-group-item">
//           Luke Skywalker
//         </li>
//         <li className="list-group-item">
//           Darth Vader
//         </li>
//         <li className="list-group-item">
//           R2-D2
//         </li>
//       </ul>
//     );
//   }
// }


const ItemList = ({setItemId, getData, children}) => {
  const [state, setState] = useState({data: []})  
  // const swapi = useContext(Consumer);

  useEffect (
   () => {getData().then(data =>setState({data: data}))},
   []
  )

  const content = state.data.map(item => {
    return (
      <li key={item.id} onClick={() => setItemId(item.id)} className="list-group-item">
      {children(item)}
    </li>
    )
  })

  return (

    <ul className="item-list list-group">
      {content}
  </ul>

  );
}

export default ItemList;