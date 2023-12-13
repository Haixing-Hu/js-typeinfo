# typeinfo

[![npm package](https://img.shields.io/npm/v/@haixing_hu/typeinfo.svg)](https://npmjs.com/package/@haixing_hu/typeinfo)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-typeinfo/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-typeinfo/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-typeinfo/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-typeinfo?branch=master)


[typeinfo] is a lightweight JavaScript library that extends the functionality
of the `typeof` operator, allowing for getting more precise and reliable type
information of JavaScript variables. It provides enhanced support for the latest
ECMAScript standards and offers a comprehensive solution for type identification
in your projects.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
    - [Type](#type)
    - [Subtype](#subtype)
    - [Category](#category)
    - [Feature Detection Constants](#feature-detection)
    - [Type Prototype Constants](#type-prototype)
    - [Type Detection Functions](#type-detection)
- [Contributing](#contributing)
- [License](#license)

## <span id="features">Features</span>

- Accurate type information for JavaScript variables.
- Support for the latest ECMAScript standards.
- Easy integration into your projects.

## <span id="installation">Installation</span>

You can install [typeinfo] via `npm`:
```sh
npm install @haixing_hu/typeinfo
```
or via `yarn`:
```bash
yarn add @haixing_hu/typeinfo
```

## <span id="example">Example</span>

The following is a usage example:
```js
import typeInfo from '@haixing_hu/typeinfo';

function clone(value) {
  const info = typeInfo(value);
  switch (info.type) {
    case 'undefined':      // drop down
    case 'null':           // drop down
    case 'boolean':        // drop down
    case 'number':         // drop down
    case 'string':         // drop down
    case 'symbol':         // drop down
    case 'bigint':         // drop down
    case 'function':       // drop down
      return value;        // don't need to clone immutable objects
    case 'object':         // drop down
    default:
      switch (info.subtype) {
        case 'Boolean':    // drop down
        case 'Number':     // drop down
        case 'String':     // drop down
          return value;    // don't need to clone immutable objects
        case 'Date':
          return new Date(value);
        case 'RegExp':
          return new RegExp(value);
        ...
      }
  }
} 
```
or use [info.category](#category) to simplify the code logic:
```js
import typeInfo from '@haixing_hu/typeinfo';

function clone(value) {
  const info = typeInfo(value);
  switch (info.category) {
    case 'undefined':       // drop down
    case 'null':            // drop down
    case 'primitive':       // drop down
    case 'function':       
      return value;         // don't need to clone immutable objects
    case 'primitive-wrapper': 
      return value;         // don't need to clone immutable objects
    case 'date':
      return new Date(value);
    case 'regexp':
      return new RegExp(value);
    ...
  }
}
```

## <span id="usage">Usage</span>

The library provides the following function:
```js
function typeInfo(value)
```
- Parameters:
    - `value: any`: a specified value.
- Returns:
    - `object`: the information about the type of the specified value.

This function returns the information about the precise type of the specified
value. The returned information is an object with the following properties:
- `type: string`: the name of the type of the specified value. This is the same
  as the value returned by the built-in `typeof` operator, except that the type
  of `null` is `'null'` instead of `'object'`. See [Type](#type) for more details.
- `subtype: string`: the name of the subtype of the specified value. This
  property is only presented when the type of the specified value is `'object'`
  or `'function'`. See [Subtype](#subtype) for more details.
- `category: string`: the category of ths specified value. This property is 
  present for all type of values. See [Category](#category) for more details.
- `isPrimitive: boolean`: whether the specified value is a primitive value.
- `isBuiltIn: boolean`: whether the specified value is a JavaScript built-in
  primitive or built-in object.
- `constructor: function`: the constructor function of the specified value. This
  property is only present when the type of the specified value is `'object'`.

### <span id="type">Type</span>

The type information object returned by `typeInfo()` has a `type` property, 
which has the following possible values:

- `'undefined'`: if the value is `undefined`.
- `'null'`: if the value is `null`.
- `'boolean'`: if the value is a primitive boolean value.
- `'number'`: if the value is a primitive number value.
- `'string'`: if the value is a primitive string value.
- `'symbol'`: if the value is a symbol value.
- `'bigint'`: if the value is a primitive bigint value.
- `'function'`: if the value is a function.
- `'object'`: if the value is an object.

The `type` property value is similar to the value returned by the built-in
`typeof` operator, except that the type of `null` is `'null'` instead of
`'object'`.

### <span id="subtype">Subtype</span>

If the value is of the `type` is `function` or `object`, the type information 
object returned by `typeInfo()` has a `subtype` property, which is the name of 
the detailed subtype of the specified value.

The possible `subtype` names of the `'function'` type are:

- `'Function'`: if the value is a sync function.
- `'GeneratorFunction'`: if the value is a sync generator function.
- `'AsyncFunction'`: if the value is an async function.
- `'AsyncGeneratorFunction'`: if the value is an async generator function.

Note that the `'AsyncFunction'` and `'AsyncGeneratorFunction'` subtypes are
only available in the JavaScript engine that support the async functions.

The possible `subtype` names of the `'object'` type are:

- `'Boolean'`: if the value is a JavaScript built-in `Boolean` object.
- `'Number'`: if the value is a JavaScript built-in `Number` object.
- `'String'`: if the value is a JavaScript built-in `String` object.
- `'RegExp'`: if the value is a regular expression, i.e., the JavaScript
  built-in `RegExp` object.
- `'Date'`: if the value is a JavaScript built-in `Date` object.
- `'Map'`: if the value is a JavaScript built-in `Map` object.
- `'WeakMap'`: if the value is a JavaScript built-in `WeakMap` object.
- `'Set'`: if the value is a JavaScript built-in `Set` object.
- `'WeakSet'`: if the value is a JavaScript built-in `WeakSet` object.
- `'Array'`: if the value is a JavaScript built-in `Array` object.
- `'Int8Array'`: if the value is a JavaScript built-in `Int8Array` object.
- `'Uint8Array'`: if the value is a JavaScript built-in `Uint8Array` object.
- `'Uint8ClampedArray'`: if the value is a JavaScript built-in
  `Uint8ClampedArray` object.
- `'Int16Array'`: if the value is a JavaScript built-in `Int16Array` object.
- `'Uint16Array'`: if the value is a JavaScript built-in `Uint16Array` object.
- `'Int32Array'`: if the value is a JavaScript built-in `Int32Array` object.
- `'Uint32Array'`: if the value is a JavaScript built-in `Uint32Array` object.
- `'BigInt64Array'`: if the value is a JavaScript built-in `BigInt64Array` object.
- `'BigUint64Array'`: if the value is a JavaScript built-in `BigUint64Array` object.
- `'Float32Array'`: if the value is a JavaScript built-in `Float32Array` object.
- `'Float64Array'`: if the value is a JavaScript built-in `Float64Array` object.
- `'ArrayBuffer'`: if the value is a JavaScript built-in `ArrayBuffer` object.
- `'SharedArrayBuffer'`: if the value is a JavaScript built-in `SharedArrayBuffer` object.
- `'DataView'`: if the value is a JavaScript built-in `DataView` object.
- `'WeakRef'`: if the value is a JavaScript built-in `WeakRef` object.
- `'Promise'`: if the value is a JavaScript built-in `Promise` object.
- `'Error'`: if the value is an object of the JavaScript built-in `Error` class.
- `'EvalError'`: if the value is an object of the JavaScript built-in `EvalError`
  class.
- `'RangeError'`: if the value is an object of the JavaScript built-in
  `RangeError` class.
- `'ReferenceError'`: if the value is an object of the JavaScript built-in
  `ReferenceError` class.
- `'SyntaxError'`: if the value is an object of the JavaScript built-in
  `SyntaxError` class.
- `'TypeError'`: if the value is an object of the JavaScript built-in
  `TypeError` class.
- `'URIError'`: if the value is an object of the JavaScript built-in `URIError`
  class.
- `'AggregateError'`: if the value is an object of the JavaScript built-in
  `AggregateError` class.
- `'InternalError'`: if the value is an object of the JavaScript built-in
  `InternalError` class.
- `'Intl.Collator'`: if the value is a JavaScript built-in `Intl.Collator` object.
- `'Intl.DateTimeFormat'`: if the value is a JavaScript built-in `Intl.DateTimeFormat` object.
- `'Intl.DisplayNames'`: if the value is a JavaScript built-in `Intl.DisplayNames` object.
- `'Intl.DurationFormat'`: if the value is a JavaScript built-in `Intl.DurationFormat` object.
- `'Intl.ListFormat'`: if the value is a JavaScript built-in `Intl.ListFormat` object.
- `'Intl.Locale'`: if the value is a JavaScript built-in `Intl.Locale` object.
- `'Intl.NumberFormat'`: if the value is a JavaScript built-in `Intl.NumberFormat` object.
- `'Intl.PluralRules'`: if the value is a JavaScript built-in `Intl.PluralRules` object.
- `'Intl.RelativeTimeFormat'`: if the value is a JavaScript built-in 
  `Intl.RelativeTimeFormat` object.
- `'Intl.Segmenter'`: if the value is a JavaScript built-in `Intl.Segmenter` object.
- `'MapIterator'`: if the value is a `Map` Iterator returned by
    - `Map.prototype.values()`,
    - `Map.prototype.keys()`,
    - `Map.prototype.entries()`, and
    - `Map.prototype[@@iterator]()`.
- `'SetIterator'`: if the value is a `Set` Iterator returned by
    - `Set.prototype.values()`,
    - `Set.prototype.keys()`,
    - `Set.prototype.entries()`, and
    - `Set.prototype[@@iterator]()`.
- `'ArrayIterator'`: if the value is a `Array` iterator returned by
    - `Array.prototype.values()`,
    - `Array.prototype.keys()`,
    - `Array.prototype.entries()`,
    - `Array.prototype[@@iterator]()`,
    - `TypedArray.prototype.values()`,
    - `TypedArray.prototype.keys()`, and
    - `TypedArray.prototype.entries()`.
- `'StringIterator'`: if the value is a `String` Iterator returned by
    - `String.prototype[@@iterator]()`.
- `'RegExpStringIterator'`: if the value is a RegExp String Iterator returned by
    - `RegExp.prototype[@@matchAll]()`, and
    - `String.prototype.matchAll()`.
- `'SegmenterStringIterator'`: if the value is a Segments Iterator returned by
    - the `[@@iterator]()` method of the Segments object returned by
      `Intl.Segmenter.prototype.segment()`.
- `'FinalizationRegistry'`: if the value is an instance of the JavaScript
  built-in `FinalizationRegistry` class. A `FinalizationRegistry` object lets
  you request a callback when a value is garbage-collected.
- `'Arguments`: if the value is the JavaScript built-in `arguments` object,
  which is a special array-like object storing the calling arguments of a
  function.
- `'Generator'`: if the value is a generator object, i.e., the object returned
  by a sync generator function.
- `'AsyncGenerator'`: if the value is an async generator object, i.e., the
  object returned by an async generator function.
- `'GlobalObject'`: if the value is the [global object]. A global object is an 
  object that always exists in the global scope.
- `'Object'`: if the value is a plain JavaScript object, i.e., an object defined
  by the syntax of `obj = { ... }`.
- `''` (empty string): if the value is an instance of a user defined anonymous class.
- `value[Symbol.toStringTag]`: if the value has a customized `Symbol.toStringTag`
  property.
- `value.constructor.name`: if the value has a constructor with a name, and
  the name is not `'Object'`. That is, if the value is an instance of a user
  defined class, and the class has a name, the `subtype` is the name of that
  class. For example, if the value is an instance of the `MyClass` class, the
  `subtype` is `'MyClass'`.
- the name extracted from `value.toString()`: if the value does not match
  any of the above cases, the `subtype` is the name extracted from the
  `value.toString()` result (usually a string of the form `'[object XXX]'`),
  and removes any inner spaces in the name. For example, if the `value.toString()`
  result is `'[object My Class ]'`, the `subtype` is `'MyClass'`.

The detailed list of supported JavaScript built-in objects can be found
at [Standard built-in objects].

### <span id="category">Category</span>

The type information object returned by `typeInfo()` has a `category` property,
which is a string that describes the category of the value. The possible values 
of the `category` property are:

- `'null'`: if the value is `null`.
- `'undefined'`: if the value is `undefined`.
- `'boolean'`: if the value is a primitive `boolean` value or a built-in
  `Boolean` object.
- `'numeric'`: if the value is a primitive `number` value, or a primitive
  `bigint` value, or a built-in `Number` object.
- `'string'`: if the value is a primitive `string` value, or a built-in
  `String` object.
- `'symbol'`: if the value is a primitive `symbol` value.
- `'function'`: if the value is a function, including sync functions, async
  functions, sync generator functions, and async generator functions.
- `'regexp'`: if the value is a regular expression, i.e., the JavaScript
  built-in `RegExp` object.
- `'date'`: if the value is a JavaScript built-in `Date` object.
- `'map'`: if the value is a JavaScript built-in `Map` object.
- `'set'`: if the value is a JavaScript built-in `Set` object.
- `'array'`: if the value is a JavaScript built-in `Array` object.
- `'typed-array'`: if the value is a JavaScript built-in typed array object,
  including `'Int8Array'`, `'Uint8Array'`, `'Uint8ClampedArray'`,
  `'Int16Array'`, `'Uint16Array'`, `'Int32Array'`, `'Uint32Array'`,
  `'BigInt64Array'`, `'BigUint64Array'`, `'Float32Array'`, and `'Float64Array'`.
- `'buffer'`: if the value is a JavaScript built-in buffer object, including
    `'ArrayBuffer'` and `'SharedArrayBuffer'`.
- `'data-view'`: if the value is a JavaScript built-in `DataView` object.
- `'weak'`: if the value is a JavaScript built-in `WeakMap`, `WeakSet`, or
  `WeakRef` object. Note that weak referenced objects cannot be cloned.
- `'promise'`: if the value is a JavaScript built-in `Promise` object.
- `'error'`: if the value is an object of the JavaScript built-in `Error` class,
  or an object of a subclass of the `Error` class.
- `'intl'`: if the value is a JavaScript built-in object under the `Intl`
  namespace, including `'Intl.Collator'`, `'Intl.DateTimeFormat'`,
  `'Intl.DisplayNames'`, `'Intl.DurationFormat'`, `'Intl.ListFormat'`,
  `'Intl.Locale'`, `'Intl.NumberFormat'`, `'Intl.PluralRules'`, and
  `'Intl.RelativeTimeFormat'`.
- `'iterator'`: if the value is an iterator object, including `'MapIterator'`,
  `'SetIterator'`, `'ArrayIterator'`, `'StringIterator'`, `'RegExpStringIterator'`,
  and `'SegmenterStringIterator'`. 
- `'finalization-registry'`: if the value is an instance of the JavaScript built-in
  `FinalizationRegistry` class. A `FinalizationRegistry` object lets you request 
  a callback when a value is garbage-collected.
- `'global'`: if the value is the [global object].
- `'arguments'`: if the value is the JavaScript built-in `arguments` object.
- `'generator'`: if the value is a generator object, i.e., the object returned
  by a sync generator function, including `'Generator'` and `'AsyncGenerator'`.
- `'object'`: if the value is a plain JavaScript object.
- `'class'`: if the value is an instance of a user defined class.

### <span id="feature-detection">Feature Detection Constants</span>

This library provides the following constants for feature detection:

- `AGGREGATEERROR_EXISTS`: whether the JavaScript built-in class `AggregateError` exists.
- `ARRAYBUFFER_EXISTS`: whether the JavaScript built-in class `ArrayBuffer` exists.
- `ARRAY_ISARRAY_EXISTS`: whether the JavaScript built-in function `Array.isArray()` exists.
- `ARRAY_ITERATOR_EXISTS`: whether the JavaScript built-in function 
  `Array.prototype[Symbol.iterator]` exists.
- `ATOMICS_EXISTS`: whether the JavaScript built-in object `Atomics` exists.
- `BIGINT64ARRAY_EXISTS`: whether the JavaScript built-in class `BigInt64Array` exists.
- `BIGINT_EXISTS`: whether the JavaScript built-in primitive `bigint` and 
  built-in function `BigInt` exists.
- `BIGUINT64ARRAY_EXISTS`: whether the JavaScript built-in class `BigUint64Array` exists.
- `DATAVIEW_EXISTS`: whether the JavaScript built-in class `DataView` exists.
- `FINALIZATIONREGISTRY_EXISTS`: whether the JavaScript built-in class `FinalizationRegistry` exists.
- `FLOAT32ARRAY_EXISTS`: whether the JavaScript built-in class `Float32Array` exists.
- `FLOAT64ARRAY_EXISTS`: whether the JavaScript built-in class `Float64Array` exists.
- `INT16ARRAY_EXISTS`: whether the JavaScript built-in class `Int16Array` exists.
- `INT32ARRAY_EXISTS`: whether the JavaScript built-in class `Int32Array` exists.
- `INT8ARRAY_EXISTS`: whether the JavaScript built-in class `Int8Array` exists.
- `INTERNALERROR_EXISTS`: whether the JavaScript built-in class `InternalError` class
  exists.
- `INTL_COLLATOR_EXISTS`: whether the JavaScript built-in class `Intl.Collator` class
  exists.
- `INTL_DATETIMEFORMAT_EXISTS`: whether the JavaScript built-in class
  `Intl.DateTimeFormat` class exists.
- `INTL_DISPLAYNAMES_EXISTS`: whether the JavaScript built-in class `Intl.DisplayNames`
  class exists.
- `INTL_DURATIONFORMAT_EXISTS`: whether the JavaScript built-in class
  `Intl.DurationFormat` class exists.
- `INTL_EXISTS`: whether the JavaScript built-in `Intl` namespace exists.
- `INTL_LISTFORMAT_EXISTS`: whether the JavaScript built-in class `Intl.ListFormat` exists.
- `INTL_LOCALE_EXISTS`: whether the JavaScript built-in class `Intl.Locale` exists.
- `INTL_NUMBERFORMAT_EXISTS`: whether the JavaScript built-in class `Intl.NumberFormat` exists.
- `INTL_PLURALRULES_EXISTS`: whether the JavaScript built-in class `Intl.PluralRules` exists.
- `INTL_RELATIVETIMEFORMAT_EXISTS`: whether the JavaScript built-in class 
  `Intl.RelativeTimeFormat` exists.
- `INTL_SEGMENTER_EXISTS`: whether the JavaScript built-in class `Intl.Segmenter` exists.
- `INTL_SEGMENTER_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `Intl.Segmenter.prototype[Symbol.iterator]` exists.
- `MAP_ENTRIES_EXISTS`: whether the JavaScript built-in function
  `Map.prototype.entries()` exists.
- `MAP_EXISTS`: whether the JavaScript built-in class `Map` exists.
- `MAP_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `Map.prototype[Symbol.iterator]` exists.
- `PROMISE_EXISTS`: whether the JavaScript built-in class `Promise` exists.
- `PROXY_EXISTS`: whether the JavaScript built-in class `Proxy` exists.
- `REFLECT_EXISTS`: whether the JavaScript built-in namespace `Reflect` exists.
- `REGEXP_EXISTS`: whether the JavaScript built-in class `RegExp` exists.
- `REGEXP_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `RegExp.prototype[Symbol.matchAll]` exists.
- `SET_ENTRIES_EXISTS`: whether the JavaScript built-in function
  `Set.prototype.entries()` exists.
- `SET_EXISTS`: whether the JavaScript built-in class `Set` exists.
- `SET_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `Set.prototype[Symbol.iterator]` exists.
- `SHAREDARRAYBUFFER_EXISTS`: whether the JavaScript built-in class
  `SharedArrayBuffer` exists.
- `STRING_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `String.prototype[Symbol.iterator]` exists.
- `SYMBOL_EXISTS`: whether the JavaScript built-in `Symbol` exists.
- `SYMBOL_ITERATOR_EXISTS`: whether the JavaScript built-in function
  `Symbol.prototype[Symbol.iterator]` exists.
- `SYMBOL_MATCH_ALL_EXISTS`: whether the JavaScript built-in function
  `Symbol.prototype[Symbol.matchAll]` exists.
- `SYMBOL_TO_STRING_TAG_EXISTS`: whether the JavaScript built-in function
  `Symbol.prototype[Symbol.toStringTag]` exists.
- `UINT16ARRAY_EXISTS`: whether the JavaScript built-in class `Uint16Array` exists.
- `UINT32ARRAY_EXISTS`: whether the JavaScript built-in class `Uint32Array` exists.
- `UINT8ARRAY_EXISTS`: whether the JavaScript built-in class `Uint8Array` exists.
- `UINT8CLAMPEDARRAY_EXISTS`: whether the JavaScript built-in class
  `Uint8ClampedArray` exists.
- `WEAKMAP_EXISTS`: whether the JavaScript built-in class `WeakMap` exists.
- `WEAKREF_EXISTS`: whether the JavaScript built-in class `WeakRef` exists.
- `WEAKSET_EXISTS`: whether the JavaScript built-in class `WeakSet` exists.

The following code shows how to use these constants:
```js
import { WEAKMAP_EXISTS } from '@haixing_hu/typeinfo';

function foo(value) {
  if (WEAKMAP_EXISTS) {
    ...
  } else {
    ...
  }
}
```

### <span id="type-prototype">Type Prototype Constants</span>

This library provides the following constants for the prototypes of JavaScript
built-in objects:

- `AggregateErrorPrototype`: the prototype of the JavaScript built-in
  `AggregateError` objects, or `undefined` if the `AggregateError` class does not
  exist.
- `ArrayBufferPrototype`: the prototype of the JavaScript built-in
  `ArrayBuffer` objects, or `undefined` if the `ArrayBuffer` class does not exist.
- `ArrayIteratorPrototype`: the prototype of the JavaScript built-in array
   iterator objects, or `undefined` if the array iterator does not exist.
- `BigInt64ArrayPrototype`: the prototype of the JavaScript built-in
  `BigInt64Array` objects, or `undefined` if the `BigInt64Array` class does not
  exist.
- `BigIntPrototype`: the prototype of the JavaScript built-in `bigint` primitive,
  or `undefined` if the `bigint` primitive does not exist.
- `BigUint64ArrayPrototype`: the prototype of the JavaScript built-in
  `BigUint64Array` objects, or `undefined` if the `BigUint64Array` class does not
  exist.
- `DataViewPrototype`: the prototype of the JavaScript built-in `DataView`
  objects, or `undefined` if the `DataView` class does not exist.
- `FinalizationRegistryPrototype`: the prototype of the JavaScript built-in
  `FinalizationRegistry` objects, or `undefined` if the `FinalizationRegistry`
  class does not exist.
- `Float32ArrayPrototype`: the prototype of the JavaScript built-in
  `Float32Array` objects, or `undefined` if the `Float32Array` class does not
  exist.
- `Float64ArrayPrototype`: the prototype of the JavaScript built-in
  `Float64Array` objects, or `undefined` if the `Float64Array` class does not
  exist.
- `Int16ArrayPrototype`: the prototype of the JavaScript built-in
  `Int16Array` objects, or `undefined` if the `Int16Array` class does not exist.
- `Int32ArrayPrototype`: the prototype of the JavaScript built-in
  `Int32Array` objects, or `undefined` if the `Int32Array` class does not exist.
- `Int8ArrayPrototype`: the prototype of the JavaScript built-in
  `Int8Array` objects, or `undefined` if the `Int8Array` class does not exist.
- `IntelSegmentIteratorPrototype`: the prototype of the JavaScript built-in
  `Intl.SegmentIterator` objects, or `undefined` if the `Intl.SegmentIterator`
  class does not exist.
- `InternalErrorPrototype`: the prototype of the JavaScript built-in
  `InternalError` objects, or `undefined` if the `InternalError` class does not
  exist.
- `IntlCollatorPrototype`: the prototype of the JavaScript built-in
  `Intl.Collator` objects, or `undefined` if the `Intl.Collator` class does not
  exist.
- `IntlDateTimeFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.DateTimeFormat` objects, or `undefined` if the `Intl.DateTimeFormat`
  class does not exist.
- `IntlDisplayNamesPrototype`: the prototype of the JavaScript built-in
  `Intl.DisplayNames` objects, or `undefined` if the `Intl.DisplayNames` class
  does not exist.
- `IntlDurationFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.DurationFormat` objects, or `undefined` if the `Intl.DurationFormat`
  class does not exist.
- `IntlListFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.ListFormat` objects, or `undefined` if the `Intl.ListFormat` class does
  not exist.
- `IntlLocalePrototype`: the prototype of the JavaScript built-in
  `Intl.Locale` objects, or `undefined` if the `Intl.Locale` class does not
  exist.
- `IntlNumberFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.NumberFormat` objects, or `undefined` if the `Intl.NumberFormat` class
  does not exist.
- `IntlPluralRulesPrototype`: the prototype of the JavaScript built-in
  `Intl.PluralRules` objects, or `undefined` if the `Intl.PluralRules` class
  does not exist.
- `IntlRelativeTimeFormatPrototype`: the prototype of the JavaScript built-in
  `Intl.RelativeTimeFormat` objects, or `undefined` if the
  `Intl.RelativeTimeFormat` class does not exist.
- `IntlSegmenterPrototype`: the prototype of the JavaScript built-in
  `Intl.Segmenter` objects, or `undefined` if the `Intl.Segmenter` class does
  not exist.
- `MapIteratorPrototype`: the prototype of the JavaScript built-in `Map`
  iterator objects, or `undefined` if the `Map` iterator does not exist.
- `MapPrototype`: the prototype of the JavaScript built-in `Map` objects, or
  `undefined` if the `Map` class does not exist.
- `PromisePrototype`: the prototype of the JavaScript built-in `Promise`
  objects, or `undefined` if the `Promise` class does not exist.
- `RegExpIteratorPrototype`: the prototype of the JavaScript built-in
  `RegExp` iterator objects, or `undefined` if the `RegExp` iterator does not
  exist.
- `RegExpPrototype`: the prototype of the JavaScript built-in `RegExp` objects,
  or `undefined` if the `RegExp` class does not exist.
- `SetIteratorPrototype`: the prototype of the JavaScript built-in `Set`
  iterator objects, or `undefined` if the `Set` iterator does not exist.
- `SetPrototype`: the prototype of the JavaScript built-in `Set` objects, or
  `undefined` if the `Set` class does not exist.
- `SharedArrayBufferPrototype`: the prototype of the JavaScript built-in
  `SharedArrayBuffer` objects, or `undefined` if the `SharedArrayBuffer` class
  does not exist.
- `StringIteratorPrototype`: the prototype of the JavaScript built-in `String`
  iterator objects, or `undefined` if the `String` iterator does not exist.
- `SymbolPrototype`: the prototype of the JavaScript built-in `Symbol` primitives,
  or `undefined` if the `Symbol` primitive does not exist.
- `Uint16ArrayPrototype`: the prototype of the JavaScript built-in
  `Uint16Array` objects, or `undefined` if the `Uint16Array` class does not
  exist.
- `Uint32ArrayPrototype`: the prototype of the JavaScript built-in
  `Uint32Array` objects, or `undefined` if the `Uint32Array` class does not
  exist.
- `Uint8ArrayPrototype`: the prototype of the JavaScript built-in
  `Uint8Array` objects, or `undefined` if the `Uint8Array` class does not
  exist.
- `Uint8ClampedArrayPrototype`: the prototype of the JavaScript built-in
  `Uint8ClampedArray` objects, or `undefined` if the `Uint8ClampedArray` class
  does not exist.
- `WeakMapPrototype`: the prototype of the JavaScript built-in `WeakMap`
  objects, or `undefined` if the `WeakMap` class does not exist.
- `WeakRefPrototype`: the prototype of the JavaScript built-in `WeakRef`
  objects, or `undefined` if the `WeakRef` class does not exist.
- `WeakSetPrototype`: the prototype of the JavaScript built-in `WeakSet`
  objects, or `undefined` if the `WeakSet` class does not exist.


The following code shows how to use these constants:
```js
import { WeakMapPrototype } from '@haixing_hu/typeinfo';

function foo(value) {
  const proto = Object.getPrototypeOf(value);
  if (proto === WeakMapPrototype) {
    ...
  } else {
    ...
  }
}
```

### <span id="type-detection">Type Detection Functions</span>

The library provides the following functions for type detection:

- `isArguments(value): boolean`: whether the specified value is the JavaScript
  built-in `arguments` object.
- `isBoolean(value): boolean`: whether the specified value is a JavaScript
  built-in `boolean` primitive or `Boolean` object.
- `isBuffer(value): boolean`: whether the specified value is a JavaScript
  built-in `ArrayBuffer` or `SharedArrayBuffer` object.
- `isBuiltInClass(Class): boolean`: whether the specified class is a JavaScript
  built-in class.
- `isCollection(value): boolean`: whether the specified value is a JavaScript
  built-in collection object, i.e., a `Map` or `Set` object.
- `isError(value): boolean`: whether the specified value is an instance of the
  JavaScript built-in `Error` class, or an instance of a subclass of the `Error`
  class.
- `isIntl(value): boolean`: whether the specified value is a JavaScript
  built-in object under the `Intl` namespace.
- `isIterator(value): boolean`: whether the specified value is an iterator
  object, i.e., an object with a `next()` method.
- `isNumeric(value): boolean`: whether the specified value is a JavaScript
  built-in `number` primitive, or `bigint` primitive, or `Number` object.
- `isString(value): boolean`: whether the specified value is a JavaScript
  built-in `string` primitive, or `String` object.
- `isTypedArray(value): boolean`: whether the specified value is a JavaScript
  built-in typed array object.
- `isWeak(value): boolean`: whether the specified value is a JavaScript
  built-in weak referenced object, i.e., a `WeakMap`, `WeakSet`, or `WeakRef`
  object.

The following code shows how to use these functions:
```js
import { isTypedArray } from '@haixing_hu/typeinfo';

function foo(value) {
  if (isTypedArray(value)) {
    ...
  } else {
    ...
  }
}
```

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free
to open an issue or submit a pull request to the [GitHub repository].

## <span id="license">License</span>

[typeinfo] is distributed under the Apache 2.0 license.
See the [LICENSE](LICENSE) file for more details.

[typeinfo]: https://npmjs.com/package/@haixing_hu/typeinfo
[global object]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[Standard built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[GitHub repository]: https://github.com/Haixing-Hu/js-typeinfo
