import Link from "next/link";
import Image from "next/image";

export default function MainFooter() {
  return (
    <footer className="flex flex-col w-full justify-center items-center bg-gradient-to-t from-white via-white">
      <Image
        src="/apple-touch-icon.png"
        width={40}
        height={40}
        alt="logo"
      />
      <p className="my-3 text-sm text-gray-500">with 💜 by  
      <a href="https://callijar.github.io/" target="_blank" > Callijar</a>
      </p>
    </footer>
  );
}
