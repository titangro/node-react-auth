import React from 'react';
import { UserProfile } from 'components/common/user-profile';

export const Profile: React.FC<Record<string, unknown>> = (props) => <UserProfile {...props} />;
