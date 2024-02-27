pub type Blob

@external(javascript, "../../blob_ffi.mjs", "blob")
pub fn new(content: BitArray, mime: String) -> Blob

@external(javascript, "../../blob_ffi.mjs", "size")
pub fn size(blob: Blob) -> Int
