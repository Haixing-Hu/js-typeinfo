////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  MAP_EXISTS,
  SET_EXISTS,
  WEAKMAP_EXISTS,
  WEAKSET_EXISTS,
  isCollection,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isCollection()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isCollection()` function', () => {
  if (MAP_EXISTS) {
    test('Map', () => {
      expect(isCollection(new Map())).toBe(true);
    });
  }
  if (SET_EXISTS) {
    test('Set', () => {
      expect(isCollection(new Set())).toBe(true);
    });
  }
  test('non-Collection object', () => {
    expect(isCollection({ abc: 123 })).toBe(false);
    expect(isCollection(new Boolean(true))).toBe(false);
    if (WEAKMAP_EXISTS) {
      expect(isCollection(new WeakMap())).toBe(false);
    }
    if (WEAKSET_EXISTS) {
      expect(isCollection(new WeakSet())).toBe(false);
    }
  });
  test('primitive values', () => {
    expect(isCollection(0)).toBe(false);
    expect(isCollection('abc')).toBe(false);
    expect(isCollection(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isCollection(null)).toBe(false);
    expect(isCollection(undefined)).toBe(false);
  });
});
