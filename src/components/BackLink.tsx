import Link from "next/link";
import Image from "next/image";
import React from "react";

interface BackLinkProps {
  href: string;
  label: string;
}

export const BackLink = ({ href, label }: BackLinkProps) => {
  return (
    <Link href={href} className="flex items-center gap-x-3">
      <Image src={"/back-arrow.svg"} alt="back arrow icon" width={10} height={10} />

      <span className="text-gray-secondary font-semibold text-xs">{label}</span>
    </Link>
  );
};
