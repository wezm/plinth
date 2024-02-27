import plinth/browser/file.{type File}
import plinth/browser/blob.{type Blob}

pub type FormData

@external(javascript, "../../form_data_ffi.mjs", "new_")
pub fn new() -> FormData

@external(javascript, "../../form_data_ffi.mjs", "set")
pub fn set_file(form_data: FormData, name: String, value: File) -> FormData

@external(javascript, "../../form_data_ffi.mjs", "set")
pub fn set_blob(form_data: FormData, name: String, value: Blob) -> FormData
