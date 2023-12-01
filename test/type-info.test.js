////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  typeInfo,
  SYMBOL_EXISTS,
  SYMBOL_TO_STRING_TAG_EXISTS,
  BIGINT_EXISTS,
  REGEXP_EXISTS,
  AGGREGATEERROR_EXIST,
  INTERNALERROR_EXIST,
  MAP_EXISTS,
  SET_EXISTS,
  WEAKMAP_EXISTS,
  WEAKSET_EXISTS,
  INT8ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  UINT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  BIGINT64ARRAY_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  ARRAYBUFFER_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  DATAVIEW_EXISTS,
  WEAKREF_EXISTS,
  PROMISE_EXISTS,
  MAP_ITERATOR_EXISTS,
  SET_ITERATOR_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  STRING_ITERATOR_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  INTL_COLLATOR_EXISTS,
  INTL_DATETIMEFORMAT_EXISTS,
  INTL_DISPLAYNAMES_EXISTS,
  INTL_DURATIONFORMAT_EXISTS,
  INTL_LISTFORMAT_EXISTS,
  INTL_LOCALE_EXISTS,
  INTL_NUMBERFORMAT_EXISTS,
  INTL_PLURALRULES_EXISTS,
  INTL_RELATIVETIMEFORMAT_EXISTS,
  INTL_SEGMENTER_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
  FINALIZATIONREGISTRY_EXISTS,
} from '../src';

/* eslint-disable no-undef, func-names, no-empty-function, prefer-regex-literals, max-classes-per-file */

