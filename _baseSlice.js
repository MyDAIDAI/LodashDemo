define([], function () {
  /**
   * 返回数组slice切片，效率更高
   * @param array
   * @param start
   * @param end
   * @returns {any[]}
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : (length + start)
    }
    end = end > length ? length : end
    if (end < 0) {
      end = end + length
    }
    // >>> 右移向下取整
    length = start > end ? 0 : ((end - start) >>> 0)
    start >>>= 0

    var result = new Array(length)
    while (++index < length) {
      result[index] = array[index + start]
    }
    return result
  }
})