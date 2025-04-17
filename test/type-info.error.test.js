////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import {
  AGGREGATEERROR_EXISTS,
  INTERNALERROR_EXISTS,
} from '@qubit-ltd/type-detect/src/feature-detect';
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

  test('Error across realms', () => {
    const error = runInNewContext('new Error()');
    const result = typeInfo(error);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Error');
    expect(result.category).toBe('error');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
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

  test('EvalError across realms', () => {
    const evalError = runInNewContext('new EvalError("Hello")');
    const result = typeInfo(evalError);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('EvalError');
    expect(result.category).toBe('error');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
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

  test('RangeError across realms', () => {
    const rangeError = runInNewContext('new RangeError("Hello")');
    const result = typeInfo(rangeError);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('RangeError');
    expect(result.category).toBe('error');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
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

  test('ReferenceError across realms', () => {
    const referenceError = runInNewContext('new ReferenceError("Hello")');
    const result = typeInfo(referenceError);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('ReferenceError');
    expect(result.category).toBe('error');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
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

  test('SyntaxError across realms', () => {
    const syntaxError = runInNewContext('new SyntaxError("Hello")');
    const result = typeInfo(syntaxError);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('SyntaxError');
    expect(result.category).toBe('error');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
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

  test('TypeError across realms', () => {
    const typeErr = runInNewContext('new TypeError("Hello")');
    const result = typeInfo(typeErr);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('TypeError');
    expect(result.category).toBe('error');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
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

  test('URIError across realms', () => {
    const uriError = runInNewContext('new URIError("Hello")');
    const result = typeInfo(uriError);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('URIError');
    expect(result.category).toBe('error');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
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

    test('AggregateError across realms', () => {
      const aggregateError = runInNewContext('new AggregateError([new Error("some error")], "Hello")');
      const result = typeInfo(aggregateError);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('AggregateError');
      expect(result.category).toBe('error');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
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

    test('InternalError across realms', () => {
      const internalError = runInNewContext('new InternalError("Hello")');
      const result = typeInfo(internalError);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('InternalError');
      expect(result.category).toBe('error');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
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

  test('User customized Error across realms', () => {
    const myError = runInNewContext('class MyError extends Error {}; new MyError()');
    const result = typeInfo(myError);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('MyError');
    expect(result.category).toBe('error');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(false);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });
});
