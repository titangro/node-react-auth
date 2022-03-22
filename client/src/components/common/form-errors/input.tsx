import React from 'react';
import { Row, Collection, CollectionItem } from 'react-materialize';
import classNamesBind from 'classnames/bind';

import { FormErrorsProps, ErrorsList } from './types';
import style from './style.scss';

const cn = classNamesBind.bind(style);

export const FormErrors: React.FC<FormErrorsProps> = ({ errors }) => {
  const errorsList: ErrorsList = Object.entries(errors);

  return (
    <Row>
      <Collection>
        {errorsList.map(([errorKey, error]) => (
          <CollectionItem key={errorKey} className={cn('error')}>
            Field &quot;
            {errorKey}
            &quot; : {error.message}
          </CollectionItem>
        ))}
      </Collection>
    </Row>
  );
};
