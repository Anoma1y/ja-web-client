import React from 'react';
import Logout from './components/Logout';
import { Link } from 'react-router-dom';
import './style.scss';

export default () => {
  return (
    <div className={'header'}>

      {/* HEADER CONTENT */}
      <div className={'header-container header-content'}>
        {/* HEADER CONTENT - LOGO */}
        <div className={'header-logo'}>
          <Link className={'logo'} to={'/dashboard/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="48" viewBox="0 0 121 48">
              <g fill="none" fillRule="evenodd">
                <path fill="#019BE1" d="M26.233 17.125l4.753-2.598v11.881a7.131 7.131 0 0 1-9.505 6.722 7.131 7.131 0 0 1-4.753-6.722v.222l4.753-2.598v2.376a2.376 2.376 0 1 0 4.752 0v-9.283z" />
                <path fill="#019BE1" d="M6.13 31.141c-3.517-8.77-.01-19.012 8.51-23.735 8.521-4.723 19.065-2.27 24.64 5.36l4.208-2.333C36.618.513 23.167-2.754 12.336 3.25 1.506 9.253-2.852 22.391 1.922 33.474l4.208-2.333zM41.584 16.923c3.517 8.77.01 19.012-8.51 23.735-8.521 4.723-19.065 2.27-24.64-5.36L4.226 37.63c6.87 9.92 20.321 13.188 31.151 7.184 10.83-6.004 15.189-19.142 10.415-30.225l-4.208 2.333z" />
                <path fill="#1F3C7C" d="M66.55 12.213l4.753.016v14.257a7.13 7.13 0 0 1-9.505 6.722 7.13 7.13 0 0 1-4.753-6.722v-2.391l4.753.015v2.376a2.376 2.376 0 0 0 4.752 0V12.213zM113.178 30.116a3.564 3.564 0 1 1 0-7.128 3.564 3.564 0 0 1 0 7.128m0-10.693a7.129 7.129 0 1 0 0 14.258 7.129 7.129 0 0 0 0-14.258M82.526 26.793c-.42.168-.785.28-1.457.42l-1.429.308c-1.428.336-2.044.812-2.044 1.625 0 .896.756 1.428 2.016 1.428 1.317 0 2.27-.56 2.914-1.708v-2.073zm0 6.807V32.17c-1.317 1.092-2.27 1.429-3.866 1.429-2.997 0-4.986-1.681-4.986-4.23 0-2.549 1.597-3.865 5.378-4.482l2.157-.364c.896-.14 1.204-.364 1.204-.924 0-.757-.783-1.233-2.072-1.233-1.457 0-2.241.504-2.41 1.597h-3.557c.253-3.11 2.185-4.622 5.995-4.622 2.044 0 3.613.476 4.677 1.4.98.869 1.345 1.961 1.345 3.95V33.6h-3.865zM92.905 26.552c0 2.178 1.319 3.682 3.282 3.682 2.025 0 3.283-1.442 3.283-3.743 0-2.179-1.32-3.62-3.283-3.62-1.963 0-3.282 1.472-3.282 3.681zm10.768-7.21v13.806c0 2.424-.337 3.498-1.38 4.51-1.35 1.32-3.375 1.995-5.922 1.995-4.141 0-6.627-1.688-6.933-4.725h4.51c.306.92 1.166 1.38 2.608 1.38.859 0 1.595-.214 2.055-.583.644-.521.829-1.073.829-2.577v-.981c-1.32 1.196-2.332 1.595-3.989 1.595-3.896 0-6.688-2.976-6.688-7.149 0-4.172 2.822-7.27 6.565-7.27 1.933 0 3.314.735 4.326 2.3v-2.3h4.02z" />
              </g>
            </svg>
          </Link>
        </div>

        {/* HEADER CONTENT - ASIDE MENU */}
        <div className={'header-aside'}>
          <div className={'header-aside_logout'}>
            <Logout />
          </div>
        </div>

      </div>

    </div>
  );
};

