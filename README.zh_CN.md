# typeinfo

[![npm package](https://img.shields.io/npm/v/@haixing_hu/typeinfo.svg)](https://npmjs.com/package/@haixing_hu/typeinfo)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/文档-中文版-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-typeinfo/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-typeinfo/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-typeinfo/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-typeinfo?branch=master)

[typeinfo] 是一个轻量级的JavaScript库，它扩展了`typeof`操作符的功能，允许获取
JavaScript 变量更精确可靠的类型信息。它为最新的 ECMAScript 标准提供了增强支持，并为您的项目
中的类型识别提供了全面的解决方案。

## Table of Contents

- [特性](#features)
- [安装](#installation)
- [例子](#example)
- [使用](#usage)
    - [Type](#type)
    - [Subtype](#subtype)
    - [Category](#category)
    - [特性检测常量](#feature-detection)
    - [类型原型常量](#type-prototype)
    - [类型检测函数](#type-detection)
- [为何无法识别`Proxy`类型](#why-no-proxy)
- [贡献](#contributing)
- [许可证](#license)

## <span id="features">特性</span>

- 对JavaScript变量提供准确的类型信息。
- 支持最新的ECMAScript标准。
- 易于集成到您的项目中。

## <span id="installation">安装</span>

您可以通过 `npm` 安装 [typeinfo]:
```sh
npm install @haixing_hu/typeinfo
```
或者通过 `yarn` 安装:
```bash
yarn add @haixing_hu/typeinfo
```

## <span id="example">例子</span>

下面是一个使用示例：
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
或者使用 [info.category](#category) 简化代码逻辑：
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

## <span id="usage">使用</span>

该库提供以下函数：
```js
function typeInfo(value)
```
- 参数：
    - `value: any`：指定的值。
- 返回值：
    - `object`：关于指定值类型的信息。

这个函数返回关于指定值的精确类型信息。返回的信息是一个具有以下属性的对象：
- `type: string`: 指定值的类型名称。这与内置的`typeof`操作符返回的值相同，不同的是`null`
  值的类型是`'null'`而不是`'object'`，并且我们增加了`'global'`表示 [global object] 的类型。
- `subtype: string`: 指定值的子类型名称。此属性仅在指定值的类型为`'object'`或`'function'`时存在。
- `category: string`：指定值的类别。这个属性适用于所有类型的值。更多详情请见[Category](#category)。
- `isPrimitive: boolean`: 是否为原始值。
- `isBuiltIn: boolean`: 是否为JavaScript内置的原始值或内置对象。
- `constructor: function`: 指定值的构造函数。此属性仅在指定值的类型为`'object'`时存在。

### <span id="type">Type</span>

由 `typeInfo()` 返回的类型信息对象具有一个 `type` 属性，它可能具有以下值：

- `'undefined'`: 如果值为`undefined`。
- `'null'`: 如果值为`null`。
- `'boolean'`: 如果值为原始布尔值。
- `'number'`: 如果值为原始数值。
- `'string'`: 如果值为原始字符串值。
- `'symbol'`: 如果值为符号值。
- `'bigint'`: 如果值为原始bigint值。
- `'function'`: 如果值为函数。
- `'object'`: 如果值为普通对象。

`type` 属性的值类似于内置的 `typeof` 操作符返回的值，不同之处在于 `null` 的类型是 `'null'` 
而不是 `'object'`。

### <span id="subtype">Subtype</span>

如果值的类型为`function`或`object`，`typeInfo()`返回的类型信息对象将包含`subtype`属性，
它是指定值的详细子类型名称。

`'function'`类型的可能`subtype`名称包括：

- `'Function'`: 如果值为同步函数。
- `'GeneratorFunction'`: 如果值为同步生成器函数。
- `'AsyncFunction'`: 如果值为异步函数。
- `'AsyncGeneratorFunction'`: 如果值为异步生成器函数。

请注意，`'AsyncFunction'`和`'AsyncGeneratorFunction'`子类型只在支持异步函数的
JavaScript 引擎中可用。

`'object'`类型的可能`subtype`名称包括：

- `'Boolean'`: 如果值为JavaScript内置的`Boolean`对象。
- `'Number'`: 如果值为JavaScript内置的`Number`对象。
- `'String'`: 如果值为JavaScript内置的`String`对象。
- `'RegExp'`: 如果值为正则表达式，即JavaScript内置的`RegExp`对象。
- `'Date'`: 如果值为JavaScript内置的`Date`对象。
- `'Map'`: 如果值为JavaScript内置的`Map`对象。
- `'WeakMap'`: 如果值为JavaScript内置的`WeakMap`对象。
- `'Set'`: 如果值为JavaScript内置的`Set`对象。
- `'WeakSet'`: 如果值为JavaScript内置的`WeakSet`对象。
- `'Array'`: 如果值为JavaScript内置的`Array`对象。
- `'Int8Array'`: 如果值为JavaScript内置的`Int8Array`对象。
- `'Uint8Array'`: 如果值为JavaScript内置的`Uint8Array`对象。
- `'Uint8ClampedArray'`: 如果值为JavaScript内置的`Uint8ClampedArray`对象。
- `'Int16Array'`: 如果值为JavaScript内置的`Int16Array`对象。
- `'Uint16Array'`: 如果值为JavaScript内置的`Uint16Array`对象。
- `'Int32Array'`: 如果值为JavaScript内置的`Int32Array`对象。
- `'Uint32Array'`: 如果值为JavaScript内置的`Uint32Array`对象。
- `'BigInt64Array'`: 如果值为JavaScript内置的`BigInt64Array`对象。
- `'BigUint64Array'`: 如果值为JavaScript内置的`BigUint64Array`对象。
- `'Float32Array'`: 如果值为JavaScript内置的`Float32Array`对象。
- `'Float64Array'`: 如果值为JavaScript内置的`Float64Array`对象。
- `'ArrayBuffer'`: 如果值为JavaScript内置的`ArrayBuffer`对象。
- `'SharedArrayBuffer'`: 如果值为JavaScript内置的`SharedArrayBuffer`对象。
- `'DataView'`: 如果值为JavaScript内置的`DataView`对象。
- `'WeakRef'`: 如果值为JavaScript内置的`WeakRef`对象。
- `'Promise'`: 如果值为JavaScript内置的`Promise`对象。
- `'Error'`：如果值为JavaScript内置`Error`类的对象。
- `'EvalError'`：如果值为JavaScript内置`EvalError`类的对象。
- `'RangeError'`：如果值为JavaScript内置`RangeError`类的对象。
- `'ReferenceError'`：如果值为JavaScript内置`ReferenceError`类的对象。
- `'SyntaxError'`：如果值为JavaScript内置`SyntaxError`类的对象。
- `'TypeError'`：如果值为JavaScript内置`TypeError`类的对象。
- `'URIError'`：如果值为JavaScript内置`URIError`类的对象。
- `'AggregateError'`：如果值为JavaScript内置`AggregateError`类的对象。
- `'InternalError'`：如果值为JavaScript内置`InternalError`类的对象。
- `'Intl.Collator'`: 如果值为JavaScript内置的`Intl.Collator`对象。
- `'Intl.DateTimeFormat'`: 如果值为JavaScript内置的`Intl.DateTimeFormat`对象。
- `'Intl.DisplayNames'`: 如果值为JavaScript内置的`Intl.DisplayNames`对象。
- `'Intl.DurationFormat'`: 如果值为JavaScript内置的`Intl.DurationFormat`对象。
- `'Intl.ListFormat'`: 如果值为JavaScript内置的`Intl.ListFormat`对象。
- `'Intl.Locale'`: 如果值为JavaScript内置的`Intl.Locale`对象。
- `'Intl.NumberFormat'`: 如果值为JavaScript内置的`Intl.NumberFormat`对象。
- `'Intl.PluralRules'`: 如果值为JavaScript内置的`Intl.PluralRules`对象。
- `'Intl.RelativeTimeFormat'`: 如果值为JavaScript内置的`Intl.RelativeTimeFormat`对象。
- `'Intl.Segmenter'`: 如果值为JavaScript内置的`Intl.Segmenter`对象。
- `'MapIterator'`: 如果值为由以下函数返回的映射对象 `Map` 的迭代器，：
    - `Map.prototype.values()`
    - `Map.prototype.keys()`
    - `Map.prototype.entries()`
    - `Map.prototype[@@iterator]()`
- `'SetIterator'`: 如果值为由以下函数返回的集合对象 `Set` 的迭代器：
    - `Set.prototype.values()`
    - `Set.prototype.keys()`
    - `Set.prototype.entries()`
    - `Set.prototype[@@iterator]()`
- `'ArrayIterator'`: 如果值为由以下函数返回的数组对象 `Array` 的迭代器：
    - `Array.prototype.values()`
    - `Array.prototype.keys()`
    - `Array.prototype.entries()`
    - `Array.prototype[@@iterator]()`
    - `TypedArray.prototype.values()`
    - `TypedArray.prototype.keys()`
    - `TypedArray.prototype.entries()`
- `'StringIterator'`: 如果值为由以下函数返回的字符串对象 `String` 的迭代器：
    - `String.prototype[@@iterator]()`
- `'RegExpStringIterator'`: 如果值为由以下函数返回的正则表达式对象 `RegExp` 的字符串迭代器：
    - `RegExp.prototype[@@matchAll]()`
    - `String.prototype.matchAll()`
- `'SegmenterStringIterator'`: 如果值为由以下函数返回的分段对象 `Intel.Segmenter` 的字
  符串迭代器：
    - `Intl.Segmenter.prototype.segment()`返回的Segments对象的`[@@iterator]()`方法。
- `'FinalizationRegistry'`: 如果值为JavaScript内置的`FinalizationRegistry`类的对象。
  一个 `FinalizationRegistry` 对象允许您在一个值被垃圾收集时执行一个回调函数。
- `'Arguments'`: 如果值为JavaScript内置的`arguments`对象；这是一个特殊的类数组对象，存储函数的调用参数。
- `'Generator'`: 如果值为生成器对象，即同步生成器函数返回的对象。
- `'AsyncGenerator'`: 如果值为异步生成器对象，即异步生成器函数返回的对象。
- `'GlobalObject'`: 如果值为[全局对象]。全局对象是始终存在于全局作用域中的对象。
- `'Object'`: 如果值为简单的 JavaScript 对象，即通过 `obj = { .. }` 语法定义的对象。
- `''` (空字符串): 如果值为用户定义的匿名类的实例。
- `value[Symbol.toStringTag]`: 如果值有自定义的 `Symbol.toStringTag` 属性。
- `value.constructor.name`: 如果值有具有名称的构造函数，并且名称不是 `'Object'`。
  也就是说，如果值为用户定义的类的实例，并且该类有名称，则`subtype`为该类的名称。
- 从 `value.toString()` 中提取的名称：如果值与上述任何情况都不匹配，则 `subtype` 是从
  `value.toString()`结果中提取的名称（通常为 `'[object XXX]'` 的形式），
  并删除名称中的任何内部空格。例如，如果 `value.toString()` 结果为 `'[object My Class ]'`，
  则 `subtype` 为 `'MyClass'`。

该函数支持的JavaScript内置对象的详细列表可在 [Standard built-in objects] 中找到。

### <span id="category">Category</span>

`typeInfo()` 返回的类型信息对象具有一个 `category` 属性，它是指定值的类别。
`category`属性的可能值包括：

- `'null'`：如果值为`null`。
- `'undefined'`：如果值为`undefined`。
- `'boolean'`: 若指定的值为 primitive `boolean` 值，或内置的 `Boolean` 对象。
- `'numeric'`: 若指定的值为 primitive `number` 值，或 primitive `bigint` 值，或内置的 `Number` 对象。
- `'string'`: 若指定的值为 primitive `string` 值，或内置的 `String` 对象。
- `'symbol'`: 若指定的值为 primitive `Symbol` 值，或内置的 `Boolean` 对象。
- `'function'`：如果值为函数，包括同步函数、异步函数、同步生成器函数和异步生成器函数。
- `'regexp'`：如果值为正则表达式，即JavaScript内置的`RegExp`对象。
- `'date'`：如果值为JavaScript内置的`Date`对象。
- `'map'`：如果值为JavaScript内置的`Map`对象。
- `'set'`：如果值为JavaScript内置的`Set`对象。
- `'array'`：如果值为JavaScript内置的`Array`对象。
- `'typed-array'`：如果值为JavaScript内置的类型化数组对象，包括`'Int8Array'`、
  `'Uint8Array'`、`'Uint8ClampedArray'`、`'Int16Array'`、`'Uint16Array'`、
  `'Int32Array'`、`'Uint32Array'`、`'BigInt64Array'`、`'BigUint64Array'`、
  `'Float32Array'`和`'Float64Array'`。
- `'buffer'`：如果值为JavaScript内置的缓冲区对象，包括`'ArrayBuffer'`和`'SharedArrayBuffer'`。
- `'data-view'`：如果值为JavaScript内置的`DataView`对象。
- `'weak'`：如果值为JavaScript内置的`WeakMap`, `WeakSet` or `WeakRef`对象。注意，
  弱引用对象不可被克隆。
- `'promise'`：如果值为JavaScript内置的`Promise`对象。
- `'error'`：如果值为JavaScript内置的`Error`类的对象，或`Error`类的子类的对象。
- `'intl'`：如果值为JavaScript内置的`Intl`命名空间下的对象，包括`'Intl.Collator'`、
  `'Intl.DateTimeFormat'`、`'Intl.DisplayNames'`、`'Intl.DurationFormat'`、
  `'Intl.ListFormat'`、`'Intl.Locale'`、`'Intl.NumberFormat'`、
  `'Intl.PluralRules'`和`'Intl.RelativeTimeFormat'`。
- `'iterator'`：如果值为迭代器对象，包括`'MapIterator'`、`'SetIterator'`、
  `'ArrayIterator'`、`'StringIterator'`、`'RegExpStringIterator'`
  和`'SegmenterStringIterator'`。
- `'finalization-registry'`：如果值为JavaScript内置的`FinalizationRegistry`
  类的实例。`FinalizationRegistry`对象允许您在值被垃圾回收时请求回调。
- `'global'`：如果值为[全局对象]。
- `'arguments'`：如果值为JavaScript内置的`arguments`对象。
- `'DOM'`: 如果值为DOM对象，包括`'Node'`、`'Element'`、`'Document'`、`'Window'`等。
- `'CSSOM'`: 如果值为CSSOM对象，包括`'CSSStyleDeclaration'`、`'CSSRule'`、`'CSSStyleSheet'`等。
- `'event'`: 如果值为事件对象，包括`'Event'`、`'MouseEvent'`、`'KeyboardEvent'`等。
- `'console'`: 如果值为控制台对象，即`'window.console'`。
- `'file'`: 如果值为文件对象，包括`'File'`、`'FileList'`、`'FileReader'`等。
- `'generator'`：如果值为生成器对象，即由同步生成器函数返回的对象，包括`'Generator'`
  和`'AsyncGenerator'`。
- `'object'`：如果值为普通的JavaScript对象。
- `'class'`：如果值为用户定义类的实例。

### <span id="feature-detection">特性检测常量</span>

此库提供以下常量用于 JavaScript 引擎的特性检测：

- `AGGREGATEERROR_EXISTS`：JavaScript 内置类 `AggregateError` 是否存在。
- `ARRAYBUFFER_EXISTS`：JavaScript 内置类 `ArrayBuffer` 是否存在。
- `ARRAY_ISARRAY_EXISTS`：JavaScript 内置函数 `Array.isArray()` 是否存在。
- `ARRAY_ITERATOR_EXISTS`：JavaScript 内置函数 `Array.prototype[Symbol.iterator]` 是否存在。
- `ATOMICS_EXISTS`：JavaScript 内置对象 `Atomics` 是否存在。
- `BIGINT64ARRAY_EXISTS`：JavaScript 内置类 `BigInt64Array` 是否存在。
- `BIGINT_EXISTS`：JavaScript 内置原始类型 `bigint` 和内置函数 `BigInt` 是否存在。
- `BIGUINT64ARRAY_EXISTS`：JavaScript 内置类 `BigUint64Array` 是否存在。
- `DATAVIEW_EXISTS`：JavaScript 内置类 `DataView` 是否存在。
- `FINALIZATIONREGISTRY_EXISTS`：JavaScript 内置类 `FinalizationRegistry` 是否存在。
- `FLOAT32ARRAY_EXISTS`：JavaScript 内置类 `Float32Array` 是否存在。
- `FLOAT64ARRAY_EXISTS`：JavaScript 内置类 `Float64Array` 是否存在。
- `INT16ARRAY_EXISTS`：JavaScript 内置类 `Int16Array` 是否存在。
- `INT32ARRAY_EXISTS`：JavaScript 内置类 `Int32Array` 是否存在。
- `INT8ARRAY_EXISTS`：JavaScript 内置类 `Int8Array` 是否存在。
- `INTERNALERROR_EXISTS`：JavaScript 内置类 `InternalError` 是否存在。
- `INTL_COLLATOR_EXISTS`：JavaScript 内置类 `Intl.Collator` 是否存在。
- `INTL_DATETIMEFORMAT_EXISTS`：JavaScript 内置类 `Intl.DateTimeFormat` 是否存在。
- `INTL_DISPLAYNAMES_EXISTS`：JavaScript 内置类 `Intl.DisplayNames` 是否存在。
- `INTL_DURATIONFORMAT_EXISTS`：JavaScript 内置类 `Intl.DurationFormat` 是否存在。
- `INTL_EXISTS`：JavaScript 内置 `Intl` 命名空间是否存在。
- `INTL_LISTFORMAT_EXISTS`：JavaScript 内置类 `Intl.ListFormat` 是否存在。
- `INTL_LOCALE_EXISTS`：JavaScript 内置类 `Intl.Locale` 是否存在。
- `INTL_NUMBERFORMAT_EXISTS`：JavaScript 内置类 `Intl.NumberFormat` 是否存在。
- `INTL_PLURALRULES_EXISTS`：JavaScript 内置类 `Intl.PluralRules` 是否存在。
- `INTL_RELATIVETIMEFORMAT_EXISTS`：JavaScript 内置类 `Intl.RelativeTimeFormat` 是否存在。
- `INTL_SEGMENTER_EXISTS`：JavaScript 内置类 `Intl.Segmenter` 是否存在。
- `INTL_SEGMENTER_ITERATOR_EXISTS`：JavaScript 内置函数 `Intl.Segmenter.prototype[Symbol.iterator]` 是否存在。
- `MAP_ENTRIES_EXISTS`：JavaScript 内置函数 `Map.prototype.entries()` 是否存在。
- `MAP_EXISTS`：JavaScript 内置类 `Map` 是否存在。
- `MAP_ITERATOR_EXISTS`：JavaScript 内置函数 `Map.prototype[Symbol.iterator]` 是否存在。
- `PROMISE_EXISTS`：JavaScript 内置类 `Promise` 是否存在。
- `PROXY_EXISTS`：JavaScript 内置类 `Proxy` 是否存在。
- `REFLECT_EXISTS`：JavaScript 内置命名空间 `Reflect` 是否存在。
- `REGEXP_EXISTS`：JavaScript 内置类 `RegExp` 是否存在。
- `REGEXP_ITERATOR_EXISTS`：JavaScript 内置函数 `RegExp.prototype[Symbol.matchAll]` 是否存在。
- `SET_ENTRIES_EXISTS`：JavaScript 内置函数 `Set.prototype.entries()` 是否存在。
- `SET_EXISTS`：JavaScript 内置类 `Set` 是否存在。
- `SET_ITERATOR_EXISTS`：JavaScript 内置函数 `Set.prototype[Symbol.iterator]` 是否存在。
- `SHAREDARRAYBUFFER_EXISTS`：JavaScript 内置类 `SharedArrayBuffer` 是否存在。
- `STRING_ITERATOR_EXISTS`：JavaScript 内置函数 `String.prototype[Symbol.iterator]` 是否存在。
- `SYMBOL_EXISTS`：JavaScript 内置 `Symbol` 是否存在。
- `SYMBOL_ITERATOR_EXISTS`：JavaScript 内置函数 `Symbol.prototype[Symbol.iterator]` 是否存在。
- `SYMBOL_MATCH_ALL_EXISTS`：JavaScript 内置函数 `Symbol.prototype[Symbol.matchAll]` 是否存在。
- `SYMBOL_TO_STRING_TAG_EXISTS`：JavaScript 内置函数 `Symbol.prototype[Symbol.toStringTag]` 是否存在。
- `UINT16ARRAY_EXISTS`：JavaScript 内置类 `Uint16Array` 是否存在。
- `UINT32ARRAY_EXISTS`：JavaScript 内置类 `Uint32Array` 是否存在。
- `UINT8ARRAY_EXISTS`：JavaScript 内置类 `Uint8Array` 是否存在。
- `UINT8CLAMPEDARRAY_EXISTS`：JavaScript 内置类 `Uint8ClampedArray` 是否存在。
- `WEAKMAP_EXISTS`：JavaScript 内置类 `WeakMap` 是否存在。
- `WEAKREF_EXISTS`：JavaScript 内置类 `WeakRef` 是否存在。
- `WEAKSET_EXISTS`：JavaScript 内置类 `WeakSet` 是否存在。

以下代码展示如何使用这些常量：
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

### <span id="type-prototype">类型原型常量</span>

这个库为 JavaScript 内建对象的原型提供了以下常量：

- `AggregateErrorPrototype`：JavaScript内建`AggregateError`对象的原型，如果`AggregateError`类不存在，则为`undefined`。
- `ArrayBufferPrototype`：JavaScript内建`ArrayBuffer`对象的原型，如果`ArrayBuffer`类不存在，则为`undefined`。
- `ArrayIteratorPrototype`：JavaScript内建数组迭代器对象的原型，如果数组迭代器不存在，则为`undefined`。
- `BigInt64ArrayPrototype`：JavaScript内建`BigInt64Array`对象的原型，如果`BigInt64Array`类不存在，则为`undefined`。
- `BigIntPrototype`：JavaScript内建`bigint`基本类型的原型，如果`bigint`基本类型不存在，则为`undefined`。
- `BigUint64ArrayPrototype`：JavaScript内建`BigUint64Array`对象的原型，如果`BigUint64Array`类不存在，则为`undefined`。
- `DataViewPrototype`：JavaScript内建`DataView`对象的原型，如果`DataView`类不存在，则为`undefined`。
- `FinalizationRegistryPrototype`：JavaScript内建`FinalizationRegistry`对象的原型，如果`FinalizationRegistry`类不存在，则为`undefined`。
- `Float32ArrayPrototype`：JavaScript内建`Float32Array`对象的原型，如果`Float32Array`类不存在，则为`undefined`。
- `Float64ArrayPrototype`：JavaScript内建`Float64Array`对象的原型，如果`Float64Array`类不存在，则为`undefined`。
- `Int16ArrayPrototype`：JavaScript内建`Int16Array`对象的原型，如果`Int16Array`类不存在，则为`undefined`。
- `Int32ArrayPrototype`：JavaScript内建`Int32Array`对象的原型，如果`Int32Array`类不存在，则为`undefined`。
- `Int8ArrayPrototype`：JavaScript内建`Int8Array`对象的原型，如果`Int8Array`类不存在，则为`undefined`。
- `IntelSegmentIteratorPrototype`：JavaScript内建`Intl.SegmentIterator`对象的原型，如果`Intl.SegmentIterator`类不存在，则为`undefined`。
- `InternalErrorPrototype`：JavaScript内建`InternalError`对象的原型，如果`InternalError`类不存在，则为`undefined`。
- `IntlCollatorPrototype`：JavaScript内建`Intl.Collator`对象的原型，如果`Intl.Collator`类不存在，则为`undefined`。
- `IntlDateTimeFormatPrototype`：JavaScript内建`Intl.DateTimeFormat`对象的原型，如果`Intl.DateTimeFormat`类不存在，则为`undefined`。
- `IntlDisplayNamesPrototype`：JavaScript内建`Intl.DisplayNames`对象的原型，如果`Intl.DisplayNames`类不存在，则为`undefined`。
- `IntlDurationFormatPrototype`：JavaScript内建`Intl.DurationFormat`对象的原型，如果`Intl.DurationFormat`类不存在，则为`undefined`。
- `IntlListFormatPrototype`：JavaScript内建`Intl.ListFormat`对象的原型，如果`Intl.ListFormat`类不存在，则为`undefined`。
- `IntlLocalePrototype`：JavaScript内建`Intl.Locale`对象的原型，如果`Intl.Locale`类不存在，则为`undefined`。
- `IntlNumberFormatPrototype`：JavaScript内建`Intl.NumberFormat`对象的原型，如果`Intl.NumberFormat`类不存在，则为`undefined`。
- `IntlPluralRulesPrototype`：JavaScript内建`Intl.PluralRules`对象的原型，如果`Intl.PluralRules`类不存在，则为`undefined`。
- `IntlRelativeTimeFormatPrototype`：JavaScript内建`Intl.RelativeTimeFormat`对象的原型，如果`Intl.RelativeTimeFormat`类不存在，则为`undefined`。
- `IntlSegmenterPrototype`：JavaScript内建`Intl.Segmenter`对象的原型，如果`Intl.Segmenter`类不存在，则为`undefined`。
- `MapIteratorPrototype`：JavaScript内建`Map`迭代器对象的原型，如果`Map`迭代器不存在，则为`undefined`。
- `MapPrototype`：JavaScript内建`Map`对象的原型，如果`Map`类不存在，则为`undefined`。
- `PromisePrototype`：JavaScript内建`Promise`对象的原型，如果`Promise`类不存在，则为`undefined`。
- `RegExpIteratorPrototype`：JavaScript内建`RegExp`迭代器对象的原型，

### <span id="type-detection">类型检测函数</span>

该库提供了以下用于类型检测的函数：

- `isArguments(value): boolean`：判断指定值是否为JavaScript内建的`arguments`对象。
- `isBoolean(value): boolean`：判断指定值是否为JavaScript内建的`boolean`基本类型或`Boolean`对象。
- `isBuffer(value): boolean`：判断指定值是否为JavaScript内建的`ArrayBuffer`或`SharedArrayBuffer`对象。
- `isBuiltInClass(Class): boolean`：判断指定的类是否为JavaScript内建类。
- `isCollection(value): boolean`：判断指定值是否为JavaScript内建的集合对象，即`Map`或`Set`对象。
- `isError(value): boolean`：判断指定值是否为JavaScript内建`Error`类的实例，或`Error`类子类的实例。
- `isIntl(value): boolean`：判断指定值是否为JavaScript内建的`Intl`命名空间下的对象。
- `isIterator(value): boolean`：判断指定值是否为迭代器对象，即具有`next()`方法的对象。
- `isNumeric(value): boolean`：判断指定值是否为JavaScript内建的`number`基本类型、`bigint`基本类型或`Number`对象。
- `isString(value): boolean`：判断指定值是否为JavaScript内建的`string`基本类型或`String`对象。
- `isTypedArray(value): boolean`：判断指定值是否为JavaScript内建的类型化数组对象。
- `isWeak(value): boolean`：判断指定值是否为JavaScript内建的弱引用对象，即`WeakMap`、`WeakSet`或`WeakRef`对象。

以下代码展示了如何使用这些函数：
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

## <span id="why-no-proxy">为何无法识别`Proxy`类型</span>

在JavaScript的设计中，`Proxy`对象的主要目的之一是允许开发者自定义对象操作的行为，它能代理另一个对象（即目标对象）。
`Proxy`最关键的特性之一便是其透明性——对于外部代码而言，除非代理对象被设计为有意暴露自身，
否则很难区别一个`Proxy`对象与其所代理的目标对象。这主要是因为`Proxy`能够拦截并重定义几乎所有的对象基础操作，
包括但不限于属性读取、设置以及属性的枚举。

因此，当使用[typeinfo]等库尝试获取对象的类型信息时，由于`Proxy`的这种透明化特征，这些库仅能处理并"看见"最终的操作结果，
而无法直接判断这些操作是否受到`Proxy`的拦截。如果`Proxy`完美模仿了其所代理的目标对象的行为，那么就不存在一个可靠的方法，
通过操作结果来断定该对象是否为一个`Proxy`。简言之，`Proxy`的设计哲学在于使其自身对外部观察几乎不可见，因此，
除非代理对象特意通过某些拦截行为暴露其身份，否则即便是专门用于获取类型信息的库也无法确切判断一个对象是否为`Proxy`。
这样的设计极大地增强了`Proxy`的强大性和灵活性，但同时也意味着直接通过外部检测来识别`Proxy`对象将是一个挑战。

## <span id="contributing">贡献</span>

如果您发现任何问题或有改进建议，请随时在[GitHub仓库]中提出问题或提交拉取请求。

## <span id="license">许可证</span>

[typeinfo] 在 Apache 2.0 许可下分发。有关更多详情，请参阅[LICENSE](LICENSE)文件。


[typeinfo]: https://npmjs.com/package/@haixing_hu/typeinfo
[全局对象]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[Standard built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[GitHub repository]: https://github.com/Haixing-Hu/js-typeinfo
