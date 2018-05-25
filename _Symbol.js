define(['./root'], function (root) {
  // Built-in value references 内置值参考
  // 根据运行环境的顶级对象取值
  var Symbol = root.Symbol;

  return Symbol;
})