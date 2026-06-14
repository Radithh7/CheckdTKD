import List, { Present } from "./List"; // Import interface 'Present' agar tidak nulis ulang

export default function History() {
  const list: Present[] = [];

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col">
      <div className="flex flex-col">
        {list.length > 0 ? (
          list.map((item, index) => <List key={index} data={item} />)
        ) : (
          <p className="text-center text-gray-500 py-10">
            Belum ada riwayat presensi.
          </p>
        )}
      </div>
    </div>
  );
}
