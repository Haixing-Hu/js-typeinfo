////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is an instance of the built-in `Error`
 * class or its subclass.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is an instance of the built-in `Error`
 *     class or its subclass; `false` otherwise.
 * @author Haixing Hu
 */
function isError(value) {
  return (value instanceof Error);
}

export default isError;
