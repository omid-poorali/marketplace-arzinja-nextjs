import * as real from './real';
import * as mock from './mock';

const getApis = () => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'test') {
    return mock;
  }
  return real;
};

export const categories = getApis();
