// footer for the bottom of all pages
// links to my page

export default function MainFooter() {
  return (
    <footer className="pt-5 flex flex-col w-full justify-center items-center bg-gradient-to-t from-white via-white dark:from-gray-500 dark:via-black">
      <p className="my-3 text-sm text-gray-500 dark:text-white">
        💜 by
        <a href="https://callijar.github.io/" target="_blank">
          {" "}
          Callijar
        </a>
      </p>
    </footer>
  );
}
