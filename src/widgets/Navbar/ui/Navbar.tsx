import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      {/*<button onClick={toggleTheme}>toggle</button>*/}
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
    </div>
  );
};