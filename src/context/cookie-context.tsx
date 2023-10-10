'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

import CookieBanner from '@/components/cookie-banner';

type UseCookieContextType = {
  hasAcceptedCookies: boolean;
  setAcceptedCookies: (hasAccepted: boolean) => void;
};

const CookieContextType = createContext<UseCookieContextType | null>(null);

export const CookieProvider = ({
  children,
}: React.PropsWithChildren<{ children: JSX.Element }>) => {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState<boolean>(true);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAccepted = !!localStorage.getItem('cookieConsent');
    setHasAcceptedCookies(hasAccepted);
  }, []);

  const setAcceptedCookies = (hasAccepted: boolean) => {
    setHasAcceptedCookies(hasAccepted);

    // Convert the boolean to a string and store it in localStorage
    localStorage.setItem('cookieConsent', hasAccepted.toString());
  };

  return (
    <CookieContextType.Provider
      value={{
        hasAcceptedCookies,
        setAcceptedCookies,
      }}
    >
      {!hasAcceptedCookies && (
        <CookieBanner setAcceptedCookies={setAcceptedCookies} />
      )}
      <>{children}</>
    </CookieContextType.Provider>
  );
};

export function useCookie(): UseCookieContextType {
  const value = useContext(CookieContextType);

  if (!value) {
    throw new Error('Must be used inside Referal provider');
  }

  return value as NonNullable<UseCookieContextType>;
}
