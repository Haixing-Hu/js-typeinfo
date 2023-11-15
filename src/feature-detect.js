////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/* eslint-disable no-undef */

export const SYMBOL_EXISTS = (typeof Symbol !== 'undefined');
export const SYMBOL_ITERATOR_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.iterator !== 'undefined'));
export const SYMBOL_MATCH_ALL_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.matchAll !== 'undefined'));
export const SYMBOL_TO_STRING_TAG_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.toStringTag !== 'undefined'));

export const BIGINT_EXISTS = (typeof BigInt !== 'undefined');
export const REGEXP_EXISTS = (typeof RegExp !== 'undefined');
export const ARRAY_ISARRAY_EXISTS = (typeof Array.isArray === 'function');

export const AGGREGATEERROR_EXIST = (typeof AggregateError !== 'undefined');
export const INTERNALERROR_EXIST = (typeof InternalError !== 'undefined');

export const MAP_EXISTS = (typeof Map !== 'undefined');
export const SET_EXISTS = (typeof Set !== 'undefined');
export const WEAKMAP_EXISTS = (typeof WeakMap !== 'undefined');
export const WEAKSET_EXISTS = (typeof WeakSet !== 'undefined');

export const INT8ARRAY_EXISTS = (typeof Int8Array !== 'undefined');
export const UINT8ARRAY_EXISTS = (typeof Uint8Array !== 'undefined');
export const UINT8CLAMPEDARRAY_EXISTS = (typeof Uint8ClampedArray !== 'undefined');
export const INT16ARRAY_EXISTS = (typeof Int16Array !== 'undefined');
export const UINT16ARRAY_EXISTS = (typeof Uint16Array !== 'undefined');
export const INT32ARRAY_EXISTS = (typeof Int32Array !== 'undefined');
export const UINT32ARRAY_EXISTS = (typeof Uint32Array !== 'undefined');
export const BIGINT64ARRAY_EXISTS = (typeof BigInt64Array !== 'undefined');
export const BIGUINT64ARRAY_EXISTS = (typeof BigUint64Array !== 'undefined');
export const FLOAT32ARRAY_EXISTS = (typeof Float32Array !== 'undefined');
export const FLOAT64ARRAY_EXISTS = (typeof Float64Array !== 'undefined');

export const ARRAYBUFFER_EXISTS = (typeof ArrayBuffer !== 'undefined');
export const SHAREDARRAYBUFFER_EXISTS = (typeof SharedArrayBuffer !== 'undefined');
export const DATAVIEW_EXISTS = (typeof DataView !== 'undefined');

export const WEAKREF_EXISTS = (typeof WeakRef !== 'undefined');
export const PROMISE_EXISTS = (typeof Promise !== 'undefined');

export const MAP_ENTRIES_EXISTS = (MAP_EXISTS && (typeof Map.prototype.entries === 'function'));
export const SET_ENTRIES_EXISTS = (SET_EXISTS && (typeof Set.prototype.entries === 'function'));
export const ARRAY_ITERATOR_EXISTS = (SYMBOL_ITERATOR_EXISTS && typeof Array.prototype[Symbol.iterator] === 'function');
export const STRING_ITERATOR_EXISTS = (SYMBOL_ITERATOR_EXISTS && (typeof String.prototype[Symbol.iterator] === 'function'));
export const REGEXP_ITERATOR_EXISTS = (REGEXP_EXISTS && SYMBOL_MATCH_ALL_EXISTS && (typeof RegExp.prototype[Symbol.matchAll] === 'function'));

export const INTL_EXISTS = (typeof Intl !== 'undefined');
export const INTL_COLLATOR_EXISTS = (INTL_EXISTS && (typeof Intl.Collator !== 'undefined'));
export const INTL_DATETIMEFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.DateTimeFormat !== 'undefined'));
export const INTL_DISPLAYNAMES_EXISTS = (INTL_EXISTS && (typeof Intl.DisplayNames !== 'undefined'));
export const INTL_DURATIONFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.DurationFormat !== 'undefined'));
export const INTL_LISTFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.ListFormat !== 'undefined'));
export const INTL_LOCALE_EXISTS = (INTL_EXISTS && (typeof Intl.Locale !== 'undefined'));
export const INTL_NUMBERFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.NumberFormat !== 'undefined'));
export const INTL_PLURALRULES_EXISTS = (INTL_EXISTS && (typeof Intl.PluralRules !== 'undefined'));
export const INTL_RELATIVETIMEFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.RelativeTimeFormat !== 'undefined'));
export const INTL_SEGMENTER_EXISTS = (INTL_EXISTS && (typeof Intl.Segmenter !== 'undefined'));
