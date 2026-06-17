"use client";

import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

const supabase = createClient();

interface Jadwal {
  id: number;
  hari: string;
  users: {
    nama: string;
  } | null;
  kategori_presensi: {
    nama_kategori: string;
  } | null;
}

export default function DailySchedule() {
  const [data, setData] = useState<Jadwal[]>([]);
  const [loading, setLoading] = useState(true);
  const [Today, setToday] = useState("");

  useEffect(() => {
    async function fetchData() {
      const now = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(
        new Date(),
      );
      setToday(now);

      try {
        const { data: jadwal_piket, error } = await supabase
          .from("jadwal_piket")
          .select(
            `
            id, 
            hari,
            users ( nama ),
            kategori_presensi ( nama_kategori )
          `,
          )
          .order("id", { ascending: true });

        if (error) {
          console.error("Gagal mengambil data:", error.message);
        } else if (jadwal_piket) {
          setData(jadwal_piket as unknown as Jadwal[]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const jadwalHariIni = data.filter(
    (item) => item.hari?.trim().toLowerCase() === Today.trim().toLowerCase(),
  );

  const kategoriHariIni =
    jadwalHariIni[0]?.kategori_presensi?.nama_kategori || "PIKET PDH";

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto rounded-2xl shadow-sm border border-slate-100 bg-white">
        <table className="w-full text-left border-collapse max-h-100">
          <thead>
            <tr className="bg-cyan-500">
              <th colSpan={2} className="py-5 px-6 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-white tracking-wide">
                    Hari: {Today || "Memuat..."}
                  </span>
                  <span className="px-2.5 py-0.5 bg-cyan-100 text-cyan-700 border border-cyan-300/50 rounded text-xs font-bold uppercase tracking-wider">
                    {kategoriHariIni}
                  </span>
                </div>
              </th>
            </tr>

            <tr className="bg-slate-50/75 border-b border-slate-100">
              <th className="py-3 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider w-24">
                ID
              </th>
              <th className="py-3 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Nama Anggota
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td
                  colSpan={2}
                  className="py-10 text-center text-slate-400 italic text-sm"
                >
                  Memuat data jadwal hari ini...
                </td>
              </tr>
            ) : jadwalHariIni.length === 0 ? (
              <tr>
                <td
                  colSpan={2}
                  className="py-10 text-center text-slate-400 italic text-sm"
                >
                  Tidak ada jadwal piket untuk hari {Today}.
                </td>
              </tr>
            ) : (
              jadwalHariIni.map((jadwal, index) => (
                <tr
                  key={jadwal.id}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="py-4 px-6 text-sm text-slate-400 font-medium">
                    {jadwal.id}
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-800 font-semibold tracking-wide">
                    {jadwal.users?.nama || "Tanpa Nama"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
