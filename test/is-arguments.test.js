////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isArguments } from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isArguments()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isArguments()` function', () => {
  test('arguments', () => {
    expect(isArguments(arguments)).toBe(true);
  });
  test('invalid arguments', () => {
    const obj1 = {
      length: 1,
      callee: () => {},
    };
    expect(isArguments(obj1)).toBe(false);
    const obj2 = {
      '0': 'x',
      'length': 1,
      'callee': () => {},
    };
    expect(isArguments(obj2)).toBe(false);
    const obj3 = {
      '0': 'x',
      'length': 1,
      'callee': () => {},
      [Symbol.iterator]: () => {},
    };
    expect(isArguments(obj3)).toBe(false);
    const obj4 = {
      '0': 'x',
      'length': 1,
      [Symbol.toStringTag]: 'Arguments',
      [Symbol.iterator]: () => {},
    };
    expect(isArguments(obj4)).toBe(false);
  });
  test('fake arguments', () => {
    const fake = {
      '0': 'x',
      'length': 1,
      'callee': () => {},
      [Symbol.toStringTag]: 'Arguments',
      [Symbol.iterator]: () => {},
    };
    expect(isArguments(fake)).toBe(true);
  });
  test('non-arguments object', () => {
    expect(isArguments({ abc: 123 })).toBe(false);
    expect(isArguments(new Boolean(true))).toBe(false);
  });
  test('primitive values', () => {
    expect(isArguments(0)).toBe(false);
    expect(isArguments('abc')).toBe(false);
    expect(isArguments(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isArguments(null)).toBe(false);
    expect(isArguments(undefined)).toBe(false);
  });
});
