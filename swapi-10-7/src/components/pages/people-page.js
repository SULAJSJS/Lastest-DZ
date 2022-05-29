import  Row from '../row';
import { Record } from '../item-details';
import { PlanetItemDetails, PersonItemDetails, StarshipItemDetails } from '../sw-components';
import { PlanetList, PeopleList, StarshipList } from '../sw-components';
import {withRouter} from "react-router-dom";





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







const PeoplePage = ({itemId, history}) => {
    const leftElement = (<PeopleList  setItemId={(id) => history.push(id)}>
    {(item) =>`${item.name} - ${item.gender} - ${item.eyeColor}` }          
    </PeopleList>
 )


    const rightElement = (
    <PersonItemDetails  itemid={itemId}>
        {/* rotation period */}
        <Record label='Gender' label_key='gender' />  
            {/* population */}
            <Record label='Eye Color' label_key='eyeColor' />
                {/* diametr */}
                <Record label='Birth year' label_key='birthYear' />
    </PersonItemDetails>
    )
               



    return <Row left={leftElement} right={rightElement} />

    
    
}

export default withRouter(PeoplePage);