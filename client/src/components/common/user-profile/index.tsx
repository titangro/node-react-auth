import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import { useAuth } from 'hooks/useAuth';

export const UserProfile: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut(() => console.log('LOGOUTED'));
  };

  return (
    <Container>
      <Row>user info</Row>
      <Row>
        <Button onClick={handleLogout}>logout</Button>
      </Row>
    </Container>
  );
};
