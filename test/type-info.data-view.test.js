////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { DATAVIEW_EXISTS } from '@qubit-ltd/type-detect';
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
  }
});
