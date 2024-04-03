// test page shows the StressSurvey and its results

import type { Metadata } from 'next';
import StressSurvey from '@/layouts/StressSurvey';

export const metadata: Metadata = {
	title: 'تست',
};

export default function TestPage() {

  return (
    <main className="mx-auto flex min-h-screen w-full md:max-w-screen-md flex-col items-center justify-evenly p-10">
      
      <h1 className="py-10 text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text"> تست استرس ادراک شده </h1>
      <h2 className="md:text-lg lg:text-xl">با توجه به احساسات خود در یک ماه گذشته، به سوالات زیر پاسخ دهید.</h2>
      <StressSurvey />
    </main>
  );
}
