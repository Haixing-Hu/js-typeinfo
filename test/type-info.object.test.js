////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import typeInfo from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for plain object', () => {
  test('plain object', () => {
    const expected = {
      type: 'object',
      subtype: 'Object',
      category: 'object',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: Object,
    };
    expect(typeInfo({ x: 1 })).toEqual(expected);
  });
  test('normal object', () => {
    const expected = {
      type: 'object',
      subtype: 'Object',
      category: 'object',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: Object,
    };
    const obj = new Object({x : 1});
    expect(typeInfo(obj)).toEqual(expected);
  });
  test('normal object with customized toStringTag', () => {
    const expected = {
      type: 'object',
      subtype: 'MyObject',
      category: 'object',
      isPrimitive: false,
      isBuiltIn: false,
      constructor: Object,
    };
    const obj = new Object({x : 1});
    obj[Symbol.toStringTag] = 'MyObject';
    expect(typeInfo(obj)).toEqual(expected);
  });
});
