import React from 'react';

import { Container, Button } from 'react-materialize';

export const AppLaout: React.FC = ({ children }) => (
  <Container>
    <Button>Button</Button>
    {children}
  </Container>
);
