"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface Props {
  address: string;
  icon: IconType;
}

export default function BottomItem({ address, icon: Icon }: Props) {
  const pathname = usePathname();

  const isActive = pathname === address;

  return (
    <Link
      href={address}
      className={`w-28 flex justify-center items-center gap-4 px-4 py-3 rounded-4xl transition
        ${
          isActive
            ? "bg-linear-to-r from-cyan-300 to-cyan-500 text-white shadow-sm"
            : "text-slate-600 hover:bg-cyan-100 hover:text-cyan-700"
        }`}
    >
      <Icon className="text-lg" />
    </Link>
  );
}
