import slice from './slice.mjs'

/**
 * 返回一个数组，数组项是将array以size为长度的分组，若最后不能整除，则直接放入
 * @param array
 * @param size
 * @returns {*}
 */
function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))
  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}
export default chunk