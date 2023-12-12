////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  BigInt64ArrayPrototype,
  BigUint64ArrayPrototype,
  Float32ArrayPrototype,
  Float64ArrayPrototype,
  Int16ArrayPrototype,
  Int32ArrayPrototype,
  Int8ArrayPrototype,
  Uint16ArrayPrototype,
  Uint32ArrayPrototype,
  Uint8ArrayPrototype,
  Uint8ClampedArrayPrototype,
} from './impl/builtin-prototype';

/**
 * Tests whether the specified value is a typed-array.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a typed-array; `false` otherwise.
 * @author Haixing Hu
 */
function isTypedArray(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case Int8ArrayPrototype:                // drop down
    case Uint8ArrayPrototype:               // drop down
    case Uint8ClampedArrayPrototype:        // drop down
    case Int16ArrayPrototype:               // drop down
    case Uint16ArrayPrototype:              // drop down
    case Int32ArrayPrototype:               // drop down
    case Uint32ArrayPrototype:              // drop down
    case BigInt64ArrayPrototype:            // drop down
    case BigUint64ArrayPrototype:           // drop down
    case Float32ArrayPrototype:             // drop down
    case Float64ArrayPrototype:             // drop down
      return true;
    default:
      return false;
  }
}

export default isTypedArray;
