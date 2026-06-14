"use client";

import { useState } from "react";
import History from "./Content/History";

export default function PiketSwitcher() {
  const [activeTab, setActiveTab] = useState<"jadwal" | "history">("jadwal");

  const getTabStyle = (tab: "jadwal" | "history") => {
    const isActive = activeTab === tab;
    return `flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
      isActive
        ? "bg-white text-cyan-600 shadow-sm"
        : "text-gray-500 hover:text-gray-700 hover:bg-gray-300/50"
    }`;
  };

  const list: [] = [];

  return (
    <div className="w-full max-w-4xl mx-auto max-h-100 flex flex-col gap-6">
      <div className="flex justify-center md:justify-start">
        <div className="flex bg-gray-200 p-1 rounded-xl w-full md:w-auto shadow-inner">
          <button
            onClick={() => setActiveTab("jadwal")}
            className={getTabStyle("jadwal")}
          >
            Jadwal
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={getTabStyle("history")}
          >
            History
          </button>
        </div>
      </div>

      <div className="flex-1 rounded-2xl border border-gray-100 overflow-hidden">
        {activeTab === "jadwal" ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-2">
            <div className="w-full max-w-2xl mx-auto flex flex-col">
              <div className="flex flex-col">
                {list.length > 0 ? (
                  list.map((item, index) => list)
                ) : (
                  <p className="text-center text-gray-500 py-10">
                    Belum ada riwayat jadwal.
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-2">
            <History />
          </div>
        )}
      </div>
    </div>
  );
}
