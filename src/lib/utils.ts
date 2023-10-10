import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Merge classes with tailwind-merge with clsx full feature */
export function classNames(...inputs: ClassValue[]) {
  return cn(...inputs);
}

export function truncateText(text: string, maxCharacters: number) {
  return text.length > maxCharacters
    ? text.slice(0, maxCharacters) + '...'
    : text;
}
