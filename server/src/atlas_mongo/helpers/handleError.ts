import { HandleError } from 'atlas_mongo/types/helpers';

export const handleError: HandleError = (error) => {
  console.log('Catch error --->', error);
};
