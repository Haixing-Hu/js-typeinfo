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
  isFile,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isEvent()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isFile()` function', () => {
  if (FILE_EXISTS) {
    it('File', () => {
      const file = new File([''], 'filename');
      expect(isFile(file)).toBe(true);
    });
  }
  if (BLOB_EXISTS) {
    it('Blob', () => {
      const blob = new Blob([''], { type: 'text/plain' });
      expect(isFile(blob)).toBe(true);
    });
  }
  if (FILE_LIST_EXISTS) {
    it('FileList', () => {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      document.body.appendChild(fileInput);
      const list = fileInput.files;
      expect(isFile(list)).toBe(true);
    });
  }
  if (FILE_READER_EXISTS) {
    it('FileReader', () => {
      const reader = new FileReader();
      expect(isFile(reader)).toBe(true);
    });
  }
  if (FILE_READER_SYNC_EXISTS) {
    // FileReaderSync 只在Web Workers中可用，我们这里跳过它的测试
    // 但是，如果你需要包括它，可以在Web Worker环境中编写类似的测试代码
    it('FileReaderSync', () => {
      const reader = new FileReaderSync();
      expect(isFile(reader)).toBe(true);
    });
  }
  it('should return false for non-File-related objects', () => {
    const obj = {};
    expect(isFile(obj)).toBe(false);
  });
});
