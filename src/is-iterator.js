////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  ArrayIteratorPrototype,
  IntelSegmentIteratorPrototype,
  MapIteratorPrototype,
  RegExpIteratorPrototype,
  SetIteratorPrototype,
  StringIteratorPrototype,
} from './impl/builtin-prototype';

/**
 * Tests whether the specified value is a built-in iterator object.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in iterator object; `false`
 *     otherwise.
 * @author Haixing Hu
 */
function isIterator(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case MapIteratorPrototype:              // drop down
    case SetIteratorPrototype:              // drop down
    case ArrayIteratorPrototype:            // drop down
    case StringIteratorPrototype:           // drop down
    case RegExpIteratorPrototype:           // drop down
    case IntelSegmentIteratorPrototype:     // drop down
      return true;
    default:
      return false;
  }
}

export default isIterator;
