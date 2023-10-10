'use client';

import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

const POST_TEXT = 'Hey you should read this!';

export const ShareMenu = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className='sticky top-12'>
      <h4 className='text-base text-sm font-medium'>Share this article</h4>
      <div className='mt-2 flex space-x-2'>
        <LinkedinShareButton url={shareUrl} summary={POST_TEXT}>
          <LinkedinIcon size={20} className='rounded-sm' />
        </LinkedinShareButton>
        <FacebookShareButton url={shareUrl} quote={POST_TEXT}>
          <FacebookIcon size={20} className='rounded-sm' />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={POST_TEXT}>
          <TwitterIcon size={20} className='rounded-sm' />
        </TwitterShareButton>
      </div>
    </div>
  );
};
