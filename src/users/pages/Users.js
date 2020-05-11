import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {id: 'u1', name: 'walid horchani', places: 5,
    image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'}
    
    ,{id: 'u2', name: 'ZAki waki', places: 9,
    image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'}
  
  ]


  return <UsersList items = {USERS}/>
};

export default Users;
