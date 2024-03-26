////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isConsole } from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isCssom()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isConsole()` function', () => {
  it('undefined', () => {
    expect(isConsole(undefined)).toBe(false);
  });
  it('null', () => {
    expect(isConsole(null)).toBe(false);
  });
  it('123', () => {
    expect(isConsole(123)).toBe(false);
  });
  it('"str"', () => {
    expect(isConsole('str')).toBe(false);
  });
  it('{}', () => {
    expect(isConsole({})).toBe(false);
  });
  if (window && window.console) {
    it('window.console', () => {
      expect(isConsole(window.console)).toBe(true);
    });
  }
  if (console) {
    it('console', () => {
      expect(isConsole(console)).toBe(true);
    });
  }
});
