////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  BLOB_EXIST,
  File_EXIST,
  FILE_LIST_EXIST,
  FILE_READER_EXIST,
  FILE_READER_SYNC_EXIST,
} from './feature-detect';

function isFile(obj) {
  return (File_EXIST && (obj instanceof File))
    || (BLOB_EXIST && (obj instanceof Blob))
    || (FILE_LIST_EXIST && (obj instanceof FileList))
    || (FILE_READER_EXIST && (obj instanceof FileReader))
    || (FILE_READER_SYNC_EXIST && (obj instanceof FileReaderSync));   // eslint-disable-line no-undef
}

export default isFile;
