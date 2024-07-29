import React from "react";

export default function Footer() {
  return (
    <>
    <small>
        <p className="rotate-0 transform text-black">
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
    </>
  );
}
