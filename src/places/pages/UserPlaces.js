import React from 'react';

import PlaceList from '../components/PlaceList';
const DUMMY_PLACES = [
  {id:"p1" ,
         location: {
           lat:35.9965041,
           lng:8.9138238
         },
         address:"cqeqefqeggeg",
         creatorId:"u1",
         description:"vezvazvgtbtnyjkiki",
         imageUrl:"https://image.shutterstock.com/z/stock-photo-autumn-forest-nature-vivid-morning-in-colorful-forest-with-sun-rays-through-branches-of-trees-766886038.jpg",
         title:"wawedwc",
        },
         {id:"p2" ,
         location: {
           lat:35.9965041,
           lng:8.9138238
         },
         address:"cqeqefqeggeg",
         creatorId:"u1",
         description:"vezvazvgtbtnyjkiki",
         imageUrl:"https://image.shutterstock.com/z/stock-photo-autumn-forest-nature-vivid-morning-in-colorful-forest-with-sun-rays-through-branches-of-trees-766886038.jpg",
         title:"wawedwc",}
        ]

const UserPlaces = props => {
  return <PlaceList items={DUMMY_PLACES} />
};

export default UserPlaces