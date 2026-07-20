const UNSAFE_URL_CHARACTER = /[\u0000-\u0020\u007f\\]/;

function isSafeRelativeUrl(value) {
  return (
    (value.startsWith("/") && !value.startsWith("//")) ||
    value.startsWith("./") ||
    value.startsWith("../")
  );
}

export function getSafeLinkUrl(value) {
  if (typeof value !== "string" || !value || UNSAFE_URL_CHARACTER.test(value)) return null;
  if (isSafeRelativeUrl(value)) return value;

  try {
    const url = new URL(value);
    return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol)
      ? value
      : null;
  } catch {
    return null;
  }
}

export function getSafeMediaUrl(value) {
  if (typeof value !== "string" || !value || UNSAFE_URL_CHARACTER.test(value)) return null;
  if (isSafeRelativeUrl(value)) return value;

  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? value : null;
  } catch {
    return null;
  }
}

export function isExternalUrl(value) {
  return /^https?:\/\//i.test(value);
}
