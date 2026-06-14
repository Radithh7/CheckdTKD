import React from "react";
interface Props {
  title: string;
  content: React.ReactElement;
}

export default function Card({ title, content }: Props) {
  return (
    <div className="w-full h-auto max-h-200 bg-slate-100 rounded-3xl p-8 shadow-[10px_10px_25px_#9bdaf1,-10px_-10px_25px_#ffffff] animate-fade-in flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-slate-700">{title}</h2>
      <div className="flex-1 flex justify-center">{content}</div>
    </div>
  );
}
