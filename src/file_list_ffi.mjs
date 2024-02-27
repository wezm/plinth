import { Ok, Error } from "./gleam.mjs";

export function length(fileList) {
    return fileList.length
}

export function item(fileList, index) {
  try {
    const file = fileList.item(index);
    return file ? new Ok(file) : new Error(undefined);
  } catch (_error) {
    return new Error(undefined);
  }
}
