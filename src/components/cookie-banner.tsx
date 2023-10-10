'use client';

type CookieBannerProps = {
  setAcceptedCookies: (hasAccepted: boolean) => void;
};

export default function CookieBanner(props: CookieBannerProps) {
  return (
    <div className='text-card pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 sm:p-6'>
      <div className='bg-dark pointer-events-auto ml-auto max-w-xl rounded-md p-3 shadow-lg ring-1 ring-purple-500/30 sm:p-6'>
        <p className='text-sm leading-6 '>
          <span className='hidden md:block'>
            In order to provide a more personal user experience, we use
            technology such as cookies to store and/or access device
            information.{' '}
          </span>
          By clicking “Accept all” you allow us to process non-sensitive data
          such as IP address for the purposes of improving our service. See our{' '}
          Privacy Policy
          {/* <Link
            href='/legal/privacy-policy'
            className='font-semibold text-purple-300'
          >
            Privacy Policy{' '}
          </Link> */}
          for more information.
        </p>
        <div className='mt-3 flex items-center gap-x-5 sm:mt-4'>
          <button
            onClick={() => {
              props.setAcceptedCookies(true);
            }}
            className='hover:button-border-gradient hover:shadow-button hover:button-gradient-hover rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:relative hover:whitespace-nowrap hover:bg-gray-50 hover:text-white'
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
