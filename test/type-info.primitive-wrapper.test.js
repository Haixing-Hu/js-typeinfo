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

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for primitive wrapper objects', () => {
  test('built-in Boolean object', () => {
    const expected = {
      type: 'object',
      subtype: 'Boolean',
      category: 'boolean',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: Boolean,
    };
    expect(typeInfo(new Boolean(true))).toEqual(expected);
    expect(typeInfo(new Boolean(false))).toEqual(expected);
    expect(typeInfo(new Boolean('true'))).toEqual(expected);
    expect(typeInfo(new Boolean('false'))).toEqual(expected);
  });

  test('built-in Boolean object across realms', () => {
    const boolObj = runInNewContext('new Boolean(true)');
    const result = typeInfo(boolObj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Boolean');
    expect(result.category).toBe('boolean');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });

  test('built-in Number object', () => {
    const expected = {
      type: 'object',
      subtype: 'Number',
      category: 'numeric',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: Number,
    };
    expect(typeInfo(new Number(0))).toEqual(expected);
    expect(typeInfo(new Number(+0))).toEqual(expected);
    expect(typeInfo(new Number(-0))).toEqual(expected);
    expect(typeInfo(new Number(1))).toEqual(expected);
    expect(typeInfo(new Number(-1))).toEqual(expected);
    expect(typeInfo(new Number(1.5))).toEqual(expected);
    expect(typeInfo(new Number(-1.5))).toEqual(expected);
    expect(typeInfo(new Number(Infinity))).toEqual(expected);
    expect(typeInfo(new Number(-Infinity))).toEqual(expected);
    expect(typeInfo(new Number(NaN))).toEqual(expected);
  });

  test('built-in Number object across realms', () => {
    const numObj = runInNewContext('new Number(42)');
    const result = typeInfo(numObj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Number');
    expect(result.category).toBe('numeric');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });

  test('built-in String object', () => {
    const expected = {
      type: 'object',
      subtype: 'String',
      category: 'string',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: String,
    };
    expect(typeInfo(new String(''))).toEqual(expected);
    expect(typeInfo(new String('abc'))).toEqual(expected);
  });

  test('built-in String object across realms', () => {
    const strObj = runInNewContext('new String("abc")');
    const result = typeInfo(strObj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('String');
    expect(result.category).toBe('string');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });
});
