var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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
var simplif = function simplif(collection, callback) {
  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { silent: false };

  var type = void 0;
  if (Array.isArray(collection)) type = 'array';else type = typeof collection === 'undefined' ? 'undefined' : _typeof(collection);

  if (!COLLECTIONS.includes(type)) {
    !!collection === true && typeof callback === 'function' && callback();
  } else {
    var condition = void 0;
    if (type === 'array') {
      condition = collection.reduce(function (previous, current) {
        return previous && current;
      }, true);
    }
    if (type === 'object') {
      condition = Object.keys(collection).reduce(function (previous, current) {
        return collection[previous] && collection[current];
      }, true);
    }
    condition && typeof callback === 'function' && callback();
  }

  if (!flag.silent) {
    if (type === 'object') {
      var result = {};
      Object.keys(collection).forEach(function (key) {
        result[key] = !!collection[key];
      });
      return result;
    }
    return collection.map(function (item) {
      return !!item;
    });
  }
  return undefined;
};

var simplif$1 = { simplif: simplif };

export default simplif$1;
//# sourceMappingURL=simplif.mjs.map
