import Image from "next/image";

export default function notfound() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-evenly p-10">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        {" "}
        خطای 404{" "}
      </h1>

      <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        {" "}
        صفحه مورد نظر پیدا نشد{" "}
      </h2>
    </main>
  );
}
