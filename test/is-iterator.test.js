////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  isIterator,
  MAP_ITERATOR_EXISTS,
  SET_ITERATOR_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  INT8ARRAY_EXISTS,
  STRING_ITERATOR_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isIterator()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isIterator()` function', () => {
  if (MAP_ITERATOR_EXISTS) {
    test('MapIterator', () => {
      const map = new Map();
      expect(isIterator(map.entries())).toBe(true);
      expect(isIterator(map.keys())).toBe(true);
      expect(isIterator(map.values())).toBe(true);
      expect(isIterator(map[Symbol.iterator]())).toBe(true);
    });
  }
  if (SET_ITERATOR_EXISTS) {
    test('SetIterator', () => {
      const set = new Set();
      expect(isIterator(set.entries())).toBe(true);
      expect(isIterator(set.values())).toBe(true);
      expect(isIterator(set.keys())).toBe(true);
      expect(isIterator(set[Symbol.iterator]())).toBe(true);
    });
  }
  if (ARRAY_ITERATOR_EXISTS) {
    test('ArrayIterator', () => {
      const array = [1, 2, 3];
      expect(isIterator(array.values())).toBe(true);
      expect(isIterator(array.keys())).toBe(true);
      expect(isIterator(array.entries())).toBe(true);
      expect(isIterator(array[Symbol.iterator]())).toBe(true);
    });
    if (INT8ARRAY_EXISTS) {
      test('TypedArrayIterator', () => {
        const int8array = new Int8Array(2);
        expect(isIterator(int8array.values())).toBe(true);
        expect(isIterator(int8array.keys())).toBe(true);
        expect(isIterator(int8array.entries())).toBe(true);
        expect(isIterator(int8array[Symbol.iterator]())).toBe(true);
      });
    }
  }
  if (STRING_ITERATOR_EXISTS) {
    test('StringIterator', () => {
      const str = 'hello world';
      expect(isIterator(str[Symbol.iterator]())).toBe(true);
    });
  }
  if (REGEXP_ITERATOR_EXISTS) {
    test('RegExpStringIterator', () => {
      const regexp = /^[a-z]+/;
      expect(isIterator(regexp[Symbol.matchAll]())).toBe(true);
    });
  }
  if (INTL_SEGMENTER_ITERATOR_EXISTS) {
    test('SegmenterStringIterator', () => {
      const string1 = 'Que ma joie demeure';
      const segmenterFrGrapheme = new Intl.Segmenter('fr', {
        granularity: 'grapheme',
      });
      const graphemeSegments = segmenterFrGrapheme.segment(string1);
      expect(isIterator(graphemeSegments[Symbol.iterator]())).toBe(true);
    });
  }
  test('non-iterator object', () => {
    expect(isIterator({ abc: 123 })).toBe(false);
    expect(isIterator(new Boolean(true))).toBe(false);
  });
  test('primitive values', () => {
    expect(isIterator(0)).toBe(false);
    expect(isIterator('abc')).toBe(false);
    expect(isIterator(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isIterator(null)).toBe(false);
    expect(isIterator(undefined)).toBe(false);
  });
});
