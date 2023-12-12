////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import typeInfo, { isArguments } from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for arguments object', () => {
  test('arguments', () => {
    const expected = {
      type: 'object',
      subtype: 'Arguments',
      category: 'arguments',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: arguments.constructor,
    };
    expect(typeInfo(arguments)).toEqual(expected);
  });
  test('invalid arguments', () => {
    const expected = {
      type: 'object',
      subtype: 'Object',
      category: 'object',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: arguments.constructor,
    };
    const obj1 = {
      length: 1,
      callee: () => {},
    };
    expect(typeInfo(obj1)).toEqual(expected);
    const obj2 = {
      '0': 'x',
      'length': 1,
      'callee': () => {},
    };
    expect(typeInfo(obj2)).toEqual(expected);
    const obj3 = {
      '0': 'x',
      'length': 1,
      'callee': () => {},
      [Symbol.iterator]: () => {},
    };
    expect(typeInfo(obj3)).toEqual(expected);
    const expected4 = {
      type: 'object',
      subtype: 'Arguments',
      category: 'object',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: arguments.constructor,
    };
    const obj4 = {
      '0': 'x',
      'length': 1,
      [Symbol.toStringTag]: 'Arguments',
      [Symbol.iterator]: () => {},
    };
    expect(typeInfo(obj4)).toEqual(expected4);
  });
  test('fake arguments', () => {
    const expected = {
      type: 'object',
      subtype: 'Arguments',
      category: 'arguments',
      isPrimitive: false,
      isBuiltIn: true,
      constructor: arguments.constructor,
    };
    const fake = {
      '0': 'x',
      'length': 1,
      'callee': () => {},
      [Symbol.toStringTag]: 'Arguments',
      [Symbol.iterator]: () => {},
    };
    expect(typeInfo(fake)).toEqual(expected);
  });
});
