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
  ArrayIteratorPrototype,
  BigInt64ArrayPrototype,
  BigUint64ArrayPrototype,
  DataViewPrototype,
  Float32ArrayPrototype,
  Float64ArrayPrototype,
  Int16ArrayPrototype,
  Int32ArrayPrototype,
  Int8ArrayPrototype,
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
  IntelSegmentIteratorPrototype,
  MapIteratorPrototype,
  MapPrototype,
  PromisePrototype,
  RegExpIteratorPrototype,
  RegExpPrototype,
  SetIteratorPrototype,
  SetPrototype,
  SharedArrayBufferPrototype,
  StringIteratorPrototype,
  Uint16ArrayPrototype,
  Uint32ArrayPrototype,
  Uint8ArrayPrototype,
  Uint8ClampedArrayPrototype,
  WeakMapPrototype,
  WeakRefPrototype,
  WeakSetPrototype, AggregateErrorPrototype, InternalErrorPrototype,
} from './builtin-prototype';
import isArguments from './is-arguments';
import hasToStringTag from './has-to-string-tag';
import fixSubtypeCompatibility from './fix-subtype-compatibility';

/**
 * Gets the detail types of a non-null object.
 *
 * @param {object} value
 *     the object to be tested, which must be a non-nullish object.
 * @return {object}
 *     the detail type information of the object.
 */
function getObjectTypeInfo(value) {
  const result = {
    type: 'object',
    isPrimitive: false,
    isBuiltIn: true,
    constructor: value.constructor,
  };
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    // primitive wrappers
    // NOTE that BigInt.prototype is not a primitive wrapper, instead, BigInt is
    // a built-in primitive type.
    case Boolean.prototype:                 // drop down
    case Number.prototype:                  // drop down
    case String.prototype:                  // drop down
    // regular expressions
    case RegExpPrototype:                   // drop down
    // Date
    case Date.prototype:                    // drop down
    // collections
    case MapPrototype:                      // drop down
    case SetPrototype:                      // drop down
    case WeakMapPrototype:                  // drop down
    case WeakSetPrototype:                  // drop down
    // arrays
    case Array.prototype:                   // drop down
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
    // buffers
    case ArrayBufferPrototype:              // drop down
    case SharedArrayBufferPrototype:        // drop down
    case DataViewPrototype:                 // drop down
    // references
    case WeakRefPrototype:                  // drop down
    // promise
    case PromisePrototype:                  // drop down
      result.subtype = value.constructor.name;
      return result;
    // built-in errors
    case Error.prototype:                   // drop down
    case EvalError.prototype:               // drop down
    case RangeError.prototype:              // drop down
    case ReferenceError.prototype:          // drop down
    case SyntaxError.prototype:             // drop down
    case TypeError.prototype:               // drop down
    case URIError.prototype:                // drop down
    case AggregateErrorPrototype:           // drop down
    case InternalErrorPrototype:            // drop down
      result.subtype = 'Error';
      return result;
    // Intl APIs
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
      // add 'Intl.' prefix to the constructor name of the object
      result.subtype = 'Intl.' + value.constructor.name;
      return result;
    // iterators
    case MapIteratorPrototype:              // drop down
    case SetIteratorPrototype:              // drop down
    case ArrayIteratorPrototype:            // drop down
    case StringIteratorPrototype:           // drop down
    case RegExpIteratorPrototype:           // drop down
    case IntelSegmentIteratorPrototype:     // drop down
      // removes the spaces in the toStringTag of the object.
      // for example, the '[object Map Iterator]' becomes 'MapIterator'.
      result.subtype = value[Symbol.toStringTag].replace(/\s/g, '');
      return result;
    default:                                 // drop down
  }
  if (isArguments(value)) {                  // arguments
    result.subtype = 'Arguments';
    return result;
  }
  // other non-built-in objects
  result.isBuiltIn = false;
  if (value instanceof Error) {              // other errors
    result.subtype = 'Error';
    return result;
  }
  let subtype = '';
  if (hasToStringTag(value)) {
    // note that Generator and AsyncGenerator objects has defined its own
    // Symbol.toStringTag property, so the following code will handle those cases.
    subtype = value[Symbol.toStringTag].replace(/\s/g, '');
  } else if (value.constructor
     && value.constructor.name
     && (value.constructor.name !== 'Object')) {
    // user defined class instance
    subtype = value.constructor.name;
  } else {
    const str = Object.prototype.toString.call(value);
    subtype = str.slice(8, -1).replace(/\s/g, '');
  }
  result.subtype = fixSubtypeCompatibility(subtype);
  return result;
}

export default getObjectTypeInfo;
