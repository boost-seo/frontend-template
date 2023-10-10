import { ExtendedAuthorView } from '@/packages/apigen';

import { SocialIcon } from '../icons';

interface AuthorSocialIconsProps {
  author: ExtendedAuthorView;
  size?: 'md' | 'lg' | 'xl';
}

export const AuthorSocialIcons = ({ author, size }: AuthorSocialIconsProps) => {
  let injectedClassName: string;

  switch (size) {
    case 'md':
      injectedClassName = 'h-5 w-5';
      break;
    case 'lg':
      injectedClassName = 'h-6 w-6';
      break;
    case 'xl':
      injectedClassName = 'h-10 w-10';
      break;
    default:
      injectedClassName = 'h-4 w-4';
      break;
  }

  return (
    <>
      {author.linkedinUrl && (
        <SocialIcon
          name='linkedin'
          url={author.linkedinUrl}
          className={injectedClassName}
        />
      )}
      {author.facebookUrl && (
        <SocialIcon
          name='facebook'
          url={author.facebookUrl}
          className={injectedClassName}
        />
      )}
      {author.youtubeUrl && (
        <SocialIcon
          name='youtube'
          url={author.youtubeUrl}
          className={injectedClassName}
        />
      )}
      {author.twitterUrl && (
        <SocialIcon
          name='twitter'
          url={author.twitterUrl}
          className={injectedClassName}
        />
      )}
      {author.tiktokUrl && (
        <SocialIcon
          name='tiktok'
          url={author.tiktokUrl}
          className={injectedClassName}
        />
      )}
      {author.githubUrl && (
        <SocialIcon
          name='github'
          url={author.githubUrl}
          className={injectedClassName}
        />
      )}
      {author.pinterestUrl && (
        <SocialIcon
          name='pinterest'
          url={author.pinterestUrl}
          className={injectedClassName}
        />
      )}
      {author.websiteUrl && (
        <SocialIcon
          name='website'
          url={author.websiteUrl}
          className={injectedClassName}
        />
      )}
      {author.mediumUrl && (
        <SocialIcon
          name='medium'
          url={author.mediumUrl}
          className={injectedClassName}
        />
      )}
    </>
  );
};
