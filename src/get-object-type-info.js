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
  WeakSetPrototype,
  AggregateErrorPrototype,
  InternalErrorPrototype,
  FinalizationRegistryPrototype,
} from './impl/builtin-prototype';
import isArguments from './is-arguments';
import hasToStringTag from './impl/has-to-string-tag';
import fixSubtypeCompatibility from './impl/fix-subtype-compatibility';

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
    subtype: value.constructor?.name,
    category: '',
    isPrimitive: false,
    isBuiltIn: true,
    constructor: value.constructor,
  };
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    // NOTE that BigInt.prototype is not a primitive wrapper, instead, BigInt is
    // a built-in primitive type.
    case Boolean.prototype:                 // drop down
    case Number.prototype:                  // drop down
    case String.prototype:                  // drop down
      result.category = 'primitive-wrapper';
      return result;
    case RegExpPrototype:                   // drop down
      result.category = 'regexp';
      return result;
    case Date.prototype:                    // drop down
      result.category = 'date';
      return result;
    case MapPrototype:                      // drop down
      result.category = 'map';
      return result;
    case SetPrototype:                      // drop down
      result.category = 'set';
      return result;
    case Array.prototype:                   // drop down
      result.category = 'array';
      return result;
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
      result.category = 'typed-array';
      return result;
    case ArrayBufferPrototype:              // drop down
    case SharedArrayBufferPrototype:        // drop down
      result.category = 'buffer';
      return result;
    case DataViewPrototype:                 // drop down
      result.category = 'data-view';
      return result;
    case WeakMapPrototype:                  // drop down
    case WeakSetPrototype:                  // drop down
    case WeakRefPrototype:
      result.category = 'weak';
      return result;
    case PromisePrototype:                  // drop down
      result.category = 'promise';
      return result;
    case Error.prototype:                   // drop down
    case EvalError.prototype:               // drop down
    case RangeError.prototype:              // drop down
    case ReferenceError.prototype:          // drop down
    case SyntaxError.prototype:             // drop down
    case TypeError.prototype:               // drop down
    case URIError.prototype:                // drop down
    case AggregateErrorPrototype:           // drop down
    case InternalErrorPrototype:            // drop down
      result.category = 'error';
      return result;
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
      result.subtype = `Intl.${value.constructor.name}`;
      result.category = 'intl';
      return result;
    case MapIteratorPrototype:              // drop down
    case SetIteratorPrototype:              // drop down
    case ArrayIteratorPrototype:            // drop down
    case StringIteratorPrototype:           // drop down
    case RegExpIteratorPrototype:           // drop down
    case IntelSegmentIteratorPrototype:     // drop down
      // removes the spaces in the toStringTag of the object.
      // for example, the '[object Map Iterator]' becomes 'MapIterator'.
      result.subtype = value[Symbol.toStringTag].replace(/\s/g, '');
      result.category = 'iterator';
      return result;
    case FinalizationRegistryPrototype:
      result.subtype = 'FinalizationRegistry';
      result.category = 'finalization-registry';
      return result;
    default:                                 // drop down
      break;
  }
  if (isArguments(value)) {                  // arguments
    result.subtype = 'Arguments';
    result.category = 'arguments';
    return result;
  }
  // other non-built-in objects
  result.isBuiltIn = false;
  if (value instanceof Error) {              // other errors
    result.category = 'error';
    return result;
  }
  let subtype = '';
  if (hasToStringTag(value)) {
    // note that Generator and AsyncGenerator objects has defined its own
    // Symbol.toStringTag property, so the following code will handle those cases.
    subtype = value[Symbol.toStringTag].replace(/\s/g, '');
  } else if (value.constructor
     && (value.constructor.name !== undefined)
     && (value.constructor.name !== null)
     && (value.constructor.name !== 'Object')) {
    // user defined class instance
    subtype = value.constructor.name;
  } else {
    const str = Object.prototype.toString.call(value);
    subtype = str.slice(8, -1).replace(/\s/g, '');
  }
  result.subtype = fixSubtypeCompatibility(subtype);
  if (/Generator$/.test(result.subtype)) {
    result.category = 'generator';
  } else if ((result.subtype === 'Object') || (result.constructor === Object)) {
    // If the value is a instance of Object and has a customized toStringTag
    // its subtype is not `'Object'` but its constructor is `Object`
    result.category = 'object';
  } else {
    // If the value is a instance of a anonymous class, its constructor name
    // is "" (empty string), we should use the '' as its subtype and use
    // "class" as its category
    result.category = 'class';
  }
  return result;
}

export default getObjectTypeInfo;
