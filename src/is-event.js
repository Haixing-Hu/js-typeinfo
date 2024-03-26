////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { EVENT_EXISTS } from './feature-detect';

/**
 * Determines whether the specified object is an event object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is an event object; `false` otherwise.
 */
function isEvent(obj) {
  return EVENT_EXISTS && (obj instanceof Event);
}

export default isEvent;
