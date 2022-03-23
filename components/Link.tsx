import NextLink from "next/link";
import { ReactNode } from "react";

const BASE_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN;

export const Link = ({
  href,
  children,
  ...props
}: {
  href: string | undefined;
  children?: ReactNode;
}) => {
  if (!href) {
    return <a {...props}>{children}</a>;
  }

  if (BASE_DOMAIN && href.includes("http") && !href.includes(BASE_DOMAIN)) {
    return (
      <a href={href} {...props} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};
