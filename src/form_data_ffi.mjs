export function new_() {
  return new FormData();
}

export function set(form_data, name, value) {
  form_data.set(name, value);
  return form_data;
}
