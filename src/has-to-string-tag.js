////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { SYMBOL_TO_STRING_TAG_EXISTS } from './feature-detect';

/**
 * Tests whether an object has `Symbol.toStringTag` property.
 *
 * @param {object} obj
 *     the specified object.
 * @return {boolean}
 *     `true` if the specified object has the `Symbol.toStringTag` property;
 *     `false` otherwise.
 * @author Haixing Hu
 */
function hasToStringTag(obj) {
  return (SYMBOL_TO_STRING_TAG_EXISTS) && (Symbol.toStringTag in obj);
}

export default hasToStringTag;
