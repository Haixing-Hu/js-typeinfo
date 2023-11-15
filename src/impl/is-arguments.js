////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether a value is an arguments object of a function.
 *
 * @param {any} value
 *     the value to be checked.
 * @return {boolean}
 *     {@code true} if the value is an arguments object of a function;
 *     {@code false} otherwise.
 * @author Jon Schlinkert
 * @private
 */
function isArguments(value) {
  try {
    if ((typeof value.length === 'number') && typeof (value.callee === 'function')) {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

export default isArguments;
