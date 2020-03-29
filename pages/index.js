import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>Louis Racicot</p>
    </div>
  );
}
