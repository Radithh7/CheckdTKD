import AsideList from "./AsideList";
import { FiHome, FiTable, FiUsers } from "react-icons/fi";

function Side() {
  return (
    <aside className="hidden md:flex fixed h-screen bg-slate-100 p-4 z-50">
      <div className="flex flex-col w-60 h-full rounded-2xl bg-white/70 shadow-sm px-3 py-4 gap-1">
        <div className="px-4 py-3 text-lg font-bold text-slate-800">
          Checkd<span className="text-cyan-400">TKD</span>
        </div>

        <nav className="flex flex-col gap-1 mt-2">
          <AsideList address="/" icon={FiHome}>
            Dashboard
          </AsideList>

          <AsideList address="/anggota" icon={FiUsers}>
            Jadwal Piket
          </AsideList>
        </nav>
      </div>
    </aside>
  );
}

export default Side;
