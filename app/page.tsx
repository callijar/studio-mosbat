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

      <h1 className="py-10 text-6xl font-semibold bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block text-transparent bg-clip-text">
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
    </main>
  );
}
