import { Ok, Error } from "./gleam.mjs";

export function new_(url) {
  try {
    return new Ok(new URL(url));
  }
  catch (e) {
    return new Error(e.toString());
  }
}

export function newWithBase(url, base) {
  try {
    return new Ok(new URL(url, base));
  }
  catch (e) {
    return new Error(e.toString());
  }
}

// object: A File, Blob, or MediaSource object to create an object URL for. 
export function createObjectURL(object) {
  return URL.createObjectURL(object);
}

export function revokeObjectURL(url) {
  return URL.revokeObjectURL(url);
}

export function objectURLToString(url) {
    // ObjectUrl in Gleam is already a string
    return url;
}

export function toString(url) {
    // ObjectUrl in Gleam is already a string
    return url.toString();
}
