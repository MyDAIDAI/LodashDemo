define(['./_baseGetTag', './isObject'], function (baseGetTag, isObject) {

  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }

    var tag = baseGetTag(value);

    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  return isFunction;
});