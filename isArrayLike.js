define(['./isFunction', './isLength'], function (isFunction, isLength) {

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   * @param value
   * @returns {boolean}
   */
  function isArrayLike(value) {
    return value != null && isLength(value) && !isFunction(value);
  }
  return isArrayLike;
});