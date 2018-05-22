/**
 * 返回一个array中没有'false','null','0','""','undefined','NaN'的数组
 * @param array
 * @returns {Array}
 */
function compact(array) {
  let resIndex = 0
  const result = []
  if (!array) {
    return result
  }
  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}
export default compact