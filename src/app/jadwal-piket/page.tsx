"use client";

import Sidebar from "../../components/Navigation/Side";
import Bottom from "../../components/Navigation/Bottom";

export default function Page() {
  return (
    <>
      <div className="flex w-full min-h-screen bg-slate-50">
        <Sidebar />

        <main className="flex-1 p-6 md:ml-64 pb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Jadwal Piket Pengurus Taekwondo UMS
            </h2>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-4 px-6 text-sm font-bold text-slate-600 uppercase">
                      Nama
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-slate-600 uppercase">
                      Divisi
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-slate-600 uppercase">
                      Hari
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-slate-600 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 text-sm text-slate-700 font-medium">
                      Galang Nur Hidayat
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-500">Inti</td>
                    <td className="py-4 px-6 text-sm text-slate-500">Senin</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        Aktif
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <Bottom />
      </div>
    </>
  );
}
