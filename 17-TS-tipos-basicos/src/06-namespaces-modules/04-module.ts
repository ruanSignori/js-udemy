/* eslint-disable prettier/prettier */
import _ from 'lodash'

_.mul = function(array: number[]): number {
  return array.reduce((total, currentValue) => total * currentValue, 1)
}

export default _;