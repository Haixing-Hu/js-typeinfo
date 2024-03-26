////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
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
} from './feature-detect';

function isFile(obj) {
  return (FILE_EXISTS && (obj instanceof File))
    || (BLOB_EXISTS && (obj instanceof Blob))
    || (FILE_LIST_EXISTS && (obj instanceof FileList))
    || (FILE_READER_EXISTS && (obj instanceof FileReader))
    || (FILE_READER_SYNC_EXISTS && (obj instanceof FileReaderSync));   // eslint-disable-line no-undef
}

export default isFile;
