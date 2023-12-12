////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  MapPrototype,
  SetPrototype,
} from './impl/builtin-prototype';

/**
 * Tests whether the specified value is a built-in collection object, i.e., a
 * `Map` or a `Set` object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in collection object, i.e., an
 *     `Map` or a `Set` object; `false` otherwise.
 * @author Haixing Hu
 */
function isCollection(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case MapPrototype:        // drop down
    case SetPrototype:        // drop down
      return true;
    default:
      return false;
  }
}

export default isCollection;
