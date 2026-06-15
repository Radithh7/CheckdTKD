"use client";

import BottomItem from "./BottomItem";
import { FiHome, FiTable, FiUsers } from "react-icons/fi";

export default function Bottom() {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-slate-100 border-t shadow-md 
    flex justify-around items-center py-2 md:hidden z-50"
    >
      <BottomItem address="/" icon={FiHome} />
      <BottomItem address="/anggota" icon={FiUsers} />
    </nav>
  );
}
