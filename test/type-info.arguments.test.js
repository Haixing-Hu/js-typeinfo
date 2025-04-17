////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import typeInfo from '../src';

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
      isWebApi: false,
      constructor: arguments.constructor,
    };
    expect(typeInfo(arguments)).toEqual(expected);
  });

  test('arguments across realms', () => {
    const argsObj = runInNewContext('(function() { return arguments; })(1, 2, 3)');
    const result = typeInfo(argsObj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Arguments');
    expect(result.category).toBe('arguments');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });

  test('invalid arguments', () => {
    const expected = {
      type: 'object',
      subtype: 'Object',
      category: 'object',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: false,
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
      isWebApi: false,
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

  test('invalid arguments across realms', () => {
    const fakeObj = runInNewContext('({ "0": "x", "length": 1, [Symbol.toStringTag]: "Arguments", [Symbol.iterator]: () => {} })');
    const result = typeInfo(fakeObj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Arguments');
    expect(result.category).toBe('object');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(false);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });

  test('fake arguments', () => {
    const expected = {
      type: 'object',
      subtype: 'Arguments',
      category: 'arguments',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
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

  test('fake arguments across realms', () => {
    const fakeArgsObj = runInNewContext('({ "0": "x", "length": 1, "callee": () => {}, [Symbol.toStringTag]: "Arguments", [Symbol.iterator]: () => {} })');
    const result = typeInfo(fakeArgsObj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Arguments');
    expect(result.category).toBe('arguments');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });
});
