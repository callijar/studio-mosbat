// HomePage contains a carousel, introduction, and info

import Link from "next/link";
import EmblaCarousel from "@/layouts/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  direction: "rtl",
  dragFree: true,
  loop: true,
};

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-evenly p-10">
      <div className="lg:min-h-full py-10">
        <EmblaCarousel options={OPTIONS} />
      </div>

      <h1 className="py-10 text-4xl md:text-6xl font-semibold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
        استودیو مثبت
      </h1>

      <div className="md:text-lg lg:text-xl w-full md:max-w-screen-sm group rounded-lg border px-5 py-4 m-10 transition-colors border-gray-300 bg-gray-100">
        <p>
          در دنیای پر مشغله امروز، توصیه هایی مثل مسافرت کردن و گشت و گذار در
          طبیعت یا حذف عوامل استرس زا برای خیلی از ما حرف هایی شیرین ولی غیر قابل
          اجراست.
        </p>
        <br />
        <p className="md:text-lg lg:text-xl max-w-screen-sm">
          در استودیو مثبت قصد داریم{" "}
          <span className="bg-gradient-to-l from-indigo-200 to-indigo-100 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_15px]">
            راهکارهای عملی
          </span>{" "}
          که با شرایط ما <span className="bg-gradient-to-l from-indigo-200 to-indigo-100 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_15px]">
            قابل اجرا
          </span>{" "} هستند را از منابع موثق گردآوری کنیم و در
          اختیار شما قرار بدهیم.{" "}
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-right">
        

        <Link
          href="/test"
          className="group rounded-lg border border-transparent px-5 py-4 m-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-blue-500">
            تست استرس{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch]">
            بررسی میزان استرسی که شما در زندگی خود احساس می کنید
          </p>
        </Link>

        <Link
          href="/blog"
          className="group rounded-lg border border-transparent px-5 py-4 m-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-indigo-500">
            مقالات{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch]">
            مطالعه جدیدترین مقالات در حوزه بهبود فردی و شغلی
          </p>
        </Link>

        <Link
          href="/contact"
          className="group rounded-lg border border-transparent px-5 py-4 m-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-emerald-500">
            تماس با ما{" "}
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch]">
            نظرات خود را برای بهبود مستمر استودیو مثبت برای ما ارسال کنید
          </p>
        </Link>
      </div>
    </main>
  );
}
