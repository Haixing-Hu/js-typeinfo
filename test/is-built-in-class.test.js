////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  isBuiltInClass,
  AGGREGATEERROR_EXISTS,
  INTERNALERROR_EXISTS,
  MAP_EXISTS,
  REGEXP_EXISTS,
  SET_EXISTS,
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
  PROMISE_EXISTS,
  WEAKREF_EXISTS,
  WEAKMAP_EXISTS,
  WEAKSET_EXISTS,
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
  MAP_ITERATOR_EXISTS,
  SET_ITERATOR_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  STRING_ITERATOR_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
  FINALIZATIONREGISTRY_EXISTS,
  SYMBOL_EXISTS,
  BIGINT_EXISTS,
  ATOMICS_EXISTS,
  REFLECT_EXISTS,
  PROXY_EXISTS,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isBuiltInClass()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isBuiltInClass()` function', () => {
  test('Boolean', () => {
    expect(isBuiltInClass(Boolean)).toBe(true);
  });
  test('Number', () => {
    expect(isBuiltInClass(Number)).toBe(true);
  });
  test('String', () => {
    expect(isBuiltInClass(String)).toBe(true);
  });
  if (BIGINT_EXISTS) {
    test('BigInt', () => {
      expect(isBuiltInClass(BigInt)).toBe(true);
    });
  }
  if (SYMBOL_EXISTS) {
    test('Symbol', () => {
      expect(isBuiltInClass(Symbol)).toBe(true);
    });
  }
  test('Object', () => {
    expect(isBuiltInClass(Object)).toBe(true);
  });
  test('Array', () => {
    expect(isBuiltInClass(Array)).toBe(true);
  });
  test('Date', () => {
    expect(isBuiltInClass(Date)).toBe(true);
  });
  test('Function', () => {
    expect(isBuiltInClass(Function)).toBe(true);
  });
  if (REGEXP_EXISTS) {
    test('RegExp', () => {
      expect(isBuiltInClass(RegExp)).toBe(true);
    });
  }
  test('Error', () => {
    expect(isBuiltInClass(Error)).toBe(true);
  });
  test('EvalError', () => {
    expect(isBuiltInClass(EvalError)).toBe(true);
  });
  test('RangeError', () => {
    expect(isBuiltInClass(RangeError)).toBe(true);
  });
  test('ReferenceError', () => {
    expect(isBuiltInClass(ReferenceError)).toBe(true);
  });
  test('SyntaxError', () => {
    expect(isBuiltInClass(SyntaxError)).toBe(true);
  });
  test('TypeError', () => {
    expect(isBuiltInClass(TypeError)).toBe(true);
  });
  test('URIError', () => {
    expect(isBuiltInClass(URIError)).toBe(true);
  });
  if (AGGREGATEERROR_EXISTS) {
    test('AggregateError', () => {
      expect(isBuiltInClass(AggregateError)).toBe(true);
    });
  }
  if (INTERNALERROR_EXISTS) {
    test('InternalError', () => {
      expect(isBuiltInClass(InternalError)).toBe(true);
    });
  }
  if (MAP_EXISTS) {
    test('Map', () => {
      expect(isBuiltInClass(Map)).toBe(true);
    });
  }
  if (SET_EXISTS) {
    test('Set', () => {
      expect(isBuiltInClass(Set)).toBe(true);
    });
  }
  if (INT8ARRAY_EXISTS) {
    test('Int8Array', () => {
      expect(isBuiltInClass(Int8Array)).toBe(true);
    });
  }
  if (UINT8ARRAY_EXISTS) {
    test('Uint8Array', () => {
      expect(isBuiltInClass(Uint8Array)).toBe(true);
    });
  }
  if (UINT8CLAMPEDARRAY_EXISTS) {
    test('Uint8ClampedArray', () => {
      expect(isBuiltInClass(Uint8ClampedArray)).toBe(true);
    });
  }
  if (INT16ARRAY_EXISTS) {
    test('Int16Array', () => {
      expect(isBuiltInClass(Int16Array)).toBe(true);
    });
  }
  if (UINT16ARRAY_EXISTS) {
    test('Uint16Array', () => {
      expect(isBuiltInClass(Uint16Array)).toBe(true);
    });
  }
  if (INT32ARRAY_EXISTS) {
    test('Int32Array', () => {
      expect(isBuiltInClass(Int32Array)).toBe(true);
    });
  }
  if (UINT32ARRAY_EXISTS) {
    test('Uint32Array', () => {
      expect(isBuiltInClass(Uint32Array)).toBe(true);
    });
  }
  if (BIGINT64ARRAY_EXISTS) {
    test('BigInt64Array', () => {
      expect(isBuiltInClass(BigInt64Array)).toBe(true);
    });
  }
  if (BIGUINT64ARRAY_EXISTS) {
    test('BigUint64Array', () => {
      expect(isBuiltInClass(BigUint64Array)).toBe(true);
    });
  }
  if (FLOAT32ARRAY_EXISTS) {
    test('Float32Array', () => {
      expect(isBuiltInClass(Float32Array)).toBe(true);
    });
  }
  if (FLOAT64ARRAY_EXISTS) {
    test('Float64Array', () => {
      expect(isBuiltInClass(Float64Array)).toBe(true);
    });
  }
  if (ARRAYBUFFER_EXISTS) {
    test('ArrayBuffer', () => {
      expect(isBuiltInClass(ArrayBuffer)).toBe(true);
    });
  }
  if (SHAREDARRAYBUFFER_EXISTS) {
    test('SharedArrayBuffer', () => {
      expect(isBuiltInClass(SharedArrayBuffer)).toBe(true);
    });
  }
  if (DATAVIEW_EXISTS) {
    test('DataView', () => {
      expect(isBuiltInClass(DataView)).toBe(true);
    });
  }
  if (PROMISE_EXISTS) {
    test('Promise', () => {
      expect(isBuiltInClass(Promise)).toBe(true);
    });
  }
  if (WEAKREF_EXISTS) {
    test('WeakRef', () => {
      expect(isBuiltInClass(WeakRef)).toBe(true);
    });
  }
  if (WEAKMAP_EXISTS) {
    test('WeakMap', () => {
      expect(isBuiltInClass(WeakMap)).toBe(true);
    });
  }
  if (WEAKSET_EXISTS) {
    test('WeakSet', () => {
      expect(isBuiltInClass(WeakSet)).toBe(true);
    });
  }
  if (INTL_COLLATOR_EXISTS) {
    test('Intl.Collator', () => {
      expect(isBuiltInClass(Intl.Collator)).toBe(true);
    });
  }
  if (INTL_DATETIMEFORMAT_EXISTS) {
    test('Intl.DateTimeFormat', () => {
      expect(isBuiltInClass(Intl.DateTimeFormat)).toBe(true);
    });
  }
  if (INTL_DISPLAYNAMES_EXISTS) {
    test('Intl.DisplayNames', () => {
      expect(isBuiltInClass(Intl.DisplayNames)).toBe(true);
    });
  }
  if (INTL_DURATIONFORMAT_EXISTS) {
    test('Intl.DurationFormat', () => {
      expect(isBuiltInClass(Intl.DurationFormat)).toBe(true);
    });
  }
  if (INTL_LISTFORMAT_EXISTS) {
    test('Intl.ListFormat', () => {
      expect(isBuiltInClass(Intl.ListFormat)).toBe(true);
    });
  }
  if (INTL_LOCALE_EXISTS) {
    test('Intl.Locale', () => {
      expect(isBuiltInClass(Intl.Locale)).toBe(true);
    });
  }
  if (INTL_NUMBERFORMAT_EXISTS) {
    test('Intl.NumberFormat', () => {
      expect(isBuiltInClass(Intl.NumberFormat)).toBe(true);
    });
  }
  if (INTL_PLURALRULES_EXISTS) {
    test('Intl.PluralRules', () => {
      expect(isBuiltInClass(Intl.PluralRules)).toBe(true);
    });
  }
  if (INTL_RELATIVETIMEFORMAT_EXISTS) {
    test('Intl.RelativeTimeFormat', () => {
      expect(isBuiltInClass(Intl.RelativeTimeFormat)).toBe(true);
    });
  }
  if (INTL_SEGMENTER_EXISTS) {
    test('Intl.Segmenter', () => {
      expect(isBuiltInClass(Intl.Segmenter)).toBe(true);
    });
  }
  if (MAP_ITERATOR_EXISTS) {
    test('MapIterator', () => {
      const map = new Map();
      expect(isBuiltInClass(map.entries().constructor)).toBe(true);
      expect(isBuiltInClass(map.keys().constructor)).toBe(true);
      expect(isBuiltInClass(map.values().constructor)).toBe(true);
      expect(isBuiltInClass(map[Symbol.iterator]().constructor)).toBe(true);
    });
  }
  if (SET_ITERATOR_EXISTS) {
    test('SetIterator', () => {
      const set = new Set();
      expect(isBuiltInClass(set.entries().constructor)).toBe(true);
      expect(isBuiltInClass(set.values().constructor)).toBe(true);
      expect(isBuiltInClass(set.keys().constructor)).toBe(true);
      expect(isBuiltInClass(set[Symbol.iterator]().constructor)).toBe(true);
    });
  }
  if (ARRAY_ITERATOR_EXISTS) {
    test('ArrayIterator', () => {
      const array = [1, 2, 3];
      expect(isBuiltInClass(array.values().constructor)).toBe(true);
      expect(isBuiltInClass(array.keys().constructor)).toBe(true);
      expect(isBuiltInClass(array.entries().constructor)).toBe(true);
      expect(isBuiltInClass(array[Symbol.iterator]().constructor)).toBe(true);
    });
    if (INT8ARRAY_EXISTS) {
      test('TypedArrayIterator', () => {
        const int8array = new Int8Array(2);
        expect(isBuiltInClass(int8array.values().constructor)).toBe(true);
        expect(isBuiltInClass(int8array.keys().constructor)).toBe(true);
        expect(isBuiltInClass(int8array.entries().constructor)).toBe(true);
        expect(isBuiltInClass(int8array[Symbol.iterator]().constructor)).toBe(true);
      });
    }
  }
  if (STRING_ITERATOR_EXISTS) {
    test('StringIterator', () => {
      const str = 'hello world';
      expect(isBuiltInClass(str[Symbol.iterator]().constructor)).toBe(true);
    });
  }
  if (REGEXP_ITERATOR_EXISTS) {
    test('RegExpStringIterator', () => {
      const regexp = /^[a-z]+/;
      expect(isBuiltInClass(regexp[Symbol.matchAll]().constructor)).toBe(true);
    });
  }
  if (INTL_SEGMENTER_ITERATOR_EXISTS) {
    test('SegmenterStringIterator', () => {
      const string1 = 'Que ma joie demeure';
      const segmenterFrGrapheme = new Intl.Segmenter('fr', {
        granularity: 'grapheme',
      });
      const graphemeSegments = segmenterFrGrapheme.segment(string1);
      expect(isBuiltInClass(graphemeSegments[Symbol.iterator]().constructor)).toBe(true);
    });
  }
  if (FINALIZATIONREGISTRY_EXISTS) {
    test('FinalizationRegistry', () => {
      expect(isBuiltInClass(FinalizationRegistry)).toBe(true);
    });
  }
  test('constructor of the plain object', () => {
    expect(isBuiltInClass({}.constructor)).toBe(true);
  });
  test('customized class', () => {
    class Foo {
      value = 0;
    }
    expect(isBuiltInClass(Foo)).toBe(false);
  });
  test('anonymous class', () => {
    const Foo = class {
      value = 0;
    };
    expect(isBuiltInClass(Foo)).toBe(false);
  });
  test('undefined', () => {
    expect(isBuiltInClass(undefined)).toBe(false);
  });
  test('null', () => {
    expect(isBuiltInClass(null)).toBe(false);
  });
  test('non-function argument', () => {
    expect(isBuiltInClass(0)).toBe(false);
    expect(isBuiltInClass('abc')).toBe(false);
    expect(isBuiltInClass(true)).toBe(false);
  });
  test('Math', () => {
    expect(isBuiltInClass(Math)).toBe(true);
  });
  test('JSON', () => {
    expect(isBuiltInClass(JSON)).toBe(true);
  });
  if (ATOMICS_EXISTS) {
    test('Atomics', () => {
      expect(isBuiltInClass(Atomics)).toBe(true);
    });
  }
  if (REFLECT_EXISTS) {
    test('Reflect', () => {
      expect(isBuiltInClass(Reflect)).toBe(true);
    });
  }
  if (PROXY_EXISTS) {
    test('Proxy', () => {
      expect(isBuiltInClass(Proxy)).toBe(true);
    });
  }
});
