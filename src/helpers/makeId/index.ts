import { uuid } from '../uuid';

export const makeId = (key: string = '', attr: string = '') => {
  return `${key}_${attr || uuid()}`;
};
