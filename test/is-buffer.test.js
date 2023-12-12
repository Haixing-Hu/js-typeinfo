////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  ARRAYBUFFER_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  isBuffer,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isBuffer()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isBuffer()` function', () => {
  if (ARRAYBUFFER_EXISTS) {
    test('ArrayBuffer', () => {
      expect(isBuffer(new ArrayBuffer(2))).toBe(true);
    });
  }
  if (SHAREDARRAYBUFFER_EXISTS) {
    test('SharedArrayBuffer', () => {
      expect(isBuffer(new SharedArrayBuffer(2))).toBe(true);
    });
  }
  test('non-Buffer object', () => {
    expect(isBuffer({ abc: 123 })).toBe(false);
    expect(isBuffer(new Boolean(true))).toBe(false);
  });
  test('primitive values', () => {
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer('abc')).toBe(false);
    expect(isBuffer(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
  });
});
