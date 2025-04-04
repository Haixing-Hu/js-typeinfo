////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  AGGREGATEERROR_EXISTS,
  INTERNALERROR_EXISTS,
} from '@qubit-ltd/type-detect';
import typeInfo from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for error objects', () => {
  test('Error', () => {
    const expected = {
      type: 'object',
      subtype: 'Error',
      category: 'error',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: Error,
    };
    expect(typeInfo(new Error())).toEqual(expected);
  });
  test('EvalError', () => {
    const expected = {
      type: 'object',
      subtype: 'EvalError',
      category: 'error',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: EvalError,
    };
    expect(typeInfo(new EvalError('Hello'))).toEqual(expected);
  });
  test('RangeError', () => {
    const expected = {
      type: 'object',
      subtype: 'RangeError',
      category: 'error',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: RangeError,
    };
    expect(typeInfo(new RangeError('Hello'))).toEqual(expected);
  });
  test('ReferenceError', () => {
    const expected = {
      type: 'object',
      subtype: 'ReferenceError',
      category: 'error',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: ReferenceError,
    };
    expect(typeInfo(new ReferenceError('Hello'))).toEqual(expected);
  });
  test('SyntaxError', () => {
    const expected = {
      type: 'object',
      subtype: 'SyntaxError',
      category: 'error',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: SyntaxError,
    };
    expect(typeInfo(new SyntaxError('Hello'))).toEqual(expected);
  });
  test('TypeError', () => {
    const expected = {
      type: 'object',
      subtype: 'TypeError',
      category: 'error',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: TypeError,
    };
    expect(typeInfo(new TypeError('Hello'))).toEqual(expected);
  });
  test('URIError', () => {
    const expected = {
      type: 'object',
      subtype: 'URIError',
      category: 'error',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: URIError,
    };
    expect(typeInfo(new URIError('Hello'))).toEqual(expected);
  });
  if (AGGREGATEERROR_EXISTS) {
    test('AggregateError', () => {
      const expected = {
        type: 'object',
        subtype: 'AggregateError',
        category: 'error',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: AggregateError,
      };
      expect(typeInfo(new AggregateError([new Error('some error')], 'Hello')))
        .toEqual(expected);
    });
  }
  if (INTERNALERROR_EXISTS) {
    test('InternalError', () => {
      const expected = {
        type: 'object',
        subtype: 'InternalError',
        category: 'error',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: InternalError,
      };
      expect(typeInfo(new InternalError('Hello'))).toEqual(expected);
    });
  }
  test('User customized Error', () => {
    class MyError extends Error {}
    const expected = {
      type: 'object',
      subtype: 'MyError',
      category: 'error',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: false,
      constructor: MyError,
    };
    expect(typeInfo(new MyError())).toEqual(expected);
  });
});
