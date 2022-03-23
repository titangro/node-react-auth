import React from 'react';
import { Footer as FooterLayout } from 'react-materialize';
import { NavLink } from 'react-router-dom';

import paths from 'routes/paths';
import { NavKey } from 'types/routes/paths';
import { logo } from 'utils/constants';

export const Footer: React.FC = () => {
  const links = (
    <ul>
      {Object.keys(paths).map((navKey) => (
        <li>
          <NavLink
            className="grey-text text-lighten-3"
            to={paths[navKey as NavKey]}
          >{`${navKey[0].toUpperCase()}${navKey.slice(1)}`}</NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <FooterLayout
      copyrights="2022"
      links={links}
      moreLinks={
        <NavLink className="grey-text text-lighten-4 right" to="#">
          More Links
        </NavLink>
      }
    >
      <NavLink to="#">
        <h5 className="white-text">{logo}</h5>
      </NavLink>
      <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
      </p>
    </FooterLayout>
  );
};
