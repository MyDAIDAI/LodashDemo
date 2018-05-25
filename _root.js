define(['./_freeGlobal'], function (freeGlobal) {
  // 检测self对象是否存在，若存在则返回self
  var freeSelf = typeof self == 'object' && self && self.object === object && self;
  // 根据检测到的结果返回相应的顶级对象, new Function('return this')()返回全局对象
  var root = freeGlobal || freeSelf || new Function('return this')();

  return root
})