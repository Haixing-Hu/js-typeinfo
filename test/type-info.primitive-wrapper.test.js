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
});
