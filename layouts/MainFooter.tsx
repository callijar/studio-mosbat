// footer for the bottom of all pages
// links to my page

export default function MainFooter() {
  return (
    <footer className="pt-5 flex flex-col w-full justify-center items-center bg-gradient-to-t from-gray-100 via-white">
      <p className="my-3 text-sm text-gray-500">
        💜 by
        <a href="https://callijar.github.io/" target="_blank">
          {" "}
          Callijar
        </a>
      </p>
    </footer>
  );
}
