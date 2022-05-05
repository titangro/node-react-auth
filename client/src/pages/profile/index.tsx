import React from 'react';
import { UserProfile } from 'components/common/user-profile';

export const ProfilePage: React.FC = (props) => (
  <>
    <UserProfile {...props} />
  </>
);
