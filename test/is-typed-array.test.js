////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  BIGINT64ARRAY_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  FLOAT32ARRAY_EXISTS, FLOAT64ARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  INT8ARRAY_EXISTS,
  UINT16ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  isTypedArray,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isTypedArray()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isTypedArray()` function', () => {
  if (INT8ARRAY_EXISTS) {
    test('Int8Array', () => {
      expect(isTypedArray(new Int8Array(2))).toBe(true);
    });
  }
  if (UINT8ARRAY_EXISTS) {
    test('Uint8Array', () => {
      expect(isTypedArray(new Uint8Array(2))).toBe(true);
    });
  }
  if (UINT8CLAMPEDARRAY_EXISTS) {
    test('Uint8ClampedArray', () => {
      expect(isTypedArray(new Uint8ClampedArray(2))).toBe(true);
    });
  }
  if (INT16ARRAY_EXISTS) {
    test('Int16Array', () => {
      expect(isTypedArray(new Int16Array(2))).toBe(true);
    });
  }
  if (UINT16ARRAY_EXISTS) {
    test('Uint16Array', () => {
      expect(isTypedArray(new Uint16Array(2))).toBe(true);
    });
  }
  if (INT32ARRAY_EXISTS) {
    test('Int32Array', () => {
      expect(isTypedArray(new Int32Array(2))).toBe(true);
    });
  }
  if (UINT32ARRAY_EXISTS) {
    test('Uint32Array', () => {
      expect(isTypedArray(new Uint32Array(2))).toBe(true);
    });
  }
  if (BIGINT64ARRAY_EXISTS) {
    test('BigInt64Array', () => {
      expect(isTypedArray(new BigInt64Array(2))).toBe(true);
    });
  }
  if (BIGUINT64ARRAY_EXISTS) {
    test('BigUint64Array', () => {
      expect(isTypedArray(new BigUint64Array(2))).toBe(true);
    });
  }
  if (FLOAT32ARRAY_EXISTS) {
    test('Float32Array', () => {
      expect(isTypedArray(new Float32Array(2))).toBe(true);
    });
  }
  if (FLOAT64ARRAY_EXISTS) {
    test('Float64Array', () => {
      expect(isTypedArray(new Float64Array(2))).toBe(true);
    });
  }
  test('non-TypedArray object', () => {
    expect(isTypedArray({ abc: 123 })).toBe(false);
    expect(isTypedArray(new Boolean(true))).toBe(false);
    expect(isTypedArray([1, 2,3 ])).toBe(false);
  });
  test('primitive values', () => {
    expect(isTypedArray(0)).toBe(false);
    expect(isTypedArray('abc')).toBe(false);
    expect(isTypedArray(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isTypedArray(null)).toBe(false);
    expect(isTypedArray(undefined)).toBe(false);
  });
});
