import React from 'react';

import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className="main-header">
      {/** children is what we pass in MainHeader  */}
      {props.children}
    </header>
  );

};


export default MainHeader;