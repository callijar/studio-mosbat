import type { Metadata } from 'next';
import StressSurvey from '@/layouts/StressSurvey';

export const metadata: Metadata = {
	title: 'تست',
};

export default function TestPage() {

  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-evenly p-10">
      
      <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text"> تست استرس ادراک شده </h1>
      <StressSurvey />
    </main>
  );
}
