import React, { useState } from 'react';
import  Row from '../row';
import { Record } from '../item-details';
import { StarshipList, StarshipItemDetails} from '../sw-components';




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







const StarshipPage = () => {
  const [state, setState] = useState({itemId: 1})
    const leftElement = (<StarshipList  setItemId={(id) => setState({itemId: 5})}>
    {(item) =>`${item.name} - ${item.lenght} - ${item.model}` }          
    </StarshipList>
 )


    const rightElement = (
    <StarshipItemDetails  itemid={state.itemId}>
        {/* rotation period */}
        <Record label='Model' label_key='model' />  
            {/* population */}
            <Record label='Lenght' label_key='lenght' />
                {/* diametr */}
                <Record label='Passengers' label_key='passengers' />
                    {/*  */}
                    <Record label='Cost in credits' label_key='costInCredits' />
                        {/* ... */}
                        <Record label='Crew' label_key='crew' />
    </StarshipItemDetails>
    )
               



    return <Row left={leftElement} right={rightElement} />

    
    
}

export default StarshipPage;