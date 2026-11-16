import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-extrabold text-[#0284C7] dark:text-[#38BDF8]">404</p>
      <h1 className="mt-4 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 max-w-md text-gray-600 dark:text-slate-300">
        Alamat yang Anda tuju tidak ada atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#6CABDD] px-7 py-3 font-medium text-white shadow-lg shadow-[#6CABDD]/30 outline-none transition hover:scale-105 hover:bg-[#589dcf] focus-visible:ring-2 focus-visible:ring-sky-400 active:scale-95 dark:bg-[#38BDF8] dark:text-gray-950 dark:hover:bg-[#0284c7]"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}
