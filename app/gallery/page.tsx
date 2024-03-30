import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'گالری',
};

export default function GalleryPage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-evenly p-10">
      

      <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text"> گالری عکس </h1>

     
    </main>
  );
}
