import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Nav = () => (
  <div className="navigation-bar w-full px-4 py-2 bg-green-500">
    <div className="container">
      <ul className="text-xs flex justify-start content-center text-white">
        <li className="mr-4"><NavLink to={"/locations"}>Find a location</NavLink></li>
        <li className="mr-4"><NavLink to={"/appointments"}>Schedule Appointment</NavLink></li>
        <li className="mr-4"><NavLink to={"/payments"}>Make Payment</NavLink></li>
        <li className="mr-4"><NavLink to={"/careers"}>Careers</NavLink></li>
        <li className="mr-4"><NavLink to={"/about"}>About</NavLink></li>
      </ul>
    </div>
  </div>
);

export default Nav;