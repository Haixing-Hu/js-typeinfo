////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/* eslint-disable no-undef */

/**
 * Whether the `Symbol` exists.
 *
 * @type {boolean}
 */
export const SYMBOL_EXISTS = (typeof Symbol !== 'undefined');

/**
 * Whether the `Symbol.iterator` exists.
 *
 * @type {boolean}
 */
export const SYMBOL_ITERATOR_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.iterator !== 'undefined'));

/**
 * Whether the `Symbol.matchAll` exists.
 *
 * @type {boolean}
 */
export const SYMBOL_MATCH_ALL_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.matchAll !== 'undefined'));

/**
 * Whether the `Symbol.toStringTag` exists.
 *
 * @type {boolean}
 */
export const SYMBOL_TO_STRING_TAG_EXISTS = (SYMBOL_EXISTS && (typeof Symbol.toStringTag !== 'undefined'));

/**
 * Whether the `bigint` primitive and the `BigInt` function exists.
 *
 * @type {boolean}
 */
export const BIGINT_EXISTS = (typeof BigInt !== 'undefined');

/**
 * Whether the `RegExp` class exists.
 *
 * @type {boolean}
 */
export const REGEXP_EXISTS = (typeof RegExp !== 'undefined');

/**
 * Whether the `Array.isArray()` function exists.
 *
 * @type {boolean}
 */
export const ARRAY_ISARRAY_EXISTS = (typeof Array.isArray === 'function');

/**
 * Whether the `AggregateError` class exists.
 *
 * @type {boolean}
 */
export const AGGREGATEERROR_EXISTS = (typeof AggregateError !== 'undefined');

/**
 * Whether the `InternalError` class exists.
 *
 * @type {boolean}
 */
export const INTERNALERROR_EXISTS = (typeof InternalError !== 'undefined');

/**
 * Whether the `Map` class exists.
 *
 * @type {boolean}
 */
export const MAP_EXISTS = (typeof Map !== 'undefined');

/**
 * Whether the `Set` class exists.
 *
 * @type {boolean}
 */
export const SET_EXISTS = (typeof Set !== 'undefined');

/**
 * Whether the `WeakMap` class exists.
 *
 * @type {boolean}
 */
export const WEAKMAP_EXISTS = (typeof WeakMap !== 'undefined');

/**
 * Whether the `WeakSet` class exists.
 *
 * @type {boolean}
 */
export const WEAKSET_EXISTS = (typeof WeakSet !== 'undefined');

/**
 * Whether the `Int8Array` class exists.
 *
 * @type {boolean}
 */
export const INT8ARRAY_EXISTS = (typeof Int8Array !== 'undefined');

/**
 * Whether the `Uint8Array` class exists.
 *
 * @type {boolean}
 */
export const UINT8ARRAY_EXISTS = (typeof Uint8Array !== 'undefined');

/**
 * Whether the `Uint8ClampedArray` class exists.
 *
 * @type {boolean}
 */
export const UINT8CLAMPEDARRAY_EXISTS = (typeof Uint8ClampedArray !== 'undefined');

/**
 * Whether the `Int16Array` class exists.
 *
 * @type {boolean}
 */
export const INT16ARRAY_EXISTS = (typeof Int16Array !== 'undefined');

/**
 * Whether the `Uint16Array` class exists.
 *
 * @type {boolean}
 */
export const UINT16ARRAY_EXISTS = (typeof Uint16Array !== 'undefined');

/**
 * Whether the `Int32Array` class exists.
 *
 * @type {boolean}
 */
export const INT32ARRAY_EXISTS = (typeof Int32Array !== 'undefined');

/**
 * Whether the `Uint32Array` class exists.
 *
 * @type {boolean}
 */
export const UINT32ARRAY_EXISTS = (typeof Uint32Array !== 'undefined');

/**
 * Whether the `BigInt64Array` class exists.
 *
 * @type {boolean}
 */
export const BIGINT64ARRAY_EXISTS = (typeof BigInt64Array !== 'undefined');

/**
 * Whether the `BigUint64Array` class exists.
 *
 * @type {boolean}
 */
export const BIGUINT64ARRAY_EXISTS = (typeof BigUint64Array !== 'undefined');

/**
 * Whether the `Float32Array` class exists.
 *
 * @type {boolean}
 */
export const FLOAT32ARRAY_EXISTS = (typeof Float32Array !== 'undefined');

/**
 * Whether the `Float64Array` class exists.
 *
 * @type {boolean}
 */
export const FLOAT64ARRAY_EXISTS = (typeof Float64Array !== 'undefined');

/**
 * Whether the `ArrayBuffer` class exists.
 *
 * @type {boolean}
 */
export const ARRAYBUFFER_EXISTS = (typeof ArrayBuffer !== 'undefined');

/**
 * Whether the `SharedArrayBuffer` class exists.
 *
 * @type {boolean}
 */
export const SHAREDARRAYBUFFER_EXISTS = (typeof SharedArrayBuffer !== 'undefined');

/**
 * Whether the `DataView` class exists.
 *
 * @type {boolean}
 */
