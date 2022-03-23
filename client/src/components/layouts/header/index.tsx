import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, NavItem, Icon } from 'react-materialize';

import paths from 'routes/paths';
import { NavKey } from 'types/routes/paths';
import { logo } from 'utils/constants';

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
      <NavItem
        href={paths[navKey as NavKey]}
      >{`${navKey[0].toUpperCase()}${navKey.slice(1)}`}</NavItem>
    ))}
  </Navbar>
);
