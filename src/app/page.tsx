"use client";

import Sidebar from "../components/Navigation/Side";
import Bottom from "../components/Navigation/Bottom";
import Fragment from "../components/Fragment";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 ml-0 md:ml-64 pb-24 md:pb-8">
        <div className="max-w-4xl flex flex-col gap-6">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 px-1 md:px-0">
            Dashboard Presensi Harian
          </h1>

          <div className="w-full">
            <Fragment />
          </div>
        </div>
      </main>

      <Bottom />
    </div>
  );
}