export const DATAVIEW_EXISTS = (typeof DataView !== 'undefined');

/**
 * Whether the `WeakRef` class exists.
 *
 * @type {boolean}
 */
export const WEAKREF_EXISTS = (typeof WeakRef !== 'undefined');

/**
 * Whether the `Promise` class exists.
 *
 * @type {boolean}
 */
export const PROMISE_EXISTS = (typeof Promise !== 'undefined');

/**
 * Whether the `Map.prototype.entries()` method exists.
 *
 * @type {boolean}
 */
export const MAP_ENTRIES_EXISTS = (MAP_EXISTS && (typeof Map.prototype.entries === 'function'));

/**
 * Whether the `Set.prototype.entries()` method exists.
 *
 * @type {boolean}
 */
export const SET_ENTRIES_EXISTS = (SET_EXISTS && (typeof Set.prototype.entries === 'function'));

/**
 * Whether the `Map.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const MAP_ITERATOR_EXISTS = (MAP_EXISTS && (typeof Map.prototype.entries === 'function'));

/**
 * Whether the `Set.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const SET_ITERATOR_EXISTS = (SET_EXISTS && (typeof Set.prototype.entries === 'function'));

/**
 * Whether the `Array.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const ARRAY_ITERATOR_EXISTS = (SYMBOL_ITERATOR_EXISTS && typeof Array.prototype[Symbol.iterator] === 'function');

/**
 * Whether the `String.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const STRING_ITERATOR_EXISTS = (SYMBOL_ITERATOR_EXISTS && (typeof String.prototype[Symbol.iterator] === 'function'));

/**
 * Whether the `RegExp.prototype[Symbol.matchAll]()` method exists.
 *
 * @type {boolean}
 */
export const REGEXP_ITERATOR_EXISTS = (REGEXP_EXISTS && SYMBOL_MATCH_ALL_EXISTS && (typeof RegExp.prototype[Symbol.matchAll] === 'function'));

/**
 * Whether the `Intl` object exists.
 *
 * @type {boolean}
 */
export const INTL_EXISTS = (typeof Intl !== 'undefined');

/**
 * Whether the `Intl.Collator` class exists.
 *
 * @type {boolean}
 */
export const INTL_COLLATOR_EXISTS = (INTL_EXISTS && (typeof Intl.Collator !== 'undefined'));

/**
 * Whether the `Intl.DateTimeFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_DATETIMEFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.DateTimeFormat !== 'undefined'));

/**
 * Whether the `Intl.DisplayNames` class exists.
 *
 * @type {boolean}
 */
export const INTL_DISPLAYNAMES_EXISTS = (INTL_EXISTS && (typeof Intl.DisplayNames !== 'undefined'));

/**
 * Whether the `Intl.DurationFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_DURATIONFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.DurationFormat !== 'undefined'));

/**
 * Whether the `Intl.ListFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_LISTFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.ListFormat !== 'undefined'));

/**
 * Whether the `Intl.Locale` class exists.
 *
 * @type {boolean}
 */
export const INTL_LOCALE_EXISTS = (INTL_EXISTS && (typeof Intl.Locale !== 'undefined'));

/**
 * Whether the `Intl.NumberFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_NUMBERFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.NumberFormat !== 'undefined'));

/**
 * Whether the `Intl.PluralRules` class exists.
 *
 * @type {boolean}
 */
export const INTL_PLURALRULES_EXISTS = (INTL_EXISTS && (typeof Intl.PluralRules !== 'undefined'));

/**
 * Whether the `Intl.RelativeTimeFormat` class exists.
 *
 * @type {boolean}
 */
export const INTL_RELATIVETIMEFORMAT_EXISTS = (INTL_EXISTS && (typeof Intl.RelativeTimeFormat !== 'undefined'));

/**
 * Whether the `Intl.Segmenter` class exists.
 *
 * @type {boolean}
 */
export const INTL_SEGMENTER_EXISTS = (INTL_EXISTS && (typeof Intl.Segmenter !== 'undefined'));

/**
 * Whether the `Intl.Segmenter.prototype[Symbol.iterator]()` method exists.
 *
 * @type {boolean}
 */
export const INTL_SEGMENTER_ITERATOR_EXISTS = (INTL_SEGMENTER_EXISTS && SYMBOL_ITERATOR_EXISTS);

/**
 * Whether the `FinalizationRegistry` class exists.
 *
 * @type {boolean}
 */
export const FINALIZATIONREGISTRY_EXISTS = (typeof FinalizationRegistry === 'function');

/**
 * Whether the `Atomics` object exists.
 *
 * @type {boolean}
 */
export const ATOMICS_EXISTS = (typeof Atomics === 'object');

/**
 * Whether the `Reflect` object exists.
 *
 * @type {boolean}
 */
export const REFLECT_EXISTS = (typeof Reflect === 'object');

/**
 * Whether the `Proxy` class exists.
 *
 * @type {boolean}
 */
export const PROXY_EXISTS = (typeof Proxy === 'function');
