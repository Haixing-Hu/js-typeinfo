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
  isError,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isError()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isError()` function', () => {
  test('Error', () => {
    expect(isError(new Error())).toBe(true);
  });
  test('EvalError', () => {
    expect(isError(new EvalError('Hello'))).toBe(true);
  });
  test('RangeError', () => {
    expect(isError(new RangeError('Hello'))).toBe(true);
  });
  test('ReferenceError', () => {
    expect(isError(new ReferenceError('Hello'))).toBe(true);
  });
  test('SyntaxError', () => {
    expect(isError(new SyntaxError('Hello'))).toBe(true);
  });
  test('TypeError', () => {
    expect(isError(new TypeError('Hello'))).toBe(true);
  });
  test('URIError', () => {
    expect(isError(new URIError('Hello'))).toBe(true);
  });
  if (AGGREGATEERROR_EXISTS) {
    test('AggregateError', () => {
      expect(isError(new AggregateError([new Error('some error')], 'Hello'))).toBe(true);
    });
  }
  if (INTERNALERROR_EXISTS) {
    test('InternalError', () => {
      expect(isError(new InternalError('Hello'))).toBe(true);
    });
  }
  test('User customized Error', () => {
    class MyError extends Error {}
    expect(isError(new MyError())).toBe(true);
  });
  test('non-Error object', () => {
    expect(isError({ abc: 123 })).toBe(false);
    expect(isError(new Boolean(true))).toBe(false);
  });
  test('primitive values', () => {
    expect(isError(0)).toBe(false);
    expect(isError('abc')).toBe(false);
    expect(isError(true)).toBe(false);
  });
  test('nullish values', () => {
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
  });
});
