"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface Props {
  children?: React.ReactNode;
  address: string;
  icon: IconType;
}

function AsideList({ children, address, icon: Icon }: Props) {
  const pathname = usePathname();

  const isActive = pathname === address;

  return (
    <Link
      href={address}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition
        ${
          isActive
            ? "bg-linear-to-r from-cyan-300 to-cyan-500 text-white shadow-sm"
            : "text-slate-600 hover:bg-cyan-100 hover:text-cyan-700"
        }`}
    >
      <Icon className="text-lg" />
      <span>{children}</span>
    </Link>
  );
}

export default AsideList;
