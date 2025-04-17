////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import typeInfo from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for Event objects', () => {
  test('Event', () => {
    const event = new Event('click');
    const info = typeInfo(event);
    expect(info).toEqual({
      type: 'object',
      subtype: 'Event',
      category: 'event',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: Event,
    });
    // 注意：不添加跨领域测试，因为Event是Web API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
  });
  test('MouseEvent', () => {
    const event = new MouseEvent('click');
    const info = typeInfo(event);
    expect(info).toEqual({
      type: 'object',
      subtype: 'MouseEvent',
      category: 'event',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: MouseEvent,
    });
    // 注意：不添加跨领域测试，因为MouseEvent是Web API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
  });
  test('CustomEvent', () => {
    const event = new CustomEvent('click');
    const info = typeInfo(event);
    expect(info).toEqual({
      type: 'object',
      subtype: 'CustomEvent',
      category: 'event',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: CustomEvent,
    });
    // 注意：不添加跨领域测试，因为CustomEvent是Web API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
  });
});
