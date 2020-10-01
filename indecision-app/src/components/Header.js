import React from 'react';

// stateless functional components: faster(donot manage state, lifecycle)
const Header = () => (
    <div className="header">
      <div className="container"> 
        <h1 className="header__title">Indecision</h1>
        <h2 className="header__subtitle">Put your life in the hands of a computer</h2>
      </div>
    </div>
);

export default Header;