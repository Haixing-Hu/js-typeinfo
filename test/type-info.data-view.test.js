////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import { DATAVIEW_EXISTS } from '@qubit-ltd/type-detect/src/feature-detect';
import typeInfo from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for DataView object', () => {
  if (DATAVIEW_EXISTS) {
    test('DataView', () => {
      const expected = {
        type: 'object',
        subtype: 'DataView',
        category: 'data-view',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: DataView,
      };
      expect(typeInfo(new DataView(new ArrayBuffer(2)))).toEqual(expected);
    });

    test('DataView across realms', () => {
      const dataView = runInNewContext('new DataView(new ArrayBuffer(2))');
      const result = typeInfo(dataView);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('DataView');
      expect(result.category).toBe('data-view');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
});
