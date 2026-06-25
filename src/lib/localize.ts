import type { Lang, Localized } from "../types";

/** Pick the string for the active language, falling back to English. */
export function L(value: Localized, lang: Lang): string {
  return value[lang] ?? value.en;
}
