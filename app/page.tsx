import EmblaCarousel from '@/layouts/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { direction: 'rtl', dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-evenly p-10">

      <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        استودیو مثبت
      </h1>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

    </main>
  );
}