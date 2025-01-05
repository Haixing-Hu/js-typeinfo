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
} from '@qubit-ltd/type-detect';
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
  }
});
