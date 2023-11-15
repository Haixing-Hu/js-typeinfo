# type-info

[![npm package](https://img.shields.io/npm/v/@haixing_hu/type-info.svg)](https://npmjs.com/package/@haixing_hu/type-info)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-type-info/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-type-info/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-type-info/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-type-info?branch=master)


[type-info] is a lightweight JavaScript library that extends the functionality
of the `typeof` operator, allowing for getting more precise and reliable type
information of JavaScript variables. It provides enhanced support for the latest
ECMAScript standards and offers a comprehensive solution for type identification
in your projects.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## <span id="features">Features</span>

- Accurate type information for JavaScript variables.
- Support for the latest ECMAScript standards.
- Easy integration into your projects.

## <span id="installation">Installation</span>

You can install [type-info] via `npm`:
```sh
npm install @haixing_hu/type-info
```
or via `yarn`:
```bash
yarn add @haixing_hu/type-info
```

## <span id="example">Example</span>

The following is a usage example:
```js
import typeInfo from '@haixing_hu/type-info';

function clone(value) {
  const info = typeInfo(value);
  switch (info.type) {
    case 'undefined':      // drop down
    case 'null':           // drop down
    case 'boolean':        // drop down
    case 'number':         // drop down
    case 'string':         // drop down
    case 'symbol':         // drop down
    case 'global':         // drop down
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
- `'type'`: the name of the type of the specified value. This is the same as
  the value returned by the built-in `typeof` operator, except that the type
  of `null` is `'null'` instead of `'object'`, and we add `'global'` for type of
  the [global object].
- `'subtype'`: the name of the subtype of the specified value. This property
  is only present when the type of the specified value is `'object'` or
  `'function'`.
- `'isPrimitive'`: whether the specified value is a primitive value.
- `'isBuiltIn'`: whether the specified value is a JavaScript built-in
  primitive or built-in object.
- `'constructor'`: the constructor function of the specified value. This
  property is only present when the type of the specified value is `'object'`.

The possible `type` values are:
- `'undefined'`: if the value is `undefined`.
- `'null'`: if the value is `null`.
- `'boolean'`: if the value is a primitive boolean value.
- `'number'`: if the value is a primitive number value.
- `'string'`: if the value is a primitive string value.
- `'bigint'`: if the value is a primitive bigint value.
- `'symbol'`: if the value is a symbol value.
- `'global'`: if the value is the [global object]. A global object is an object
  that always exists in the global scope.
- `'function'`: if the value is a function.
- `'object'`: if the value is a plain object.

If the value is of the type `function` or `object`, the returned type information
object will have the `subtype` property, which is the name of the detailed
subtype of the specified value.

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
- `'Intl.Collator'`: if the value is a JavaScript built-in `Intl.Collator` object.
- `'Intl.DateTimeFormat'`: if the value is a JavaScript built-in `Intl.DateTimeFormat` object.
- `'Intl.DisplayNames'`: if the value is a JavaScript built-in `Intl.DisplayNames` object.
- `'Intl.DurationFormat'`: if the value is a JavaScript built-in `Intl.DurationFormat` object.
- `'Intl.ListFormat'`: if the value is a JavaScript built-in `Intl.ListFormat` object.
- `'Intl.Locale'`: if the value is a JavaScript built-in `Intl.Locale` object.
- `'Intl.NumberFormat'`: if the value is a JavaScript built-in `Intl.NumberFormat` object.
- `'Intl.PluralRules'`: if the value is a JavaScript built-in `Intl.PluralRules` object.
- `'Intl.RelativeTimeFormat'`: if the value is a JavaScript built-in `Intl.RelativeTimeFormat` object.
- `'Intl.Segmenter'`: if the value is a JavaScript built-in `Intl.Segmenter` object.
- `'MapIterator'`: if the value is a Map Iterator returned by
    - `Map.prototype.values()`,
    - `Map.prototype.keys()`,
    - `Map.prototype.entries()`, and
    - `Map.prototype[@@iterator]()`.
- `'SetIterator'`: if the value is a Set Iterator returned by
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
- `'StringIterator'`: if the value is a String Iterator returned by
    - `String.prototype[@@iterator]()`.
- `'RegExpStringIterator'`: if the value is a RegExp String Iterator returned by
    - `RegExp.prototype[@@matchAll]()`, and
    - `String.prototype.matchAll()`.
- `'SegmenterStringIterator'`: if the value is a Segments Iterator returned by
    - the `[@@iterator]()` method of the Segments object returned by
      `Intl.Segmenter.prototype.segment()`.
- `'Error'`: if the value is an object of the JavaScript built-in `Error` class,
  or an object of a subclass of the `Error` class.
- `'Arguments`: if the value is the JavaScript built-in `arguments` object,
  which is a special array-like object storing the calling arguments of a
  function.
- `'Generator'`: if the value is a generator object, i.e., the object returned
  by a sync generator function.
- `'AsyncGenerator'`: if the value is an async generator object, i.e., the
  object returned by an async generator function.
- `value[Symbol.toStringTag]`: if the value has a customized `Symbol.toStringTag`
  property.
- `value.constructor.name`: if the value has a constructor with a name, and
  the name is not `'Object'`. That is, if the value is an instance of a user
  defined class, and the class has a name, the `subtype` is the name of that
  class.
- `'Object'`: if the value is an instance of a user defined anonymous class.
- the name extracted from `value.toString()`: if the value does not match
  any of the above cases, the `subtype` is the name extracted from the
  `value.toString()` result (usually a string of the form `'[object XXX]'`),
  and removes any inner spaces in the name. For example, if the `value.toString()`
  result is `'[object My Class ]'`, the `subtype` is `'MyClass'`.

The detailed list of supported JavaScript built-in objects can be found
at [Standard built-in objects].

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free
to open an issue or submit a pull request to the [GitHub repository].

## <span id="license">License</span>

[type-info] is distributed under the Apache 2.0 license.
See the [LICENSE](LICENSE) file for more details.


[type-info]: https://npmjs.com/package/@haixing_hu/type-info
[global object]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[Standard built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[GitHub repository]: https://github.com/Haixing-Hu/js-type-info
