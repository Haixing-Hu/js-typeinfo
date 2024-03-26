////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { typeInfo } from '../src';

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
  });
});
