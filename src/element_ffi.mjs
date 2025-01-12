import { Ok, Error } from "./gleam.mjs";

export function getAttribute(element, name) {
  let attribute = element.getAttribute(name);
  if (attribute) {
    return new Ok(attribute);
  }
  return new Error();
}

export function setAttribute(element, name, value) {
  element.setAttribute(name, value);
}

export function setInnerHTML(element, content) {
  element.innerHTML = content;
}

export function innerText(element) {
  return element.innerText;
}

export function closest(element, selector) {
  let ancestor = element.closest(selector);
  if (ancestor) {
    return new Ok(ancestor);
  }
  return new Error();
}

export async function requestFullscreen(element) {
  try {
    await element.requestFullscreen();
    return new Ok();
  } catch (error) {
    return new Error(error.toString());
  }
}

export function value(element) {
  let value = element.value;
  if (value != undefined) {
    return new Ok(value);
  }
  return new Error();
}
