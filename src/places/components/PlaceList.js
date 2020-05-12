import React from 'react';
import {Link} from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

import './PlaceList.css';
const PlaceList = props => {
  if(props.items.length === 0){
    return (
      <div>
        <Card className="main-">
          <h2> No Places found!</h2>
          <Link to="/places/new">
            <button>add place</button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <ul className="place-list">
      {props.items.map(place => {
        return (
        <PlaceItem  key={place.id} id={place.id} 
        coordinate={place.location}
         address={place.address} 
         creatorId={place.cratorId}
         description={place.description}
         image={place.imageUrl}
         title={place.title}
          />)
      })}
    </ul>
  )
};

export default PlaceList;