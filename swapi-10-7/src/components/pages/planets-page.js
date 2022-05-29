import React, { useState } from 'react';
import  Row from '../row';
import { Record } from '../item-details';
import { PlanetList,PlanetItemDetails} from '../sw-components';




// function withSwapi(Component) {
//     return (<Consumer> 
//              {
//                 (swapi) => {
//                     return <Component swapi = {swapi} />
//                 }
//             }
// </Consumer> )
    
// }


// const withSwapi = () => {
//     return class extends React.Component {

//     }
// }


// const withSwapi = (ItemList) => {
//     return class extends React.Component {
//         render() {
//             return (<Consumer> 
//                 {
//                    (swapi) => {
//                        return <ItemList {...this.props}  swapi = {swapi} />
//                    }
//                }
//    </Consumer> )
//         }
//     }
// }







const PlanetPage = () => {
  const [state, setState] = useState({itemId: 1})
    const leftElement = (<PlanetList  setItemId={(id) => setState({itemId: 2})}>
    {(item) =>`${item.name} - ${item.population} - ${item.diameter}` }          
    </PlanetList>
 )


    const rightElement = (
    <PlanetItemDetails  itemid={state.itemId}>
        {/* rotation period */}
        <Record label='Population' label_key='population' />  
            {/* population */}
            <Record label='Rotation Period' label_key='rotationPeriod' />
                {/* diametr */}
                <Record label='Diameter' label_key='diameter' />
    </PlanetItemDetails>
    )
               



    return <Row left={leftElement} right={rightElement} />

    
    
}

export default PlanetPage;