/**
 * 数组切片，仿照array.slice()，确保dense arrays被返回，效率更高
 * @param array
 * @param start
 * @param end
 * @returns {*}
 */
function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > end ? 0 : (start + length)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  // >>> 向右无符号移动，将一个数字变成无符号32位的整数
  // >>> 0
  // num >>> 0将一个数字变成无符号32位整数，无论num是负数还是小数
  // 由于Js的数组的最大长度为2^32 - 1，避免数组的索引超出界限
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  let index = -1
  const result = new Array(length)

  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

export default slice