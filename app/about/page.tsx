import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'درباره ما',
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-evenly p-10">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        درباره ما
      </h1>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-right">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 m-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-indigo-500">
            استودیو{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch]">
            استودیو مثبت جایی برای گ بهبود مستمر
          </p>
        </a>

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 m-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-blue-500">
            استودیو{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch]">
            استودیو مثبت جایی برای گ بهبود مستمر
          </p>
        </a>

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 m-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-emerald-500">
            استودیو{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch]">
            استودیو مثبت جایی برای گ بهبود مستمر
          </p>
        </a>
      </div>
    </main>
  );
}
