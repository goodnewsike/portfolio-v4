import React, { memo, useRef, useState } from 'react';
import classNames from 'classnames';
import { MenuMap, NavMap } from '../../model';
import { menuDrop, socialHandles } from '../_helpers';
import useOnClickOutside from '../_components/onClickOutside';

// eslint-disable-next-line react/display-name
const Navbar = memo(() => {
   const dropdownRef = useRef<null>(null);
   const [dropdown, setDropdown] = useState<boolean>(false);

   useOnClickOutside(dropdownRef, () => {
      if (dropdown) setDropdown(false);
   });

   return (
      <nav className="container-fluid">
         <div className="container py-4 px-0 d-flex align-items-center justify-content-between">
            <div className="logo">Logo</div>
                  <ul className={classNames("menu__dropdown d-flex align-items-center", {})}>
                     {menuDrop.map<JSX.Element>((item: MenuMap) => (
                        <li
                           key={`menuDropItem-${item.id}`}
                           onClick={() => setDropdown(false)}
                           className="text-uppercase ms-5"
                        >
                           <span className="icon"></span>
                           <span className="label">{item.label}</span>
                        </li>
                     ))}
                  </ul>
            {/* <div className="menu position-relative d-flex align-items-center">
               <div
                  ref={dropdownRef}
                  onClick={() => setDropdown((t) => !t)}
                  className={classNames("logo", { active: dropdown })}>
                  <div className="menuToggle me-3"></div>
                  <span className="text-uppercase">menu</span>
                  <ul className={classNames("menu__dropdown position-absolute", { 'd-none': !dropdown })}>
                     {menuDrop.map<JSX.Element>((item: MenuMap) => (
                        <li
                           key={`menuDropItem-${item.id}`}
                           onClick={() => setDropdown(false)}
                           className="text-uppercase"
                        >
                           <span className="icon"></span>
                           <span className="label">{item.label}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div> */}
            {/* <ul className="social__handles">
               {socialHandles.map<JSX.Element>((item: NavMap) => (
                  <a
                     key={`socialHandle-${item.id}`}
                     href={item.link}
                     target="_blank"
                     rel="noreferrer"
                     className="ms-5">
                     <li className="">
                        {item.icon}
                     </li>
                  </a>
               ))}
            </ul> */}
         </div>
      </nav>
   );
});

export default Navbar;
