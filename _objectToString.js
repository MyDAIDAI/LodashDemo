 define([], function () {
   var objectProto = Object.prototype;
   var nativeObjectToString = objectProto.toString;

   /**
    * 使用`Object.prototype.toString`转换value
    * @param value
    * @returns {string}
    */
   function objectToString(value) {
     return nativeObjectToString.call(value);
   }
   return objectToString;
 })