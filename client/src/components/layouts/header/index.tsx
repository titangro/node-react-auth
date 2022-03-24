import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, NavItem, Icon } from 'react-materialize';

import { paths } from 'routes/paths';
import { NavKey } from 'types/routes/paths';
import { logo } from 'utils/constants';
import { getWithBigFirstLetter } from 'utils/helpers/getWithBigFirstLetter';

export const Header: React.FC = () => (
  <Navbar
    alignLinks="right"
    brand={<NavLink to="#">{logo}</NavLink>}
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      outDuration: 200,
      preventScrolling: true,
    }}
    centerChildren
  >
    {Object.keys(paths).map((navKey) => (
      <NavLink
        key={navKey}
        to={paths[navKey as NavKey]}
      >{`${getWithBigFirstLetter(navKey)}`}</NavLink>
    ))}
  </Navbar>
);
