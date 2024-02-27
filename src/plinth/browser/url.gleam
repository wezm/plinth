import plinth/browser/file.{type File}

pub type ObjectUrl

pub type Url

@external(javascript, "../../url_ffi.mjs", "new_")
pub fn new(url: String) -> Result(Url, String)

@external(javascript, "../../url_ffi.mjs", "newWithBase")
pub fn new_with_base(url: String, base: String) -> Result(Url, String)

@external(javascript, "../../url_ffi.mjs", "createObjectURL")
pub fn create_file_object_url(file: File) -> ObjectUrl

@external(javascript, "../../url_ffi.mjs", "revokeObjectURL")
pub fn revoke_object_url(url: ObjectUrl) -> Nil

@external(javascript, "../../url_ffi.mjs", "objectURLToString")
pub fn object_url_to_string(url: ObjectUrl) -> String

@external(javascript, "../../url_ffi.mjs", "toString")
pub fn to_string(url: Url) -> String
