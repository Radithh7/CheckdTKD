"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// --- 1. CREATE: Tambah Anggota Baru ---
export async function createAnggota(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const nama = formData.get("nama") as string;

  if (!nama) return { error: "Nama tidak boleh kosong" };

  const { error } = await supabase.from("users").insert([{ nama }]);

  if (error) return { error: error.message };

  // Perbarui data di halaman daftar anggota
  revalidatePath("/anggota");
}

// --- 2. UPDATE: Edit Nama Anggota ---
export async function updateAnggota(id: number, namaBaru: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase
    .from("users")
    .update({ nama: namaBaru })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/anggota");
}

// --- 3. DELETE: Hapus Anggota ---
export async function deleteAnggota(id: number) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/anggota");
}
