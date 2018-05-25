define(['./_Symbol', './_getRawTag', './_objectToString'], function (Symbol, getRawTag, objectToString) {
  var undefined;
  var nullTag = '[object null]',
      undefinedTag = '[object undefined]';

  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /**
   * 类型判断
   * @param value
   * @returns {string}
   */
  function baseGetTage(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  return baseGetTage()
})