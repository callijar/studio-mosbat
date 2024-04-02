import type { Metadata } from 'next';
import ContactForm from '@/layouts/ContactForm';

export const metadata: Metadata = {
	title: 'تماس با ما',
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-evenly p-10">
      <h1 className="py-10 text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        تماس با ما
      </h1>

      <h2>فرم تماس و همکاری</h2>

      <ContactForm />
    


    </main>
  );
}
