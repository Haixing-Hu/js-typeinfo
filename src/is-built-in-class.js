////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  AggregateErrorPrototype,
  ArrayBufferPrototype,
  ArrayIteratorPrototype,
  BigInt64ArrayPrototype,
  BigIntPrototype,
  BigUint64ArrayPrototype,
  DataViewPrototype,
  FinalizationRegistryPrototype,
  Float32ArrayPrototype,
  Float64ArrayPrototype,
  Int16ArrayPrototype,
  Int32ArrayPrototype,
  Int8ArrayPrototype,
  IntelSegmentIteratorPrototype,
  InternalErrorPrototype,
  IntlCollatorPrototype,
  IntlDateTimeFormatPrototype,
  IntlDisplayNamesPrototype,
  IntlDurationFormatPrototype,
  IntlListFormatPrototype,
  IntlLocalePrototype,
  IntlNumberFormatPrototype,
  IntlPluralRulesPrototype,
  IntlRelativeTimeFormatPrototype,
  IntlSegmenterPrototype,
  MapIteratorPrototype,
  MapPrototype,
  PromisePrototype,
  RegExpIteratorPrototype,
  RegExpPrototype,
  SetIteratorPrototype,
  SetPrototype,
  SharedArrayBufferPrototype,
  StringIteratorPrototype,
  SymbolPrototype,
  Uint16ArrayPrototype,
  Uint32ArrayPrototype,
  Uint8ArrayPrototype,
  Uint8ClampedArrayPrototype,
  WeakMapPrototype,
  WeakRefPrototype,
  WeakSetPrototype,
} from './impl/builtin-prototype';

/* eslint-disable no-undef */

/**
 * Tests whether the specified constructor function is the constructor of a
 * built-in class.
 *
 * The following special functions are also considered as built-in "classes":
 * - `BigInt` (a function)
 * - `Symbol` (a function)
 * - `Proxy` (a function)
 *
 * The following special global objects are also considered as built-in "classes":
 * - `Math`
 * - `JSON`
 * - `Reflect`
 * - `Atomics`
 *
 * @param {function|object} Class
 *     The constructor function to be checked.
 * @returns {boolean}
 *     `true` if the specified constructor function is the constructor of a
 *     built-in class; `false` otherwise.
 */
function isBuiltInClass(Class) {
  if (Class === undefined || Class === null) {
    return false;
  }
  if (typeof Class !== 'function') {
    return (Class === Math)
      || (Class === JSON)
      || (Class === Atomics)
      || (Class === Reflect);
  }
  switch (Class.prototype) {
    case Object.prototype:                  // drop down
    case Array.prototype:                   // drop down
    case Boolean.prototype:                 // drop down
    case Number.prototype:                  // drop down
    case String.prototype:                  // drop down
    case BigIntPrototype:                   // drop down
    case SymbolPrototype:                   // drop down
    case Date.prototype:                    // drop down
    case Function.prototype:                // drop down
    case RegExpPrototype:                   // drop down
    case Error.prototype:                   // drop down
    case EvalError.prototype:               // drop down
    case RangeError.prototype:              // drop down
    case ReferenceError.prototype:          // drop down
    case SyntaxError.prototype:             // drop down
    case TypeError.prototype:               // drop down
    case URIError.prototype:                // drop down
    case AggregateErrorPrototype:           // drop down
    case InternalErrorPrototype:            // drop down
    case MapPrototype:                      // drop down
    case SetPrototype:                      // drop down
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
    case ArrayBufferPrototype:              // drop down
    case SharedArrayBufferPrototype:        // drop down
    case DataViewPrototype:                 // drop down
    case PromisePrototype:                  // drop down
    case WeakMapPrototype:                  // drop down
    case WeakSetPrototype:                  // drop down
    case WeakRefPrototype:                  // drop down
    case IntlCollatorPrototype:             // drop down
    case IntlDateTimeFormatPrototype:       // drop down
    case IntlDisplayNamesPrototype:         // drop down
    case IntlDurationFormatPrototype:       // drop down
    case IntlListFormatPrototype:           // drop down
    case IntlLocalePrototype:               // drop down
    case IntlNumberFormatPrototype:         // drop down
    case IntlPluralRulesPrototype:          // drop down
    case IntlRelativeTimeFormatPrototype:   // drop down
    case IntlSegmenterPrototype:            // drop down
    case MapIteratorPrototype:              // drop down
    case SetIteratorPrototype:              // drop down
    case ArrayIteratorPrototype:            // drop down
    case StringIteratorPrototype:           // drop down
    case RegExpIteratorPrototype:           // drop down
    case IntelSegmentIteratorPrototype:     // drop down
    case FinalizationRegistryPrototype:     // drop down
      return true;
    default:
      // the Proxy class has no prototype
      return (Class === Proxy);
  }
}

export default isBuiltInClass;
