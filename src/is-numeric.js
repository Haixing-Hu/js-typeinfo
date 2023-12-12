////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive `number`, or a primitive `bigint`,
 * or a built-in `Number` object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `number`, or a primitive `bigint`,
 *     or a built-in `Number` object; `false` otherwise.
 * @author Haixing Hu
 */
function isNumeric(value) {
  switch (typeof value) {
    case 'number':
    case 'bigint':
      return true;
    case 'object':
      return (value instanceof Number);
    default:
      return false;
  }
}

export default isNumeric;
