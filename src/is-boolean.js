////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is a primitive `boolean` or a built-in
 * `Boolean` object.
 *
 * @param {any} value
 *     the specified value.
 * @returns {boolean}
 *     `true` if the specified value is a primitive `boolean` or a built-in
 *     `Boolean` object; `false` otherwise.
 * @author Haixing Hu
 */
function isBoolean(value) {
  switch (typeof value) {
    case 'boolean':
      return true;
    case 'object':
      return (value instanceof Boolean);
    default:
      return false;
  }
}

export default isBoolean;
