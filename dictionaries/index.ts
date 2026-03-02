export type { Dictionary } from "./ka";
import { ka } from "./ka";
import { en } from "./en";
import { ru } from "./ru";

export const dictionaries = { ka, en, ru } as const;
export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["ka", "en", "ru"];

export function getDictionary(lang: string) {
    const locale = lang as Locale;
    return dictionaries[locale] ?? ka;
}
