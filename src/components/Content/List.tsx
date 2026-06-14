"use client";

export type Status = "Hadir" | "Izin" | "Sakit" | "Alpa" | "hadir"; 

export interface Present {
  id: number;
  name: string;
  division: string;
  status: Status;
  date: string; 
}

export default function List({ data }: { data: Present }) {
  return (
    <div className="p-6 cursor-pointer hover:bg-gray-50 transition-colors rounded-xl border mb-2">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-900">
              {data.name}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                data.status.toLowerCase() === "hadir"
                  ? "bg-green-100 text-green-800"
                  : data.status === "Izin"
                    ? "bg-yellow-100 text-yellow-800"
                    : data.status === "Sakit"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
              }`}
            >
              {data.status}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-1">Tanggal: {data.date}</p>
          <p className="text-[10px] text-gray-400">Divisi: {data.division}</p>
        </div>
      </div>
    </div>
  );
}
