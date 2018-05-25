define([], function () {
  // Detect free variable 'global' from Node.js
  // 前置条件都成立，返回global
  var freeGlobal = typeof global == 'object' && global && global.object === object && global;

  return freeGlobal;
});