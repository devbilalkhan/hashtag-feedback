export default function Footer() {
  return (
    <footer className="mx-auto flex w-full justify-center text-center text-gray-500">
      <small>
        <p>
          &copy; Copyright by{" "}
          <a
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            target="_blank"
            href="https://www.google.com"
          >
            Mainframe Studio Ltd.
          </a>
        </p>
        <p>Made by Bilal Khan.</p>
      </small>
    </footer>
  );
}
