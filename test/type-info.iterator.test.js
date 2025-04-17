////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  ARRAY_ITERATOR_EXISTS,
  INT8ARRAY_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
  MAP_ITERATOR_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  SET_ITERATOR_EXISTS,
  STRING_ITERATOR_EXISTS,
} from '@qubit-ltd/type-detect/src/feature-detect';
import { runInNewContext } from 'node:vm';
import typeInfo from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for iterator objects', () => {
  if (MAP_ITERATOR_EXISTS) {
    test('MapIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'MapIterator',
        category: 'iterator',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: new Map().entries().constructor,
      };
      const map = new Map();
      expect(typeInfo(map.entries())).toEqual(expected);
      expect(typeInfo(map.keys())).toEqual(expected);
      expect(typeInfo(map.values())).toEqual(expected);
      expect(typeInfo(map[Symbol.iterator]())).toEqual(expected);
    });

    test('MapIterator across realms', () => {
      const mapIterator = runInNewContext('new Map().entries()');
      const result = typeInfo(mapIterator);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('MapIterator');
      expect(result.category).toBe('iterator');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
  if (SET_ITERATOR_EXISTS) {
    test('SetIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'SetIterator',
        category: 'iterator',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: new Set().entries().constructor,
      };
      const set = new Set();
      expect(typeInfo(set.entries())).toEqual(expected);
      expect(typeInfo(set.values())).toEqual(expected);
      expect(typeInfo(set.keys())).toEqual(expected);
      expect(typeInfo(set[Symbol.iterator]())).toEqual(expected);
    });

    test('SetIterator across realms', () => {
      const setIterator = runInNewContext('new Set().entries()');
      const result = typeInfo(setIterator);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('SetIterator');
      expect(result.category).toBe('iterator');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
  if (ARRAY_ITERATOR_EXISTS) {
    test('ArrayIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'ArrayIterator',
        category: 'iterator',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: [].values().constructor,
      };
      const array = [1, 2, 3];
      expect(typeInfo(array.values())).toEqual(expected);
      expect(typeInfo(array.keys())).toEqual(expected);
      expect(typeInfo(array.entries())).toEqual(expected);
      expect(typeInfo(array[Symbol.iterator]())).toEqual(expected);
    });

    test('ArrayIterator across realms', () => {
      const arrayIterator = runInNewContext('[1, 2, 3].values()');
      const result = typeInfo(arrayIterator);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('ArrayIterator');
      expect(result.category).toBe('iterator');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });

    if (INT8ARRAY_EXISTS) {
      test('TypedArrayIterator', () => {
        const expected = {
          type: 'object',
          subtype: 'ArrayIterator',
          category: 'iterator',
          isPrimitive: false,
          isBuiltIn: true,
          isWebApi: false,
          constructor: [].values().constructor,
        };
        const int8array = new Int8Array(2);
        expect(typeInfo(int8array.values())).toEqual(expected);
        expect(typeInfo(int8array.keys())).toEqual(expected);
        expect(typeInfo(int8array.entries())).toEqual(expected);
        expect(typeInfo(int8array[Symbol.iterator]())).toEqual(expected);
      });

      test('TypedArrayIterator across realms', () => {
        const typedArrayIterator = runInNewContext('new Int8Array(2).values()');
        const result = typeInfo(typedArrayIterator);
        expect(result.type).toBe('object');
        expect(result.subtype).toBe('ArrayIterator');
        expect(result.category).toBe('iterator');
        expect(result.isPrimitive).toBe(false);
        expect(result.isBuiltIn).toBe(true);
        expect(result.isWebApi).toBe(false);
        expect(result.constructor).toBeDefined();
      });
    }
  }
  if (STRING_ITERATOR_EXISTS) {
    test('StringIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'StringIterator',
        category: 'iterator',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: ''[Symbol.iterator]().constructor,
      };
      const str = 'hello world';
      expect(typeInfo(str[Symbol.iterator]())).toEqual(expected);
    });

    test('StringIterator across realms', () => {
      const stringIterator = runInNewContext('"hello world"[Symbol.iterator]()');
      const result = typeInfo(stringIterator);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('StringIterator');
      expect(result.category).toBe('iterator');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
  if (REGEXP_ITERATOR_EXISTS) {
    test('RegExpStringIterator', () => {
      const expected = {
        type: 'object',
        subtype: 'RegExpStringIterator',
        category: 'iterator',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: /^[a-z]+/[Symbol.matchAll]().constructor,
      };
      const regexp = /^[a-z]+/;
      expect(typeInfo(regexp[Symbol.matchAll]())).toEqual(expected);
    });

    test('RegExpStringIterator across realms', () => {
      const regexpIterator = runInNewContext('/^[a-z]+/[Symbol.matchAll]()');
      const result = typeInfo(regexpIterator);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('RegExpStringIterator');
      expect(result.category).toBe('iterator');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
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
        category: 'iterator',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: graphemeSegments[Symbol.iterator]().constructor,
      };
      expect(typeInfo(graphemeSegments[Symbol.iterator]())).toEqual(expected);
    });

    test('SegmenterStringIterator across realms', () => {
      const segmenterIterator = runInNewContext('const string = "Que ma joie demeure"; const segmenter = new Intl.Segmenter("fr", { granularity: "grapheme" }); const segments = segmenter.segment(string); segments[Symbol.iterator]()');
      const result = typeInfo(segmenterIterator);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('SegmenterStringIterator');
      expect(result.category).toBe('iterator');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
});
