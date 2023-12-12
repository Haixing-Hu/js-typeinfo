////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  WeakMapPrototype,
  WeakRefPrototype,
  WeakSetPrototype,
} from './impl/builtin-prototype';

/**
 * Tests whether the specified value is a weak reference object, i.e., a
 * `WeakMap`, a `WeakSet` or a `WeakRef` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a weak reference object, i.e., a
 *     `WeakMap`, a `WeakSet` or a `WeakRef` object; `false` otherwise.
 * @author Haixing Hu
 */
function isWeak(value) {
  if ((value === null) || (typeof value !== 'object')) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case WeakMapPrototype:                  // drop down
    case WeakSetPrototype:                  // drop down
    case WeakRefPrototype:
      return true;
    default:
      return false;
  }
}

export default isWeak;
