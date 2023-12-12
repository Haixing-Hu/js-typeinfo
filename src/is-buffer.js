////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  ArrayBufferPrototype,
  SharedArrayBufferPrototype,
} from './impl/builtin-prototype';

/**
 * Tests whether the specified value is a buffer object, i.e., an `ArrayBuffer`
 * or a `SharedBuffer` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a buffer object, i.e., an `ArrayBuffer`
 *     or a `SharedBuffer` object; `false` otherwise.
 * @author Haixing Hu
 */
function isBuffer(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case ArrayBufferPrototype:              // drop down
    case SharedArrayBufferPrototype:        // drop down
      return true;
    default:
      return false;
  }
}

export default isBuffer;
