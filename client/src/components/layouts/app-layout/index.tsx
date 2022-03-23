import React from 'react';
import classNamesBind from 'classnames/bind';
import { Container } from 'react-materialize';

import { Header } from '../header';
import { Footer } from '../footer';

import styles from './style.scss';

const cn = classNamesBind.bind(styles);

export const AppLaout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container className={cn('app-layout')}>{children}</Container>
      <Footer />
    </>
  );
};
