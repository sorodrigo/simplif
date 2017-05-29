/**
 * Constant containing all accepted collection types
 * @type {[string]}
 */
const COLLECTIONS = [
  'object',
  'array'
];

/**
 * Receives a collection and if every item in it is true, executes a callback.
 * @param collection {*} - collection containing items to be evaluated
 * @param callback {function}
 * @param flag {{ silent: boolean }} - if silent is especified nothing will be returned, otherwise
 * an array with the results of each item evaluation is returned.
 * @constructor
 */
const simplif = (collection, callback, flag = { silent: false }) => {
  let type;
  if (Array.isArray(collection)) type = 'array';
  else type = typeof collection;

  if (!COLLECTIONS.includes(type)) {
    !!collection === true && typeof callback === 'function' && callback();
  } else {
    let condition;
    if (type === 'array') {
      condition = collection.reduce((previous, current) => (previous && current), true);
    }
    if (type === 'object') {
      condition = Object.keys(collection)
        .reduce((previous, current) => collection[previous] && collection[current], true);
    }
    condition && typeof callback === 'function' && callback();
  }

  if (!flag.silent) {
    if (type === 'object') {
      const result = {};
      Object.keys(collection).forEach((key) => {
        result[key] = !!collection[key];
      });
      return result;
    }
    return collection.map(item => (!!item));
  }
  return undefined;
};

export default { simplif };
