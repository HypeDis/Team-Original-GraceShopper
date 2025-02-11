import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginLink from './LoginLink';
import cartImage from './cartImage';

import {
  NAV_LINKS_CONTAINER,
  NAV_LINK,
  PRODUCT_MODAL,
  NAV_ACCOUNT_LINKS_CONTAINER,
} from '../styles';

const Navbar = () => {
  const navbarButtons = ['account', 'orders', 'cart'];

  return (
    <div id="nav-links-container" style={NAV_LINKS_CONTAINER}>
      <div id="nav-products-container">
        {/* modals */}
        <NavLink to="/products" style={PRODUCT_MODAL}>
          <button>Products</button>
        </NavLink>
        <NavLink to="/brands" style={PRODUCT_MODAL}>
          <button>Brands</button>
        </NavLink>
      </div>
      <div id="nav-account-links-container" style={NAV_ACCOUNT_LINKS_CONTAINER}>
        {/* login status should come from redux */}

        <LoginLink />
        {navbarButtons.map(button => {
          if (button === 'cart') {
            return (
              <NavLink key={button} to={`/${button}`} style={NAV_LINK}>
                <button>
                  {cartImage} {button[0].toUpperCase()}
                  {button.slice(1)}
                  {/* Need to add number items in cart */}
                </button>
              </NavLink>
            );
          } else {
            return (
              <NavLink key={button} to={`/${button}`} style={NAV_LINK}>
                <button>
                  {button[0].toUpperCase()}
                  {button.slice(1)}
                </button>
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;
