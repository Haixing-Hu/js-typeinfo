////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  BLOB_EXISTS,
  FILE_EXISTS,
  FILE_LIST_EXISTS,
  FILE_READER_EXISTS,
  FILE_READER_SYNC_EXISTS,
  typeInfo,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for the File API object', () => {
  if (FILE_EXISTS) {
    it('File', () => {
      const expected = {
        type: 'object',
        subtype: 'File',
        category: 'file',
        isPrimitive: false,
        isBuiltIn: false,
        isWebApi: true,
        constructor: File,
      };
      const file = new File([''], 'filename');
      expect(typeInfo(file)).toEqual(expected);
    });
  }
  if (BLOB_EXISTS) {
    it('Blob', () => {
      const expected = {
        type: 'object',
        subtype: 'Blob',
        category: 'file',
        isPrimitive: false,
        isBuiltIn: false,
        isWebApi: true,
        constructor: Blob,
      };
      const blob = new Blob([''], { type: 'text/plain' });
      expect(typeInfo(blob)).toEqual(expected);
    });
  }
  if (FILE_LIST_EXISTS) {
    it('FileList', () => {
      const expected = {
        type: 'object',
        subtype: 'FileList',
        category: 'file',
        isPrimitive: false,
        isBuiltIn: false,
        isWebApi: true,
        constructor: FileList,
      };
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      document.body.appendChild(fileInput);
      const list = fileInput.files;
      expect(typeInfo(list)).toEqual(expected);
    });
  }
  if (FILE_READER_EXISTS) {
    it('FileReader', () => {
      const expected = {
        type: 'object',
        subtype: 'FileReader',
        category: 'file',
        isPrimitive: false,
        isBuiltIn: false,
        isWebApi: true,
        constructor: FileReader,
      };
      const reader = new FileReader();
      expect(typeInfo(reader)).toEqual(expected);
    });
  }
  if (FILE_READER_SYNC_EXISTS) {
    // FileReaderSync 只在Web Workers中可用，我们这里跳过它的测试
    // 但是，如果你需要包括它，可以在Web Worker环境中编写类似的测试代码
    it('FileReaderSync', () => {
      const expected = {
        type: 'object',
        subtype: 'FileReaderSync',
        category: 'file',
        isPrimitive: false,
        isBuiltIn: false,
        isWebApi: true,
        constructor: FileReaderSync,
      };
      const reader = new FileReaderSync();
      expect(typeInfo(reader)).toEqual(expected);
    });
  }
});
