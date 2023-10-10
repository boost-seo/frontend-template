import { cva } from 'class-variance-authority';
import {
  AlertTriangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ArrowRight,
  Bold,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Code2,
  CreditCard,
  Edit2,
  ExternalLink,
  Eye,
  File,
  FileText,
  Globe2Icon,
  GripVertical,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HelpCircle,
  Image,
  Italic,
  Laptop,
  Link2,
  Link2Off,
  List,
  ListOrdered,
  Loader2,
  LucideIcon,
  LucideProps,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Pilcrow,
  Pizza,
  Plus,
  Quote,
  RotateCcw,
  Search,
  Settings,
  Strikethrough,
  Subscript,
  SunMedium,
  Superscript,
  Text,
  Trash,
  Twitter,
  Underline,
  User,
  X,
} from 'lucide-react';
import { SVGProps } from 'react';
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMedium,
  SiPinterest,
  SiTiktok,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si';

import { cn } from '@/lib/utils';

export interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'normal' | 'large';
  text?: boolean;
  className?: string;
}

export type IIcon = React.FC<IIconProps>;

// #region Border Icons
const borderAll = (props: LucideProps) => (
  <svg
    viewBox='0 0 24 24'
    height='48'
    width='48'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm10 13h5a1 1 0 0 0 1-1v-5h-6v6zm-2-6H5v5a1 1 0 0 0 1 1h5v-6zm2-2h6V6a1 1 0 0 0-1-1h-5v6zm-2-6H6a1 1 0 0 0-1 1v5h6V5z' />
  </svg>
);

const borderBottom = (props: LucideProps) => (
  <svg
    viewBox='0 0 24 24'
    height='48'
    width='48'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M13 5a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zm-8 6a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm-2 7a1 1 0 1 1 2 0 1 1 0 0 0 1 1h12a1 1 0 0 0 1-1 1 1 0 1 1 2 0 3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm17-8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zM7 4a1 1 0 0 0-1-1 3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1 1 1 0 0 0 1-1zm11-1a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3z' />
  </svg>
);

const borderLeft = (props: LucideProps) => (
  <svg
    viewBox='0 0 24 24'
    height='48'
    width='48'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M6 21a1 1 0 1 0 0-2 1 1 0 0 1-1-1V6a1 1 0 0 1 1-1 1 1 0 0 0 0-2 3 3 0 0 0-3 3v12a3 3 0 0 0 3 3zm7-16a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zm6 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-5 9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm4-17a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3zm-1 17a1 1 0 0 0 1 1 3 3 0 0 0 3-3 1 1 0 1 0-2 0 1 1 0 0 1-1 1 1 1 0 0 0-1 1z' />
  </svg>
);

const borderNone = (props: LucideProps) => (
  <svg
    viewBox='0 0 24 24'
    height='48'
    width='48'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M14 4a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm-9 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm14 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6 10a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zM7 4a1 1 0 0 0-1-1 3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1 1 1 0 0 0 1-1zm11-1a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3zM7 20a1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 1 1 2 0 1 1 0 0 0 1 1 1 1 0 0 1 1 1zm11 1a1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 1 1 2 0 3 3 0 0 1-3 3z' />
  </svg>
);

const borderRight = (props: LucideProps) => (
  <svg
    viewBox='0 0 24 24'
    height='48'
    width='48'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M13 5a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zm-8 6a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm9 9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM6 3a1 1 0 0 1 0 2 1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3zm1 17a1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 1 1 2 0 1 1 0 0 0 1 1 1 1 0 0 1 1 1zm11 1a1 1 0 1 1 0-2 1 1 0 0 0 1-1V6a1 1 0 0 0-1-1 1 1 0 1 1 0-2 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3z' />
  </svg>
);

const borderTop = (props: LucideProps) => (
  <svg
    viewBox='0 0 24 24'
    height='48'
    width='48'
    focusable='false'
    role='img'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M3 6a1 1 0 0 0 2 0 1 1 0 0 1 1-1h12a1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm2 5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm14 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-5 9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm-8 1a1 1 0 1 0 0-2 1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3zm11-1a1 1 0 0 0 1 1 3 3 0 0 0 3-3 1 1 0 1 0-2 0 1 1 0 0 1-1 1 1 1 0 0 0-1 1z' />
  </svg>
);
// #endregion

export type Icon = LucideIcon;

export const Icons = {
  add: Plus,
  alignCenter: AlignCenter,
  alignJustify: AlignJustify,
  alignLeft: AlignLeft,
  alignRight: AlignRight,
  arrowDown: ChevronDown,
  arrowRight: ArrowRight,
  blockquote: Quote,
  bold: Bold,
  borderAll,
  borderBottom,
  borderLeft,
  borderNone,
  borderRight,
  borderTop,
  billing: CreditCard,
  check: Check,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsUpDown: ChevronsUpDown,
  close: X,
  code: Code2,
  delete: Trash,
  dragHandle: GripVertical,
  editing: Edit2,
  ellipsis: MoreVertical,
  externalLink: ExternalLink,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  help: HelpCircle,
  italic: Italic,
  laptop: Laptop,
  link: Link2,
  media: Image,
  image: Image,
  moon: Moon,
  more: MoreHorizontal,
  page: File,
  paragraph: Pilcrow,
  pizza: Pizza,
  post: FileText,
  refresh: RotateCcw,
  search: Search,
  settings: Settings,
  spinner: Loader2,
  strikethrough: Strikethrough,
  subscript: Subscript,
  superscript: Superscript,
  sun: SunMedium,
  ul: List,
  ol: ListOrdered,
  text: Text,
  trash: Trash,
  twitter: Twitter,
  underline: Underline,
  unlink: Link2Off,
  user: User,
  viewing: Eye,
  warning: AlertTriangle,
};

export const iconVariants = cva('', {
  variants: {
    variant: {
      toolbar: 'h-5 w-5',
      menuItem: 'mr-2 h-5 w-5',
    },
    size: {
      sm: 'mr-2 h-4 w-4',
      md: 'mr-2 h-6 w-6',
    },
  },
  defaultVariants: {},
});

export const SocialIconsComponents = {
  instagram: SiInstagram,
  twitter: SiTwitter,
  linkedin: SiLinkedin,
  facebook: SiFacebook,
  youtube: SiYoutube,
  github: SiGithub,
  website: Globe2Icon,
  medium: SiMedium,
  pinterest: SiPinterest,
  tiktok: SiTiktok,
};

export const SocialIcon = ({
  name,
  url,
  className,
  ...props
}: {
  name: keyof typeof SocialIconsComponents;
  url?: string;
} & React.ComponentPropsWithoutRef<'svg'>) => {
  const Component = SocialIconsComponents[name];

  const defClass =
    'h-4 w-4 text-muted-foreground hover:opacity-80 transition-opacity';

  if (url) {
    return (
      <a href={url}>
        <Component className={cn(defClass, className)} {...props} />
      </a>
    );
  }

  return <Component className={cn(defClass, className)} {...props} />;
};
