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
- `'type'`: 指定值的类型名称。这与内置的`typeof`操作符返回的值相同，不同的是`null`的类型是
  `'null'`而不是`'object'`，并且我们增加了`'global'`表示 [global object] 的类型。
- `'subtype'`: 指定值的子类型名称。此属性仅在指定值的类型为`'object'`或`'function'`时存在。
- `'isPrimitive'`: 是否为原始值。
- `'isBuiltIn'`: 是否为JavaScript内置的原始值或内置对象。
- `'constructor'`: 指定值的构造函数。此属性仅在指定值的类型为`'object'`时存在。

可能的`type`值包括：
- `'undefined'`: 如果值为`undefined`。
- `'null'`: 如果值为`null`。
- `'boolean'`: 如果值为原始布尔值。
- `'number'`: 如果值为原始数值。
- `'string'`: 如果值为原始字符串值。
- `'symbol'`: 如果值为符号值。
- `'bigint'`: 如果值为原始bigint值。
- `'function'`: 如果值为函数。
- `'object'`: 如果值为普通对象。

如果值的类型为`function`或`object`，返回的类型信息对象将包含`subtype`属性，它是指定值的详细子类型名称。

`'function'`类型的可能`subtype`名称包括：
- `'Function'`: 如果值为同步函数。
- `'GeneratorFunction'`: 如果值为同步生成器函数。
- `'AsyncFunction'`: 如果值为异步函数。
- `'AsyncGeneratorFunction'`: 如果值为异步生成器函数。

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
- `'Error'`: 如果值为JavaScript内置的`Error`类的对象，或`Error`类的子类的对象。
- `'FinalizationRegistry'`: 如果值为JavaScript内置的`FinalizationRegistry`类的对象。
  一个 `FinalizationRegistry` 对象允许您在一个值被垃圾收集时执行一个回调函数。
- `'Arguments'`: 如果值为JavaScript内置的`arguments`对象；这是一个特殊的类数组对象，存储函数的调用参数。
- `'Generator'`: 如果值为生成器对象，即同步生成器函数返回的对象。
- `'AsyncGenerator'`: 如果值为异步生成器对象，即异步生成器函数返回的对象。
- `'GlobalObject'`: 如果值为[全局对象]。全局对象是始终存在于全局作用域中的对象。
- `value[Symbol.toStringTag]`: 如果值有自定义的 `Symbol.toStringTag` 属性。
- `value.constructor.name`: 如果值有具有名称的构造函数，并且名称不是 `'Object'`。
  也就是说，如果值是用户定义的类的实例，并且该类有名称，则`subtype`为该类的名称。
- `'Object'`: 如果值是用户定义的匿名类的实例。
- 从 `value.toString()` 中提取的名称：如果值与上述任何情况都不匹配，则 `subtype` 是从
  `value.toString()`结果中提取的名称（通常为 `'[object XXX]'` 的形式），
  并删除名称中的任何内部空格。例如，如果 `value.toString()` 结果为 `'[object My Class ]'`，
  则 `subtype` 为 `'MyClass'`。


该函数支持的JavaScript内置对象的详细列表可在 [Standard built-in objects] 中找到。

## <span id="contributing">贡献</span>

如果您发现任何问题或有改进建议，请随时在[GitHub仓库]中提出问题或提交拉取请求。

## <span id="license">许可证</span>

[typeinfo] 在 Apache 2.0 许可下分发。有关更多详情，请参阅[LICENSE](LICENSE)文件。


[typeinfo]: https://npmjs.com/package/@haixing_hu/typeinfo
[全局对象]: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
[Standard built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[GitHub repository]: https://github.com/Haixing-Hu/js-typeinfo
