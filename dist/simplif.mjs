var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/**
 * Constant containing all accepted collection types
 * @type {[string]}
 */
var COLLECTIONS = ['object', 'array'];

/**
 * Receives a collection and if every item in it is true, executes a callback.
 * @param collection {*} - collection containing items to be evaluated
 * @param callback {function}
 * @param flag {{ silent: boolean }} - if silent is especified nothing will be returned, otherwise
 * an array with the results of each item evaluation is returned.
 * @constructor
 */
var Simplif = function Simplif(collection, callback, flag) {
  var type = void 0;
  if (Array.isArray(collection)) type = 'array';else type = typeof collection === 'undefined' ? 'undefined' : _typeof(collection);

  if (!COLLECTIONS.includes(type)) {
    !!collection === true && typeof callback === 'function' && callback();
  } else {
    var condition = collection.reduce(function (previous, current) {
      return previous && current;
    }, true);
    condition && typeof callback === 'function' && callback();
  }

  if (!flag.silent) {
    if (type === 'object') return Object.keys(collection).map(function (key) {
      return defineProperty({}, key, !!collection[key]);
    });
    return collection.map(function (item) {
      return !!item;
    });
  }
  return undefined;
};

export default Simplif;
//# sourceMappingURL=simplif.mjs.map
