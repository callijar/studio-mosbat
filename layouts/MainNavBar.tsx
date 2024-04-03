import Link from "next/link";
import Image from "next/image";

export default function MainNavBar() {
  return (
    <header className="w-screen shadow-lg bg-gradient-to-b from-white via-white">
      <nav className='container max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between p-3'>
        <Link
          href="/"
          className="flex-start mb-4 md:mb-0"
        >
          <Image
            src="/images/logo-with-text.svg"
            width={120}
            height={60}
            alt="Studio Mosbat logo"
          />
        </Link>
        <div className='flex-end text-xl font-semibold'>
          <Link href="/blog" className="mx-5 cursor-pointer hover:text-indigo-500"> مقالات </Link>
          <Link href="/test" className="mx-5 cursor-pointer hover:text-indigo-500"> تست </Link>
          <Link href="/contact" className="mx-5 cursor-pointer hover:text-indigo-500"> تماس با ما </Link>
        </div>
      </nav>
    </header>
  );
}
