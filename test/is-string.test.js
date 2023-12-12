////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isString } from '../src';

/**
 * Unit test of the `isString()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isString()` function', () => {
  test('primitive string', () => {
    expect(isString('abc')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString(String('abc'))).toBe(true);
    expect(isString(String(''))).toBe(true);
  });
  test('primitive non-string', () => {
    expect(isString(0)).toBe(false);
    expect(isString(0.0)).toBe(false);
    expect(isString(0n)).toBe(false);
    expect(isString(true)).toBe(false);
  });
  test('String object', () => {
    expect(isString(new String('abc'))).toBe(true);
    expect(isString(new String(''))).toBe(true);
  });
  test('non-String object', () => {
    expect(isString({ abc: 123 })).toBe(false);
    expect(isString(new Boolean(true))).toBe(false);
  });
  test('nullish values', () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});
