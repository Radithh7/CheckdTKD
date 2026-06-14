"use client";

import Sidebar from "../components/Navigation/Side";
import Bottom from "../components/Navigation/Bottom";
import Card from "../components/Card";
import Fragment from "../components/Fragment";

export default function Home() {
  return (
    <>
      <div className="flex w-full min-h-screen bg-slate-50">
        <Sidebar />

        <div className="flex-1 p-6 ml-0 md:ml-64 pb-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl mx-5 md:text-4xl font-bold mb-8 text-slate-800">
              Dashboard Presensi Harian
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
              <div className=" m-2 h-screen">
                <Card title="Riwayat Presensi Harian" content={<Fragment />} />
                <div className="flex flex-wrap gap-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
}