const ASYNC_FUNCTION_EXISTS = ((async function () {}).constructor.name === 'AsyncFunction');
const globalObject = globalThis;

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function', () => {
  test('undefined', () => {
    expect(typeInfo(undefined)).toEqual({
      type: 'undefined',
      isPrimitive: true,
      isBuiltIn: true,
    });
  });
  test('null', () => {
    expect(typeInfo(null)).toEqual({
      type: 'null',
      isPrimitive: true,
      isBuiltIn: true,
    });
  });
  test('primitive boolean', () => {
    const expected = {
      type: 'boolean',
      isPrimitive: true,
      isBuiltIn: true,
    };
    expect(typeInfo(true)).toEqual(expected);
    expect(typeInfo(false)).toEqual(expected);
  });
  test('primitive number', () => {
    const expected = {
      type: 'number',
      isPrimitive: true,
      isBuiltIn: true,
    };
    expect(typeInfo(0)).toEqual(expected);
    expect(typeInfo(+0)).toEqual(expected);
    expect(typeInfo(-0)).toEqual(expected);
    expect(typeInfo(1)).toEqual(expected);
    expect(typeInfo(-1)).toEqual(expected);
    expect(typeInfo(1.5)).toEqual(expected);
    expect(typeInfo(-1.5)).toEqual(expected);
    expect(typeInfo(Infinity)).toEqual(expected);
    expect(typeInfo(-Infinity)).toEqual(expected);
    expect(typeInfo(NaN)).toEqual(expected);
  });
  test('primitive string', () => {
    const expected = {
      type: 'string',
      isPrimitive: true,
      isBuiltIn: true,
    };
    expect(typeInfo('')).toEqual(expected);
    expect(typeInfo('abc')).toEqual(expected);
  });
  if (SYMBOL_EXISTS) {
    test('primitive symbol', () => {
      const expected = {
        type: 'symbol',
        isPrimitive: true,
        isBuiltIn: true,
      };
      expect(typeInfo(Symbol(''))).toEqual(expected);
      expect(typeInfo(Symbol('xyz'))).toEqual(expected);
      if (SYMBOL_TO_STRING_TAG_EXISTS) {
        expect(typeInfo(Symbol.toStringTag)).toEqual(expected);
      }
    });
  }
  if (BIGINT_EXISTS) {
    test('primitive bigint', () => {
      const expected = {
        type: 'bigint',
        isPrimitive: true,
        isBuiltIn: true,
      };
      expect(typeInfo(1n)).toEqual(expected);
      expect(typeInfo(BigInt(1))).toEqual(expected);
    });
  }
  test('function', () => {
    const expected = {
      type: 'function',
      subtype: 'Function',
      isPrimitive: false,
      isBuiltIn: true,
    };
    expect(typeInfo(() => {})).toEqual(expected);
  });
  test('generator function', () => {
    const expected = {
      type: 'function',
      subtype: 'GeneratorFunction',
      isPrimitive: false,
      isBuiltIn: true,
    };
    function* foo() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    expect(typeInfo(foo)).toEqual(expected);
  });
  if (ASYNC_FUNCTION_EXISTS) {
    test('async function', async () => {
      const expected = {
        type: 'function',
        subtype: 'AsyncFunction',
        isPrimitive: false,
        isBuiltIn: true,
      };
      async function myFunc() {
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('foo');
          }, 300);
        });
      }
      expect(typeInfo(myFunc)).toEqual(expected);
    });
    test('async generator function', () => {
      const expected = {
        type: 'function',
        subtype: 'AsyncGeneratorFunction',
        isPrimitive: false,
        isBuiltIn: true,
      };
      async function* foo() {
        yield await Promise.resolve('a');
        yield await Promise.resolve('b');
        yield await Promise.resolve('c');
      }
      expect(typeInfo(foo)).toEqual(expected);
    });
  }
  test('built-in Boolean object', () => {
    const expected = {
      type: 'object',
      subtype: 'Boolean',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: Boolean,
    };
    expect(typeInfo(new Boolean(true))).toEqual(expected);
    expect(typeInfo(new Boolean(false))).toEqual(expected);
    expect(typeInfo(new Boolean('true'))).toEqual(expected);
    expect(typeInfo(new Boolean('false'))).toEqual(expected);
  });
  test('built-in Number object', () => {
    const expected = {
      type: 'object',
      subtype: 'Number',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: Number,
    };
    expect(typeInfo(new Number(0))).toEqual(expected);
    expect(typeInfo(new Number(+0))).toEqual(expected);
    expect(typeInfo(new Number(-0))).toEqual(expected);
    expect(typeInfo(new Number(1))).toEqual(expected);
    expect(typeInfo(new Number(-1))).toEqual(expected);
    expect(typeInfo(new Number(1.5))).toEqual(expected);
    expect(typeInfo(new Number(-1.5))).toEqual(expected);
    expect(typeInfo(new Number(Infinity))).toEqual(expected);
    expect(typeInfo(new Number(-Infinity))).toEqual(expected);
    expect(typeInfo(new Number(NaN))).toEqual(expected);
  });
  test('built-in String object', () => {
    const expected = {
      type: 'object',
      subtype: 'String',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: String,
    };
    expect(typeInfo(new String(''))).toEqual(expected);
    expect(typeInfo(new String('abc'))).toEqual(expected);
  });
  if (REGEXP_EXISTS) {
    test('RegExp', () => {
      const expected = {
        type: 'object',
        subtype: 'RegExp',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: RegExp,
      };
      expect(typeInfo(/^[0-9]+[a-z]+$/)).toEqual(expected);
      expect(typeInfo(new RegExp('^[0-9]+[a-z]+$', 'i'))).toEqual(expected);
      expect(typeInfo(new RegExp(/^[0-9]+[a-z]+$/, 'i'))).toEqual(expected);
    });
  }
  test('Date', () => {
    const expected = {
      type: 'object',
      subtype: 'Date',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: Date,
    };
    expect(typeInfo(new Date())).toEqual(expected);
  });
  if (MAP_EXISTS) {
    test('Map', () => {
      const expected = {
        type: 'object',
        subtype: 'Map',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Map,
      };
      expect(typeInfo(new Map())).toEqual(expected);
    });
  }
  if (SET_EXISTS) {
    test('Set', () => {
      const expected = {
        type: 'object',
        subtype: 'Set',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Set,
      };
      expect(typeInfo(new Set())).toEqual(expected);
    });
  }
  if (WEAKMAP_EXISTS) {
    test('WeakMap', () => {
      const expected = {
        type: 'object',
        subtype: 'WeakMap',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: WeakMap,
      };
      expect(typeInfo(new WeakMap())).toEqual(expected);
    });
  }
  if (WEAKSET_EXISTS) {
    test('WeakSet', () => {
      const expected = {
        type: 'object',
        subtype: 'WeakSet',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: WeakSet,
      };
      expect(typeInfo(new WeakSet())).toEqual(expected);
    });
  }
  test('Array', () => {
    const expected = {
      type: 'object',
      subtype: 'Array',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: Array,
    };
    expect(typeInfo([])).toEqual(expected);
    expect(typeInfo([1, 2, 3])).toEqual(expected);
    expect(typeInfo(new Array([1, 2, 3]))).toEqual(expected);
  });
  if (INT8ARRAY_EXISTS) {
    test('Int8Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Int8Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Int8Array,
      };
      expect(typeInfo(new Int8Array(2))).toEqual(expected);
    });
  }
  if (UINT8ARRAY_EXISTS) {
    test('Uint8Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Uint8Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Uint8Array,
      };
      expect(typeInfo(new Uint8Array(2))).toEqual(expected);
    });
  }
  if (UINT8CLAMPEDARRAY_EXISTS) {
    test('Uint8ClampedArray', () => {
      const expected = {
        type: 'object',
        subtype: 'Uint8ClampedArray',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Uint8ClampedArray,
      };
      expect(typeInfo(new Uint8ClampedArray(2))).toEqual(expected);
    });
  }
  if (INT16ARRAY_EXISTS) {
    test('Int16Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Int16Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Int16Array,
      };
      expect(typeInfo(new Int16Array(2))).toEqual(expected);
    });
  }
  if (UINT16ARRAY_EXISTS) {
    test('Uint16Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Uint16Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Uint16Array,
      };
      expect(typeInfo(new Uint16Array(2))).toEqual(expected);
    });
  }
  if (INT32ARRAY_EXISTS) {
    test('Int32Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Int32Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Int32Array,
      };
      expect(typeInfo(new Int32Array(2))).toEqual(expected);
    });
  }
  if (UINT32ARRAY_EXISTS) {
    test('Uint32Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Uint32Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Uint32Array,
      };
      expect(typeInfo(new Uint32Array(2))).toEqual(expected);
    });
  }
  if (BIGINT64ARRAY_EXISTS) {
    test('BigInt64Array', () => {
      const expected = {
        type: 'object',
        subtype: 'BigInt64Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: BigInt64Array,
      };
      expect(typeInfo(new BigInt64Array(2))).toEqual(expected);
    });
  }
  if (BIGUINT64ARRAY_EXISTS) {
    test('BigUint64Array', () => {
      const expected = {
        type: 'object',
        subtype: 'BigUint64Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: BigUint64Array,
      };
      expect(typeInfo(new BigUint64Array(2))).toEqual(expected);
    });
  }
  if (FLOAT32ARRAY_EXISTS) {
    test('Float32Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Float32Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Float32Array,
      };
      expect(typeInfo(new Float32Array(2))).toEqual(expected);
    });
  }
  if (FLOAT64ARRAY_EXISTS) {
    test('Float64Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Float64Array',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Float64Array,
      };
      expect(typeInfo(new Float64Array(2))).toEqual(expected);
    });
  }
  if (ARRAYBUFFER_EXISTS) {
    test('ArrayBuffer', () => {
      const expected = {
        type: 'object',
        subtype: 'ArrayBuffer',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: ArrayBuffer,
      };
      expect(typeInfo(new ArrayBuffer(2))).toEqual(expected);
    });
  }
  if (SHAREDARRAYBUFFER_EXISTS) {
    test('SharedArrayBuffer', () => {
      const expected = {
        type: 'object',
        subtype: 'SharedArrayBuffer',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: SharedArrayBuffer,
      };
      expect(typeInfo(new SharedArrayBuffer(2))).toEqual(expected);
    });
  }
  if (DATAVIEW_EXISTS) {
    test('DataView', () => {
      const expected = {
        type: 'object',
        subtype: 'DataView',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: DataView,
      };
      expect(typeInfo(new DataView(new ArrayBuffer(2)))).toEqual(expected);
    });
  }
  if (WEAKREF_EXISTS) {
    test('WeakRef', () => {
      const expected = {
        type: 'object',
        subtype: 'WeakRef',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: WeakRef,
      };
      const obj = {};
      expect(typeInfo(new WeakRef(obj))).toEqual(expected);
    });
  }
  if (PROMISE_EXISTS) {
    test('Promise', () => {
      const expected = {
        type: 'object',
        subtype: 'Promise',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Promise,
      };
      const myPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve('foo');
        }, 300);
      });
      expect(typeInfo(myPromise)).toEqual(expected);
    });
  }
  if (MAP_ITERATOR_EXISTS) {
    test('MapIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'MapIterator',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: new Map().entries().constructor,
      };
      const map = new Map();
      expect(typeInfo(map.entries())).toEqual(expected);
      expect(typeInfo(map.keys())).toEqual(expected);
      expect(typeInfo(map.values())).toEqual(expected);
      expect(typeInfo(map[Symbol.iterator]())).toEqual(expected);
    });
  }
  if (SET_ITERATOR_EXISTS) {
    test('SetIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'SetIterator',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: new Set().entries().constructor,
      };
      const set = new Set();
      expect(typeInfo(set.entries())).toEqual(expected);
      expect(typeInfo(set.values())).toEqual(expected);
      expect(typeInfo(set.keys())).toEqual(expected);
      expect(typeInfo(set[Symbol.iterator]())).toEqual(expected);
    });
  }
  if (ARRAY_ITERATOR_EXISTS) {
    test('ArrayIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'ArrayIterator',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: [].values().constructor,
      };
      const array = [1, 2, 3];
      expect(typeInfo(array.values())).toEqual(expected);
      expect(typeInfo(array.keys())).toEqual(expected);
      expect(typeInfo(array.entries())).toEqual(expected);
      expect(typeInfo(array[Symbol.iterator]())).toEqual(expected);
    });
    if (INT8ARRAY_EXISTS) {
      test('TypedArrayIterator', () => {
        const expected = {
          type: 'object',
          subtype: 'ArrayIterator',
          isPrimitive: false,
          isBuiltIn: true,
          constructor: [].values().constructor,
        };
        const int8array = new Int8Array(2);
        expect(typeInfo(int8array.values())).toEqual(expected);
        expect(typeInfo(int8array.keys())).toEqual(expected);
        expect(typeInfo(int8array.entries())).toEqual(expected);
        expect(typeInfo(int8array[Symbol.iterator]())).toEqual(expected);
      });
    }
  }
  if (STRING_ITERATOR_EXISTS) {
    test('StringIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'StringIterator',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: ''[Symbol.iterator]().constructor,
      };
      const str = 'hello world';
      expect(typeInfo(str[Symbol.iterator]())).toEqual(expected);
    });
  }
  if (REGEXP_ITERATOR_EXISTS) {
    test('RegExpStringIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'RegExpStringIterator',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: /^[a-z]+/[Symbol.matchAll]().constructor,
      };
      const regexp = /^[a-z]+/;
      expect(typeInfo(regexp[Symbol.matchAll]())).toEqual(expected);
    });
  }
  if (INTL_SEGMENTER_ITERATOR_EXISTS) {
    test('SegmenterStringIterator', () => {
      const string1 = 'Que ma joie demeure';
      const segmenterFrGrapheme = new Intl.Segmenter('fr', {
        granularity: 'grapheme',
      });
      const graphemeSegments = segmenterFrGrapheme.segment(string1);
      const expected = {
        type: 'object',
        subtype: 'SegmenterStringIterator',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: graphemeSegments[Symbol.iterator]().constructor,
      };
      expect(typeInfo(graphemeSegments[Symbol.iterator]())).toEqual(expected);
    });
  }
  test('Error', () => {
    const expected = {
      type: 'object',
      subtype: 'Error',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: Error,
    };
    expect(typeInfo(new Error())).toEqual(expected);
  });
  test('EvalError', () => {
    const expected = {
      type: 'object',
      subtype: 'Error',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: EvalError,
    };
    expect(typeInfo(new EvalError('Hello'))).toEqual(expected);
  });
  test('RangeError', () => {
    const expected = {
      type: 'object',
      subtype: 'Error',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: RangeError,
    };
    expect(typeInfo(new RangeError('Hello'))).toEqual(expected);
  });
  test('ReferenceError', () => {
    const expected = {
      type: 'object',
      subtype: 'Error',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: ReferenceError,
    };
    expect(typeInfo(new ReferenceError('Hello'))).toEqual(expected);
  });
  test('SyntaxError', () => {
    const expected = {
      type: 'object',
      subtype: 'Error',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: SyntaxError,
    };
    expect(typeInfo(new SyntaxError('Hello'))).toEqual(expected);
  });
  test('TypeError', () => {
    const expected = {
      type: 'object',
      subtype: 'Error',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: TypeError,
    };
    expect(typeInfo(new TypeError('Hello'))).toEqual(expected);
  });
  test('URIError', () => {
    const expected = {
      type: 'object',
      subtype: 'Error',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: URIError,
    };
    expect(typeInfo(new URIError('Hello'))).toEqual(expected);
  });
  if (AGGREGATEERROR_EXIST) {
    test('AggregateError', () => {
      const expected = {
        type: 'object',
        subtype: 'Error',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: AggregateError,
      };
      expect(typeInfo(new AggregateError([new Error('some error')], 'Hello')))
        .toEqual(expected);
    });
  }
  if (INTERNALERROR_EXIST) {
    test('InternalError', () => {
      const expected = {
        type: 'object',
        subtype: 'Error',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: InternalError,
      };
      expect(typeInfo(new InternalError('Hello'))).toEqual(expected);
    });
  }
  test('User customized Error', () => {
    class MyError extends Error {}
    const expected = {
      type: 'object',
      subtype: 'Error',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: MyError,
    };
    expect(typeInfo(new MyError())).toEqual(expected);
  });
  test('arguments', () => {
    const expected = {
      type: 'object',
      subtype: 'Arguments',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: arguments.constructor,
    };
    expect(typeInfo(arguments)).toEqual(expected);
  });
  test('invalid arguments', () => {
    const expected = {
      type: 'object',
      subtype: 'Object',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: arguments.constructor,
    };
    const obj1 = {
      length: 1,
      callee: () => {},
    };
    expect(typeInfo(obj1)).toEqual(expected);
    const obj2 = {
      '0': 'x',
      'length': 1,
      'callee': () => {},
    };
    expect(typeInfo(obj2)).toEqual(expected);
  });
  test('fake arguments', () => {
    const expected = {
      type: 'object',
      subtype: 'Arguments',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: arguments.constructor,
    };
    const fake = {
      '0': 'x',
      'length': 1,
      'callee': () => {},
      [Symbol.toStringTag]: 'Arguments',
      [Symbol.iterator]: () => {},
    };
    expect(typeInfo(fake)).toEqual(expected);
  });
  test('generator', () => {
    function* foo() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    const x = foo();
    const expected = {
      type: 'object',
      subtype: 'Generator',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: x.constructor,
    };
    expect(typeInfo(x)).toEqual(expected);
  });
  if (ASYNC_FUNCTION_EXISTS) {
    test('async generator', () => {
      async function* foo() {
        yield await Promise.resolve('a');
        yield await Promise.resolve('b');
        yield await Promise.resolve('c');
      }
      const x = foo();
      const expected = {
        type: 'object',
        subtype: 'AsyncGenerator',
        isPrimitive: false,
        isBuiltIn: false,
        constructor: x.constructor,
      };
      const info = typeInfo(x);
      expect(info).toEqual(expected);
    });
  }
  test('global object', () => {
    const expected = {
      type: 'object',
      subtype: 'GlobalObject',
      isPrimitive: false,
      isBuiltIn: true,
    };
    expect(typeInfo(globalObject)).toEqual(expected);
  });
  test('user defined class instance', () => {
    class Foo {}
    const expected = {
      type: 'object',
      subtype: 'Foo',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: Foo,
    };
    expect(typeInfo(new Foo())).toEqual(expected);
  });
  test('user defined class instance with no name', () => {
    const obj = new class {}();
    const expected = {
      type: 'object',
      subtype: 'Object',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: obj.constructor,
    };
    expect(typeInfo(obj)).toEqual(expected);
  });
  test('plain object', () => {
    const expected = {
      type: 'object',
      subtype: 'Object',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: Object,
    };
    expect(typeInfo({ x: 1 })).toEqual(expected);
  });
  test('object with toStringTag', () => {
    class Foo {
      get [Symbol.toStringTag]() {
        return 'Goo';
      }
    }
    const expected = {
      type: 'object',
      subtype: 'Goo',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: Foo,
    };
    const obj = new Foo();
    expect(typeInfo(obj)).toEqual(expected);
  });
  test('object with toStringTag, should remove spaces between names', () => {
    class Foo {
      get [Symbol.toStringTag]() {
        return 'Foo Bar';
      }
    }
    const expected = {
      type: 'object',
      subtype: 'FooBar',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: Foo,
    };
    expect(typeInfo(new Foo())).toEqual(expected);
  });
  if (INTL_COLLATOR_EXISTS) {
    test('Intl.Collator', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.Collator',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.Collator,
      };
      expect(typeInfo(new Intl.Collator('zh'))).toEqual(expected);
    });
  }
  if (INTL_DATETIMEFORMAT_EXISTS) {
    test('Intl.DateTimeFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.DateTimeFormat',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.DateTimeFormat,
      };
      expect(typeInfo(new Intl.DateTimeFormat('zh'))).toEqual(expected);
    });
  }
  if (INTL_DISPLAYNAMES_EXISTS) {
    test('Intl.DisplayNames', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.DisplayNames',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.DisplayNames,
      };
      expect(typeInfo(new Intl.DisplayNames('zh', { type: 'region' })))
        .toEqual(expected);
    });
  }
  if (INTL_DURATIONFORMAT_EXISTS) {
    test('Intl.DurationFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.DurationFormat',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.DurationFormat,
      };
      expect(typeInfo(new Intl.DurationFormat('zh', { style: 'long' })))
        .toEqual(expected);
    });
  }
  if (INTL_LISTFORMAT_EXISTS) {
    test('Intl.ListFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.ListFormat',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.ListFormat,
      };
      expect(typeInfo(new Intl.ListFormat('zh'))).toEqual(expected);
    });
  }
  if (INTL_LOCALE_EXISTS) {
    test('Intl.Locale', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.Locale',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.Locale,
      };
      expect(typeInfo(new Intl.Locale('zh'))).toEqual(expected);
    });
  }
  if (INTL_NUMBERFORMAT_EXISTS) {
    test('Intl.NumberFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.NumberFormat',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.NumberFormat,
      };
      expect(typeInfo(new Intl.NumberFormat('zh'))).toEqual(expected);
    });
  }
  if (INTL_PLURALRULES_EXISTS) {
    test('Intl.PluralRules', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.PluralRules',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.PluralRules,
      };
      expect(typeInfo(new Intl.PluralRules('zh'))).toEqual(expected);
    });
  }
  if (INTL_RELATIVETIMEFORMAT_EXISTS) {
    test('Intl.RelativeTimeFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.RelativeTimeFormat',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.RelativeTimeFormat,
      };
      expect(typeInfo(new Intl.RelativeTimeFormat('zh'))).toEqual(expected);
    });
  }
  if (INTL_SEGMENTER_EXISTS) {
    test('Intl.Segmenter', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.Segmenter',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.Segmenter,
      };
      expect(typeInfo(new Intl.Segmenter('zh'))).toEqual(expected);
    });
  }
  if (FINALIZATIONREGISTRY_EXISTS) {
    test('FinalizationRegistry', () => {
      const expected = {
        type: 'object',
        subtype: 'FinalizationRegistry',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: FinalizationRegistry,
      };
      const registry = new FinalizationRegistry((value) => {
        console.log('An object was finalized. The value is:', value);
      });
      expect(typeInfo(registry)).toEqual(expected);
    });
  }
});
