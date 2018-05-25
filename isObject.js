// 重点判断null不等于Object
// type Array === 'function'
define([], function () {
  /**
   * 判断值是否为object(e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   * @param value
   * @returns {boolean}
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
  }
  return isObject;
})