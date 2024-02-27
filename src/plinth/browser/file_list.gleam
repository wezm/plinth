import plinth/browser/file.{type File}

pub type FileList

@external(javascript, "../../file_list_ffi.mjs", "length")
pub fn length(list: FileList) -> Int

@external(javascript, "../../file_list_ffi.mjs", "item")
pub fn item(list: FileList, index: Int) -> Result(File, Nil)
