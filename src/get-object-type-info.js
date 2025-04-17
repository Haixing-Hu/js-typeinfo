////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { getTypeName, isArguments, isConsole, isCssom, isDom, isEvent, isFile } from '@qubit-ltd/type-detect';

/**
 * Gets the detail types of a non-null object.
 *
 * @param {object} value
 *     the object to be tested, which must be a non-nullish object.
 * @return {object}
 *     the detail type information of the object.
 * @author Haixing Hu
 * @see <a href="https://github.com/sindresorhus/is/tree/main?tab=readme-ov-file#why-not-just-use-instanceof-instead-of-this-package">Why not just use instanceof instead of this package?</a>
 */
function getObjectTypeInfo(value) {
  const result = {
    type: 'object',
    subtype: value.constructor?.name,
    category: '',
    isPrimitive: false,
    isBuiltIn: true,
    isWebApi: false,
    constructor: value.constructor,
  };

  const str = Object.prototype.toString.call(value);
  switch (str) {
    case '[object Boolean]':
      result.category = 'boolean';
      return result;
    case '[object Number]':
      result.category = 'numeric';
      return result;
    case '[object String]':
      result.category = 'string';
      return result;
    case '[object RegExp]':
      result.category = 'regexp';
      return result;
    case '[object Date]':
      result.category = 'date';
      return result;
    case '[object Map]':
      result.category = 'map';
      return result;
    case '[object Set]':
      result.category = 'set';
      return result;
    case '[object Array]':
      result.category = 'array';
      return result;
    case '[object Int8Array]':
    case '[object Uint8Array]':
    case '[object Uint8ClampedArray]':
    case '[object Int16Array]':
    case '[object Uint16Array]':
    case '[object Int32Array]':
    case '[object Uint32Array]':
    case '[object BigInt64Array]':
    case '[object BigUint64Array]':
    case '[object Float32Array]':
    case '[object Float64Array]':
      result.category = 'typed-array';
      return result;
    case '[object ArrayBuffer]':
    case '[object SharedArrayBuffer]':
      result.category = 'buffer';
      return result;
    case '[object DataView]':
      result.category = 'data-view';
      return result;
    case '[object WeakMap]':
    case '[object WeakSet]':
    case '[object WeakRef]':
      result.category = 'weak';
      return result;
    case '[object Promise]':
      result.category = 'promise';
      return result;
    case '[object Error]':
      // the customized Error object also has the toStringTag of '[object Error]'
      // so we need to check the constructor of the object
      result.category = 'error';
      switch (result.subtype) { // check its constructor name
        case 'Error':
        case 'EvalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
        case 'AggregateError':
        case 'InternalError':
          break;
        default:
          // it is a customized Error object
          result.isBuiltIn = false;
          break;
      }
      return result;
    case '[object Intl.Collator]':
    case '[object Intl.DateTimeFormat]':
    case '[object Intl.DisplayNames]':
    case '[object Intl.DurationFormat]':
    case '[object Intl.ListFormat]':
    case '[object Intl.Locale]':
    case '[object Intl.NumberFormat]':
    case '[object Intl.PluralRules]':
    case '[object Intl.RelativeTimeFormat]':
    case '[object Intl.Segmenter]':
      // add 'Intl.' prefix to the constructor name of the object
      result.subtype = `Intl.${value.constructor.name}`;
      result.category = 'intl';
      return result;
    case '[object Map Iterator]':
    case '[object Set Iterator]':
    case '[object Array Iterator]':
    case '[object String Iterator]':
    case '[object RegExp String Iterator]':
    case '[object Segmenter String Iterator]':
      // removes the spaces in the toStringTag of the object.
      // for example, the '[object Map Iterator]' becomes 'MapIterator'.
      result.subtype = value[Symbol.toStringTag].replace(/\s/g, '');
      result.category = 'iterator';
      return result;
    case '[object FinalizationRegistry]':
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
  const typeName = getTypeName(value);
  if (isEvent(value)) {
    result.category = 'event';
    result.isWebApi = true;
    result.subtype = typeName;
  } else if (isDom(value)) {
    result.category = 'DOM';
    result.isWebApi = true;
    result.subtype = typeName;
  } else if (isCssom(value)) {
    result.category = 'CSSOM';
    result.isWebApi = true;
    result.subtype = typeName;
  } else if (isConsole(value)) {
    result.category = 'console';
    result.isWebApi = true;
    result.subtype = typeName;
  } else if (isFile(value)) {
    result.category = 'file';
    result.isWebApi = true;
    result.subtype = typeName;
  } else if (/Generator$/.test(typeName)) {
    result.category = 'generator';
    result.subtype = typeName;
  } else if (result.subtype === 'Object') {
    // If the value is a instance of Object and has a customized toStringTag
    // its subtype is not `'Object'` but its constructor is `Object`
    result.category = 'object';
    result.subtype = typeName;
  } else {
    // If the value is a instance of a anonymous class, its constructor name
    // is "" (empty string), we should use the '' as its subtype and use
    // "class" as its category
    result.category = 'class';
    result.subtype = typeName;
  }
  return result;
}

export default getObjectTypeInfo;
