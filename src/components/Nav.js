import React from 'react';
import classNames from 'classnames';

import {Link, NavLink} from 'react-router-dom';

const Nav = () => {
  const [isHidden, setIsHidden] = React.useState(true)
  return (
    <div className="navigation-bar w-full px-4 py-2 bg-green-500">
      <div className="container">
        <a onClick={() => setIsHidden(!isHidden)} className={classNames({
          "hover_text-blue-700 md_hidden text-white font-bold": true,
          "is-active": !isHidden
        })} href="#">{!isHidden && <span>X</span>} MENU </a>

        <ul className={classNames({
          "text-xs md_flex justify-start content-center text-white": true,
          "hidden": isHidden,
          "block": !isHidden
        })}>
          <li className="mr-2 lg_mr-4"><NavLink onClick={() => setIsHidden(true)} to={"/locations"}>Find a location</NavLink></li>
          <li className="mr-2 lg_mr-4"><NavLink onClick={() => setIsHidden(true)} to={"/appointments"}>Schedule Appointment</NavLink></li>
          <li className="mr-2 lg_mr-4"><NavLink onClick={() => setIsHidden(true)} to={"/payments"}>Make Payment</NavLink></li>
          <li className="mr-2 lg_mr-4"><NavLink onClick={() => setIsHidden(true)} to={"/careers"}>Careers</NavLink></li>
          <li className="mr-2 lg_mr-4"><NavLink onClick={() => setIsHidden(true)} to={"/about"}>About</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;