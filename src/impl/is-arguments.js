////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { SYMBOL_ITERATOR_EXISTS } from '../feature-detect';

/**
 * Tests whether a value is an arguments object of a function.
 *
 * @param {any} value
 *     the value to be checked.
 * @return {boolean}
 *     {@code true} if the value is an arguments object of a function;
 *     {@code false} otherwise.
 * @author Haixing Hu
 * @private
 */
function isArguments(value) {
  try {
    if (typeof value.length !== 'number') {
      return false;
    }
    for (let i = 0; i < value.length; ++i) {
      if (!(String(i) in value)) {
        return false;
      }
    }
    if (SYMBOL_ITERATOR_EXISTS) {
      if (typeof value[Symbol.iterator] !== 'function') {
        return false;
      }
    }
    const str = value.toString();
    if (str !== '[object Arguments]') {
      return false;
    }
    if (typeof value.callee !== 'function') {
      return false;
    }
    return true;
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

export default isArguments;
