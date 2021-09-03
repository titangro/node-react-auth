import React from 'react';
import classNamesBind from 'classnames/bind';

import { Container } from 'react-materialize';

import styles from './style.scss';

const cn = classNamesBind.bind(styles);

export const AppLaout: React.FC = ({ children }) => {
  console.log('App layout -->');

  return (
    <Container className={cn('app-layout')}>
      {children}
    </Container>
  );
};
