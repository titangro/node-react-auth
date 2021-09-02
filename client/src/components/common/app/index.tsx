import React from 'react';
import { AppLaout } from 'components/layouts/app-layout';

export const App: React.FC = () => {
  console.log('App -->');

  // !TODO: add layout
  return (
    <AppLaout>
      test
      {/* <LoginForm />
      <UserInfo /> */}
    </AppLaout>
  );
};
