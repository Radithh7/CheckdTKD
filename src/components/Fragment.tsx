"use client";

import { useState } from "react";
import History from "./Content/History";
import DailySchedule from "./Content/DailySchedule";

export default function PiketSwitcher() {
  const [activeTab, setActiveTab] = useState<"jadwal" | "history">("jadwal");

  const getTabStyle = (tab: "jadwal" | "history") => {
    const isActive = activeTab === tab;
    return `flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
      isActive
        ? "bg-white text-cyan-600 shadow-sm"
        : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/60"
    }`;
  };

  return (
    <div className="w-full md:max-w-3xl flex flex-col gap-5">
      <div className="flex justify-center md:justify-start">
        <div className="flex bg-slate-100 p-1 gap-1 rounded-xl w-full md:w-auto border border-slate-200/50 shadow-inner">
          <button
            onClick={() => setActiveTab("jadwal")}
            className={getTabStyle("jadwal")}
          >
            Jadwal Piket
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={getTabStyle("history")}
          >
            Riwayat Presensi
          </button>
        </div>
      </div>

      <div className="w-full max-h-100 overflow-y-auto rounded-2xl border border-slate-100 bg-white shadow-sm">
        {activeTab === "jadwal" ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <DailySchedule />
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <History />
          </div>
        )}
      </div>
    </div>
  );
}
