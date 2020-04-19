import { ReactNode } from 'react';
import Link from 'next/link';
import './button-link.scss';

type Props = {
  type: 'primary' | 'secondary';
  href: string;
  target?: string;
  children: ReactNode;
};

const ButtonLink = (props: Props) => {
  return isInternalLink(props.href) ? (
    <ButtonLinkInternal {...props} />
  ) : (
    <ButtonLinkExternal {...props} />
  );
};

const ButtonLinkInternal = (props: Props) => (
  <Link href={props.href}>
    <a
      className={'btn-link ' + props.type}
      target={props.target ? props.target : ''}
    >
      {props.children}
    </a>
  </Link>
);

const ButtonLinkExternal = (props: Props) => (
  <a
    className={'btn-link ' + props.type}
    href={props.href}
    target={props.target ? props.target : ''}
  >
    {props.children}
  </a>
);

const isInternalLink = (href: string) => {
  return href[0] === '/' ? true : false;
};

export default ButtonLink;
