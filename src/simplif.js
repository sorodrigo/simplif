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
const Simplif = (collection, callback, flag) => {
  let type;
  if (Array.isArray(collection)) type = 'array';
  else type = typeof collection;

  if (!COLLECTIONS.includes(type)) {
    !!collection === true && typeof callback === 'function' && callback();
  } else {
    const condition = collection.reduce((previous, current) => (previous && current), true);
    condition && typeof callback === 'function' && callback();
  }

  if (!flag.silent) {
    if (type === 'object') return Object.keys(collection).map(key => ({ [key]: !!collection[key] }));
    return collection.map(item => (!!item));
  }
  return undefined;
};

export default Simplif;
