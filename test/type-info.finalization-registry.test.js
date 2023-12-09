////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  FINALIZATIONREGISTRY_EXISTS,
  typeInfo,
} from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for the FinalizationRegistry object', () => {
  if (FINALIZATIONREGISTRY_EXISTS) {
    test('FinalizationRegistry', () => {
      const expected = {
        type: 'object',
        subtype: 'FinalizationRegistry',
        category: 'finalization-registry',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: FinalizationRegistry,
      };
      const registry = new FinalizationRegistry((value) => {
        console.log('An object was finalized. The value is:', value);
      });
      expect(typeInfo(registry)).toEqual(expected);
    });
  }
});
