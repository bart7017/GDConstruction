import Link from "next/link";
import React from "react";

type CustomLinkProps = React.ComponentPropsWithoutRef<"a"> & { href: string };

export const CustomLink = (props: CustomLinkProps) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <Link {...props} />;
  }

  return <a target="__blank" rel="noopener noreferrer" {...props} />;
};
