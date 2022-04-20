import { atlas_mongo } from 'connections/atlas_mongo';
import { static_mongo } from 'connections/static_mongo';
import { GetDbTypePath } from 'types';

export const getDbTypePath = ({ dbType, subDbType }: GetDbTypePath) => {
  const funcs = {
    atlas_mongo,
    static_mongo,
  };

  const funcPath = `${dbType}_${subDbType}` as keyof typeof funcs;

  return funcs[funcPath] || funcs.static_mongo;
};
