////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  EVENT_EXISTS,
  isEvent,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isEvent()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isEvent()` function', () => {
  if (EVENT_EXISTS) {
    test('should return true for Event object', () => {
      // 创建一个事件对象
      const event = new Event('click');
      // 验证isEvent是否正确返回true
      expect(isEvent(event)).toBe(true);
    });
    test('should return true for MouseEvent object', () => {
      const mouseEvent = new MouseEvent('click');
      expect(isEvent(mouseEvent)).toBe(true);
    });

    test('should return true for KeyboardEvent object', () => {
      const keyboardEvent = new KeyboardEvent('keydown');
      expect(isEvent(keyboardEvent)).toBe(true);
    });

    test('should return true for CustomEvent object', () => {
      const customEvent = new CustomEvent('my-event');
      expect(isEvent(customEvent)).toBe(true);
    });
    test('should return false for null', () => {
      expect(isEvent(null)).toBe(false);
    });
    test('should return false for undefined', () => {
      expect(isEvent(undefined)).toBe(false);
    });
    test('should return false for non-Event object', () => {
      // 创建一个普通对象
      const obj = {};
      // 验证isEvent是否正确返回false
      expect(isEvent(obj)).toBe(false);
    });
  }
});
