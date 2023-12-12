////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isNumeric } from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isNumeric()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isNumeric()` function', () => {
  test('primitive number', () => {
    expect(isNumeric(0)).toBe(true);
    expect(isNumeric(0.0)).toBe(true);
    expect(isNumeric(Infinity)).toBe(true);
    expect(isNumeric(-Infinity)).toBe(true);
    expect(isNumeric(NaN)).toBe(true);
    expect(isNumeric(Number(0))).toBe(true);
    expect(isNumeric(Number(0.0))).toBe(true);
    expect(isNumeric(Number(Infinity))).toBe(true);
    expect(isNumeric(Number(-Infinity))).toBe(true);
    expect(isNumeric(Number(NaN))).toBe(true);
  });
  test('primitive bigint', () => {
    expect(isNumeric(0n)).toBe(true);
    expect(isNumeric(1n)).toBe(true);
    expect(isNumeric(BigInt(0))).toBe(true);
    expect(isNumeric(BigInt(1))).toBe(true);
  });
  test('primitive non-numeric', () => {
    expect(isNumeric(true)).toBe(false);
    expect(isNumeric('abc')).toBe(false);
    expect(isNumeric(Symbol.for('meta'))).toBe(false);
    expect(isNumeric((x) => x)).toBe(false);
  });
  test('Number object', () => {
    expect(isNumeric(new Number(0))).toBe(true);
    expect(isNumeric(new Number(1))).toBe(true);
    expect(isNumeric(new Number(Infinity))).toBe(true);
    expect(isNumeric(new Number(-Infinity))).toBe(true);
    expect(isNumeric(new Number(NaN))).toBe(true);
  });
  test('non-Numeric object', () => {
    expect(isNumeric({ abc: 123 })).toBe(false);
    expect(isNumeric(new Boolean(true))).toBe(false);
  });
  test('nullish values', () => {
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
  });
});
