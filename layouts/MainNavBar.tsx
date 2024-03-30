import Link from "next/link";
import Image from "next/image";

export default function MainNavBar() {
  return (
    <header className="shadow-lg bg-gradient-to-b from-white via-white">
      <nav className='container w-full mx-auto flex p-5 flex-col md:flex-row items-center justify-between'>
        <Link
          href="/"
          className="flex-start mb-4 md:mb-0"
        >
          <Image
            src="/images/logo with text.svg"
            width={120}
            height={40}
            alt="Studio Mosbat logo"
          />
        </Link>
        <div className='flex-end text-xl font-semibold'>
          <Link href="/blog" className="mx-5 cursor-pointer hover:text-indigo-500"> مقالات </Link>
          <Link href="/test" className="mx-5 cursor-pointer hover:text-indigo-500"> تست </Link>
          <Link href="/gallery" className="mx-5 cursor-pointer hover:text-indigo-500"> گالری </Link>
          <Link href="/about" className="mx-5 cursor-pointer hover:text-indigo-500"> درباره ما </Link>
        </div>
      </nav>
    </header>
  );
}
