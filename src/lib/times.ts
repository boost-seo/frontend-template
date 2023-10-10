function getLocale() {
  // TODO: Uncomment this when we have a way to get the locale from the client
  // if (typeof window !== 'undefined' && window.navigator) {
  //   return window.navigator.language || 'en-US';
  // } else {
  //   return 'en-US'; // default locale for server
  // }
  return 'en-US';
}

export function formatDateBasic(date: Date) {
  const timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const clientLocale: string = getLocale();

  return date.toLocaleDateString(clientLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: timeZone,
  });
}

export function formatDateDay(date: Date) {
  const timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const clientLocale: string = getLocale();

  return date.toLocaleDateString(clientLocale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: timeZone,
  });
}

export function formatDateDayHour(date: Date) {
  const timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const clientLocale: string = getLocale();

  return date.toLocaleDateString(clientLocale, {
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: timeZone,
  });
}
