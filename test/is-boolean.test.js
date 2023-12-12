////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isBoolean } from '../src';

/**
 * Unit test of the `isBoolean()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isBoolean()` function', () => {
  test('primitive boolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean(true))).toBe(true);
    expect(isBoolean(Boolean(false))).toBe(true);
  });
  test('primitive non-boolean', () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(0.0)).toBe(false);
    expect(isBoolean(0n)).toBe(false);
    expect(isBoolean('abc')).toBe(false);
  });
  test('Boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });
  test('non-Boolean object', () => {
    expect(isBoolean({ abc: 123 })).toBe(false);
    expect(isBoolean(new String('abc'))).toBe(false);
  });
  test('nullish values', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });
});
