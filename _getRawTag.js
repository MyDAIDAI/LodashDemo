define(['./_Symbol', function (Symbol) {

  var undefined;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /**
   * 获取js原生数据类型函数，忽略`Symbol.toStringTag`的值
   * 原生类型检测：Object.prototype.toString(value)
   * 自定义类型检测：在构造函数中添加Symol.toStringTag，然后通过Object.prototype.toString.call(value)检测
   * @param value
   * @returns {string}
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag)
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {
    }

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  return getRawTag;
}])