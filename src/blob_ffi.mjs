export function blob(strings, arg) {
  return new Blob(strings, {
    type: arg,
  });
}

export function size(blob) {
  return blob.size;
}
