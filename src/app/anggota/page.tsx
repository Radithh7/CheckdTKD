"use client";

import Sidebar from "../../components/Navigation/Side";
import Bottom from "../../components/Navigation/Bottom";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

interface Pengurus {
  id: number;
  nama: string;
  jabatan: string;
  divisi_id: number;
  divisi: {
    nama_divisi: string;
  } | null;
}

const supabase = createClient();

export default function Page() {
  const [data, setData] = useState<Pengurus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: users, error } = await supabase
          .from("users")
          .select(
            `
            id,
            nama,
            jabatan,
            divisi_id,
            divisi (
              nama_divisi
            )
          `,
          )
          .order("id", { ascending: true });

        if (error) {
          console.error("Gagal mengambil data:", error.message);
        } else if (users) {
          setData(users as unknown as Pengurus[]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-5 md:p-10 md:ml-64 pb-24 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-slate-800 tracking-tight">
            Anggota Pengurus Taekwondo UMS
          </h2>

          <div className="w-full overflow-x-auto rounded-3xl shadow-sm border border-slate-200 bg-white">
            <table className="w-full min-w-160 text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-20">
                    ID
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Nama
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Jabatan
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Divisi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-12 text-center text-slate-400 italic text-sm"
                    >
                      Memuat data pengurus...
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-12 text-center text-slate-400 italic text-sm"
                    >
                      Belum ada data pengurus.
                    </td>
                  </tr>
                ) : (
                  data.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-4 px-6 text-sm text-slate-400 font-medium">
                        {user.id}
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-800 font-semibold">
                        {user.nama}
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600 font-medium">
                        {user.jabatan || "-"}
                      </td>
                      <td className="py-4 px-6 text-sm">
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-100 text-xs font-semibold uppercase tracking-wide">
                          {user.divisi?.nama_divisi || "Tanpa Divisi"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Bottom />
    </div>
  );
}
